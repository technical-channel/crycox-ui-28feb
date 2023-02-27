/** @format */

import { gql } from "@apollo/client";

// createOfferAPI;

export const createOfferAPI = gql`
     mutation createOffer(
          $user_id: ID!
          $crypto_name: String
          $price_type: String
          $offer_type: String
          $payment_type: [String]
          $offer_tags: [String]
          $min_purchase: Float
          $max_purchase: Float
          $offer_price: Float
          $offer_label: String
          $offer_terms: String
          $offer_condition: String
     ) {
          createOffer(
               user_id: $user_id
               crypto_name: $crypto_name
               price_type: $price_type
               offer_type: $offer_type
               payment_type: $payment_type
               offer_tags: $offer_tags
               min_purchase: $min_purchase
               max_purchase: $max_purchase
               offer_price: $offer_price
               offer_label: $offer_label
               offer_terms: $offer_terms
               offer_condition: $offer_condition
          ) {
               success
               errors
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
                    offer_margin
                    max_purchase
                    offer_price
                    offer_time_minute
                    offer_label
                    offer_terms
                    offer_condition
               }
          }
     }
`;

// mutation createOffer {
//   createOffer(user_id:"63d8f5d7b368123f2fa2caa6", crypto_name: "bnB", price_type: "Fixed Price",
//     offer_type: "Buy", payment_type: ["PhonePe", "Google Pay"], preferred_currency: "INR",
//     offer_tags: "Online", offer_margin:5,
//     offerer_verified:false, min_purchase: 200, max_purchase: 1000,
//     offer_price: 1252.34, offer_time_minute: 25, offer_label: "Third Offer",
//     offer_terms: "this is the new terms of the offer",
//     offer_condition: "this is the new condition of the offer", offer_location: "Jaipur",
//     offer_owner_location: "India" ) {
//     success
//     errors
//     offer {
//       id
//       user_id
//       crypto_name
//       price_type
//       offer_type
//       payment_type
//       preferred_currency
//       offer_tags
//       offerer_verified
//       min_purchase
//       offer_margin
//       max_purchase
//       offer_price
//       offer_time_minute
//       offer_label
//       offer_terms
//       offer_condition
//       offer_location
//       offer_owner_location
//     }
//   }
// }
