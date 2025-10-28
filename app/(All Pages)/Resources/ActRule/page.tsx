"use client";

import React, { useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import CustomTable from "@/components/CustomTable";
import DropdownSelect from "@/components/DropdownSelect";
import Image from "next/image";

const links = [
  { name: "HOME", href: "/" },
  { name: "RESOURCES", href: "" },
  { name: "ACTS & RULES", href: "" }
];

const districts = [
  {
    key: "option1",
    label: "District 1 District 1 District 1 District 1 District 1 District 1 District 1"
  },
  { key: "option2", label: "District 2" },
  { key: "option3", label: "District 3" },
  { key: "option4", label: "District 4" }
];

const choices = [
  { key: "choiceA", label: "Choice A" },
  { key: "choiceB", label: "Choice B" },
  { key: "choiceC", label: "Choice C" }
];

// Type for table row
type ActRuleRow = {
  id: number;
  division: string;
  typeOfAct: string;
  typeOfTitle: string;
  topic: string;
  releaseDate: string;
  fileUrl: string;
};

const columns = [
  {
    title: "No.",
    dataIndex: "no",
    key: "no",
    width: 60,
    render: (_: unknown, __: ActRuleRow, idx: number) => idx + 1
  },
  {
    title: "Name Of The Division",
    dataIndex: "division",
    key: "division",
    width: 220,
    render: (text: string) => <span className="font-semibold">{text}</span>
  },
  {
    title: "Type Of Act",
    dataIndex: "typeOfAct",
    key: "typeOfAct",
    width: 120
  },
  {
    title: "Type Of Title",
    dataIndex: "typeOfTitle",
    key: "typeOfTitle",
    width: 200
  },
  {
    title: "Topic",
    dataIndex: "topic",
    key: "topic",
    width: 200
  },
  {
    title: "Release Date",
    dataIndex: "releaseDate",
    key: "releaseDate",
    width: 120
  },
  {
    title: "File",
    dataIndex: "file",
    key: "file",
    width: 100,
    render: (_: string, record: ActRuleRow) => (
      <a href={record.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 italic no-underline hover:underline">
        View file
      </a>
    )
  }
];

const data: ActRuleRow[] = [
  {
    id: 1,
    division: "labour commissioner services",
    typeOfAct: "Rule",
    typeOfTitle: "Contract Labour Act, 1970",
    topic: "Contract Labour Rules, 1973",
    releaseDate: "31/01/1973",
    fileUrl: "#"
  },
  {
    id: 2,
    division: "labour commissioner services",
    typeOfAct: "Rule",
    typeOfTitle: "Contract Labour Act, 1970",
    topic: "Contract Labour Rules, 1973",
    releaseDate: "31/01/1973",
    fileUrl: "#"
  },
  {
    id: 3,
    division: "labour commissioner services",
    typeOfAct: "Rule",
    typeOfTitle: "Contract Labour Act, 1970",
    topic: "Contract Labour Rules, 1973",
    releaseDate: "31/01/1973",
    fileUrl: "#"
  },
  {
    id: 4,
    division: "labour commissioner services",
    typeOfAct: "Rule",
    typeOfTitle: "Contract Labour Act, 1970",
    topic: "Contract Labour Rules, 1973",
    releaseDate: "31/01/1973",
    fileUrl: "#"
  },
  {
    id: 5,
    division: "labour commissioner services",
    typeOfAct: "Rule",
    typeOfTitle: "Contract Labour Act, 1970",
    topic: "Contract Labour Rules, 1973",
    releaseDate: "31/01/1973",
    fileUrl: "#"
  }
];

const ActRules: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  return (
    <div className="px-5 sm:px-10 md:px-20">
      <BreadCrumb links={links} />
      <div className="relative rounded-md shadow-md bg-white py-6 px-6">
        <div className="font-semibold text-center text-[24px] text-[#00487C]">Acts & Rules</div>
        <div className="border-b border-gray-200 py-2 mx-4 sm:mx-10"></div>

        <div className="flex flex-col items-center gap-4 mt-6 px-4">
          {/* Container for dropdowns */}
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
            <DropdownSelect label="Name of the Board" items={districts} selectedKey={selectedDistrict} onSelect={setSelectedDistrict} />

            <DropdownSelect label="Type of Act" items={choices} selectedKey={selectedChoice} onSelect={setSelectedChoice} />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 mb-2 max-w-[300px] min-w-[120px] w-full sm:w-[120px] h-[38px] bg-gradient-to-r from-[#0C324D] to-[#0878C7] text-white rounded-full font-semibold text-[14px] hover:opacity-90 transition"
            style={{ borderRadius: "9999px" }}
          >
            Search Now
          </button>
        </div>

        <div className="sm:hidden flex justify-end w-full px-8 mt-2 py-4">
          <div className="flex items-center gap-2 text-[16px] font-medium">
            <Image src="/FingerLeft.svg" alt="Swipe" width={24} height={24} className="w-6 h-6" />
            <span>Swipe to View Full Table</span>
          </div>
        </div>

        <CustomTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default ActRules;
