/** @format */

import { gql } from "@apollo/client";

export const tradeByOfferID = gql`
     query tradeByOfferID($offer_id: ID!) {
          tradeByOfferID(offer_id: $offer_id) {
               success
               errors
               trade {
                    id
                    buyer_id
                    seller_id
                    offer_id
                    cryptocurrency
                    crypto_trade_amount
                    fiat_trade_amount
                    trade_rate
                    date_start_time
                    trade_time
                    trade_type
                    pay_via
                    buyer_feedback
                    seller_feedback
                    buyer_feedback_text
                    seller_feedback_text
                    buyer_paid
                    seller_released
                    trade_outcome
                    signature
               }
          }
     }
`;
