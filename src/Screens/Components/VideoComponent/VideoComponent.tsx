import React from "react";

type MediaItem = {
  src?: string;
  alt?: string;
  type?: string; // e.g. "video" or "image"
};

type VideoComponentContent = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
};

type MediaComponentProps = {
  media?: MediaItem[];
  content?: VideoComponentContent;
};

const VideoComponent = ({ media, content }: MediaComponentProps) => {
  const mediaToShow = media && media.length > 0 ? media : [];

  return (
    <div className="w-full bg-white py-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto gap-12">
        {/* Media Section */}
        {mediaToShow.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[60%] h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt || "media"}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}

        {/* Text Content */}
        {/* Text Content */}
        <div className="w-full md:w-[40%] flex flex-col items-start justify-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            {content?.title}
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {content?.description}
          </p>
          <button
            onClick={content?.onButtonClick}
            className="bg-black text-white px-6 py-3 text-sm rounded-full shadow hover:bg-gray-800 transition"
          >
            {content?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
