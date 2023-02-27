import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import MyProfile from "../MyProfile/MyProfile";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SecuritySetting = () => {
  let [categories] = useState({
    Profile: [
      {
        content: (
          <>
            <div>
              <MyProfile />
            </div>
          </>
        ),
      },
    ],
    Security: [
      {
        content: (
          <>
            <main className="md:mt-[100px] mt-[200px]">
              <div className="max-w-[750px] mx-auto p-3">
                <h2 className="text-[30px] font-bold">Security Settings</h2>
                <p className="text-[16px] pt-4">
                  Set up your 2FA and make your account more secure:
                </p>
              </div>
              <section className="mt-10 p-2">
                <div className="max-w-[1500px] mx-auto">
                  <div className="flex md:flex-row flex-col justify-between">
                    <div className="flex flex-col md:w-[20%] w-full md:mb-0 mb-5">
                      <a className="text-[16px] font-bold" href="/">
                        Profile
                      </a>
                      <a className="text-[16px] font-bold my-8" href="/">
                        Payment Method
                      </a>
                      <a
                        className="text-[16px] font-bold text-[#ED8721]"
                        href="/"
                      >
                        Security
                      </a>
                    </div>
                    <div className="md:w-[75%] w-full">
                      <div className="border p-5 rounded-lg">
                        <div className="flex md:flex-row flex-col justify-between items-center">
                          <div className="flex items-center gap-5">
                            <div>
                              <img src="/assets/mail.svg" alt />
                            </div>
                            <div>
                              <h3 className="text-[16px] font-bold">Email</h3>
                              <p className="text-[16px] pt-3">
                                A unique time-bound code sent via email
                              </p>
                            </div>
                          </div>
                          <div>
                            <a
                              className="text-[16px] font-bold text-[#000AFF]"
                              href="/"
                            >
                              Active now
                            </a>
                          </div>
                        </div>
                        <div className="flex md:flex-row flex-col justify-between items-center mt-8">
                          <div className="flex items-center gap-5">
                            <div>
                              <img src="/assets/phone-call.svg" alt />
                            </div>
                            <div>
                              <h3 className="text-[16px] font-bold">
                                Phone Number
                              </h3>
                              <p className="text-[16px] pt-3">
                                Time-bound code sent via phone number
                              </p>
                            </div>
                          </div>
                          <div>
                            <a
                              className="text-[16px] font-bold text-[#000AFF]"
                              href="/"
                            >
                              Active now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border p-5 rounded-lg mt-10">
                        <div>
                          <form action>
                            <h4 className="text-[16px] font-bold pb-5">
                              Change Password
                            </h4>
                            <div className="mb-6">
                              <label
                                htmlFor="large-input"
                                className="block mb-2 text-[16px] font-bold text-gray-900 "
                              >
                                Current password
                              </label>
                              <input
                                type="text"
                                id="large-input"
                                className="block w-full py-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md"
                                placeholder="Your current password"
                              />
                            </div>
                            <div className="mb-6">
                              <label
                                htmlFor="base-input"
                                className="block mb-2 text-[16px] font-bold text-gray-900 "
                              >
                                New password
                              </label>
                              <input
                                type="text"
                                id="base-input"
                                className="border border-gray-300 text-gray-900 text-sm py-4 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Enter a new password"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="small-input"
                                className="block mb-2 text-[16px] font-bold text-gray-900 "
                              >
                                Comfirm password
                              </label>
                              <input
                                type="text"
                                id="small-input"
                                className="block w-full py-4 text-gray-900 border border-gray-300 p-2.5 rounded-lg sm:text-xs"
                                placeholder="Confirm new passwod"
                              />
                            </div>
                            <div className="mt-10 flex md:flex-row items-start flex-col gap-10">
                              <a
                                className="bg-[#0E509D] py-3 px-[10px] min-w-[200px] text-center rounded text-white text-[16px]"
                                href="/"
                              >
                                Change password
                              </a>
                              <p className="text-[16px]">
                                Changing your password will log you out of all
                                your active <br />
                                sessions
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </>
        ),
      },
    ],
  });
  return (
    <div>
      <div className="md:mt-[100px] mt-[200px]">
        <div className="max-w-[1600px] mx-auto  mb-5">
          <Tab.Group>
            <Tab.List className="flex md:flex-row flex-col gap-8">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
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
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel key={idx}>
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="relative rounded-md">
                        <h3>{post.content}</h3>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default SecuritySetting;
