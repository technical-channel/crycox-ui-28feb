/** @format */

import { gql } from "@apollo/client";

export const generatMeeting = gql`
     mutation generatMeeting($trade_id: ID!) {
          generateMeeting(trade_id: $trade_id) {
               success
               errors
               message
          }
     }
`;
