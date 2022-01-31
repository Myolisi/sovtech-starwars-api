import { gql } from 'apollo-server';

export const typeDefs = gql`
  type People {
    name: String!
    height: Int!
    mass: Int!
    gender: String!
    homeworld: String!
  }

  type Query {
    people: [People]
    getPeopleByName: [People]
  }
`;
