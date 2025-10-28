import BreadCrumb from "@/components/BreadCrumb";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const links = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "" },
  { name: "MISSION & VISION", href: "" }
];

const MissionVision = () => {
  return (
    <div className="px-5 sm:px-10 md:px-20">
      <BreadCrumb links={links} />
      <div className="relative rounded-md shadow-md bg-white py-4 sm:py-6">
        <SectionHeader title="Mission - Vision" />
        <div className="mx-10">
          <div className=" font-semibold text-[32px] sm:text[40px]">
            <h3 className="text-gray-400 ">
              About the <span className="text-black font-semibold">Labour Department</span>
            </h3>
          </div>

          <p className="mt-4 text-justify text-sm leading-6 text-gray-700 text-[16px] font-normal">
            The Labor Department&#39;s primary responsibility is to protect the economic, physical, and social interests of workers through various labor laws. The Labor Commissioner contributes to
            labor welfare and industrial development by establishing mutual coordination between workers and management. The Labor Department&#39;s primary responsibility is to regulate workers&#39;
            service conditions through enforcement of various labor laws, ensure workers&#39; wages and working conditions, and establish industrial peace by resolving industrial disputes. The
            Directorate of Industrial Health and Safety provides safe working conditions to workers by ensuring the availability of safety equipment to control labor accidents, and also ensures
            healthy working conditions for industrial workers. The Sam Kalyan Mandal has been established to administer welfare schemes for organized workers and their families. The Building and Other
            Construction Workers Welfare Board has been established to provide welfare schemes for workers and their families. The State Social Security Board for Unorganized Workers has been
            established to provide welfare schemes for workers in the unorganized sector. Similarly, medical benefits and social security are provided to the workers through the Directorate of
            Employees State Insurance Services.
          </p>
        </div>
        <div className="mx-10 mt-6">
          <div className=" font-semibold text-[32px] sm:text[40px] mt-6">
            <h3 className="text-black">
              Mission & <span className="text-gray-400 font-semibold">Vision</span>
            </h3>
          </div>

          <p className="mt-4 text-justify text-sm leading-6 text-gray-700 text-[16px] font-normal">
            The main responsibility of the Labor Department is to protect the economic, physical, and social interests of workers through various labor laws. The Labor Commissioner&#39;s organization
            contributes to labor welfare and industrial development by establishing mutual harmony between workers and management. The Labor Department&#39;s main responsibility is to regulate
            workers&#39; service conditions through enforcement of various labor laws, ensure workers&#39; wages and working conditions, and establishing industrial peace by resolving industrial
            disputes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
