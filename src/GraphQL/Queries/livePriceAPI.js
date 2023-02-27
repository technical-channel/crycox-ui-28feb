/** @format */

import { gql } from "@apollo/client";

export const getLivePrice = gql`
     query priceConvert($currency: String!, $symbol: String!) {
          priceConvert(currency: $currency, symbol: $symbol) {
               success
               errors
               message
               data
          }
     }
`;

// # query priceConvert {
// #   priceConvert(currency:"USD", symbol:"BNB") {
// #     success
// #     errors
// #     message
// #     data
// #   }
// # }
