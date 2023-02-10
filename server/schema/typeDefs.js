import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    getCapmgrounds: [Campground]!
    campground(campId: ID): Campground
    createCampground(input: CampgroundInput): Campground!
  }
  type Mutation {
    createCampground(input: CampgroundInput): Campground!
    registerUser(input: RegisterUserInput): User!
    loginUser(input: LoginUserInput): User!
  }

  type Campground {
    camp_id: ID!
    title: String!
    description: String!
    image: String!
    location: String!
    price: Float!
    created_at: String!
    user: User!
    reviews: [Review]!
    rating: Int!
  }

  type User {
    user_id: ID!
    name: String!
    email: String!
    token: String
  }
  type Review {
    user: User!
    camp_id: ID!
    user_id: ID!
    created_at: String!
    comment: String!
    rating: String!
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
  input RegisterUserInput {
    name: String!
    email: String!
    password: String!
  }
  input LoginUserInput {
    email: String!
    password: String!
  }
`;

export default typeDefs;
