"use client";
import React, { useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";

const links = [
  { name: "HOME", href: "/" },
  { name: "HELP & SUPPORT", href: "" },
  { name: "UPDATES & EVENTS", href: "" }
];

const tabs = [
  { name: "LATEST UPDATES", icon: "fa-solid fa-bolt" },
  { name: "PRESS RELEASES", icon: "fa-regular fa-newspaper" },
  { name: "IMPORTANT ACTIVITIES", icon: "fa-regular fa-calendar-check" },
  { name: "FORTHCOMING/RECENT EVENTS", icon: "fa-regular fa-clock" }
];

const updatesData = [
  [
    "Application form for Late Ramanuj Pratap Singhdev Smriti Shram Yashasvi Award 2025.",
    "Application form for Late Ramanuj Pratap Singhdev Smriti Shram Yashasvi Award 2025.",
    "Application form for Late Ramanuj Pratap Singhdev Smriti Shram Yashasvi Award 2025.",
    "Application form for Late Ramanuj Pratap Singhdev Smriti Shram Yashasvi Award 2025.",
    "Application form for Late Ramanuj Pratap Singhdev Smriti Shram Yashasvi Award 2025."
  ],
  ["Press Release 1 for 2025.", "Press Release 2 for 2025.", "Press Release 3 for 2025."],
  ["Important Activity 1 for 2025.", "Important Activity 2 for 2025."],
  ["Forthcoming Event 1 for 2025.", "Recent Event 1 for 2025."]
];

const UpdateEvents = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Get updates for current tab
  const updates = updatesData[activeTab];

  // Split updates for two columns
  const leftCol = updates.filter((_, i) => i % 2 === 0);
  const rightCol = updates.filter((_, i) => i % 2 === 1);

  return (
    <div className="px-2 md:px-6 lg:px-8 xl:px-12 py-4">
      <BreadCrumb links={links} />
      <div className="relative rounded-md shadow-md bg-white py-6 px-2 md:px-8">
        <div className="font-semibold text-center text-[24px] text-[#00487C] mb-2">Updates & Events</div>

        <div className="border-b border-gray-200 py-2 mx-4 sm:mx-10"></div>

        <div className="space-y-8 mt-8 px-10">
          <div className="bg-[#F6F6F6] w-full rounded-md min-h-[487px] p-6">
            {/* Tabs */}
            <div className="flex justify-center">
              <div className="flex gap-2 md:gap-4 mb-6 bg-white border border-[#E5E5E5] rounded-full px-2 py-1">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.name}
                    className={`flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-[16px] transition
                      ${activeTab === idx ? "bg-[#00487C] text-white shadow-[0_4px_8px_0_rgba(0,0,0,0.10)]" : "bg-white text-[#7A7A7A]"}
                    `}
                    style={{ minWidth: 220, justifyContent: "center" }}
                    onClick={() => setActiveTab(idx)}
                  >
                    <i className={`${tab.icon} ${activeTab === idx ? "text-white" : "text-[#7A7A7A]"}`}></i>
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Updates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                {leftCol.map((text, i) => (
                  <div key={i} className="flex items-center bg-white rounded-xl px-4 py-4 shadow-sm" style={{ overflow: "hidden", background: "linear-gradient(90deg, #E0F2FF 5%, #FFFFFF 25%)" }}>
                    <div className="flex-shrink-0 flex flex-col items-center mr-4">
                      <span
                        className="text-[32px] font-bold text-[#FF9900] leading-none rounded-l-xl px-6 py-2"
                        style={{
                          minWidth: 70,
                          display: "inline-block",
                          textAlign: "center"
                        }}
                      >
                        {String(i * 2 + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1 border-l border-dashed border-[#D9D9D9] pl-4">
                      <div className="font-semibold text-[15px] text-[#222] leading-tight">{text}</div>
                    </div>
                    <div className="ml-auto pl-4">
                      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                        <path d="M8 5l5 5-5 5" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              {/* Right Column */}
              <div className="flex flex-col gap-4">
                {rightCol.map((text, i) => (
                  <div key={i} className="flex items-center bg-white rounded-xl px-4 py-4 shadow-sm" style={{ overflow: "hidden", background: "linear-gradient(90deg, #E0F2FF 5%, #FFFFFF 25%)" }}>
                    <div className="flex-shrink-0 flex flex-col items-center mr-4">
                      <span
                        className="text-[32px] font-bold text-[#FF9900] leading-none rounded-l-xl px-6 py-2"
                        style={{
                          minWidth: 70,
                          display: "inline-block",
                          textAlign: "center"
                        }}
                      >
                        {String(i * 2 + 2).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1 border-l border-dashed border-[#D9D9D9] pl-4">
                      <div className="font-semibold text-[15px] text-[#222] leading-tight">{text}</div>
                    </div>
                    <div className="ml-auto pl-4">
                      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                        <path d="M8 5l5 5-5 5" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FontAwesome CDN for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    </div>
  );
};

export default UpdateEvents;
