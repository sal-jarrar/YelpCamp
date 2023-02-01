import { gql } from "apollo-server";

const typeDefs = gql`
  type Campground {
    camp_id: ID!
    title: String!
    description: String!
    image: String!
    location: String!
    price: Float!
    created_at: String!
    user_id: ID!
  }
  type Query {
    getCapmgrounds: [Campground]!
    getCapmground(campId: ID): Campground
    createCampground(input: CampgroundInput): Campground!
  }
  type Mutation {
    createCampground(input: CampgroundInput): Campground!
  }

  input CampgroundInput {
    title: String!
    description: String!
    image: String!
    location: String!
    geometry: String!
    price: Float!
    created_at: String!
    user_id: ID!
  }
`;

export default typeDefs;
