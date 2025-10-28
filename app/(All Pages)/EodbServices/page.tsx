import BreadCrumb from "@/components/BreadCrumb";

const links = [
  { name: "HOME", href: "/" },
  { name: "DEPARTMENT", href: "" }, // Last breadcrumb has no link
  { name: "CELL", href: "" } // Last breadcrumb has no link
];

const eodbActs = [
  {
    title: "Shops and Establishment Registration Act 1958",
    color: "bg-green-100 text-green-700",
    number: 1
  },
  {
    title: "Central Inspection",
    color: "bg-yellow-100 text-yellow-700",
    number: 2
  }
];

const factoriesServices = [
  {
    number: 1,
    title: "Approval of factory plan",
    color: "bg-green-100 text-green-700"
  },
  {
    number: 2,
    title: "Registration of the factory",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    number: 3,
    title: "Factory renovation",
    color: "bg-blue-100 text-blue-700"
  },
  {
    number: 4,
    title: "Online Random Inspection",
    color: "bg-red-100 text-red-700"
  },
  {
    number: 5,
    title: "Consolidated returns of all labour laws",
    color: "bg-blue-100 text-blue-700"
  },
  {
    number: 6,
    title: "Competent Person Application",
    color: "bg-pink-100 text-pink-700"
  },
  {
    number: 7,
    title: "List of competent persons",
    color: "bg-green-100 text-green-700"
  }
];

const contractLabour = [
  {
    number: 1,
    title: "Establishment/Principal Employer Registration Application in Contract Labour (1970)",
    color: "bg-green-100 text-green-700"
  },
  {
    number: 2,
    title: "Status of Establishment/Principal Employer Registration in Contract Labour (1970)",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    number: 3,
    title: "Contractor's License Application in Contract Labour (1970)",
    color: "bg-blue-100 text-blue-700"
  },
  {
    number: 4,
    title: "Contractor's License Application Status under Contract Labour (1970)",
    color: "bg-red-100 text-red-700"
  }
];

const buildingConstruction = [
  {
    number: 1,
    title: "Establishment Registration Application under the Building and Other Construction Workers Act, 1996",
    color: "bg-green-100 text-green-700"
  },
  {
    number: 2,
    title: "Check the status of establishment registration application under the Building and Other Construction Workers Act, 1996",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    number: 3,
    title: "Building and Other Construction Cess Act",
    color: "bg-blue-100 text-blue-700"
  }
];

const migrantWorkmen = [
  {
    number: 1,
    title: "Registration Application under Inter-State Migrant Workmen Act 1979",
    color: "bg-green-100 text-green-700"
  },
  {
    number: 2,
    title: "Check the status of registration application under the Inter-State Migrant Workmen Act, 1979",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    number: 3,
    title: "Apply for Contractor's License under Inter-State Migrant Workmen Act 1979",
    color: "bg-blue-100 text-blue-700"
  },
  {
    number: 4,
    title: "Status of Contractor's License Application under Inter-State Migrant Workmen Act 1979",
    color: "bg-red-100 text-red-700"
  }
];

const motorTransport = [
  {
    number: 1,
    title: "Motor Transport Workers Act (1961) Registration Application",
    color: "bg-green-100 text-green-700"
  },
  {
    number: 2,
    title: "Check Registration Status under Motor Transport Workers Act 1961",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    number: 3,
    title: "Renewal of registration under the Motor Transport Workers Act, 1961",
    color: "bg-blue-100 text-blue-700"
  }
];

const notifications = [
  {
    number: 1,
    title: "Shops & Establishment Act Notification",
    color: "bg-green-100 text-green-700"
  },
  {
    number: 2,
    title: "Interstate Migrant Act 1979 Notification",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    number: 3,
    title: "Notification to Permit Women to Work at Night",
    color: "bg-blue-100 text-blue-700"
  }
];

const Section = ({ title, items }: { title: string; items: { number: number; title: string; color: string }[] }) => (
  <div className="mb-8 mt-6">
    <div className="text-center text-[#00487C] font-semibold text-lg mb-6">{title}</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      {items.map(item => (
        <Card key={item.title} number={item.number} title={item.title} color={item.color} />
      ))}
    </div>
  </div>
);

const Card = ({ number, title, color }: { number: number; title: string; color: string }) => (
  <div className="relative flex items-center bg-white rounded-[8px] border border-[#F2F2F2] min-h-[80px] px-6 py-3 shadow-sm">
    {/* Number positioned at the absolute left start, centered vertically */}
    <div className={`absolute left-[-15px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full font-semibold ${color} border border-[#E6E6E6]`}>{number}</div>
    <div className="flex-1 pl-4 text-[14px] sm:text-[16px] font-medium text-gray-800">{title}</div> {/* Added padding to compensate for the number's position */}
    <div className="ml-3 flex items-center justify-center w-7 h-7 rounded-full bg-[#F6F6F6] text-[#575555] text-[16px] font-semibold">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

const EodbServices = () => {
  return (
    <div className="px-2 md:px-20  bg-[#F6F6F6] min-h-screen">
      <BreadCrumb links={links} />
      <div className=" mx-auto">
        <div className="rounded-md shadow-md bg-white p-4">
          <div className="w-full mx-auto rounded-lg px-8 sm:px-16 py-8 bg-[#F6F6F6]">
            {/* Top Acts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
              {eodbActs.map(act => (
                <Card key={act.title} number={act.number} title={act.title} color={act.color} />
              ))}
            </div>
            {/* Factories Act Section */}
            <div className="border-b border-[#E4E4E4]"></div>

            <Section title="Factories Act (1948)" items={factoriesServices} />
            <div className="border-b border-[#E4E4E4]"></div>
            <Section title="Contract Labour Act(1970)" items={contractLabour} />
            <div className="border-b border-[#E4E4E4]"></div>
            <Section title="Building and Other Construction Workers Act (1996)" items={buildingConstruction} />
            <div className="border-b border-[#E4E4E4]"></div>
            <Section title="Inter-State Migrant Workmen Act (1979)" items={migrantWorkmen} />
            <div className="border-b border-[#E4E4E4]"></div>
            <Section title="Motor Transport Workers Act (1961)" items={motorTransport} />
            <div className="border-b border-[#E4E4E4]"></div>
            <Section title="Notifications" items={notifications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EodbServices;
