"use client";

import React, { useState } from "react";
import { Dropdown, Menu, Button, Input } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, CheckOutlined, FileExcelOutlined, SearchOutlined } from "@ant-design/icons";
import BreadCrumb from "@/components/BreadCrumb";
import CustomTable from "@/components/CustomTable";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import DropdownSelect from "@/components/DropdownSelect";
const choices = [
  { key: "choiceA", label: "Choice A" },
  { key: "choiceB", label: "Choice B" },
  { key: "choiceC", label: "Choice C" }
];
const links = [
  { name: "HOME", href: "/" },
  { name: "RESOURCES", href: "" },
  { name: "SCHEMES", href: "" }
];

const circles = [
  { key: "circle1", label: "Circle 1 Shiv Mahobia" },
  { key: "circle2", label: "Circle 2" },
  { key: "circle3", label: "Circle 3" }
];

// Type for table row
type SchemeRow = {
  id: number;
  name: string;
  startDate: string;
  eligibility: string;
  benefits: string;
  documents: string;
  status: string;
};

const columns = [
  {
    title: "No.",
    dataIndex: "no",
    key: "no",
    width: 60,
    render: (_: unknown, __: SchemeRow, idx: number) => idx + 1
  },
  {
    title: "Name Of The Scheme",
    dataIndex: "name",
    key: "name",
    width: 260,
    render: (text: string) => <span className="font-semibold">{text}</span>
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    width: 120
  },
  {
    title: "Eligibility",
    dataIndex: "eligibility",
    key: "eligibility",
    width: 300,
    render: (text: string) => <span className="block whitespace-pre-line">{text}</span>
  },
  {
    title: "Benefits Payable",
    dataIndex: "benefits",
    key: "benefits",
    width: 220,
    render: (text: string) => <span className="block whitespace-pre-line">{text}</span>
  },
  {
    title: "Documents",
    dataIndex: "documents",
    key: "documents",
    width: 120,
    render: (doc: string) =>
      doc === "No File" ? (
        <span className="text-gray-400 italic">No File</span>
      ) : (
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#0c324d] italic no-underline hover:underline">
          View file
        </a>
      )
  },
  {
    title: "Scheme Status",
    dataIndex: "status",
    key: "status",
    width: 120,
    render: (status: string) => (
      <span className={`font-semibold ${status === "Active" ? "text-green-600" : "text-red-600"}`}>
        ● {status}{" "}
        <Button type="primary" className="bg-[#0C324D] rounded-full font-semibold px-6" style={{ background: "linear-gradient(to right, #0C324D, #0878C7)", border: "none" }}>
          Apply Now
        </Button>
      </span>
    )
  }
];

const data: SchemeRow[] = [
  {
    id: 1,
    name: "Scheme for providing free uniforms and book copies to children of construction workers",
    startDate: "09.12.2022",
    eligibility:
      "The first 2 children of a registered construction worker and children of a worker eligible for scholarship payable from class 1 to 12th under the Chief Minister Naunihal Chatrawriti Yojana will be eligible under the scheme.",
    benefits: "For class 1 to 8, the amount is Rs. 1000 and for class 9 to 12, the amount is Rs. 2000 for school uniform and books and copies",
    documents: "View file",
    status: "Active"
  },
  {
    id: 2,
    name: "Scheme for providing free uniforms and book copies to children of construction workers",
    startDate: "09.12.2022",
    eligibility:
      "The first 2 children of a registered construction worker and children of a worker eligible for scholarship payable from class 1 to 12th under the Chief Minister Naunihal Chatrawriti Yojana will be eligible under the scheme.",
    benefits: "For class 1 to 8, the amount is Rs. 1000 and for class 9 to 12, the amount is Rs. 2000 for school uniform and books and copies",
    documents: "No File",
    status: "Active"
  },
  {
    id: 3,
    name: "Scheme for providing free uniforms and book copies to children of construction workers",
    startDate: "09.12.2022",
    eligibility:
      "The first 2 children of a registered construction worker and children of a worker eligible for scholarship payable from class 1 to 12th under the Chief Minister Naunihal Chatrawriti Yojana will be eligible under the scheme.",
    benefits: "For class 1 to 8, the amount is Rs. 1000 and for class 9 to 12, the amount is Rs. 2000 for school uniform and books and copies",
    documents: "View file",
    status: "Active"
  },
  {
    id: 4,
    name: "Scheme for providing free uniforms and book copies to children of construction workers",
    startDate: "09.12.2022",
    eligibility:
      "The first 2 children of a registered construction worker and children of a worker eligible for scholarship payable from class 1 to 12th under the Chief Minister Naunihal Chatrawriti Yojana will be eligible under the scheme.",
    benefits: "For class 1 to 8, the amount is Rs. 1000 and for class 9 to 12, the amount is Rs. 2000 for school uniform and books and copies",
    documents: "View file",
    status: "Active"
  },
  {
    id: 5,
    name: "Scheme for providing free uniforms and book copies to children of construction workers",
    startDate: "09.12.2022",
    eligibility:
      "The first 2 children of a registered construction worker and children of a worker eligible for scholarship payable from class 1 to 12th under the Chief Minister Naunihal Chatrawriti Yojana will be eligible under the scheme.",
    benefits: "For class 1 to 8, the amount is Rs. 1000 and for class 9 to 12, the amount is Rs. 2000 for school uniform and books and copies",
    documents: "View file",
    status: "Active"
  }
];

const Schemes: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const [search, setSearch] = useState<string>("");

  return (
    <div className="px-5 sm:px-10 md:px-20">
      <BreadCrumb links={links} />
      <div className="relative rounded-md shadow-md bg-white py-6">
        <SectionHeader title="Schemes" />

        {/* Filter Section */}
        <div className="flex flex-col items-center gap-4 mt-6 px-4">
          {/* Container for dropdowns */}
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
            <DropdownSelect label="Name of the Circle" items={choices} selectedKey={selectedChoice} onSelect={setSelectedChoice} />
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

        {/* Search and Export */}
        <div className="mt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 px-4 sm:px-10 mb-4">
          <div className="w-full sm:w-auto">
            <Input
              placeholder="Search"
              className="w-full !h-[42px] !rounded-md !border-gray-400 focus:!border-[#00487c] focus:!shadow-[0_0_0_2px_rgba(0,72,124,0.2)]"
              value={search}
              onChange={e => setSearch(e.target.value)}
              allowClear
              suffix={<SearchOutlined className="text-gray-400 focus-within:text-[#00487c]" />}
              style={{
                boxShadow: "none",
                height: 42
              }}
            />
          </div>
          <Button
            icon={<FileExcelOutlined />}
            className="w-full sm:w-auto h-[42px] flex items-center justify-center gap-2 bg-white text-[#207146] border border-[#207146] font-semibold px-4 py-2 rounded-md hover:bg-[#207146] hover:text-white"
            style={{
              background: "#fff",
              color: "#207146",
              border: "1.5px solid #207146",
              height: 42
            }}
          >
            Export Excel
          </Button>
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

export default Schemes;
