import { ApolloProvider } from '@apollo/client';
import { theme } from '@t3n/theme';
import { AppProps } from 'next/app';
import { GlobalStyle } from '@t3n/components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import useDatoCmsClient from '../hooks/useDatoCmsClient';

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useDatoCmsClient();

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
