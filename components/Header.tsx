"use client";

import Image from "next/image";
import { useState } from "react";
import { LuContrast } from "react-icons/lu";
import { MdOutlineSettingsAccessibility } from "react-icons/md";

export default function Header() {
  const [active, setActive] = useState<"decrease" | "normal" | "increase">("normal");

  return (
    <header className="select-none border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white px-5 sm:px-10 lg:px-20 py-3">
        <div className="flex items-center mx-auto max-w-screen-3xl">
          {/* Left side: India Flag + Govt text */}
          <div className="flex items-center gap-2">
            <Image src="/Header/Inidan-Flag.svg" alt="India Flag" width={33} height={22} className="flex-shrink-0" />
            <div
              className="
                leading-tight 
                text-[14px]
                font-normal
              "
            >
              <div>भारत सरकार</div>
              <div>GOVERNMENT OF INDIA</div>
            </div>
          </div>

          {/* Full top bar content for md and up */}
          <div className="hidden lg:flex items-center gap-6 ml-6 mr-auto">
            <div className="flex items-center gap-6">
              <div className="w-px h-7 opacity-40 border-r border-gray-300" />

              <div className="leading-tight text-[14px] font-normal">
                <div>श्रम एवं रोजगार मंत्रालय</div>
                <div>Ministry of Labour</div>
              </div>
            </div>
          </div>

          {/* Right side: accessibility options */}
          <div className="flex items-center gap-6 ml-auto">
            {/* On md+, show full accessibility controls */}
            <div className="hidden md:flex items-center gap-4">
              <button className="hover:underline whitespace-nowrap font-normal text-[12px]">Skip to Main Content</button>

              <div className="w-px h-5 opacity-40 border-r border-gray-300" />

              <div className="flex items-center gap-1 rounded font-normal">
                {/* Decrease button */}
                <div className={`p-0.5 rounded transition-colors hover:bg-[#1a6ba8] cursor-pointer ${active === "decrease" ? "bg-[#1a6ba8]" : ""}`} onClick={() => setActive("decrease")}>
                  <button className={`w-6 h-6 flex items-center justify-center relative ${active === "decrease" ? "text-white opacity-100" : "text-white opacity-60"}`}>
                    A<span className="absolute -top-0.5 right-1 text-xs leading-none">-</span>
                  </button>
                </div>

                {/* Normal button */}
                <div className={`p-0.5 rounded transition-colors hover:bg-[#1a6ba8] cursor-pointer ${active === "normal" ? "bg-[#1a6ba8]" : ""}`} onClick={() => setActive("normal")}>
                  <button className={`relative w-6 h-6 flex items-center justify-center ${active === "normal" ? "text-white opacity-100" : "text-white opacity-100"}`}>
                    <span className="absolute inset-1/2 w-4 h-4 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />A
                  </button>
                </div>

                {/* Increase button */}
                <div className={`p-0.5 rounded transition-colors hover:bg-[#1a6ba8] cursor-pointer ${active === "increase" ? "bg-[#1a6ba8]" : ""}`} onClick={() => setActive("increase")}>
                  <button className={`w-6 h-6 flex items-center justify-center relative ${active === "increase" ? "text-white opacity-100" : "text-white opacity-60"}`}>
                    A<span className="absolute -top-0.5 right-1 text-xs leading-none">+</span>
                  </button>
                </div>
              </div>

              <div className="w-px h-5 opacity-40 border-r border-gray-300" />

              <button aria-label="Accessibility Options" className="flex items-center justify-center rounded p-1 hover:bg-white hover:text-primary transition-colors">
                <LuContrast size={20} />
              </button>

              <div className="w-px h-5 opacity-40 border-r border-gray-300" />
            </div>

            {/* Accessibility text at the very end */}
            <span
              className="
                flex gap-2 items-center justify-center
                text-[12px] font-medium
                ml-2 whitespace-nowrap
              "
            >
              <MdOutlineSettingsAccessibility size={20} />
              Accessibility
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#fefaf2] px-5 sm:px-12 lg:px-20 py-2 md:py-1 flex justify-between items-center border-b border-gray-300 max-w-screen-3xl mx-auto">
        <div className="flex items-center gap-4">
          <Image
            src="/Header/Cg-Logo.svg"
            alt="Logo"
            width={55} // mobile default
            height={55}
            className=" sm:w-[70] sm:h-[70] lg:w-[80px] lg:h-[80px]"
          />
          <div>
            <h1
              className="
                font-semibold 
                text-[24px] sm:text-[28px]  lg:text-[36px] 
                leading-[1]
              "
            >
              छत्तीसगढ़ शासन, श्रम विभाग
            </h1>
            <p
              className="
                font-semibold 
                text-[12px] sm:text-[14px] lg:text-[18px] 
                leading-[1] mt-1 
                text-gray-800
              "
            >
              LABOUR DEPARTMENT, GOVERNMENT OF CHHATTISGARH
            </p>
          </div>
        </div>

        {/* Hide the Swachh Bharat image on small screens */}
        <div className="hidden md:block">
          <Image src="/Header/Glasses.svg" alt="Swachh Bharat" width={187} height={85} />
        </div>
      </div>
    </header>
  );
}
