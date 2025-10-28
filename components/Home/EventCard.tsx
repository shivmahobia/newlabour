"use client";

import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

export default function EventCard() {
  return (
    <div className="flex flex-col md:flex-row gap-4 sm:gap-8 shadow-sm bg-white p-4 h-auto md:h-[331px] items-center px-5 sm:px-10 md:px-20">
      {/* Left Image Section */}
      <div className="flex justify-center md:w-[250px] w-full">
        <Image src="/Home/PM_MODI.png" alt="PM Narendra Modi" width={250} height={283} className="rounded-md object-cover" />
      </div>

      {/* Right Content - Centered */}
      <div className="flex flex-col justify-center flex-1 w-full text-center sm:text-left">
        <div className="space-y-4">
          {/* Quote Text */}
          <div className="hidden md:flex">
            <span className="inline-block w-[56px] h-[59px] text-9xl font-bold text-gray-100 leading-none align-top">“</span>
          </div>

          <p className="text-[18px] sm:text-2xl font-semibold text-primary">PM emphasises that democracy and technology together can ensure the welfare of humanity.</p>

          {/* Divider */}
          <hr className="border-t border-gray-200" />

          {/* Footer Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 px-1">
            {/* Subtext */}
            <div className="text-[16px] text-gray-800 font-semibold">
              Semiconductor Executives’ Roundtable <br />
              <span className="text-sm text-gray-400">05.09.2025</span>
            </div>

            {/* Button */}
            <button className="text-[16px] font-semibold justify-center inline-flex items-center gap-2 border bg-[#00487C1A] border-[#00487C] text-[#00487C] px-4 py-2 rounded-md text-md hover:bg-primary hover:text-white transition mt-4 sm:mt-0 w-full sm:w-auto">
              View Event <LuExternalLink size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
