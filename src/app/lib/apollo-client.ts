import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"; 
import { ApolloProvider } from "@apollo/client"; 

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
    },
  }),
});

export { client, ApolloProvider }; 

