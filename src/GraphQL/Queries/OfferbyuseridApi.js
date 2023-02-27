/** @format */

import { gql } from "@apollo/client";

export const offerUserById = gql`
     query offerByUserId($user_id: ID!, $offer_type: String) {
          offerByUserId(user_id: $user_id, offer_type: $offer_type) {
               offer {
                    id
                    user_id
                    crypto_name
                    price_type
                    offer_type
                    payment_type
                    preferred_currency
                    offer_tags
                    offerer_verified
                    min_purchase
                    max_purchase
                    offer_price
                    offer_time_minute
                    offer_label
                    offer_terms
                    offer_condition
                    offer_location
                    offer_owner_location
               }
          }
     }
`;
