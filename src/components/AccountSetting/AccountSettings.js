import React from "react";

const AccountSettings = () => {
  return (
    <div>
      {" "}
   <main className="md:mt-[100px] mt-[200px]">
  <section className="p-3">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="md:w-[60%] w-full">
          <div className>
            <h5 className="text-[30px] font-bold">Account settings</h5>
            <p className="text-[16px] pt-10">(aaa.bfgdfvdf@fvdfbfgbg.com)</p>
          </div>
        </div>
        <div className="w-[40%] md:visible invisible">
          <img src="/assets/undraw_bitcoin_re_urgq 1.svg" alt />
        </div>
      </div>
    </div>
  </section>
  <section className="p-3">
    <div className="max-w-[1200px] mx-auto border p-5 rounded-lg">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[30%] w-full lg:justify-start justify-center">
          <img src="/assets/Group.svg" alt className="mx-auto lg:mx-0" />
        </div>
        <div className="lg:w-[60%] w-full mt-5">
          <div className="setting">
            <form>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" />
                <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="FecundCaracal162" required />
                <div className="absolute right-3 top-2">
                  <a className="border border-[#A8A5A5] bg-[#FFF9F4] px-8 text-center py-2 rounded text-sm block w-full" href>Save</a>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-8">
            <label htmlFor="first_name" className="block mb-2 text-[16px] font-medium text-gray-900">You can change your username only once</label>
            <div className="setting">
              <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" />
                  <input type="search" id="default-search" className="block w-full p-4 text-sm text-black border border-gray-300 rounded-lg bg-gray-50" placeholder="Upload image" required />
                  <div className="absolute right-3 top-1">
                    <a className="text-center rounded text-sm block w-full" href><img src="/assets/download 1.svg" alt className /></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-[16px]">
          Upload a nice picture, preferably of yourself. If you upload any explicit or otherwise inappropriate <br />
          image, we'll remove it immediately.
        </p>
        <h4 className="text-[16px] font-bold pt-5">Phone</h4>
        <div className="flex justify-between border p-5 rounded-lg mt-2">
          <div className="flex items-center">
            <div className="py-2 px-8 border rounded-lg">
              <img className="items-center" src="/assets/Vector 11.svg" alt />
            </div>
            <div className="ml-2">
              <p>+91</p>
            </div>
          </div>
          <div>
            <a className="text-[16px] py-2 bg-[#FFF9F4] rounded-lg px-[30px] border" href="#">Confirm</a>
          </div>
        </div>
        <p className="text-[16px] mt-5">Use a phone call instead</p>
        <p className="text-[16px] mt-5">Please set your phone number with country code. Must be a mobile number!</p>
      </div>
      <div className="mt-5">
        <h4 className="text-[16px] font-bold pt-5">Confirmation code</h4>
        <div className="flex justify-between border p-5 rounded-lg mt-2">
          <div className>
            <p>Enter Confirmation code</p>
          </div>
          <div>
            <a className="text-[16px] py-2 rounded-lg bg-[#FFF9F4] px-[30px] border" href="#">Submit</a>
          </div>
        </div>
      </div>
      <div className="mt-5 border p-5 bg-[#FFF9F4] rounded-lg">
        <p className="text-[16px]">It is mandatory to set answers to your security questions in case you have to reset or change the phone number.</p>
      </div>
      <div className="mt-5">
        <h4 className="text-[16px] font-bold pt-5">Preferred currency</h4>
        <div className="flex justify-between border p-5 rounded-lg mt-2">
          <div className="ml-2">
            <p className="text-[16px] font-medium">Indian Rupee (INR)</p>
          </div>
          <div>
            <img src="/assets/Vector 11.svg" alt />
          </div>
        </div>
        <p className="text-[16px] py-4">Select which currency your wallet will use</p>
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="block mb-2 text-[16px] font-bold text-gray-900">Bio</label>
        <textarea id="message" rows={8} className="block p-2.5 w-full text-sm text-black rounded-lg border border-gray-300" placeholder="Your bio appears on your public profile" defaultValue={""} />
        <p className="text-[16px] py-6">Maximum 3 lines and 180 characters</p>
        <a className="py-2 px-[30px] bg-[#FFF9F4] text-[16px] border rounded-lg" href="#">Submit</a>
      </div>
    </div>
  </section>
</main>

    </div>
  );
};

export default AccountSettings;
