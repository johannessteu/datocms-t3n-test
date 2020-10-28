import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const createDatoCmsClient = (isPreview: boolean) => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: isPreview
        ? ' https://graphql.datocms.com/preview'
        : 'https://graphql.datocms.com/',
      credentials: 'include',
      headers: {
        Authorization: `${process.env.DATOCMS_APIKEY}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

const useDatoCmsClient = () => {
  return createDatoCmsClient(false);
};

export default useDatoCmsClient;
