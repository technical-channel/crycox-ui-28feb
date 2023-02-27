/** @format */

import { gql } from "@apollo/client";

export const signUpAPI = gql`
     mutation registerUser(
          $email: String!
          $password: String!
          $username: String!
          $metamask: String!
     ) {
          registerUser(
               email: $email

               password: $password
               username: $username
               metamask: $metamask
          ) {
               success
               errors
               user {
                    username
                    id
                    email
                    phone
                    password
               }
          }
     }
`;
