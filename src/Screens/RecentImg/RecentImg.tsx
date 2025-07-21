import React from "react";
import image1 from "../../Assets/DiamondWatchGroup1.jpg";
import image2 from "../../Assets/DiamondWatchGroup2.jpg";

const RecentImg = () => {
  const images = [
    {
      src: image1,
      alt: "Diamond Watch 1",
      content: "LUXURY TIMEPIECE | BEST SELLER",
      title: "Eternal Diamond Classic Watch",
    },
    {
      src: image2,
      alt: "Diamond Watch 2",
      content: "NEW ARRIVAL | SIGNATURE STYLE",
      title: "Lunar Radiance Diamond Dial",
    },
  ];

  return (
    <div className="py-6">
      <div className="text-lg md:text-2xl text-center font-bold py-4">
        RECENTLY VIEWED
      </div>

      {/* Wrapper for both grid (desktop) and horizontal scroll (mobile) */}
      <div className="w-[90%] mx-auto">
        {/* For mobile: horizontal scroll */}
        {/* For mobile: horizontal scroll centered */}
        <div className="overflow-x-auto sm:hidden">
          <div className="flex gap-4 w-max mx-auto">
            {images.map((img, index) => (
              <div key={index} className="min-w-[150px]">
                <div className="h-40 overflow-hidden rounded-lg group shadow-md">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 text-[10px] text-gray-700">
                  {img.content}
                </div>
                <div className="text-[11px] text-gray-800 font-semibold">
                  {img.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For desktop: grid layout */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="p-2 text-center">
              <div className="w-full h-48 overflow-hidden rounded-lg group shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>
              <div className="mt-2 text-xs text-gray-700">{img.content}</div>
              <div className="text-sm text-gray-800 font-semibold">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentImg;
