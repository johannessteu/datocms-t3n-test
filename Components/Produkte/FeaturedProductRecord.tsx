import { H3, Card, GridItem, Grid, Section } from '@t3n/components';
import * as React from 'react';
import {
  IFeaturedproductlistRecord,
  IProduktRecord,
} from '../../interfaces/graphql-types.d';
import Markdown from '../Markdown';

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

      <Grid>
        {record.products.map((p) => (
          <GridItem width={[1, 1, 1 / record.products.length]}>
            <Card href={`https://t3n.de/news?p=${p.newsIdentifier}`}>
              {p.titel}
            </Card>
          </GridItem>
        ))}
      </Grid>
      {children}
    </Section>
  );
};

export default FeaturedProductRecord;
