/** @format */

import { gql } from "@apollo/client";

export const filterAllOffers = gql`
     query filterOffers($offerType: String!, $offererVerified: Boolean!) {
          filterOffers(
               offer_type: $offerType
               offerer_verified: $offererVerified
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

// query filterOffers {
//   filterOffers (offer_type:"sell", offerer_verified:false)
//   {
//     success
//     errors
//     offer {
//     id
//     user_id
//     crypto_name
//     price_type
//     offer_type
//     payment_type
//     preferred_currency
//     offer_tags
//     offerer_verified
//     min_purchase
//     max_purchase
//     offer_price
//     offer_time_minute
//     offer_label
//     offer_terms
//     offer_condition
//     offer_location
//     offer_owner_location
//     }
//   }
// }
