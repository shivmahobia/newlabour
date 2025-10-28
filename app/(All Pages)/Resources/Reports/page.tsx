"use client";
import React from "react";
import BreadCrumb from "@/components/BreadCrumb";

import { useState } from "react";

const tabs = ["Building and other construction", "Unorganized Workers' Board", "Labour Commissioner Services", "Labor Welfare Board"] as const;
const links = [
  { name: "HOME", href: "/" },
  { name: "RESOURCES", href: "" },
  { name: "REPORTS", href: "" }
];

// Define types for our data
interface CardItem {
  id: number;
  iconBg: string;
  icon: React.ReactElement;
  title: string;
}

type TabType = (typeof tabs)[number];

interface TabCards {
  [key: string]: CardItem[];
}

// Different cards for each tab
const tabCards = {
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
      iconBg: "bg-purple-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6M20 20v-6h-6m6-2a8 8 0 11-8-8" />
        </svg>
      ),
      title: "श्रमिक पंजीयन नवीनीकरण रिपोर्ट"
    },
    {
      id: 3,
      iconBg: "bg-green-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      title: "प्रवर्ग वार पंजीकृत श्रमिक रिपोर्ट"
    },
    {
      id: 4,
      iconBg: "bg-blue-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
        </svg>
      ),
      title: "योजनावार लाभान्वित हितग्राही रिपोर्ट"
    },
    {
      id: 5,
      iconBg: "bg-green-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      title: "योजना रिपोर्ट"
    },
    {
      id: 6,
      iconBg: "bg-indigo-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M13 20h-2M6 6h12v12H6V6z" />
        </svg>
      ),
      title: "उपकर(सेस) की स्थिति देखें"
    },
    {
      id: 7,
      iconBg: "bg-red-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "विभाग द्वारा सेस प्राप्ति रिपोर्ट (सेस पेमेंट विवरण)"
    },
    {
      id: 8,
      iconBg: "bg-yellow-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M8 16h8M12 20v-8" />
        </svg>
      ),
      title: "प्रवासी श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 9,
      iconBg: "bg-pink-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M13 20h-2" />
        </svg>
      ),
      title: "शिकायत की स्थिति देखें"
    },
    {
      id: 10,
      iconBg: "bg-teal-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18" />
        </svg>
      ),
      title: "शिकायत रिपोर्ट (भवन निर्माण)"
    },
    {
      id: 11,
      iconBg: "bg-indigo-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10M7 16h6" />
        </svg>
      ),
      title: "शिकायत रिपोर्ट (कॉल सेंटर)"
    },
    {
      id: 12,
      iconBg: "bg-lime-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
        </svg>
      ),
      title: "हितग्राही पंजीयन विवरण देखे"
    },
    {
      id: 13,
      iconBg: "bg-cyan-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M13 20h-2" />
        </svg>
      ),
      title: "मोबाईल एप्लिकेसन से आए आवेदन की जानकारी (भवन निर्माण)"
    },
    {
      id: 14,
      iconBg: "bg-orange-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 16h18" />
        </svg>
      ),
      title: "LRC से निराकरण किए गए आवेदनों की जानकारी (भवन निर्माण)"
    },
    {
      id: 15,
      iconBg: "bg-rose-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h12v12H6z" />
        </svg>
      ),
      title: "निशुल्क कार्ड योजना लाभान्वित की जिलेवार जानकारी (भवन निर्माण)"
    },
    {
      id: 16,
      iconBg: "bg-sky-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M8 16h8" />
        </svg>
      ),
      title: "श्रमिक कार्ड संशोधन रिपोर्ट (भवन निर्माण)"
    },
    {
      id: 17,
      iconBg: "bg-violet-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12M6 16h12" />
        </svg>
      ),
      title: "लोक सेवा गारंटी रिपोर्ट (भवन निर्माण)"
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
      iconBg: "bg-orange-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "प्रवर्ग वार पंजीकृत श्रमिक रिपोर्ट"
    },
    {
      id: 3,
      iconBg: "bg-teal-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "योजना रिपोर्ट"
    },
    {
      id: 4,
      iconBg: "bg-purple-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      title: "प्रवासी श्रमिक पंजीयन रिपोर्ट"
    },
    {
      id: 5,
      iconBg: "bg-yellow-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      title: "मोबाईल एप्लिकेसन से आए आवेदन की जानकारी (असंगठित)"
    },
    {
      id: 6,
      iconBg: "bg-pink-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M13 20h-2" />
        </svg>
      ),
      title: "शिकायत रिपोर्ट (असंगठित)"
    },
    {
      id: 7,
      iconBg: "bg-indigo-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h12v12H6z" />
        </svg>
      ),
      title: "श्रमिक कार्ड संशोधन रिपोर्ट (असंगठित)"
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
      iconBg: "bg-green-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      ),
      title: "संविदा श्रमिक अधिनियम 1970 के अंतर्गत प्रमुख नियोजक का पंजीयन आवेदन की स्थिती"
    },
    {
      id: 3,
      iconBg: "bg-yellow-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "अंतर्राज्यीय श्रमिक अधिनियम 1979 के अंतर्गत प्रमुख नियोजक का पंजीयन आवेदन की स्थिती"
    },
    {
      id: 4,
      iconBg: "bg-purple-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      title: "भवन एवं अन्य सन्निर्माण कर्मकार अधिनियम,1996 के अंतर्गत स्थापनाओ के पंजीयन"
    },
    {
      id: 5,
      iconBg: "bg-pink-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h12v12H6z" />
        </svg>
      ),
      title: "संविदा श्रमिक अधिनियम 1970 के अंतर्गत ठेकेदार के अनुज्ञप्ति (नये) आवेदन की स्थिती"
    },
    {
      id: 6,
      iconBg: "bg-indigo-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "संविदा श्रमिक अधिनियम 1970 के अंतर्गत ठेकेदार के अनुज्ञप्ति (वैधता बढ़ाने हेतु) आवेदन की स्थिती"
    },
    {
      id: 7,
      iconBg: "bg-teal-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
        </svg>
      ),
      title: "अंतरराज्यीय प्रवासी अधिनियम 1979 के अंतर्गत ठेकेदार के अनुज्ञप्ति (नये) आवेदन की स्थिती"
    },
    {
      id: 8,
      iconBg: "bg-lime-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9h8M8 13h8M8 17h8" />
        </svg>
      ),
      title: "अंतरराज्यीय प्रवासी अधिनियम 1979 के अंतर्गत ठेकेदार के अनुज्ञप्ति (वैधता बढ़ाने हेतु) आवेदन की स्थिती"
    },
    {
      id: 9,
      iconBg: "bg-cyan-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M4 16h16M4 8h16" />
        </svg>
      ),
      title: "मोटर ट्रांसपोर्ट अधिनियम 1961 के अंतर्गत संस्थानों का पंजीयन आवेदन की स्थिती"
    },
    {
      id: 10,
      iconBg: "bg-gray-200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Placeholder icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5v14" />
        </svg>
      ),
      title: "दुकान एवं स्थापना अधिनियम 2017 के अंतर्गत आवेदन की स्थिती"
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

const Reports = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeTab = tabs[activeIndex];
  const currentCards = tabCards[activeTab] || [];

  return (
    <div className="px-20">
      <BreadCrumb links={links} />

      <div className="relative rounded-md shadow-md bg-white p-6 border-1 border-gray-200 mb-10">
        <div className="font-semibold rounded-md text-center bg-gray-100 text-[24px] text-[#00487C] py-2 px-10 border-1 border-gray-200">
          <div className="py-6">Building & Other Renovations</div>

          <div className="flex border-1 border-gray-200 rounded-md overflow-hidden bg-white shadow-sm max-w-full h-[80px] p-2">
            {tabs.map((tab: string, idx: number) => {
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
                    ${idx === 0 ? "rounded-md" : ""}
                    ${idx === tabs.length - 1 ? "rounded-md" : ""}
                  `}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="mx-auto py-10 px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
              {currentCards.map(({ id, iconBg, icon, title }: CardItem) => (
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
