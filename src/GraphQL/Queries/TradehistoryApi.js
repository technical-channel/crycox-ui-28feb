/** @format */

import { gql } from "@apollo/client";

export const TradeHistory = gql`
     query tradeHistory($user_id: ID!) {
          tradeByUserId(user_id: $user_id) {
               success
               errors
               trade {
                    id
                    offer_id
                    buyer_id
                    seller_id
                    cryptocurrency
                    crypto_trade_amount
                    fiat_trade_amount
                    trade_rate
                    date_start_time
                    trade_time
                    trade_type
                    trade_outcome
                    pay_via
                    buyer_feedback
                    seller_feedback
                    buyer_feedback_text
                    seller_feedback_text
                    buyer_paid
                    seller_released
                    signature
               }
          }
     }
`;
