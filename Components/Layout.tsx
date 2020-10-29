import { GlobalStyle, PageLayout } from '@t3n/components';
import * as React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <PageLayout showHeader noContentPadding headerContent={<p>test</p>}>
      <>
        <GlobalStyle />
        {children}
      </>
    </PageLayout>
  );
};

export default Layout;
