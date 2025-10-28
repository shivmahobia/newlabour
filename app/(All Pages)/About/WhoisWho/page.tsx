"use client";

import React, { useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import CustomTable from "@/components/CustomTable";
import SectionHeader from "@/components/SectionHeader";
import DropdownSelect from "@/components/DropdownSelect";
import Image from "next/image";
const links = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "" },
  { name: "WHOS'S WHO", href: "" }
];

const data = [
  {
    id: 1,
    name: "Devendra Dewangan",
    post: "Labour Officer",
    district: "Raipur",
    email: "raipuracl2@gmail.com",
    photo: "" // Assuming no photo available, can be added if needed
  },
  {
    id: 2,
    name: "Devendra Dewangan",
    post: "Labour Officer",
    district: "Raipur",
    email: "raipuracl2@gmail.com",
    photo: ""
  },
  {
    id: 3,
    name: "Devendra Dewangan",
    post: "Labour Officer",
    district: "Raipur",
    email: "raipuracl2@gmail.com",
    photo: ""
  },
  {
    id: 4,
    name: "Devendra Dewangan",
    post: "Labour Officer",
    district: "Raipur",
    email: "raipuracl2@gmail.com",
    photo: ""
  },
  {
    id: 5,
    name: "Devendra Dewangan",
    post: "Labour Officer",
    district: "Raipur",
    email: "raipuracl2@gmail.com",
    photo: ""
  },
  {
    id: 6,
    name: "Devendra Dewangan",
    post: "Labour Officer",
    district: "Raipur",
    email: "raipuracl2@gmail.com",
    photo: ""
  },
  {
    id: 7,
    name: "Devendra Dewangan",
    post: "Labour Officer",
    district: "Raipur",
    email: "raipuracl2@gmail.com",
    photo: ""
  },
  {
    id: 8,
    name: "Devendra Dewangan",
    post: "Labour Officer",
    district: "Raipur",
    email: "raipuracl2@gmail.com",
    photo: ""
  },
  {
    id: 9,
    name: "Devendra Dewangan",
    post: "Labour Officer",
    district: "Raipur",
    email: "raipuracl2@gmail.com",
    photo: ""
  }
];

// Use correct types for render function
const columns = [
  {
    title: "No.",
    dataIndex: "no",
    key: "no",
    width: 60,
    render: (_: unknown, __: unknown, idx: number) => idx + 1
  },
  {
    title: "Photo",
    dataIndex: "photo",
    key: "photo",
    width: 120,
    render: (photo: string) => (
      <div className="w-[80px] h-[90px] bg-gray-200 rounded-md flex items-center justify-center">
        {!photo ? <span className="text-gray-400 italic text-xs">No Photo</span> : <Image src={photo} alt="User Photo" className="w-[80px] h-[90px] rounded-md object-cover" />}
      </div>
    )
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 180,
    className: "font-semibold"
  },
  {
    title: "Post",
    dataIndex: "post",
    key: "post",
    width: 120
  },
  {
    title: "District Name",
    dataIndex: "district",
    key: "district",
    width: 120
  },
  {
    title: "Email ID",
    dataIndex: "email",
    key: "email",
    width: 180,
    render: (email: string) => (
      <a href={`mailto:${email}`} className="text-blue-600 italic no-underline hover:underline">
        {email}
      </a>
    )
  }
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

const WhoisWho: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  return (
    <div className="px-5 sm:px-10 md:px-20">
      <BreadCrumb links={links} />
      <div className="relative rounded-md shadow-md bg-white py-6">
        <SectionHeader title="Who&#39;s Who" />

        <div className="flex flex-col items-center gap-4 mt-6 px-4">
          {/* Container for dropdowns */}
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
            <DropdownSelect label="District/Division" items={districts} selectedKey={selectedDistrict} onSelect={setSelectedDistrict} />

            <DropdownSelect label="Select Position" items={choices} selectedKey={selectedChoice} onSelect={setSelectedChoice} />
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

export default WhoisWho;
