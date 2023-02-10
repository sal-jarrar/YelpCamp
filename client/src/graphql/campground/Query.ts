import { gql } from "@apollo/client";

export const GET_CAMPGROUNDS = gql`
  query GetCamps {
    getCapmgrounds {
      camp_id
      title
      description
      created_at
      price
      image
      rating
      location
      user {
        name
        user_id
      }
      reviews {
        comment
        rating
        user_id
        user {
          name
          user_id
        }
      }
    }
  }
`;
export const GET_CAMPGROUND = gql`
  query GetCamp($campId: ID) {
    campground(campId: $campId) {
      camp_id
      title
      description
      created_at
      price
      image
      location
      rating
      user {
        name
      }
      reviews {
        comment
        rating
        user_id
        user {
          name
          user_id
        }
      }
    }
  }
`;
