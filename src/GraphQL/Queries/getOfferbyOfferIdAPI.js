/** @format */

import { gql } from "@apollo/client";

export const getOfferByOfferId = gql`
     query offerById($offer_id: ID!) {
          offerById(offer_id: $offer_id) {
               success
               errors
               offer {
                    id
                    user_id
                    crypto_name
                    price_type
                    offer_type
                    payment_type
                    offer_margin
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

// query offerById {
//     offerById(offer_id:"63ea1f46e84198a3ae4e49f3"){
//        offer {
//           id
//           crypto_name
//           price_type
//           offer_type
//           payment_type
//           preferred_currency
//           offer_tags
//           offerer_verified
//           min_purchase
//           max_purchase
//           offer_price
//           offer_time_minute
//           offer_label
//           offer_terms
//           offer_condition
//           offer_location
//           offer_owner_location
//       }
//     }
//   }
