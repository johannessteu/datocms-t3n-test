import { Grid, GridItem, H1, H3, NewsCard, Section } from '@t3n/components';
import gql from 'graphql-tag';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import * as React from 'react';
import Layout from '../../Components/Layout';
import Markdown from '../../Components/Markdown';
import FeaturedNewsRecord from '../../Components/News/FeaturedNewsList';
import FeaturedProductRecord from '../../Components/Produkte/FeaturedProductRecord';
import { createT3nApolloClient } from '../../hooks/useApolloClient';
import { createDatoCmsClient } from '../../hooks/useDatoCmsClient';
import {
  ITopicBySlugQuery,
  ITopicBySlugQueryVariables,
  TopicBySlugDocument,
} from '../../interfaces/graphql-types.d';

interface NewsInterface {
  title: string;
  imageUrl: string;
  teaser: string;
  tags: string[];
  url: string;
  date: string;
  identifier: string;
  author: {
    firstName: string;
    lastName: string;
    avatarUrl: string;
  };
}

interface TopicInterface {
  id: ITopicBySlugQuery['topic']['id'];
  titel?: ITopicBySlugQuery['topic']['titel'];
  beschreibung?: ITopicBySlugQuery['topic']['beschreibung'];
  content?: ITopicBySlugQuery['topic']['content'];
  news: NewsInterface[];
}

const NewsList: React.FC<{ news: NewsInterface[] }> = ({ news }) => {
  return (
    <Grid>
      {news.map((n) => (
        <GridItem mb={2} key={n.identifier} width={[1, 1 / 2, 1 / 3]}>
          <NewsCard
            type="HERO"
            loading={false}
            news={{
              title: n.title,
              author: {
                name: `${n.author.firstName} ${n.author.lastName}`,
                avatar: n.author.avatarUrl,
              },
              imageUrl: n.imageUrl,
              publishedAt: new Date(n.date),
              type: 'News',
              url: n.url,
            }}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

const Topic: NextPage<TopicInterface> = ({
  titel,
  beschreibung,
  content,
  news,
}) => {
  return (
    <Layout hideBreadcrumbs={false}>
      <Section innerGap={2}>
        <H1>{titel}</H1>
        <Markdown parse={beschreibung} />
      </Section>
      {content.map((el) => {
        if (el.__typename === 'FeaturedproductlistRecord') {
          return (
            <FeaturedProductRecord
              sectionVariant={el.sectionfarbe}
              key={el.id}
              record={el}
            />
          );
        }

        if (el.__typename === 'FeaturednewsRecord') {
          return <FeaturedNewsRecord record={el} />;
        }

        if (el.__typename === 'NewslistRecord') {
          return 'Newslist';
        }
        return null;
      })}

      <Section>
        <H3>Alle News zu {titel}</H3>
        <NewsList news={news} />
      </Section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createDatoCmsClient(process.env.NODE_ENV === 'development');

  const topics: string[] = await client
    .query({
      query: gql`
        query ProductGroupSlugs {
          allTopics {
            slug
            id
          }
        }
      `,
    })
    .then(({ data }) => data.allTopics.map((t) => t.slug));

  return {
    paths: topics.map((s) => {
      return { params: { topic: s } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  TopicInterface,
  { topic: string }
> = async ({ preview, params }) => {
  const client = createDatoCmsClient(
    process.env.NODE_ENV === 'development' || preview
  );
  const t3nClient = createT3nApolloClient();
  const { data } = await client.query<
    ITopicBySlugQuery,
    ITopicBySlugQueryVariables
  >({
    query: TopicBySlugDocument,
    variables: { slug: params.topic },
  });

  const { keywords, ...rest } = data.topic;

  const { data: newsData } = await t3nClient.query({
    query: gql`
      query NewsByTag($tag: String!) {
        article {
          recentNews(limit: 20, withTag: $tag) {
            identifier
            url
            imageUrl
            title
            tags {
              title
            }
            teaser
            date
            author {
              firstName
              lastName
              avatarUrl
            }
          }
        }
      }
    `,
    variables: { tag: keywords.split(',')[0] },
  });

  return {
    props: {
      ...rest,
      news: newsData.article.recentNews,
    },
    revalidate: 3600,
  };
};

export default Topic;
