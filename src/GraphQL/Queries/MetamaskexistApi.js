/** @format */

import { gql } from "@apollo/client";

export const MetamaskExist = gql`
     query isMetamaskExist($metamask: String!) {
          isMetamaskExist(metamask: $metamask) {
               success
               errors
               user {
                    id
                    username
                    email
                    phone
                    metamask
                    password
               }
          }
     }
`;
