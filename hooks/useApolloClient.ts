import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const createT3nApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri:
        process.env.NODE_ENV === 'production'
          ? 'https://api.t3n.de/'
          : 'https://api.stage.t3n.de/',
      credentials: 'include',
    }),
    cache: new InMemoryCache(),
  });
};

const useT3nApolloClient = () => {
  return createT3nApolloClient();
};

export default useT3nApolloClient;
