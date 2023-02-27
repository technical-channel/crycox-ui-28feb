/** @format */
import { gql } from "@apollo/client";
export const createTradeAPI = gql`
     mutation createTrade(
          $offer_id: ID!
          $buyer_id: ID!
          $seller_id: ID!
          $cryptocurrency: String
          $crypto_trade_amount: Float
          $fiat_trade_amount: Float
          $trade_rate: Float
          $trade_type: String
          $pay_via: String
          $signature: String
     ) {
          createTrade(
               offer_id: $offer_id
               buyer_id: $buyer_id
               seller_id: $seller_id
               cryptocurrency: $cryptocurrency
               crypto_trade_amount: $crypto_trade_amount
               fiat_trade_amount: $fiat_trade_amount
               trade_rate: $trade_rate
               trade_type: $trade_type
               pay_via: $pay_via
               signature: $signature
          ) {
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
                    signature
               }
          }
     }
`;
