import React from "react";

type ImageItem = {
  src?: string;
  alt?: string;
  title?: string;
  content?: string;
};

type RecentImgProps = {
  media?: ImageItem[];
};

const RecentImg = ({ media }: RecentImgProps) => {
  const imagesToShow = media && media.length > 0 ? media : [];

  return (
    <div className="py-6">
      <div className="text-lg md:text-2xl text-center font-bold py-4">
        RECENTLY VIEWED
      </div>

      <div className="w-[90%] mx-auto">
        {/* Mobile: horizontal scroll */}
        {/* Mobile: horizontal scroll (scroll बंद करके) */}
        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 px-1 sm:hidden">
          {imagesToShow.map((img, index) => (
            <div key={index} className="p-2 text-center">
              <div className="w-full h-40 overflow-hidden rounded-lg group shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>
              <div className="mt-3 text-[10px] text-gray-600">
                {img.content}
              </div>
              <div className="font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-500 text-[10px]">
                {img.title}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-2">
          {imagesToShow.map((img, index) => (
            <div key={index} className="p-2 text-center">
              <div className="w-full h-48 overflow-hidden rounded-lg group shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>
              <div className="mt-3 text-sm text-gray-600">{img.content}</div>
              <div className="text-md font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-500 text-xs">
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
