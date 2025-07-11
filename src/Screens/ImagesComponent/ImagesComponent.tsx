import React from "react";

const ImagesComponent = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup1_q50eqy.jpg",
      name: "DIAMOND WATCH",
    },
  ];

  return (
    <div className="w-[90%] mx-auto py-10">
      {/* Mobile: 2 Columns, Desktop: Single Line Layout */}
      <div className="grid grid-cols-2 md:flex md:justify-center md:gap-6 gap-6 justify-items-center">
        {images.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.src}
              alt={item.name}
              className="h-52 w-60 rounded-xl object-cover transform transition-transform duration-300 hover:scale-110"
            />
            <span className="py-3 text-center text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesComponent;
