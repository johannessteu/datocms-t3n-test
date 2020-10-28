import { Card, Grid, GridItem, H1, Section } from '@t3n/components';
import * as React from 'react';
import gql from 'graphql-tag';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Layout from '../../Components/Layout';
import Markdown from '../../Components/Markdown';
import FeaturedProductRecord from '../../Components/Produkte/FeaturedProductRecord';
import ProductCategoryListRecord from '../../Components/Produkte/ProductCategoryListRecord';
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
  products: IProductGroupBySlugQuery['productgroup']['produkte'];
}

const ProductGroup: NextPage<ProductGroupInterface> = ({
  titel,
  products,
  beschreibung,
  content,
}) => {
  return (
    <Layout>
      <Section>
        {titel && <H1>{titel}</H1>}
        {beschreibung && <Markdown parse={beschreibung} />}
      </Section>
      {content.map((el) => {
        if (el.__typename === 'FeaturedproductlistRecord') {
          return <FeaturedProductRecord key={el.id} record={el} />;
        }

        if (el.__typename === 'ProductcategorylistRecord') {
          return <ProductCategoryListRecord key={el.id} record={el} />;
        }
        return null;
      })}

      <Section variant="primary">
        <Grid>
          {products.map((p) => (
            <GridItem id={p.id} width={[1, 1, 1 / 3]}>
              <Card>{p.titel}</Card>
            </GridItem>
          ))}
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

  const { data } = await client.query<
    IProductGroupBySlugQuery,
    IProductGroupBySlugQueryVariables
  >({
    query: ProductGroupBySlugDocument,
    variables: { slug: params.group },
  });

  const { produkte, ...rest } = data.productgroup;

  return {
    props: {
      ...rest,
      products: produkte,
    },
    revalidate: 3600,
  };
};

export default ProductGroup;
