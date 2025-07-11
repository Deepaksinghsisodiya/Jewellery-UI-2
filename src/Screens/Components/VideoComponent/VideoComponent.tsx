import React from "react";

const VideoComponent = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto gap-12">
        {/* Video Section */}
        <div className="w-full md:w-[60%] h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <video
            src="https://res.cloudinary.com/dov9enaie/video/upload/v1752209250/DiamondWatchVideo1_nabqsu.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[40%] flex flex-col items-start justify-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            Timeless Elegance,
            <br className="hidden md:block" /> Diamond Watches
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Discover refined craftsmanship with our latest
            <br className="hidden md:block" />
            collection of diamond watches. Each piece blends
            <br className="hidden md:block" />
            precision with elegance — perfect for layering,
            <br className="hidden md:block" />
            gifting, or collecting.
          </p>
          <button className="bg-black text-white px-6 py-3 text-sm rounded-full shadow hover:bg-gray-800 transition">
            EXPLORE DIAMOND WATCHES
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
