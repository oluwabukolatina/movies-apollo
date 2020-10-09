import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://immense-eyrie-40854.herokuapp.com/graphql ',
  cache: new InMemoryCache(),
});

export default client;
