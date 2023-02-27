/** @format */

import { gql } from "@apollo/client";

export const OfferStatus = gql`
     mutation setOfferStatus($offer_id: ID!, $status: Boolean!) {
          setOfferStatus(offer_id: $offer_id, status: $status) {
               success
               errors
               offer {
                    id
               }
          }
     }
`;
