import { gql } from 'apollo-server-express';

export const typeDefs = gql`

  type Query {
    name: String!
    chef: Chef!
  }

  type Chef {
    name: String!
    age: Int!
    city: String!
    sex: Sex!
  }

  enum Sex {
    MALE
    FEMALE
    NONBINARY
  }
  type Mutation {
    setName(name: String!, age: Int!): String!
  }
`;