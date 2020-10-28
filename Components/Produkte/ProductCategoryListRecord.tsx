import { Card, Grid, GridItem, H3, Section } from '@t3n/components';
import { SectionVariants } from '@t3n/components/src/Section/Section';
import Link from 'next/link';
import * as React from 'react';
import {
  IProductcategorylistRecord,
  IProductgroupRecord,
} from '../../interfaces/graphql-types.d';
import Markdown from '../Markdown';

const ProductCategoryListRecord: React.FC<{
  record: Pick<
    IProductcategorylistRecord,
    'id' | 'headline' | 'beschreibungstext' | 'insection' | 'sectionvariant'
  > & {
    productcategories: Array<
      { __typename?: 'ProductgroupRecord' } & Pick<
        IProductgroupRecord,
        'id' | 'titel' | 'slug'
      >
    >;
  };
}> = ({ record, children }) => {
  return (
    <Section variant={(record.sectionvariant as SectionVariants) || 'primary'}>
      {record.headline && <H3>{record.headline}</H3>}
      {record.beschreibungstext && (
        <Markdown parse={record.beschreibungstext} />
      )}

      <Grid mt={2}>
        {record.productcategories.map((p) => (
          <GridItem width={[1, 1, 1 / record.productcategories.length]}>
            <Link href={`/produkte/${p.slug}`}>
              <Card>{p.titel}</Card>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};

export default ProductCategoryListRecord;
