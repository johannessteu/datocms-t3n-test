import Link from 'next/link';
import * as React from 'react';

import { H1, Section } from '@t3n/components';
import Layout from '../Components/Layout';

const Home = () => {
  return (
    <Layout>
      <Section variant="primary">
        <H1>DatoCMS Prototyp</H1>
        <Link href="/produkte">Produkte</Link>
      </Section>
    </Layout>
  );
};

export default Home;
