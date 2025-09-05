// import React, { useState, useEffect } from "react";
// import { categoryData } from "../../DummyData/DummyData";
// import {
//   ArrowBigDown,
//   ChevronDown,
//   ChevronRight,
//   ChevronUp,
//   LocationEdit,
//   Menu,
//   MessageSquare,
//   User,
// } from "lucide-react";
// import { useNavigate, useParams, useLocation } from "react-router-dom";
// import GkJwelersLogo from "../../../Assets/GkJewelersLogo.png";
// import ATMDIalog from "../../../Atoms/ATMDIalog";

// const NavbarComponent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { catId, subCatId } = useParams();
//   const activeCategoryId =
//     catId || (location.pathname === "/" ? String(categoryData[0]?.id) : null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);
//   const [selectedItem, setSelectedItem] = useState<{
//     id: any;
//     subCategories: any;
//     title: string;
//     subItems: { title: string; items: string[] }[];
//   } | null>(null);
//   const [selectedSubItem, setSelectedSubItem] = useState<{
//     title: string;
//     items: string[];
//   } | null>(null);

//   const [openDialog, setOpenDialog] = useState(false);

//   const handleLocationClick = () => {
//     setOpenDialog(true);
//   };

//   const handleClose = () => {
//     setOpenDialog(false);
//   };
//   const handleSubcategoryClick = (catId: any, subCatId: any) => {
//     navigate(`/category/${catId}/${subCatId}`);
//   };

//   const googleFormEmbedUrl = "https://forms.gle/vBrAjykK16rjEx3P6";

//   useEffect(() => {
//     const currentCatId = catId || String(categoryData[0]?.id);
//     const index = categoryData.findIndex((c) => String(c.id) === currentCatId);
//     setActiveIndex(index !== -1 ? index : 0);
//   }, [catId, location.pathname]);

//   useEffect(() => {
//     if (activeIndex !== null && subCatId) {
//       const subIndex = categoryData[activeIndex]?.subCategories?.findIndex(
//         (sub) => String(sub.id) === subCatId
//       );
//       setActiveSubIndex(subIndex !== -1 ? subIndex : null);
//     } else {
//       setActiveSubIndex(null);
//     }
//   }, [subCatId, activeIndex]);
//   useEffect(() => {
//     setActiveIndex(null);
//   }, [location]);

//   return (
//     <div className="w-full">
//       <div className="flex items-center w-[90%] mx-auto justify-between">
//         {/* Left Side - Hamburger Menu */}
//         <div
//           className="sm:hidden flex gap-3 py-3"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <Menu className="text-2xl text-gray-600 cursor-pointer" size={18} />
//         </div>

//         {/* Center - Logo */}
//         <div
//           className="flex flex-1 justify-center sm:justify-start cursor-pointer items-center"
//           onClick={() => navigate("/")}
//         >
//           <img
//             src={GkJwelersLogo}
//             alt="GK JEWELERS Logo"
//             className="w-6 h-6 sm:w-10 sm:h-10 ml-1 sm:ml-2 object-contain drop-shadow-md"
//           />
//           <h1
//             className="text-transparent bg-clip-text
//           bg-gradient-to-r from-pink-500 via-pink-400 to-rose-500
//           font-playfair font-extrabold tracking-wide sm:tracking-widest italic
//           text-xl sm:text-3xl md:text-4xl lg:text-5xl ml-2 sm:ml-3 drop-shadow-lg"
//           >
//             GK JEWELERS
//           </h1>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center gap-3 relative">
//           <div className="sm:hidden flex items-center gap-4">
//             {/* Google Form link */}
//             <MessageSquare
//               size={18}
//               onClick={() => (window.location.href = googleFormEmbedUrl)}
//               className="text-xs text-gray-600 cursor-pointer"
//             />

//             {/* Location dialog */}
//             <LocationEdit
//               size={18}
//               onClick={handleLocationClick}
//               className="text-xs text-gray-600 cursor-pointer"
//             />
//           </div>

//           <div className="hidden sm:flex flex-row-reverse gap-4">
//             <div className="cursor-pointer pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300">
//               <LocationEdit
//                 onClick={handleLocationClick}
//                 size={20}
//                 className="text-gray-700"
//               />
//             </div>
//             <div className="pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300">
//               <a href={googleFormEmbedUrl}>
//                 <MessageSquare
//                   onClick={() => setOpen(true)}
//                   className="text-gray-600 hover:text-black cursor-pointer"
//                   size={20}
//                 />
//               </a>
//             </div>
//           </div>
//           <ATMDIalog
//             size="medium"
//             isOpen={openDialog}
//             onClose={handleClose}
//             title="Our Location"
//           >
//             <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-300 w-full">
//               <iframe
//                 title="Google Map"
//                 src="https://www.google.com/maps?q=7400+Las+Vegas+Blvd+S,+Las+Vegas,+NV+89123&output=embed"
//                 loading="lazy"
//                 allowFullScreen
//                 className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] grayscale-[10%] rounded-md"
//               ></iframe>

//               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md py-1 sm:px-3 sm:py-2 rounded-lg shadow-md border border-gray-200 text-[11px] sm:text-[13px] text-gray-700 font-medium sm:font-normal w-fit max-w-[90%] text-center">
//                 📍 7400 Las Vegas Blvd S, NV 89123
//               </div>
//             </div>
//           </ATMDIalog>
//         </div>
//       </div>

//       <div className="bg-pink-300 w-full h-[2px]"></div>

//       {/* Desktop Navbar */}
//       <div className="hidden sm:block">
//         <nav className="relative w-[90%] mx-auto py-2 flex gap-6">
//           <div className="relative w-full">
//             <div className="flex gap-6">
//               {categoryData?.map((menu, menuIndex) => {
//                 const currentCat =
//                   catId ||
//                   (location.pathname === "/"
//                     ? String(categoryData[0]?.id)
//                     : null);
//                 const isActive = String(menu.id) === currentCat;

//                 return (
//                   <div key={menuIndex} className="relative">
//                     <div
//                       className={`cursor-pointer hidden sm:flex items-center gap-1 text-xs md:text-[10px] font-semibold uppercase py-1 ${
//                         isActive
//                           ? "border-b-2 border-pink-500 text-pink-500"
//                           : "border-b-2 border-transparent text-black"
//                       } hover:border-pink-500 hover:text-pink-500 transition-colors duration-300`}
//                       onClick={() => {
//                         setActiveIndex(
//                           activeIndex === menuIndex ? null : menuIndex
//                         );
//                         setActiveSubIndex(null);
//                       }}
//                     >
//                       {menu?.category}
//                       {activeIndex === menuIndex ? (
//                         <ChevronUp className="w-3 h-3 text-pink-500" />
//                       ) : (
//                         <ChevronDown className="w-3 h-3 text-gray-600" />
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Subcategories */}
//             {activeIndex !== null && (
//               <div className="absolute left-0 top-full w-full bg-red-50 shadow-lg border p-3 grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 z-50">
//                 {categoryData[activeIndex]?.subCategories?.map(
//                   (sub, subIndex) => {
//                     const isSubActive = String(sub.id) === subCatId;
//                     return (
//                       <div key={subIndex}>
//                         <h4
//                           className={`text-xs font-semibold mb-3 cursor-pointer inline-block border-b-2 ${
//                             isSubActive
//                               ? "text-pink-500 border-pink-500"
//                               : "text-black border-transparent"
//                           } hover:text-pink-500 hover:border-pink-500 transition-colors duration-300`}
//                           onClick={() =>
//                             handleSubcategoryClick(
//                               categoryData[activeIndex].id,
//                               sub?.id
//                             )
//                           }
//                         >
//                           {sub?.name}
//                         </h4>
//                       </div>
//                     );
//                   }
//                 )}
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`sm:hidden bg-white fixed top-0 left-0 w-[85%] max-w-[320px] h-screen transition-transform ${
//           isMenuOpen ? "translate-x-0 z-20" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-100">
//           {selectedItem || selectedSubItem ? (
//             <button
//               className="text-gray-600 hover:text-black flex items-center gap-1"
//               onClick={() =>
//                 selectedSubItem
//                   ? setSelectedSubItem(null)
//                   : setSelectedItem(null)
//               }
//             >
//               <ArrowBigDown size={22} />
//               <span className="text-lg font-semibold">Back</span>
//             </button>
//           ) : (
//             <div></div>
//           )}

//           <button
//             className="flex items-center gap-2 text-gray-600 hover:text-black text-lg"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Close
//           </button>
//         </div>

//         <div className="h-[calc(100vh-60px)] overflow-y-auto">
//           <ul className="bg-white">
//             {/* Main Categories */}
//             {!selectedItem && !selectedSubItem && (
//               <>
//                 <li className="flex items-center border-b border-gray-300 px-4 py-3 whitespace-nowrap gap-3">
//                   <div className="flex items-center gap-2">
//                     <User size={20} />
//                     <h2 className="text-sm font-semibold">
//                       My <span className="text-sm font-bold">GK JEWELER</span>
//                     </h2>
//                   </div>
//                   <span className="text-sm font-semibold text-gray-700 ml-auto">
//                     LOG IN / JOIN NOW
//                   </span>
//                 </li>
//                 {categoryData?.map((menu: any, index: number) => (
//                   <li
//                     key={menu.id || index}
//                     className={`py-4 px-4 border-b cursor-pointer font-semibold flex justify-between items-center text-base ${
//                       String(menu.id) === (catId || String(categoryData[0]?.id))
//                         ? "border-l-4 border-pink-500 pl-2"
//                         : ""
//                     }`}
//                     onClick={() => {
//                       setSelectedItem(menu);
//                       setSelectedSubItem(null);
//                     }}
//                   >
//                     {menu.category}
//                     <ChevronRight className="text-gray-500" />
//                   </li>
//                 ))}
//               </>
//             )}

//             {/* Subcategories */}
//             {selectedItem &&
//               !selectedSubItem &&
//               selectedItem?.subCategories?.length > 0 &&
//               selectedItem.subCategories.map(
//                 (subItem: any, subIndex: number) => (
//                   <li
//                     key={subItem.id || subIndex}
//                     className="py-3 px-4 border-b cursor-pointer font-semibold flex justify-between items-center"
//                     onClick={() => {
//                       setSelectedSubItem(subItem);
//                       navigate(`/category/${selectedItem?.id}/${subItem?.id}`);
//                     }}
//                   >
//                     {subItem.name}
//                     <ChevronRight className="text-gray-500" />
//                   </li>
//                 )
//               )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavbarComponent;

import React, { useState, useEffect } from "react";
import { categoryData } from "../../DummyData/DummyData";
import {
  ArrowBigDown,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  LocationEdit,
  Menu,
  MessageSquare,
  User,
} from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import GkJwelersLogo from "../../../Assets/GkJewelersLogo.png";
import ATMDIalog from "../../../Atoms/ATMDIalog";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { catId } = useParams();

  const activeCategoryId =
    catId || (location.pathname === "/" ? String(categoryData[0]?.id) : null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleLocationClick = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const googleFormEmbedUrl = "https://forms.gle/vBrAjykK16rjEx3P6";

  useEffect(() => {
    const currentCatId = catId || String(categoryData[0]?.id);
    const index = categoryData?.findIndex(
      (c) => String(c?.id) === currentCatId
    );
    setActiveIndex(index !== -1 ? index : 0);
  }, [catId, location?.pathname]);

  useEffect(() => {
    setActiveIndex(null);
  }, [location]);

  return (
    <div className="w-full">
      <div className="flex items-center w-[90%] mx-auto justify-between">
        {/* Left Side - Hamburger Menu */}
        <div
          className="sm:hidden flex gap-3 py-3"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="text-2xl text-gray-600 cursor-pointer" size={18} />
        </div>

        {/* Center - Logo */}
        <div
          className="flex flex-1 justify-center sm:justify-start cursor-pointer items-center"
          onClick={() => navigate("/")}
        >
          <img
            src={GkJwelersLogo}
            alt="GK JEWELERS Logo"
            className="w-8 h-8 sm:w-14 sm:h-14 ml-1 sm:ml-2 object-contain drop-shadow-md"
          />
          <h1
            className="text-transparent bg-clip-text
             bg-gradient-to-r from-pink-500 via-pink-400 to-rose-500
             font-playfair font-extrabold tracking-wide sm:tracking-widest italic
             text-xl sm:text-3xl md:text-4xl lg:text-5xl ml-2 sm:ml-3 drop-shadow-lg"
          >
            GK JEWELERS
          </h1>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-3 relative">
          <div className="sm:hidden flex items-center gap-4">
            <MessageSquare
              size={18}
              onClick={() => (window.location.href = googleFormEmbedUrl)}
              className="text-xs text-gray-600 cursor-pointer"
            />

            <LocationEdit
              size={18}
              onClick={handleLocationClick}
              className="text-xs text-gray-600 cursor-pointer"
            />
          </div>

          <div className="hidden sm:flex flex-row-reverse gap-4">
            <div className="cursor-pointer pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300">
              <LocationEdit
                onClick={handleLocationClick}
                size={20}
                className="text-gray-700"
              />
            </div>
            <div className="pb-1 border-b-2 border-transparent hover:border-pink-500 transition duration-300">
              <a href={googleFormEmbedUrl}>
                <MessageSquare
                  onClick={() => setOpen(true)}
                  className="text-gray-600 hover:text-black cursor-pointer"
                  size={20}
                />
              </a>
            </div>
          </div>
          <ATMDIalog
            size="medium"
            isOpen={openDialog}
            onClose={handleClose}
            title="Our Location"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-300 w-full">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=7400+Las+Vegas+Blvd+S,+Las+Vegas,+NV+89123&output=embed"
                loading="lazy"
                allowFullScreen
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] grayscale-[10%] rounded-md"
              ></iframe>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md py-1 sm:px-3 sm:py-2 rounded-lg shadow-md border border-gray-200 text-[11px] sm:text-[13px] text-gray-700 font-medium sm:font-normal w-fit max-w-[90%] text-center">
                📍 7400 Las Vegas Blvd S, NV 89123
              </div>
            </div>
          </ATMDIalog>
        </div>
      </div>

      <div className="bg-pink-300 w-full h-[2px]"></div>

      {/* Desktop Navbar */}
      <div className="hidden sm:block">
        <nav className="relative w-[90%] mx-auto py-2 flex gap-6">
          <div className="relative w-full">
            <div className="flex gap-6">
              {categoryData?.map((menu, menuIndex) => {
                const currentCat =
                  catId ||
                  (location.pathname === "/"
                    ? String(categoryData[0]?.id)
                    : null);
                const isActive = String(menu?.id) === currentCat;

                return (
                  <div key={menuIndex} className="relative">
                    <div
                      className={`cursor-pointer hidden sm:flex items-center gap-1 text-xs md:text-[10px] font-semibold uppercase py-1 ${
                        isActive
                          ? "border-b-2 border-pink-500 text-pink-500"
                          : "border-b-2 border-transparent text-black"
                      } hover:border-pink-500 hover:text-pink-500 transition-colors duration-300`}
                      onClick={() => {
                        navigate(`/category/${menu?.id}`);
                        setActiveIndex(
                          activeIndex === menuIndex ? null : menuIndex
                        );
                      }}
                    >
                      {menu?.category}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-white fixed top-0 left-0 w-[85%] max-w-[320px] h-screen transition-transform ${
          isMenuOpen ? "translate-x-0 z-20" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-100">
          {selectedItem ? (
            <button
              className="text-gray-600 hover:text-black flex items-center gap-1"
              onClick={() => setSelectedItem(null)}
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
          </button>
        </div>

        <div className="h-[calc(100vh-60px)] overflow-y-auto">
          <ul className="bg-white">
            {!selectedItem && (
              <>
                <li className="flex items-center border-b border-gray-300 px-4 py-3 whitespace-nowrap gap-3">
                  <div className="flex items-center gap-2">
                    <User size={20} />
                    <h2 className="text-sm font-semibold">
                      My <span className="text-sm font-bold">GK JEWELER</span>
                    </h2>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 ml-auto">
                    LOG IN / JOIN NOW
                  </span>
                </li>
                {categoryData?.map((menu: any, index: number) => (
                  <li
                    key={menu?.id || index}
                    className={`py-4 px-4 border-b cursor-pointer font-semibold flex justify-between items-center text-base ${
                      String(menu?.id) ===
                      (catId || String(categoryData[0]?.id))
                        ? "border-l-4 border-pink-500 pl-2"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedItem(menu);
                      navigate(`/category/${menu?.id}`);
                      setIsMenuOpen(false);
                    }}
                  >
                    {menu?.category}
                    <ChevronRight className="text-gray-500" />
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
