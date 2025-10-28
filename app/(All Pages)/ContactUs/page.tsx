import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const links = [
  { name: "HOME", href: "/" },
  { name: "HELP & SUPPORT", href: "" },
  { name: "CONTACT US", href: "" }
];

const contactData = [
  {
    name: "Labour Commissioner Office, Raipur Chhattisgarh",
    address: "(Government of Chhattisgarh, Labour Department) Block-three, 2nd Floor, Indrawati Bhawan, Atal Nagar Raipur (Chhattisgarh)",
    email: "cglk2012@gmail.com",
    phone: "0771-2443515",
    imgUrl: "/path/to/image1.jpg" // Replace with actual image path
  },
  {
    name: "Chhattisgarh Building and Other Construction Workers Welfare Board",
    address: "Office Complex, Block A, First Floor, Integral Path Atal Nagar Raipur",
    email: "secretarycbo@gmail.com",
    phone: "0771-2971063",
    imgUrl: "/path/to/image2.jpg" // Replace with actual image path
  },
  {
    name: "Chhattisgarh Unorganized Workers State Social Security Board",
    address: "Block-three, 2nd Floor, Indrawati Bhawan, Atal Nagar Raipur (Chhattisgarh)",
    email: "uowraipur@gmail.com",
    phone: ["0771-2443513", "0771-2443514", "0771-2443515", "0771-2443516"],
    imgUrl: "/path/to/image3.jpg" // Replace with actual image path
  },
  {
    name: "Labour Welfare Board",
    address: "Labour Welfare Board Prawen Bhawan, 3/1520 near Chopra Complex, Raipur",
    email: "cgl.wzb1428@gmail.com",
    phone: "0771-2443809",
    fax: "0771-2443809",
    imgUrl: "/path/to/image4.jpg" // Replace with actual image path
  },
  {
    name: "Directorate",
    address: "Employee State Insurance Servants, Ch. Gindrawati Bhawan, Block-C, Second Floor Nayo Raipur",
    email: "esienquiries.raipur@gmail.com",
    phone: "0771-2231351",
    imgUrl: "/path/to/image5.jpg" // Replace with actual image path
  }
];

const ContactUs = () => {
  return (
    <div className="px-5 sm:px-10 md:px-20">
      <BreadCrumb links={links} />

      <div className="relative rounded-md shadow-md bg-white py-6">
        <SectionHeader title="Contact Us" />

        <div className="space-y-10 px-5 sm:px-10 lg:px-20">
          {contactData.map((contact, index) => (
            <div
              key={index}
              className={`
                flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center space-y-6 lg:space-y-0 lg:space-x-6 lg:space-x-reverse-0 mb-12
              `}
            >
              <div className="w-full lg:w-1/2">
                <div className="w-full h-60 sm:h-72 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  {contact.imgUrl ? (
                    <Image src={contact.imgUrl} alt={contact.name} className="object-cover w-full h-full rounded-md" />
                  ) : (
                    <span className="text-gray-400 italic text-xs">No Image</span>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-3 text-left">
                <h3 className="font-semibold text-lg sm:text-xl text-[#00487C]">{contact.name}</h3>
                <p className="text-base sm:text-lg font-normal text-black">{contact.address}</p>
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-semibold text-[#00487C]">Email:</span>{" "}
                  <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                    {contact.email}
                  </a>
                </p>
                <p className="text-sm sm:text-base text-[#00487C]">
                  <span className="font-semibold">Telephone Number:</span> {Array.isArray(contact.phone) ? contact.phone.join(", ") : contact.phone}
                </p>
                {contact.fax && (
                  <p className="text-sm sm:text-base text-[#00487C]">
                    <span className="font-semibold">Fax Number:</span> {contact.fax}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 px-4 sm:px-10 lg:px-20">
        <div className="font-semibold text-center text-xl sm:text-2xl text-[#00487C]">Meet Us Here</div>
        <div className="font-normal text-center text-base sm:text-lg text-black py-2 mb-2 max-w-3xl mx-auto">
          (Government of Chhattisgarh, Labour Department) Block-three, 2nd Floor, Indravati Bhavan, Naya Raipur (Chhattisgarh).
        </div>
        <div className="p-1 w-full h-[280px] sm:h-[340px] rounded-md overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2150404642894!2d81.7968102!3d21.156285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c695f3d7d5d1%3A0xe23796cb5bbee93f!2sIndravati%20Bhawan!5e0!3m2!1sen!2sin!4v1728600000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Labour Department Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
