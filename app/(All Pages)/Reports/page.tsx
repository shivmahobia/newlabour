"use client";

import React, { useState, ReactNode } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import SectionHeader from "@/components/SectionHeader";

type Link = {
  name: string;
  href: string;
};

type TabCard = {
  id: number;
  iconBg: string;
  icon: ReactNode;
  title: string;
};

const tabs: string[] = ["Building and other construction", "Unorganized Workers' Board", "Labour Commissioner Services", "Labor Welfare Board"];

const links: Link[] = [
  { name: "HOME", href: "/" },
  { name: "RESOURCES", href: "" },
  { name: "REPORTS", href: "" }
];

const tabCards: Record<string, TabCard[]> = {
  "Building and other construction": [
    {
      id: 1,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 14v6M12 14v6M8 14v6M15 10a3 3 0 10-6 0 3 3 0 006 0zM21 10h-3m-1-5v2m2 2v2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 2,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 3,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 4,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 5,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 6,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 7,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 8,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12h6M9 16h6M12 8v8" strokeLinecap="round" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 9,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 3v18m6-9H6" strokeLinecap="round" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 10,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 11,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 7v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 12,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 10h18M3 14h18" strokeLinecap="round" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 13,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 14,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 15,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 3v18m9-9H3" strokeLinecap="round" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 16,
      iconBg: "bg-[#FFFBEB]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 16v-4m0 0V8" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    }
  ],

  "Unorganized Workers' Board": [
    {
      id: 1,
      iconBg: "bg-red-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 2,
      iconBg: "bg-red-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3-3 3 3m0 6l-3 3-3-3" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 3,
      iconBg: "bg-red-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276a2 2 0 011.447 0l4.553 2.276M12 20v-6" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    }
  ],

  "Labour Commissioner Services": [
    {
      id: 1,
      iconBg: "bg-blue-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "जिलेवार पलायन पंजीयन रिपोर्ट"
    },
    {
      id: 2,
      iconBg: "bg-blue-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v10M16 7v10M12 11v6" />
        </svg>
      ),
      title: "श्रमिक पंजीयन रिपोर्ट"
    }
  ],

  "Labor Welfare Board": [
    {
      id: 1,
      iconBg: "bg-red-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      title: "स्थापना/श्रमिक पंजीयन रिपोर्ट"
    }
  ]
};

const Reports: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeTab: string = tabs[activeIndex];
  const currentCards: TabCard[] = tabCards[activeTab] || [];

  return (
    <div className="px-5 sm:px-10 md:px-20">
      <BreadCrumb links={links} />

      <div className="relative rounded-md shadow-md bg-white p-2 sm:p-6 border-1 border-gray-200 mb-10">
        <div className="font-semibold text-center text-[20px] sm:text-[24px] text-[#00487C]">Reports</div>
        <div className="border-b border-gray-200 py-2 mb-2 sm:mb-6"></div>

        {/* Mobile Tabs Out Side of the Div #FIGMA */}
        <div className="flex lg:hidden border border-gray-200 rounded-md overflow-auto bg-white shadow-sm max-w-full h-[50px] whitespace-nowrap">
          {tabs.map((tab, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={tab}
                onClick={() => setActiveIndex(idx)}
                className={`
          inline-block text-center px-4 py-1 text-xs font-semibold
          ${isActive ? "bg-[#00487C] text-white" : "text-gray-600"}
          ${!isActive ? "hover:bg-gray-100" : ""}
          transition-colors duration-200
          ${idx === 0 ? "rounded-l-md" : ""}
          ${idx === tabs.length - 1 ? "rounded-r-md" : ""}
        `}
                title={tab} // still useful for accessibility
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="font-semibold rounded-md text-center bg-gray-100 text-[24px] text-[#00487C] py-5 px-10 border-1 border-gray-200 mt-2 sm:mt-4">
          {/* Desktop / Tablet Tabs */}
          <div className="hidden lg:flex border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm max-w-full h-[80px] p-2">
            {tabs.map((tab, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveIndex(idx)}
                  className={`
            flex-1 text-center py-2 px-4 text-sm font-semibold
            ${isActive ? "bg-[#00487C] text-white rounded-md font-semibold text-[16px]" : "text-gray-600 font-semibold text-[16px]"}
            ${!isActive ? "hover:bg-gray-100" : ""}
            transition-colors duration-200
            ${idx === 0 ? "rounded-l-md" : ""}
            ${idx === tabs.length - 1 ? "rounded-r-md" : ""}
          `}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="mx-auto py-10 sm:10px md:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
              {currentCards.map(({ id, iconBg, icon, title }) => (
                <div
                  key={id}
                  className="bg-white border-1 rounded-lg shadow-md p-6 flex flex-col items-center justify-center relative w-full h-auto min-h-[208px] space-y-4 border-gray-200 hover:shadow-lg transition-shadow"
                >
                  {/* Card number at the top center of the card */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="text-black bg-white border-1 border-gray-200 rounded-full w-9 h-9 flex items-center justify-center text-[18px] font-bold shadow-md">{id}</span>
                  </div>

                  {/* Icon in the center of the card */}
                  <div className={`${iconBg} rounded-md p-3 mb-4 flex items-center justify-center w-14 h-14 mt-2`}>{icon}</div>

                  {/* Title at the bottom center of the card */}
                  <h3 className="text-center font-semibold mt-2 text-[20px]">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
