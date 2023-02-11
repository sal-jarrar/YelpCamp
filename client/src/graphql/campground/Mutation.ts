import { gql } from "@apollo/client";

export const CREATE_CAMP = gql`
  mutation CreateCampground($input: CampgroundInput) {
    createCampground(input: $input) {
      camp_id
      title
      description
      created_at
      price
      image
      location
      user {
        name
      }
    }
  }
`;