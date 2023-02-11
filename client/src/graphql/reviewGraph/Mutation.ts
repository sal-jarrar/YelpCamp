import { gql } from "@apollo/client";

export const ADD_REVIEW = gql`
  mutation addReview($input: ReviewInput) {
    addReview(input: $input) {
      user {
        name
        user_id
      }
      camp_id
      user_id
      comment
      created_at
      rating
    }
  }
`;
