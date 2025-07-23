import React from "react";
import image1 from "../../../Assets/DiamondWatchGroup1.jpg";
import image2 from "../../../Assets/DiamondWatchGroup2.jpg";
import image3 from "../../../Assets/DiamondWatchGroup3.jpg";
import image4 from "../../../Assets/DiamondWatchGroup4.jpg";
import video3 from "../../../Assets/WhatsAppVideo2.mp4";
import video2 from "../../../Assets/DiamondWatchVideo2.mp4";

const MiddleImageComponent = () => {
  const imagesAndVideos = [
    { type: "image", src: image4 },
    { type: "video", src: video3 },
    { type: "image", src: image1 },
    { type: "image", src: image2 },
    { type: "image", src: image3 },
    { type: "video", src: video2 },
  ];

  return (
    <div className="py-4 bg-white">
      <div className="flex flex-col lg:flex-row gap-6 justify-between w-[90%] mx-auto items-center lg:items-start">
        {/* Heading */}
        <div className="flex flex-row sm:flex-col text-center lg:text-start gap-1">
          <div className="text-lg sm:text-5xl font-bold animate-fadeIn">
           FOR EVERY
          </div>
          <div className="text-lg sm:text-5xl font-bold animate-fadeIn delay-200">
            SPECIAL
          </div>
          <div className="text-lg sm:text-5xl font-bold animate-fadeIn delay-400">
            MOMENT
          </div>
        </div>

        {/* Image/Video Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {imagesAndVideos.map((item, index) =>
            item.type === "image" ? (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md border border-gray-200 transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src={item.src}
                  alt={`img-${index}`}
                  className="w-60 h-72 lg:w-64 lg:h-80 object-cover group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            ) : (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md border border-gray-200 transition-transform duration-300 transform hover:scale-105"
              >
                <video
                  src={item.src}
                  className="w-60 h-72 lg:w-64 lg:h-80 object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MiddleImageComponent;
