/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

import {
     ApolloClient,
     ApolloLink,
     ApolloProvider,
     HttpLink,
     InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
     uri: "http://127.0.0.1:8955/graphql",
     // uri: "http://52.193.228.115:8955/graphql",
});

export const client = new ApolloClient({
     cache: new InMemoryCache(),
     link: ApolloLink.from([httpLink]),
});

function getLibrary(provider) {
     const library = new ethers.providers.Web3Provider(provider);
     console.log(library);
     library.pollingInterval = 12000; // frequency provider is polling
     return library;
}

ReactDOM.render(
     <Web3ReactProvider getLibrary={getLibrary}>
          <ApolloProvider client={client}>
               <BrowserRouter>
                    <App />
               </BrowserRouter>
          </ApolloProvider>
     </Web3ReactProvider>,
     document.getElementById("root")
);
