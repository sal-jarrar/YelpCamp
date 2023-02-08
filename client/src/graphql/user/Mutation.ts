import { gql } from "@apollo/client";

export const Register_User = gql`
  mutation RegisterUser($input: RegisterUserInput) {
    registerUser(input: $input) {
      name
      email
      token
    }
  }
`;
