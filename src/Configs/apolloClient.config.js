import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://tapme-backend-o6qx.onrender.com/graphql', // backend server url
    cache: new InMemoryCache(),
  });


  export const GET_USER = gql`
  query GetUser($id: String!, $username: String!) {
      user(id: $id, username: $username) {
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
    mutation UpdateUser($id: String!, $balance: Int!, $power: Int!, $level: Int!, $level_target: Int!) {
      updateUser(id: $id, balance: $balance, power: $power, level: $level, level_target: $level_target) {
        id
        username
        balance
        power
      }
    }
  `;