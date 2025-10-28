import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 mx-auto py-10 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10 border-t border-gray-200 max-w-screen-3xl">
        {/* Left Section */}
        <div className="flex flex-col items-center sm:items-start gap-4 w-full lg:w-2/5 xl:w-3/5 text-center sm:text-left">
          <Image src="/Header/Cg-Logo.svg" alt="Chhattisgarh Govt Logo" width={80} height={80} className="object-contain sm:w-[113px] sm:h-[113px]" />
          <div className="font-semibold text-black uppercase text-md leading-tight max-w-xs sm:whitespace-nowrap sm:text-lg">LABOUR DEPARTMENT, GOVERNMENT OF CHHATTISGARH</div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 w-max">
            <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary-500 hover:text-primary transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary-500 hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary-500 hover:text-primary transition-colors">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        <hr className="block sm:hidden border-t border-gray-300 w-full" />

        {/* Middle Section - Flex layout for Sitemap and Policies */}
        <div className="w-full lg:w-2/5 xl:w-2/5">
          <div className="">
            <ul className="flex flex-row flex-wrap gap-6 text-gray-600 sm:flex-col sm:gap-3 sm:justify-evenly justify-center">
              <li className="hover:text-black cursor-pointer transition-colors whitespace-nowrap">Sitemap</li>
              <li className="hover:text-black cursor-pointer transition-colors whitespace-nowrap">Website Policies</li>
              <li className="hover:text-black cursor-pointer transition-colors whitespace-nowrap">Terms & Conditions</li>
              <li className="hover:text-black cursor-pointer transition-colors whitespace-nowrap">Login</li>
            </ul>
          </div>
        </div>

        <hr className="block sm:hidden border-t border-gray-300 w-full" />

        {/* Right Section */}
        <div className="w-full lg:w-1/5 xl:w-1/5 flex flex-col items-start lg:items-end text-left lg:text-right space-y-1 sm:space-y-4 mt-2 sm:mt-4 lg:mt-0">
          <div className="w-full sm:w-60 lg:w-full">
            <Image src="/Footer/Negd.svg" alt="NeGD Logo" width={100} height={42} className="object-contain" />
            <p className="text-gray-700 text-xs text-left mt-2 font-medium">
              Digital India Corporation <br />
              Ministry of Electronics & IT (MeitY), Government of India
            </p>
          </div>

          <div className="w-full sm:w-60 lg:w-full flex items-center space-x-2 mt-2 justify-start">
            <p className="text-gray-600 text-xs font-medium">Powered by</p>
            <Image src="/Footer/Digital-India.svg" alt="Digital India Logo" width={86} height={48} className="object-contain" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary text-white text-xs py-3 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-36 mx-auto font-medium max-w-screen-3xl gap-2 sm:gap-0">
        <p className="text-center sm:text-left">© 2025 - Department of Labour, Govt. of Chhattisgarh. Powered by NeGD | MeitY Government of India@2025 UX4G</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline transition-colors">
            Terms & Conditions
          </a>
          <div className="w-px h-5 opacity-40 border-r border-gray-200" />
          <a href="#" className="hover:underline transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
