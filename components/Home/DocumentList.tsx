import {
  FaChevronRight,
  FaRegIdCard, // or FaIdCard if you have fa6
  FaDollarSign,
  FaIndustry,
  FaCog
} from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";

const DocumentList = () => {
  const items = [
    { id: 1, icon: <FaRegIdCard className="w-5 h-5 text-[#D97706]" />, title: "Application form for Late Ramanuj Pratap Singhdev Smriti Shram Yashasvi Award 2025.", bgColor: "bg-[#FFFBEB]" },
    { id: 2, icon: <FaDollarSign className="w-5 h-5 text-[#059669]" />, title: "Cess payment instructions Building Permit Officer Instructions (12/07/2023)", bgColor: "bg-[#ECFDF5]" },
    {
      id: 3,
      icon: <FaHelmetSafety className="w-5 h-5 text-[#4F46E5]" />,
      title: "Regarding depositing cess amount under the Building and Other Construction Workers Welfare Cess Act 1996.",
      bgColor: "bg-[#EEF2FF]"
    }
  ];

  // Last row combined
  const lastRow = [
    { id: 4, icon: <FaIndustry className="w-5 h-5 text-[#FFCC00]" />, title: "Apply for factory worker Registration", bgColor: "bg-[#FFFBEB]" },
    {
      id: 5,
      icon: <FaCog className="w-5 h-5 text-[#C74290]" />,
      title: "Apply for Unorganized worker Registration",
      bgColor: "bg-[#FFF0F9]"
    }
  ];

  return (
    <div className="bg-[#F6F6F6] rounded-lg space-y-4 px-5 sm:px-20 md:px-10 mb-10">
      {/* Normal cards */}
      {items.map(item => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center cursor-pointer hover:shadow-lg transition">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${item.bgColor} flex items-center justify-center`}>{item.icon}</div>
            <p className="text-[14px] sm:text-[16px] font-semibold text-[#007ED5]">{item.title}</p>
          </div>
          <FaChevronRight className="text-gray-400" />
        </div>
      ))}

      {/* Last row: two-column cards with gap */}
      <div className=" sm:flex gap-4 space-y-4 sm:space-y-0">
        {lastRow.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center sm:w-1/2 cursor-pointer hover:shadow-lg transition">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${item.bgColor} flex items-center justify-center`}>{item.icon}</div>
              <p className="text-[14px] sm:text-[16px] font-semibold text-[#007ED5]">{item.title}</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentList;
