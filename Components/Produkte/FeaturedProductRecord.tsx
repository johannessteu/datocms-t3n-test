import { useApolloClient } from '@apollo/client';
import {
  H3,
  Card,
  GridItem,
  Grid,
  Section,
  Placeholder,
  CardHeader,
  Heading,
  Text,
} from '@t3n/components';
import gql from 'graphql-tag';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { IFeaturedproductlistRecord } from '../../interfaces/graphql-types.d';
import Markdown from '../Markdown';

const ProductCardGrid: React.FC<{
  news: { id: string; titel?: string; newsIdentifier?: string }[];
}> = ({ news }) => {
  const client = useApolloClient();
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState<
    {
      url: string;
      identifier: string;
      teaser: string;
      imageUrl: string;
    }[]
  >([]);

  useEffect(() => {
    const newsIdentifiers = news.map((e) => e.newsIdentifier);

    client
      .query({
        query: gql`
          query NewsByIdentifier($identifiers: [ID!]!) {
            article {
              newsByIdentifiers(identifiers: $identifiers) {
                identifier
                imageUrl
                teaser
                url
              }
            }
          }
        `,
        variables: { identifiers: newsIdentifiers },
      })
      .then((res) => {
        setNewsData(res.data.article.newsByIdentifiers);
        setLoading(false);
      });
  }, [client, news]);

  if (loading) {
    return (
      <Grid>
        {new Array(news.length).fill('').map(() => {
          return (
            <GridItem width={[1, 1, 1 / 3]}>
              <Card>
                <CardHeader />
                <Placeholder width={0.9} height="2rem" />
                <Placeholder mt={2} width={0.7} height="2rem" />
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    );
  }

  return (
    <Grid>
      {news.map<JSX.Element | null>((n) => {
        if (!n.newsIdentifier) {
          return null;
        }

        const apiNews = newsData.find((el) => {
          return el.identifier === n.newsIdentifier;
        });

        if (!apiNews) {
          return null;
        }

        return (
          <GridItem key={n.id} width={[1, 1, 1 / 3]}>
            <Card href={apiNews.url}>
              <CardHeader image={apiNews.imageUrl} />
              <Heading styleAs="h5" as="h3" my={3}>
                {n.titel}
              </Heading>
              <Text>{apiNews.teaser}</Text>
            </Card>
          </GridItem>
        );
      })}
    </Grid>
  );
};
const FeaturedProductRecord: React.FC<{
  record: Pick<
    IFeaturedproductlistRecord,
    'headline' | 'beschreibung' | 'limit'
  > & {
    products: Array<
      { __typename?: 'ProduktRecord' } & {
        id: string;
        titel?: string;
        newsIdentifier?: string;
      }
    >;
  };
}> = ({ record, children }) => {
  return (
    <Section>
      {record.headline && <H3>{record.headline}</H3>}
      {record.beschreibung && <Markdown parse={record.beschreibung} />}
      <ProductCardGrid news={record.products} />
      {children}
    </Section>
  );
};

export default FeaturedProductRecord;
