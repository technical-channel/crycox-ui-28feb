/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import CreateOffer from "../components/CreateOffer/CreateOffer";
import BuyPage from "../components/Buy/BuyPage";

import HomePage from "../view/Home/HomePage";
import SellPage from "../components/Sell/SellPage";
import Offer from "../components/Offer";
import Wallet from "../components/Wallet/Wallet";
import Dashboard from "../components/Dashboard/Dashboard";
import AccountSettings from "../components/AccountSetting/AccountSettings";
import MyProfile from "../components/MyProfile/MyProfile";

import ClientBuyerPage from "../components/Buy/ClientBuyerPage";
import SecuritySetting from "../components/AccountSetting/SecuritySetting";
import BuyerChat from "../components/Buy/BuyerChat";
import ClientSellerPage from "../components/Sell/ClientSellerPage";
import SellerChat from "../components/Sell/SellerChat";
import ForgotPassword from "../components/Login/ForgotPassword";
import Sendotp from "../components/Login/Sendotp";
import Resetpassword from "../components/Login/Resetpassword";

const Routing = () => {
     return (
          <div>
               <Routes>
                    <Route path="/" element={<MainLayout />}>
                         <Route index path="/" element={<HomePage />} />
                    </Route>
                    {/* <Route path="/createoffer" element={<CreateOffer />} /> */}
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="forgotpassword" element={<ForgotPassword />} />
                    <Route path="/sendotp/:email" element={<Sendotp />}></Route>
                    <Route
                         path="/resetpassword"
                         element={<Resetpassword />}
                    ></Route>

                    <Route path="/offer" element={<Offer />}>
                         <Route index element={<Offer />} />
                         <Route path="buy" element={<BuyPage />} />
                         <Route path="sell" element={<SellPage />} />
                         <Route path="createoffer" element={<CreateOffer />} />
                         <Route path="wallet" element={<Wallet />} />
                         <Route path="dashboard" element={<Dashboard />} />
                         <Route
                              path="settings"
                              element={<AccountSettings />}
                         ></Route>
                         <Route
                              path="myprofile"
                              element={<MyProfile />}
                         ></Route>
                         <Route
                              path="clientbuyer/:offerId/:buyerId"
                              element={<ClientBuyerPage />}
                         ></Route>{" "}
                         <Route
                              path="clientseller/:offerId/:sellerId"
                              element={<ClientSellerPage />}
                         ></Route>
                         <Route
                              path="securitysetting"
                              element={<SecuritySetting />}
                         ></Route>
                         <Route
                              path="buyerchat/:offerId/:buyerId"
                              element={<BuyerChat />}
                         />
                         <Route
                              path="sellerchat/:offerId/:sellerId"
                              element={<SellerChat />}
                         />
                    </Route>
               </Routes>
          </div>
     );
};

export default Routing;
