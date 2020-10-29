import { Section } from '@t3n/components';
import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { SeoMetaTagType } from 'react-datocms';
import Layout from '../Components/Layout';
import Markdown from '../Components/Markdown';
import FeaturedProductRecord from '../Components/Produkte/FeaturedProductRecord';
import ProductCategoryListRecord from '../Components/Produkte/ProductCategoryListRecord';
import { createDatoCmsClient } from '../hooks/useDatoCmsClient';

import {
  IProdukteIndexQuery,
  ProdukteIndexDocument,
} from '../interfaces/graphql-types.d';

interface ProdukteGroupInterface {
  id: string;
  title: string;
  beschreibung: string;
  slug: string;
}

interface ProdukteIndexInterface {
  seoTags: SeoMetaTagType[];
  description: IProdukteIndexQuery['produkte']['beschreibungstext'];
  content: IProdukteIndexQuery['produkte']['content'];
}

const Produkte: NextPage<ProdukteIndexInterface> = ({
  content,
  description,
}) => {
  return (
    <>
      <Layout>
        {content.map((el) => {
          if (el.__typename === 'FeaturedproductlistRecord') {
            return <FeaturedProductRecord key={el.id} record={el} />;
          }

          if (el.__typename === 'ProductcategorylistRecord') {
            return <ProductCategoryListRecord key={el.id} record={el} />;
          }
          return null;
        })}
        <Section>
          <Markdown parse={description} />
        </Section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<ProdukteIndexInterface> = async (
  context
) => {
  const datoCmsClient = createDatoCmsClient(context.preview);

  const { data } = await datoCmsClient.query<IProdukteIndexQuery>({
    query: ProdukteIndexDocument,
  });

  return {
    props: {
      content: data.produkte.content,
      // eslint-disable-next-line no-underscore-dangle
      seoTags: data.produkte._seoMetaTags as SeoMetaTagType[],
      description: data.produkte.beschreibungstext,
    },
  };
};

export default Produkte;
