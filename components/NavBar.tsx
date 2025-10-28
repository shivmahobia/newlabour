"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { LuChevronDown } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { usePathname, useRouter } from "next/navigation";

// Define main navigation items
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "" },
  { label: "Media", path: "/" },
  { label: "Resources", path: "" },
  { label: "Grievances", path: "/" },
  { label: "EODB Services", path: "/EodbServices" },
  { label: "Report", path: "/Reports" },
  { label: "Contact Us", path: "/ContactUs" }
];

const grievancesSubmenu = [
  { label: "Related to Labour Commissioner", path: "/Grievances/OnlineComplaint" },
  { label: "Status of Grievances Related to Division", path: "/Grievances/ComplaintStatus" }
];

const mediaSubmenu = [{ label: "Photo Gallery", path: "/Media/Gallery" }];

const aboutSubmenu = [
  { label: "Mission & Vision", path: "/About/MissionVision" },
  { label: "Organization Structure", path: "/About/Organization" },
  { label: "Who's Who", path: "/About/WhoisWho" }
];

const helpSupportSubmenu = [
  { label: "User Manual", path: "/HelpSupport/UserManual" },
  { label: "Helpline Numbers", path: "/HelpSupport/Helpline" },
  { label: "FAQ", path: "/HelpSupport/FAQ" },
  { label: "Updates & Events", path: "/HelpSupport/UpdateEvents" },
  { label: "Contact Us", path: "/HelpSupport/ContactUs" }
];

const resourcesSubmenu = [
  { label: "Acts & Rules", path: "/Resources/ActRule" },
  { label: "Schemes", path: "/Resources/Schemes" }
];

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileHelpSupportOpen, setMobileHelpSupportOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileGrievancesOpen, setMobileGrievancesOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const isSubmenuActive = (submenuPath: string) => pathname === submenuPath;

  const isAboutActive = aboutSubmenu.some(item => isSubmenuActive(item.path));
  const isHelpSupportActive = helpSupportSubmenu.some(item => isSubmenuActive(item.path));
  const isResourcesActive = resourcesSubmenu.some(item => isSubmenuActive(item.path));
  const isGrievancesActive = grievancesSubmenu.some(item => isSubmenuActive(item.path));
  const isMediaActive = mediaSubmenu.some(item => isSubmenuActive(item.path));

  const renderMobileDropdown = (label: string, isOpen: boolean, setIsOpen: (value: boolean) => void, submenu: Array<{ label: string; path: string }>, isActive: boolean) => (
    <li key={label}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full px-4 py-4 text-left font-medium text-[14px] border-b border-gray-100 ${
          isActive ? "text-primary bg-blue-50" : "text-gray-800"
        } hover:bg-blue-50 transition-all duration-200`}
        aria-expanded={isOpen}
        aria-controls={`${label}-submenu-mobile`}
      >
        <span className="text-[14px]">{label}</span>
        <LuChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </button>
      {isOpen && (
        <ul id={`${label}-submenu-mobile`} className="bg-gray-50 border-l-4 border-primary" role="menu" aria-label={label + " submenu"}>
          {submenu.map(({ label: subLabel, path: subPath }) => (
            <li key={subLabel} className="border-b border-gray-100 last:border-b-0" role="none">
              <Link
                href={subPath}
                className={`block px-6 py-4 text-gray-700 font-medium text-[14px] hover:bg-blue-100 transition-all duration-200 ${
                  isSubmenuActive(subPath) ? "bg-blue-100 text-primary border-r-4 border-primary" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {subLabel}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  const renderDesktopDropdown = (label: string, submenu: Array<{ label: string; path: string }>, isActive: boolean) => (
    <li key={label} className="relative cursor-pointer" onMouseEnter={() => setOpenDropdown(label)} onMouseLeave={() => setOpenDropdown(null)}>
      <button
        onClick={() => router.push("")}
        className={`flex items-center gap-1 px-3 py-2 transition-colors rounded-sm font-medium text-[14px] ${
          isActive ? "text-primary bg-blue-100 border-b-2 border-primary" : "text-primary hover:bg-[#0C324D1A]"
        }`}
        style={
          isActive
            ? {
                background: "linear-gradient(360deg, rgba(97, 58, 245, 0.1) 0%, rgba(97, 58, 245, 0) 100%)"
              }
            : undefined
        }
        aria-haspopup="true"
        aria-expanded={openDropdown === label}
      >
        <span className="font-medium text-[14px]">{label}</span>
        <LuChevronDown className={`w-4 h-4 stroke-2 ml-1 transition-transform duration-200 ${openDropdown === label ? "rotate-180" : "rotate-0"}`} aria-hidden="true" />
      </button>

      {/* ✅ Updated: Dynamic min width for submenu */}
      {openDropdown === label && (
        <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-max z-30 border border-gray-200" role="menu" aria-label={label + " submenu"}>
          {submenu.map(({ label: subLabel, path: subPath }) => (
            <li
              key={subLabel}
              className={`px-4 py-3 rounded-sm cursor-pointer transition-colors ${
                isSubmenuActive(subPath) ? "bg-blue-100 text-primary font-medium" : "hover:bg-blue-50 text-gray-700 font-medium"
              } text-[14px]`}
              onClick={() => {
                router.push(subPath);
                setOpenDropdown(null);
              }}
              role="menuitem"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  router.push(subPath);
                  setOpenDropdown(null);
                }
              }}
            >
              {subLabel}
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <nav className="bg-white border-b border-gray-300 shadow-md font-sans" aria-label="Primary Navigation">
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-1 lg:hidden">
        <Image src="/Header/Glasses.svg" alt="Swachh Bharat" width={120} height={55} priority unoptimized />
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="flex items-center justify-center rounded-lg p-2 hover:bg-blue-50">
            <IoSearchSharp size={20} className="text-gray-600" />
          </button>
          <Link href="/Login" className="border border-primary text-primary px-3 py-2 rounded-lg font-medium text-[14px] hover:bg-blue-50 hidden sm:flex">
            Login
          </Link>
          <button aria-label="Open menu" className="flex items-center justify-center rounded-lg p-2 hover:bg-blue-50" onClick={() => setMobileMenuOpen(true)}>
            <CiMenuFries size={24} strokeWidth={2} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 backdrop-blur-sm bg-black/20 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
      >
        <aside
          className={`fixed right-0 top-0 h-full w-full max-w-xs bg-gray-50 shadow-xl overflow-y-auto transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={e => e.stopPropagation()}
          role="menu"
          aria-label="Mobile main menu"
        >
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-white sticky top-0 z-10">
            <Image src="/Header/Glasses.svg" alt="Swachh Bharat" width={140} height={60} unoptimized priority />
            <button aria-label="Close menu" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-full hover:bg-gray-100">
              <RxCross2 size={28} strokeWidth={0.5} className="text-red-600" />
            </button>
          </div>

          <nav className="p-4">
            <ul className="flex flex-col">
              {navItems.map(({ label, path }) => {
                if (label === "About") return renderMobileDropdown(label, mobileAboutOpen, setMobileAboutOpen, aboutSubmenu, isAboutActive);
                if (label === "Help & Support") return renderMobileDropdown(label, mobileHelpSupportOpen, setMobileHelpSupportOpen, helpSupportSubmenu, isHelpSupportActive);
                if (label === "Resources") return renderMobileDropdown(label, mobileResourcesOpen, setMobileResourcesOpen, resourcesSubmenu, isResourcesActive);
                if (label === "Grievances") return renderMobileDropdown(label, mobileGrievancesOpen, setMobileGrievancesOpen, grievancesSubmenu, isGrievancesActive);
                if (label === "Media") return renderMobileDropdown(label, mobileMediaOpen, setMobileMediaOpen, mediaSubmenu, isMediaActive);

                return (
                  <li key={label} className="border-b border-gray-100 last:border-b-0">
                    <Link
                      href={path}
                      className={`block px-4 py-4 text-[14px] font-medium transition-all duration-200 ${
                        isActive(path) ? "bg-blue-100 text-primary border-r-4 border-primary" : "text-gray-800 hover:bg-blue-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      role="menuitem"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-6 border-t border-gray-200 bg-gray-100 sticky bottom-0 z-10">
            <Link href="/Login" className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium text-[14px] text-center hover:bg-primary-dark block">
              Login
            </Link>
          </div>
        </aside>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <ul className="flex mx-auto items-center px-12 md:px-20 py-3 text-[14px] gap-6 relative rounded-sm font-medium" role="menubar">
          {navItems.map(({ label, path }) => {
            if (label === "About") return renderDesktopDropdown(label, aboutSubmenu, isAboutActive);
            if (label === "Help & Support") return renderDesktopDropdown(label, helpSupportSubmenu, isHelpSupportActive);
            if (label === "Resources") return renderDesktopDropdown(label, resourcesSubmenu, isResourcesActive);
            if (label === "Grievances") return renderDesktopDropdown(label, grievancesSubmenu, isGrievancesActive);
            if (label === "Media") return renderDesktopDropdown(label, mediaSubmenu, isMediaActive);

            return (
              <li key={label}>
                <Link
                  href={path}
                  className={`cursor-pointer px-3 py-2 block rounded-sm transition-colors font-medium text-[14px] ${
                    isActive(path) ? "text-primary bg-blue-100 border-b-2 border-primary" : "text-primary hover:bg-[#0C324D1A]"
                  }`}
                  style={
                    isActive(path)
                      ? {
                          background: "linear-gradient(360deg, rgba(97, 58, 245, 0.1) 0%, rgba(97, 58, 245, 0) 100%)"
                        }
                      : undefined
                  }
                  role="menuitem"
                >
                  {label}
                </Link>
              </li>
            );
          })}

          <li className="ml-auto flex items-center gap-3">
            <button aria-label="Search" className="flex items-center justify-center rounded-lg p-2 mr-2 hover:bg-blue-50">
              <IoSearchSharp size={20} className="text-gray-600" />
            </button>
            <Link href="/Login" className="border border-primary text-primary px-4 py-2 rounded-lg font-medium text-[14px] hover:bg-blue-50">
              Login
            </Link>
            <Link href="#" className="flex items-center">
              <Image src="/Header/Play-Store.svg" alt="Play Store" width={120} height={40} className="hover:opacity-80" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
