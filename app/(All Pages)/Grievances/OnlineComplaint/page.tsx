import React from "react";
import BreadCrumb from "../../../../components/BreadCrumb";
const links = [
  { name: "HOME", href: "/" },
  { name: "GRIEVANCES", href: "" },
  { name: "ONLINE COMPLAINT", href: "" }
];

const OnlineComplaint = () => {
  return (
    <div className="px-5 sm:px-10 md:px-20">
      <BreadCrumb links={links} />
      <div className="relative rounded-md shadow-md bg-white py-6">
        <div className="font-semibold text-center text-[24px] text-[#00487C]">Online Complaint</div>
        <div className="border-b border-gray-200 py-2 mx-4 sm:mx-10"></div>

        <div className="flex flex-col justify-center items-center gap-4 mt-6 px-4">
          <div className="w-full max-w-xs">
            <div className="mb-1">
              <label className="text-black text-[14px] font-bold">Mobile Number</label>
            </div>
            <input
              type="text"
              placeholder="Enter Mobile Number Here"
              className="w-full text-[14px] sm:text-[16px] h-[42px] rounded-md border border-gray-300 px-3 focus:outline-none focus:border-[#00487c] font-normal"
              maxLength={10}
            />
          </div>
          <div className="py-2 mb-2">
            <button
              type="button"
              className="w-[120px] h-[38px] bg-gradient-to-r from-[#0C324D] to-[#0878C7] text-white rounded-full font-semibold text-[14px] hover:opacity-90 transition"
              style={{ borderRadius: "9999px" }}
            >
              Get OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineComplaint;
