import {
  Card,
  CardHeader,
  Grid,
  GridItem,
  H1,
  Box,
  Section,
  Text,
  Heading,
  TagList,
  Tag,
} from '@t3n/components';
import { useState } from 'react';
import * as React from 'react';
import gql from 'graphql-tag';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';
import Layout from '../../Components/Layout';
import Markdown from '../../Components/Markdown';
import FeaturedProductRecord from '../../Components/Produkte/FeaturedProductRecord';
import ProductCategoryListRecord from '../../Components/Produkte/ProductCategoryListRecord';
import { createT3nApolloClient } from '../../hooks/useApolloClient';
import { createDatoCmsClient } from '../../hooks/useDatoCmsClient';
import {
  IProductGroupBySlugQuery,
  IProductGroupBySlugQueryVariables,
  ProductGroupBySlugDocument,
} from '../../interfaces/graphql-types.d';

interface ProductGroupInterface {
  id: IProductGroupBySlugQuery['productgroup']['id'];
  titel?: IProductGroupBySlugQuery['productgroup']['titel'];
  beschreibung?: IProductGroupBySlugQuery['productgroup']['beschreibung'];
  content?: IProductGroupBySlugQuery['productgroup']['content'];
  products: {
    imageUrl: string;
    title: string;
    tags: string[];
    teaser: string;
    url: string;
    identifier: string;
    sponsored: boolean;
    highlight: boolean;
  }[];
}

const StyledText = styled(Text)`
  position: absolute;
  top: -10px;
`;

const ProductGroup: NextPage<ProductGroupInterface> = ({
  titel,
  products,
  beschreibung,
  content,
}) => {
  const [filteredTags, setFilteredTags] = useState([]);

  const allTags = products
    .reduce((prev, curr) => {
      const toAdd = [];
      curr.tags.forEach((t) => {
        if (prev.indexOf(t) === -1) {
          toAdd.push(t);
        }
      });

      return [...prev, ...toAdd];
    }, [])
    .sort();

  allTags
    .sort(
      (a, b) =>
        allTags.filter((c) => b === c).length -
        allTags.filter((c) => a === c).length
    )
    // Only keep first occurring item
    .reduce(
      (reducedTags, tag) =>
        reducedTags.find((t) => t === tag)
          ? reducedTags
          : [...reducedTags, tag],
      []
    )
    // Only keep items that exist at least 2 times or fill list with at least 6 tags
    .filter((tag, i) => allTags.filter((t) => t === tag).length > 2 || i < 6);

  const handleTagClick = (t) => {
    console.log(t);
    if (!filteredTags.includes(t)) {
      setFilteredTags([...filteredTags, t]);
    } else {
      setFilteredTags(filteredTags.filter((tag) => tag !== t));
    }
  };

  return (
    <Layout hideBreadcrumbs={false}>
      <Section innerGap={2}>
        {titel && <H1>{titel}</H1>}
        {beschreibung && <Markdown parse={beschreibung} />}
      </Section>
      {content.map((el) => {
        if (el.__typename === 'FeaturedproductlistRecord') {
          return (
            <FeaturedProductRecord
              sectionVariant="primary"
              key={el.id}
              record={el}
            />
          );
        }

        if (el.__typename === 'ProductcategorylistRecord') {
          return <ProductCategoryListRecord key={el.id} record={el} />;
        }
        return null;
      })}

      <Section variant="primary">
        <TagList
          tags={allTags.map((t) => (
            <Tag
              colorVariant={
                filteredTags.indexOf(t) === -1 ? 'secondary' : 'inverse'
              }
              mr={2}
              key={t}
              onClick={() => handleTagClick(t)}
            >
              {t}
            </Tag>
          ))}
          collapseAfter={8}
        />
        <Grid mt={5}>
          {products.map((p) => {
            if (
              filteredTags.length > 0 &&
              p.tags.filter((el) => filteredTags.includes(el)).length === 0
            ) {
              return null;
            }

            return (
              <GridItem id={p.identifier} width={[1, 1, 1 / 3]}>
                <Card>
                  <CardHeader ratio={16 / 9} image={p.imageUrl} />
                  <Box position="relative">
                    {p.sponsored && (
                      <StyledText small secondary my={0}>
                        Anzeige
                      </StyledText>
                    )}
                    <Heading styleAs="h5" as="h3" my={3}>
                      {p.title}
                    </Heading>
                    <Text>{p.teaser}</Text>
                  </Box>
                </Card>
              </GridItem>
            );
          })}
        </Grid>
      </Section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createDatoCmsClient(false);

  const slugs: string[] = await client
    .query({
      query: gql`
        query ProductGroupSlugs {
          allProductgroups {
            slug
            id
          }
        }
      `,
    })
    .then(({ data }) => data.allProductgroups.map((p) => p.slug));

  return {
    paths: slugs.map((s) => {
      return { params: { group: s } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ProductGroupInterface,
  { group: string }
> = async ({ preview, params }) => {
  const client = createDatoCmsClient(preview);
  const t3nClient = createT3nApolloClient();

  const { data } = await client.query<
    IProductGroupBySlugQuery,
    IProductGroupBySlugQueryVariables
  >({
    query: ProductGroupBySlugDocument,
    variables: { slug: params.group },
  });

  const { produkte, ...rest } = data.productgroup;

  const newsIdentifiers = produkte.map((p) => p.newsIdentifier.substr(13));

  const { data: newsData } = await t3nClient.query({
    query: gql`
      query ProdctGroupNews($identifiers: [ID!]!) {
        article {
          newsByIdentifiers(identifiers: $identifiers) {
            identifier
            url
            imageUrl
            title
            tags {
              title
            }
            teaser
          }
        }
      }
    `,
    variables: { identifiers: newsIdentifiers },
  });

  const products: ProductGroupInterface['products'] = [];

  produkte.forEach((p) => {
    const theNews = newsData.article.newsByIdentifiers.find(
      (el) => el.identifier === p.newsIdentifier
    );

    if (theNews) {
      products.push({
        imageUrl: theNews.imageUrl,
        url: theNews.url,
        tags: theNews.tags.map((e) => e.title),
        identifier: p.id,
        title: p.titel || theNews.title,
        teaser: p.teaser || theNews.teaser,
        sponsored: p.sponsored,
        highlight: p.highlight,
      });
    }
  });

  return {
    props: {
      ...rest,
      products,
    },
    revalidate: 3600,
  };
};

export default ProductGroup;
