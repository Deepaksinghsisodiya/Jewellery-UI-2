import React, { useState } from "react";
import { CiHeart, CiLocationOn, CiSearch, CiUser } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import offerImg from "../../../Assets/offerImage.png.jpg";
import { menuData } from "../../DummyData/DummyData";
import { IoArrowBack, IoClose, IoMenu } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import {
  ArrowBigDown,
  BaggageClaim,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  ColumnsSettingsIcon,
  Heart,
  LocationEdit,
  Menu,
  MessageSquare,
  Search,
  User,
  User2,
} from "lucide-react";
import ATMDIalog from "../../../Atoms/ATMDIalog";
import InquiryFormWrapper from "../../InquiryForm/InquiryFormWrapper";
const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    subItems: { title: string; items: string[] }[];
  } | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<{
    title: string;
    items: string[];
  } | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openLocationDialog, setOpenLocationDialog] = useState(false);
  const [openInquiryDialog, setOpenInquiryDialog] = useState(false);
  const handleLocationClick = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <div className="flex items-center w-[90%] mx-auto justify-between">
        {/* Left Side - Hamburger Menu */}
        <div
          className="sm:hidden flex gap-3 py-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="text-2xl cursor-pointer">
            <Menu className="text-2xl text-gray-500" />
          </div>
          <div className="sm:hidden flex items-center">
            <CiSearch className="text-2xl text-gray-500" />
          </div>
        </div>

        {/* Center - Logo */}
        <div className="flex flex-1 font-bold text-3xl sm:text-4xl md:text-5xl sm:text-center justify-center sm:justify-start">
          GK JEWELERS
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center gap-3">
          <div className="sm:hidden flex items-center space-x-4">
            <div
              onClick={() => setOpenInquiryDialog(true)}
              className="cursor-pointer"
            >
              <MessageSquare className="text-2xl text-gray-500" />
            </div>
            <div
              onClick={() => setOpenLocationDialog(true)}
              className="cursor-pointer"
            >
              <LocationEdit className="text-2xl text-gray-500" />
            </div>
          </div>

          {/* Search Bar for Large Screens */}
          {/* <div className="hidden sm:block py-2 w-[90%] mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="h-12 w-full border p-4 pr-10 text-xs"
              />
              <Search
                size={25}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500"
              />
            </div>
          </div> */}

          {/* User and Other Icons */}
          <div className="relative">
            <div className="hidden sm:flex flex-row-reverse gap-3">
              {/* <div
                className="pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300 relative"
                onMouseEnter={() => setShowCard(true)}
                onMouseLeave={() => setShowCard(false)}
              >
                <User2 size={24} />
                {showCard && (
                  <div className="absolute top-10 right-[-10px] w-64 bg-white shadow-lg overflow-hidden border z-50 mt-5">
                    <div className="text-center p-4 border-b">
                      <h2 className="text-xl font-light">
                        My <span className="font-bold">GK JEWELER</span>
                      </h2>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      <button className="w-full bg-black text-white py-2 text-sm font-semibold">
                        LOG IN
                      </button>
                      <button className="w-full border border-black text-black py-2 text-sm font-semibold">
                        JOIN NOW
                      </button>
                    </div>
                    <div className="relative">
                      <img
                        src={offerImg}
                        alt="Join Now"
                        className="w-full h-44"
                      />
                    </div>
                    <div className="p-4 text-center text-sm">
                      <a href="#" className="font-semibold underline">
                        What Is My GK Jeweler?
                      </a>
                      <p className="text-gray-600 mt-2 text-xs font-semibold">
                        *The 10% discount will be in your account 3 days after
                        you join and is valid for 30 days.
                      </p>
                    </div>
                  </div>
                )}
              </div> */}

              <div
                onClick={handleLocationClick}
                className="cursor-pointer pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300"
              >
                <LocationEdit size={20} />
              </div>
              <ATMDIalog
                isOpen={openDialog}
                onClose={handleClose}
                title="Our Location"
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-300">
                  {/* Google Map */}
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps?q=7400+Las+Vegas+Blvd+S,+Las+Vegas,+NV+89123&output=embed"
                    loading="lazy"
                    allowFullScreen
                    className="w-full md:h-[500px] grayscale-[10%] rounded-md"
                    style={{ border: "0" }}
                  ></iframe>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-md border border-gray-200 text-gray-700 text-sm font-medium">
                    📍 7400 Las Vegas Blvd S, NV 89123
                  </div>
                </div>
              </ATMDIalog>

              <div
                className="pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300"
                onClick={() => setOpen(true)}
              >
                <MessageSquare
                  className="text-gray-600 hover:text-black"
                  size={20}
                />
              </div>
              {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                  <div className="bg-white rounded-xl p-6 w-full max-w-xl relative shadow-xl">
                    <ATMDIalog isOpen={open} onClose={() => setOpen(false)}>
                      {" "}
                      <InquiryFormWrapper onClose={() => setOpen(false)} />
                    </ATMDIalog>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden bg-white fixed top-0 left-0 w-[90%] h-screen transition-transform ${
            isMenuOpen ? "translate-x-0 z-20" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-100">
            {selectedItem || selectedSubItem ? (
              <button
                className="text-gray-600 hover:text-black flex items-center gap-1"
                onClick={() =>
                  selectedSubItem
                    ? setSelectedSubItem(null)
                    : setSelectedItem(null)
                }
              >
                <ArrowBigDown size={22} />
                <span className="text-lg font-semibold">Back</span>
              </button>
            ) : (
              <div></div>
            )}

            <button
              className="flex items-center gap-2 text-gray-600 hover:text-black text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Close
              <ColumnsSettingsIcon size={24} />
            </button>
          </div>

          <div className="h-[calc(100vh-60px)] overflow-hidden overflow-y-auto">
            <ul className="overflow-y-auto h-full bg-white mt-2">
              {!selectedItem && !selectedSubItem && (
                <>
                  <li className="flex items-center border-b border-gray-300 px-4 py-3 whitespace-nowrap gap-3">
                    <div className="flex items-center gap-2">
                      <CiUser size={20} />
                      <h2 className="text-sm font-semibold">
                        My <span className="text-sm font-bold">GK JEWELER</span>
                      </h2>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      LOG IN / JOIN NOW
                    </span>
                  </li>
                  {menuData.map((menu, index) => (
                    <li
                      key={index}
                      className="py-4 px-4 border-b cursor-pointer font-semibold flex justify-between items-center text-lg"
                      onClick={() => setSelectedItem(menu)}
                    >
                      {menu.title}
                      <ChevronRight className="text-gray-500" />
                    </li>
                  ))}
                </>
              )}
              {selectedItem &&
                !selectedSubItem &&
                selectedItem.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-3 px-4 border-b cursor-pointer font-semibold flex justify-between items-center"
                    onClick={() => setSelectedSubItem(subItem)}
                  >
                    {subItem.title}
                    <ChevronRight className="text-gray-500" />
                  </li>
                ))}
              {selectedSubItem &&
                selectedSubItem.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="ml-4 text-sm py-3">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-pink-300 w-full h-1"></div>
      <div>
        <nav className="relative w-[90%] mx-auto py-2 flex gap-6">
          <div className="relative w-full">
            <div className="flex gap-6">
              {menuData.map((menu, menuIndex) => (
                <div
                  key={menuIndex}
                  className="relative"
                  onMouseEnter={() => setActiveIndex(menuIndex)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Menu Title */}
                  <div className="cursor-pointer hidden sm:flex items-center gap-1 text-xs font-semibold uppercase border-b-2 border-transparent hover:border-pink-500 py-1">
                    {menu.title}
                    {activeIndex === menuIndex ? (
                      <ChevronUp className="w-3 h-3 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-3 h-3 text-gray-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {activeIndex !== null && (
              <div className="absolute left-0 top-full w-screen h-screen bg-white shadow-lg border p-6 grid grid-cols-4 gap-6 mt-2 z-50">
                {menuData[activeIndex]?.subItems.map((subItem, subIndex) => (
                  <div key={subIndex}>
                    <h4 className="text-sm font-semibold text-black mb-2">
                      {subItem.title}
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1 inline-block">
                      {subItem.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="hover:text-black hover:border-b hover:border-black cursor-pointer pb-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComponent;
