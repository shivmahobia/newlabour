"use client";
import React from "react";
import Image from "next/image";
import BreadCrumb from "@/components/BreadCrumb";
import SectionHeader from "@/components/SectionHeader";

// Type Definitions
type Link = {
  name: string;
  href: string;
};

type Board = {
  name: string;
  img: string;
};

type StructureItem = {
  id?: string;
  name?: string;
  title?: string;
  img?: string;
  boards?: Board[];
};

// Data
const links: Link[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "" },
  { name: "ORGANIZATION", href: "" }
];

const structure: StructureItem[] = [
  {
    id: "labourMinister",
    name: "Labour Minister",
    title: "Shri. Lakhan Lal Dewangan",
    img: "/About/Organization/Minister.svg"
  },
  {
    id: "secretary",
    name: "Secretary (Labour)",
    title: "Him Shikhar Gupta (IAS)",
    img: "/About/Organization/Secretary.svg"
  },
  {
    boards: [
      { name: "Labor Commissioner", img: "/About/Organization/Img-1.svg" },
      { name: "Director, Employee State Insurance Services", img: "/About/Organization/Img-2.svg" },
      { name: "CG Labour Welfare Board", img: "/About/Organization/Img-3.svg" },
      { name: "CG Building and Other Construction Workers Welfare Board", img: "/About/Organization/Img-4.svg" },
      { name: "CG Unorganized Workers State Social Security Board", img: "/About/Organization/Img-5.svg" }
    ]
  }
];

const Organization: React.FC = () => {
  return (
    <div className="px-4 md:px-6">
      <BreadCrumb links={links} />

      <div className="relative rounded-lg shadow-md bg-white py-10 px-6 md:px-8 mx-auto border border-gray-200">
        <SectionHeader title="Department Structure" />

        {/* Organization Chart */}
        <div className="w-full overflow-x-auto overflow-y-visible pb-4">
          <div className="flex flex-col items-center relative py-5" style={{ minWidth: "1280px" }}>
            {/* Level 1 - Minister */}
            <div className="relative z-20 mb-8">
              <div className="flex flex-row items-center border border-gray-300 px-4 py-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
                <Image src={structure[0].img!} alt={structure[0].name!} width={64} height={64} className="rounded object-cover" />
                <div className="flex flex-col ml-4">
                  <div className="font-medium text-lg text-gray-800">{structure[0].name}</div>
                  <div className="text-gray-600 text-sm">{structure[0].title}</div>
                </div>
              </div>
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-0.5 h-8 electric-line-vertical"></div>
            </div>

            {/* Level 2 - Secretary */}
            <div className="relative z-20 mb-8">
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full w-0.5 h-8 electric-line-vertical"></div>

              <div className="flex flex-row items-center border border-gray-300 px-4 py-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
                <Image src={structure[1].img!} alt={structure[1].name!} width={64} height={64} className="rounded object-cover" />
                <div className="flex flex-col ml-4">
                  <div className="font-medium text-lg text-gray-800">{structure[1].name}</div>
                  <div className="text-gray-600 text-sm">{structure[1].title}</div>
                </div>
              </div>

              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-0.5 h-8 electric-line-vertical"></div>
            </div>

            {/* Level 3 - Horizontal Connector */}
            <div className="relative h-0.5 electric-line-horizontal mb-6 mr-[1px]" style={{ width: "1000px" }}>
              {structure[2].boards?.map((_, index) => {
                const total = structure[2].boards!.length;
                const position = total === 1 ? 50 : (index / (total - 1)) * 100;
                return (
                  <div
                    key={index}
                    className="absolute top-0 w-0.5 electric-line-vertical"
                    style={{
                      left: `${position}%`,
                      height: "26px"
                    }}
                  ></div>
                );
              })}
            </div>

            {/* Level 3 - Boards */}
            <div className="flex gap-6 justify-center">
              {structure[2].boards?.map((board, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center border border-gray-300 rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-all"
                  style={{ width: "220px", minHeight: "240px" }}
                >
                  <Image src={board.img} alt={board.name} width={220} height={64} className="w-full h-16 rounded object-cover mb-3" />
                  <div className="text-center text-sm font-medium text-gray-700 mb-4 flex-grow break-words">{board.name}</div>
                  <button className="w-full py-2 bg-[#00487C] text-white text-sm rounded-full hover:bg-[#003356] transition-colors">Learn more</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ⚡ Vertical Line (Minister → Secretary) */
        .electric-line-vertical {
          background-color: #d1d5db; /* Tailwind gray-300 */
          box-shadow: 0 0 2px rgba(209, 213, 219, 0.6);
        }

        /* ⚡ Horizontal Line (Distribution to Boards) */
        .electric-line-horizontal {
          background-color: #d1d5db; /* Tailwind gray-300 */
          animation: pulse-flow-horizontal 1.5s linear infinite;
          box-shadow: 0 0 2px rgba(209, 213, 219, 0.6);
          height: 2px;
        }

        /* Apply pulsing to all cards with staggered delays */
        .border.border-gray-300:nth-child(1) {
          animation: card-pulse 3s ease-in-out infinite 0s;
          border-color: #d1d5db;
        }
        .border.border-gray-300:nth-child(2) {
          animation: card-pulse 3s ease-in-out infinite 0.4s;
          border-color: #d1d5db;
        }
        .border.border-gray-300:nth-child(3) {
          animation: card-pulse 3s ease-in-out infinite 0.8s;
          border-color: #d1d5db;
        }
        .border.border-gray-300:nth-child(4) {
          animation: card-pulse 3s ease-in-out infinite 1.2s;
          border-color: #d1d5db;
        }
        .border.border-gray-300:nth-child(5) {
          animation: card-pulse 3s ease-in-out infinite 1.6s;
          border-color: #d1d5db;
        }
      `}</style>
    </div>
  );
};

export default Organization;
