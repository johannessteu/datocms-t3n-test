import { useApolloClient } from '@apollo/client';
import {
  H3,
  Card,
  GridItem,
  Grid,
  Section,
  Placeholder,
  CardHeader,
  H4,
} from '@t3n/components';
import gql from 'graphql-tag';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { width } from 'styled-system';
import {
  IFeaturedproductlistRecord,
  IProduktRecord,
} from '../../interfaces/graphql-types.d';
import Markdown from '../Markdown';

const ProductCardGrid: React.FC<{
  news: { id: string; titel: string; newsIdentifier: string }[];
}> = ({ news, children }) => {
  const client = useApolloClient();
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState<
    {
      url: string;
      identifier: string;
      imageUrl: string;
    }[]
  >([]);

  useEffect(async () => {
    const newsIdentifiers = news.map((e) => e.newsIdentifier);

    const res = await client.query({
      query: gql`
        query NewsByIdentifier($identifiers: [ID!]!) {
          article {
            newsByIdentifiers(identifiers: $identifiers) {
              identifier
              imageUrl
              url
            }
          }
        }
      `,
      variables: { identifiers: newsIdentifiers },
    });

    setNewsData(res.data.article.newsByIdentifiers);
    setLoading(false);
  }, []);

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
      {news.map((n) => {
        const apiNews = newsData.find((el) => {
          return el.identifier.substr(13) === n.newsIdentifier;
        });

        return (
          <GridItem width={[1, 1, 1 / 3]}>
            <Card href={apiNews.url}>
              <CardHeader image={apiNews.imageUrl} />
              <H4 mt={0}>{n.titel}</H4>
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
      { __typename?: 'ProduktRecord' } & Pick<
        IProduktRecord,
        'id' | 'titel' | 'newsIdentifier'
      >
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
