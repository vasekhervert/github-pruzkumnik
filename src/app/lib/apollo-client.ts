import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }),
  });
});

