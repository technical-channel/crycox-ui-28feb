/** @format */

import { gql } from "@apollo/client";

export const loginAPI = gql`
     mutation userLogin($email: String!, $password: String!) {
          userLogin(email: $email, password: $password) {
               success
               errors
               user {
                    username
                    id
                    email
                    phone
                    password
                    metamask
               }
          }
     }
`;

// mutation userLogin{
//   userLogin(email:"vik.jha@Ramlogics.com", password:"8955562054"){
//     success
//     errors
//     user{
//       id
//       email
//       username
//       password
//       metamask
//     }
//     token
//   }
// }
