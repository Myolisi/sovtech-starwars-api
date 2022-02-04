import { gql } from 'apollo-server';

export const typeDefs = gql`
  type People {
    name: String!
    height: String!
    mass: String!
    gender: String!
    homeworld: String!
    next: Int!
  }

  type Query {
    people(next: Int!): [People]
    getPeopleByName(name: String): [People]
  }
`;
