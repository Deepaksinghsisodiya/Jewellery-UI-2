import React from "react";

const OfferBanner = () => {
  return (
    <div className="bg-pink-400 w-full h-[120px] sm:h-[180px] flex items-center justify-center px-4">
      <div className="text-center flex flex-col items-center gap-2 sm:gap-4">
        <div className="bg-zinc-800 text-white text-[10px] sm:text-xs px-3 sm:px-4 py-1 rounded-sm tracking-wider w-max">
          LIMITED TIME ONLY!
        </div>
        <div className="text-3xl sm:text-5xl font-light text-zinc-900">
          ENJOY <span className="font-bold">25% OFF</span>
        </div>
        <div className="text-base sm:text-xl text-zinc-900">ON STORE</div>
      </div>
    </div>
  );
};

export default OfferBanner;
