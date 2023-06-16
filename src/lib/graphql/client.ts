import { GRAPHQL_ENDPOINT } from "@/constants";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const { getClient } = registerApolloClient(() => new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    fetchOptions: { cache: 'no-store' }
  }),
}));

export const client = getClient()
