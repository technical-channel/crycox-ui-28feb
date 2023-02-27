/** @format */

import { gql } from "@apollo/client";

export const resetChangePasswordAPI = gql`
     mutation changePassword($id: ID!, $password: String!) {
          changePassword(id: $id, new_password: $password) {
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

// mutation changePassword {
//   changePassword(id: "63e60e70a5571474ca0cc172",  new_password:"8955555") {
//     success
//     errors
//     user {
//       id
//       password
//       username
//       email
//       metamask
//     }
//   }
// }
