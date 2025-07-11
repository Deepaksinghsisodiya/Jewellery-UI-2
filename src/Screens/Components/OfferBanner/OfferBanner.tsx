import React from "react";

const OfferBanner = () => {
  return (
    <div className="bg-pink-400 w-full h-[180px] flex items-center justify-center">
      <div className="text-center flex flex-col items-center gap-4">
        <div className="bg-zinc-800 text-white text-xs px-4 py-1 rounded-sm tracking-wider w-max">
          LIMITED TIME ONLY!
        </div>
        <div className="text-5xl font-light text-zinc-900">
          ENJOY <span className="font-bold">25% OFF</span>
        </div>
        <div className="text-xl text-zinc-900">ON STORE</div>
      </div>
    </div>
  );
};

export default OfferBanner;
