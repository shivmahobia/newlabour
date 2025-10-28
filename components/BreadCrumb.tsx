"use client";

import Link from "next/link";
import { LuChevronRight, LuPhone } from "react-icons/lu";

interface LinkItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  links: LinkItem[];
}

export default function BreadCrumb({ links }: BreadcrumbProps) {
  return (
    <div className="w-full py-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left: Breadcrumb */}
        <nav className="flex items-center text-[#2E2E2E] text-[12px] md:text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center flex-wrap">
            {links.map((link, index) => (
              <li key={index} className="inline-flex items-center">
                {index !== 0 && <LuChevronRight className="w-3 h-3 mx-1 text-gray-700" />}
                {index === links.length - 1 ? (
                  <span className="font-semibold">{link.name}</span>
                ) : (
                  <Link href={link.href}>
                    <span className="hover:text-[#00487C] cursor-pointer">{link.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Right: Helpline Info */}
        <div className="justify-end w-full md:w-auto">
          <div className="flex items-center gap-2 bg-[#00487C1A] px-4 py-3 rounded max-w-full">
            <div className="flex justify-center items-center gap-2 w-full">
              <LuPhone className="text-[#00487C] w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[#00487C] font-extrabold text-[12px] sm:text-sm text-center">
                मुख्यमंत्री अधिकार सहायता सेवा Toll Free No. –{" "}
                <a href="tel:07713505050" className="font-medium hover:underline">
                  0771-3505050
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
