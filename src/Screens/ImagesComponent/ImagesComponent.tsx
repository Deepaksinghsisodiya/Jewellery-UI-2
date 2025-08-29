import React from "react";

type ImageItem = {
  src: string;
  name?: string;
  alt?: string;
};

type ImagesComponentProps = {
  media?: ImageItem[];
};

const ImagesComponent = ({ media }: ImagesComponentProps) => {
  const imagesToShow = media && media?.length > 0 ? media : [];

  return (
    <div className="w-[90%] mx-auto py-4">
      <div className="grid grid-cols-2 md:flex md:justify-center md:gap-2 gap-2 justify-items-center">
        {imagesToShow?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center animate-fadeIn"
          >
            <img
              src={item?.src}
              alt={item?.alt || item.name || `image-${index}`}
              className="w-60 h-44 lg:w-72 lg:h-64 rounded-xl object-cover transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:opacity-90"
            />
            {item?.name && (
              <span className="py-3 text-center text-gray-700 text-xs">
                {item?.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesComponent;
