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

  type Homeworld {
    id: Int!
    name: String!
    climate: String!
    terrain: String!
  }

  type Query {
    people(next: Int!): [People]
    getPeopleByName(name: String): [People]
    getHomeworld(id: Int!): Homeworld
  }
`;
