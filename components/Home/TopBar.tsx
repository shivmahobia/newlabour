"use client";

import { LuPhone } from "react-icons/lu";

export default function TopBar() {
  return (
    <div className="w-full bg-[#F6F6F6]">
      <div className="flex items-center justify-center sm:justify-end sm:py-4 sm:px-4 md:px-10 lg:px-20 w-full">
        <div className="flex items-center justify-center gap-2 bg-[#00487C1A] px-4 py-4 rounded w-full sm:w-auto sm:justify-start">
          <LuPhone size={20} className="text-[#00487C]" />
          <span className="text-[#00487C] font-bold text-sm text-center">
            मुख्यमंत्री अधिकार सहायता सेवा Toll Free No. -{" "}
            <a href="tel:07713505050" className="font-medium hover:underline">
              0771-3505050
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
