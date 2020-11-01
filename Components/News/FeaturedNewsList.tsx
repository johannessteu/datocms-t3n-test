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
import { SectionVariants } from '@t3n/components/src/Section/Section';
import gql from 'graphql-tag';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { IFeaturednewsRecord } from '../../interfaces/graphql-types.d';

const NewsGrid: React.FC<{ newsIdentifiers: string[] }> = ({
  newsIdentifiers,
}) => {
  const client = useApolloClient();
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState<
    {
      url: string;
      identifier: string;
      teaser: string;
      imageUrl: string;
      title: string;
    }[]
  >([]);

  useEffect(() => {
    client
      .query({
        query: gql`
          query NewsByIdentifier($identifiers: [ID!]!) {
            article {
              newsByIdentifiers(identifiers: $identifiers) {
                identifier
                imageUrl
                teaser
                title
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
  }, [client, newsIdentifiers]);

  if (loading) {
    return (
      <Grid>
        {new Array(newsIdentifiers.length).fill('').map(() => {
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
      {newsIdentifiers.map<JSX.Element | null>((n) => {
        const apiNews = newsData.find((el) => {
          return el.identifier === `news-article-${n}`;
        });

        if (!apiNews) {
          return null;
        }

        return (
          <GridItem key={apiNews.identifier} width={[1, 1, 1 / 3]}>
            <Card href={apiNews.url}>
              <CardHeader image={apiNews.imageUrl} />
              <Heading styleAs="h5" as="h3" my={3}>
                {apiNews.title}
              </Heading>
              <Text>{apiNews.teaser}</Text>
            </Card>
          </GridItem>
        );
      })}
    </Grid>
  );
};
const FeaturedNewsRecord: React.FC<{
  record: Pick<
    IFeaturednewsRecord,
    'id' | 'layout' | 'newsidentifier' | 'titel' | 'sectionfarbe'
  >;
}> = ({ record, children }) => {
  return (
    <Section variant={record.sectionfarbe.toLowerCase() as SectionVariants}>
      {record.titel && <H3>{record.titel}</H3>}
      <NewsGrid newsIdentifiers={record.newsidentifier} />
      {children}
    </Section>
  );
};

export default FeaturedNewsRecord;
