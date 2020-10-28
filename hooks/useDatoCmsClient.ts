import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const createDatoCmsClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://graphql.datocms.com/',
      credentials: 'include',
      headers: {
        Authorization: `${process.env.DATOCMS_APIKEY}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

const useDatoCmsClient = () => {
  return createDatoCmsClient();
};

export default useDatoCmsClient;
