/** @format */

import { gql } from "@apollo/client";

export const getUser = gql`
  query user($id: String!) {
    user(id: $id) {
      success
      errors
      user {
        id
        username
        email
        password
        metamask
      }
    }
  }
`;

// query user{
//     user(id:"63ef485038c144cf3658cf87"){
//       success
//       errors
//       user{
//         id
//         username
//         email
//         password
//         metamask
//       }
//     }
//   }
