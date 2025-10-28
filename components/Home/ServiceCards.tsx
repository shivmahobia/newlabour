import Image from "next/image";
import Link from "next/link";
import { FaGavel, FaBuilding, FaUsers, FaHandshake, FaShieldAlt, FaHospital } from "react-icons/fa";

interface Service {
  title: string;
  imgSrc: string;
  icon: React.ReactNode;
}

const ServiceCards = () => {
  const services: Service[] = [
    { title: "Labour Commissioner Services", imgSrc: "/Home/S1.png", icon: <FaGavel className="w-8 h-8 text-[#00487C] p-1" /> },
    { title: "Building & Other Constructions", imgSrc: "/Home/S2.png", icon: <FaBuilding className="w-8 h-8 text-[#00487C] p-1" /> },
    { title: "Unorganized Workers Board", imgSrc: "/Home/S3.png", icon: <FaUsers className="w-8 h-8 text-[#00487C] p-1" /> },
    { title: "Labour Welfare Board", imgSrc: "/Home/S4.png", icon: <FaHandshake className="w-8 h-8 text-[#00487C] p-1" /> },
    { title: "Industrial Health & Safety", imgSrc: "/Home/S5.png", icon: <FaShieldAlt className="w-8 h-8 text-[#00487C] p-1" /> },
    { title: "Employees State Insurance Services", imgSrc: "/Home/S6.png", icon: <FaHospital className="w-8 h-8 text-[#00487C] p-1" /> }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-13 bg-primary px-4 sm:px-60 py-15 justify-items-center">
      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-lg shadow-xl flex flex-col items-center space-y-4 relative w-full h-auto sm:min-w-[348] max-w-[348px] border-1 border-gray-300">
          {/* Icon at Top Center */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md z-10">{service.icon}</div>

          {/* Full-width Image */}
          <div className="w-full h-55 relative rounded-t-lg overflow-hidden">
            <Image src={service.imgSrc} alt={service.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
          </div>

          {/* Title */}
          <h3 className="text-[20px] font-semibold text-center px-4 text-[#00487C]">{service.title}</h3>

          {/* Button centered with fixed width */}
          <div className="w-full flex justify-center sm:mt-2 pb-4 px-6">
            <Link href="/Department/Division/Cell" className="bg-[#00487C] text-white px-2 py-2 w-[308px] text-center rounded-lg transition duration-300 hover:bg-[#003366]">
              Apply Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
