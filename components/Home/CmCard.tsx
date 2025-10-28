import Image from "next/image";

const CmCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 bg-[#F6F6F6] gap-0">
      {/* Image Section - Comes first in mobile */}
      <div className="w-full md:w-3/10 flex items-center justify-center md:justify-end gap-4 order-1 md:order-2">
        <div className="w-50 md:w-auto">
          <Image src="/Home/Cm.png" alt="Chief Minister" width={200} height={228} className="object-contain" />
        </div>
        <div className="w-50 md:w-auto">
          <Image src="/Home/Frame.png" alt="Frame" width={200} height={228} className="object-contain" />
        </div>
      </div>

      {/* Text Section - Comes second in mobile */}
      <div className="w-full md:w-7/10 pr-0 md:pr-6 order-2 md:order-1 mt-4 md:mt-0">
        <p className="text-[16px] font-semibold text-[#00487C] leading-7 text-justify ">
          The main responsibility of the Labor Department is to protect the economic, physical, and social interests of workers through various labor laws. The Labor Commissioners organization
          contributes to labor welfare and industrial development by establishing mutual harmony between workers and management. The Labor Departments main responsibility is to regulate workers
          service conditions by enforcing various labor laws, ensuring workers wages and working conditions, and establishing industrial peace by resolving industrial disputes.
        </p>
      </div>
    </div>
  );
};

export default CmCard;
