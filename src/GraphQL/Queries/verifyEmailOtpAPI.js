/** @format */

import { gql } from "@apollo/client";

export const verifyEmailOtp = gql`
     query verifyEmailOTP($email: String!, $otp: String!) {
          verifyEmailOTP(to_email: $email, otp: $otp) {
               success
               errors
               message
               data
               status
          }
     }
`;

// query verifyEmailOTP{
//   verifyEmailOTP(to_email:"ruchika.rajawat@ramlogics.com", otp:"631160"){
// success
//      errors
//      message
//      data
//      status
//   }
// }
