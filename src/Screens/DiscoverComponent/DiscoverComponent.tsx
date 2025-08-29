import React from "react";

type MediaItem = {
  type?: any;
  src: string;
  alt?: string;
  title?: string;
  content?: string;
};

type DiscoverSectionProps = {
  title: string;
  subtitle: string;
  media?: MediaItem[];
};

const DiscoverSection = ({ title, subtitle, media }: DiscoverSectionProps) => {
  const mediaToShow = media && media?.length > 0 ? media : [];

  return (
    <div>
      {/* Heading */}
      <div className="w-[90%] mx-auto flex flex-col sm:block items-start text-start">
        <div className="text-4xl sm:text-4xl font-bold inline-block">
          {title}
        </div>
        <div className="text-5xl sm:text-6xl font-bold mt-1 sm:mt-0 inline-block sm:block">
          {subtitle}
        </div>
      </div>

      {/* Media Grid */}
      <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 py-4">
        {mediaToShow?.map((item, index) => (
          <div
            key={index}
            className="w-full h-[160px] sm:h-[200px] lg:h-[300px] overflow-hidden rounded-lg group"
          >
            {item?.type === "image" ? (
              <img
                src={item?.src}
                alt={item?.alt || `media-${index}`}
                className="w-full h-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
              />
            ) : (
              <video
                src={item?.src}
                className="w-full h-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;
