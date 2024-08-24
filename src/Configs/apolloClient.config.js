import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // Your GraphQL server URL
    cache: new InMemoryCache(),
  });


  export const GET_USER = gql`
  query GetUser($id: String!) {
      user(id: $id) {
      id
      username
      balance
      power
      power_capacity
      level
      level_target
      tap_value
      }
  }
  `;

  export const UPDATE_USER = gql`
    mutation UpdateUser($id: String!, $balance: Int!, $power: Int!, $level: Int!) {
      updateUser(id: $id, balance: $balance, power: $power, level: $level) {
        id
        username
        balance
        power
      }
    }
  `;