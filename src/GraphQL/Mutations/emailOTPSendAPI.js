/** @format */

import { gql } from "@apollo/client";

export const sendEmailOTPAPI = gql`
     mutation sendEmailOTP($email: String!) {
          sendEmailOTP(to_email: $email) {
               success
               errors
               message
               data
               status
          }
     }
`;

// mutation sendEmailOTP{
//   sendEmailOTP(to_email:"ruchika.rajawat@ramlogics.com"){
//     success
//     errors
//     message
//     data
//     status
//   }
// }
