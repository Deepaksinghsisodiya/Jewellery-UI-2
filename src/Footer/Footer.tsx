import React, { useState } from "react";
import { sections } from "../Screens/DummyData/DummyData";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import InquiryFormWrapper from "../Screens/InquiryForm/InquiryFormWrapper";
import ATMDIalog from "../Atoms/ATMDIalog";

type FooterProps = {
  onShowTerms: () => void;
};

const Footer = ({ onShowTerms }: FooterProps) => {
  const [open, setOpen] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>(
    {}
  );
  const handleClick = (link: string) => {
    if (link === "Terms & Conditions") {
      onShowTerms();
    }
  };

  const toggleSection = (index: any) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div>
      <div className="bg-gray-100">
        {/* 🔹 Join Section */}
        <div className="w-[90%] md:w-[60%] mx-auto py-6 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
            {/* Left content */}
            <div className="w-full md:w-auto">
              <div className="text-black font-semibold text-base sm:text-lg">
                Inquiry about
              </div>
              <div className="text-[12px] sm:text-xs mt-2 text-gray-700">
                Join our rewards program today to earn points, get personal
                offers and enjoy exclusive benefits.
              </div>
            </div>

            {/* Button */}
            <div className="w-full md:w-auto">
              <button
                onClick={() => setOpen(true)}
                className="w-full md:w-40 py-2 sm:py-3 bg-black text-white text-xs font-semibold rounded-md hover:bg-gray-600 transition-colors duration-200"
              >
                INQUIRY NOW
              </button>

              <ATMDIalog
                isOpen={open}
                onClose={() => setOpen(false)}
                size="small"
              >
                <InquiryFormWrapper onClose={() => setOpen(false)} />
              </ATMDIalog>
            </div>
          </div>
        </div>

        {/* 🔹 Border */}
        <div className="border-b mx-4 md:mx-8 border-gray"></div>

        {/* 🔹 Footer Links */}
        <div className="w-[90%] mx-auto py-6">
          {/* Mobile View */}
          <div className="md:hidden space-y-3">
            {sections.map((section, index) => (
              <div key={index} className="border-b pb-1">
                <div
                  className="flex justify-between items-center py-1 cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <span className="text-black font-semibold">
                    {section.title}
                  </span>
                  <button className="text-lg">
                    {openSections[index] ? "−" : "+"}
                  </button>
                </div>
                {openSections[index] && (
                  <ul className="list-none space-y-2 text-xs text-gray-600 pl-2">
                    {section.links.map((link, i) => (
                      <li
                        key={i}
                        onClick={() => handleClick(link)}
                        className="hover:text-black cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="pt-4">
              <h3 className="text-black font-semibold mb-2">
                Find Us on Google Maps
              </h3>
              <div className="w-full h-64 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=7400+Las+Vegas+Blvd+S,+Las+Vegas,+NV+89123&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sections.map((section, index) => (
              <ul
                key={index}
                className="list-none space-y-2 text-xs text-gray-600"
              >
                <li className="text-black font-semibold">{section.title}</li>
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    onClick={() => handleClick(link)}
                    className="hover:text-black cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            ))}

            {/* Map Section for Desktop */}
            <div className="col-span-1">
              <iframe
                src="https://www.google.com/maps?q=7400+Las+Vegas+Blvd+S,+Las+Vegas,+NV+89123&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
        {/* 🔹 Border */}
        <div className="border-b mx-4 md:mx-8 border-gray"></div>

        {/* 🔹 Bottom Section */}
        <div className="w-[90%] mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
          {/* Left Section */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 md:gap-8 items-center overflow-x-auto sm:overflow-visible whitespace-nowrap text-[11px] sm:text-xs text-gray-700 justify-center md:justify-start w-full md:w-auto">
            <div>© ALL RIGHTS RESERVED. 2025 GK JEWELLERS</div>
            <div className="flex items-center gap-1">
              <div className="hover:cursor-pointer hover:border-b border-black">
                United States
              </div>
            </div>
            <div className="hover:cursor-pointer hover:border-b border-black">
              English
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 md:gap-6 items-center w-full md:w-auto">
            <div className="text-[11px] sm:text-xs hover:underline cursor-pointer">
              Privacy Policy
            </div>
            <div
              className="text-[11px] sm:text-xs hover:underline cursor-pointer"
              onClick={onShowTerms}
            >
              Terms and Conditions
            </div>
            <div className="flex flex-wrap justify-center gap-2 items-center text-gray-600">
              <a
                href="https://www.instagram.com/gkjewelers.nv/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  className="cursor-pointer hover:text-black"
                  size={15}
                  color="red"
                />
              </a>
              <a
                href="https://www.facebook.com/gkjewelersnv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  className="cursor-pointer hover:text-black"
                  size={15}
                  color="blue"
                />
              </a>
              <Twitter className="cursor-pointer hover:text-black" size={15} />
              <Youtube className="cursor-pointer hover:text-black" size={15} />
              <Linkedin className="cursor-pointer hover:text-black" size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
