/** @format */

import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { MetamaskExist } from "../../GraphQL/Queries/MetamaskexistApi";
import { useQuery, useLazyQuery } from "@apollo/client";

import { useWeb3React } from "@web3-react/core";
import Tradehistory from "./Tradehistory";
import Tradepartner from "./Tradepartner";
import Myoffer from "./Myoffer";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

function classNames(...classes) {
     return classes.filter(Boolean).join(" ");
}

const Dashboard = ({ Trade }) => {
     const { active, account } = useWeb3React();
     const navigate = useNavigate();
     const { login, logout } = useAuth();

     let [categories] = [
          {
               "Trade History": [
                    {
                         content: <Tradehistory />,
                    },
               ],
               "Trade Partner": [
                    {
                         content: <Tradepartner />,
                    },
               ],

               "My Offers": [
                    {
                         content: <Myoffer />,
                    },
               ],
          },
     ];

     useEffect(() => {
          if (!active) {
               login();
          }
     }, []);

     return (
          <div>
               <div className="my-[80px] md:mt-[160px] md:mb-[30px] px-5 py-5">
                    <div className="max-w-[1400px] mx-auto  mb-5 ">
                         <Tab.Group>
                              <div className="flex justify-between ">
                                   <div>
                                        <Tab.List className="flex md:flex-row flex-col gap-5 justify-between ">
                                             <div className="flex xs:flex-wrap flex-nowrap  gap-5">
                                                  {Object.keys(categories).map(
                                                       (category) => (
                                                            <Tab
                                                                 key={category}
                                                                 className={({
                                                                      selected,
                                                                 }) =>
                                                                      classNames(
                                                                           "text-[18px] text-[#F1971F] font-bold px-[40px] py-[10px] rounded border-2 border-[#F1971F]",
                                                                           // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                                           selected
                                                                                ? " shadow"
                                                                                : "text-[18px] text-[#AEAEAE] px-[40px] py-[10px] border-2 rounded border-[#AEAEAE] ]"
                                                                      )
                                                                 }
                                                            >
                                                                 {category}
                                                            </Tab>
                                                       )
                                                  )}
                                             </div>
                                        </Tab.List>
                                   </div>

                                   <div>
                                        <div className=" md:visible invisible">
                                             <img
                                                  src="/assets/dashboard.svg"
                                                  alt=""
                                             />
                                        </div>
                                   </div>
                              </div>

                              <Tab.Panels className="mt-2">
                                   {Object.values(categories).map(
                                        (posts, idx) => (
                                             <Tab.Panel key={idx}>
                                                  <ul>
                                                       {posts.map((post) => (
                                                            <li
                                                                 key={post.id}
                                                                 className="relative rounded-md"
                                                            >
                                                                 <h3>
                                                                      {
                                                                           post.content
                                                                      }
                                                                 </h3>
                                                            </li>
                                                       ))}
                                                  </ul>
                                             </Tab.Panel>
                                        )
                                   )}
                              </Tab.Panels>
                         </Tab.Group>
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;
