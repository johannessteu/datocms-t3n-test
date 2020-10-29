import { ApolloProvider } from '@apollo/client';
import { theme } from '@t3n/theme';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import useT3nApolloClient from '../hooks/useApolloClient';

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useT3nApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
