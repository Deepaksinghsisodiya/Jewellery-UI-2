import React from "react";

type MediaItem = {
  type?: string;
  src: string;
  alt?: string;
};

type MiddleImageComponentProps = {
  media?: MediaItem[];
};

const MiddleImageComponent = ({ media }: MiddleImageComponentProps) => {
  const imagesAndVideos = media && media.length > 0 ? media : [];

  return (
    <div className="py-4 bg-white">
      <div className="flex flex-col lg:flex-row gap-6 justify-between w-[90%] mx-auto items-center lg:items-start">
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {imagesAndVideos?.map((item, index) =>
            item.type === "image" ? (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md border border-gray-200 transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src={item?.src}
                  alt={item?.alt || `img-${index}`}
                  className="w-60 h-44 lg:w-72 lg:h-64 object-cover group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            ) : (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md border border-gray-200 transition-transform duration-300 transform hover:scale-105"
              >
                <video
                  src={item?.src}
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
