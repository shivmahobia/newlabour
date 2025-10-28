import React from "react";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <>
      <div className="font-semibold text-center text-[20px] sm:text-[24px] text-[#00487C]">{title}</div>
      <div className="border-b border-gray-200 py-2 mx-10 mb-6"></div>
    </>
  );
};

export default SectionHeader;
