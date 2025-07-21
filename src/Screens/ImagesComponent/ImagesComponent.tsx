import React from "react";
import image1 from "../../Assets/DiamondWatchGroup1.jpg";

const ImagesComponent = () => {
  const images = [
    {
      src: image1,
      name: "DIAMOND WATCH",
    },
  ];

  return (
    <div className="w-[90%] mx-auto py-4">
      {/* Mobile: 2 Columns, Desktop: Single Line Layout */}
      <div className="grid grid-cols-2 md:flex md:justify-center md:gap-2 gap-2 justify-items-center">
        {images.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center animate-fadeIn"
          >
            <img
              src={item.src}
              alt={item.name}
              className="h-52 w-60 rounded-xl object-cover transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:opacity-90"
            />
            <span className="py-3 text-center text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesComponent;
