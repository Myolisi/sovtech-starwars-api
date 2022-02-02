import { gql } from 'apollo-server';

export const typeDefs = gql`
  type People {
    name: String!
    height: Int!
    mass: Int!
    gender: String!
    homeworld: String!
    next: String!
  }

  type Query {
    people(next: String!): [People]
    getPeopleByName(name: String!): [People]
  }
`;
