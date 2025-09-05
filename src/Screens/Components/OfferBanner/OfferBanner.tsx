import React from "react";

const OfferBanner = () => {
  return (
    <a
      href="https://share.google/rK0fwPKIxeml1yObm"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div className="bg-pink-400 w-full h-[120px] sm:h-[180px] flex items-center justify-center px-4 cursor-pointer">
        <div className="text-center flex flex-col items-center gap-2 sm:gap-4">
          <div className="bg-black text-white text-[10px] sm:text-sm px-3 sm:px-4 py-1 rounded-md tracking-wider w-max uppercase">
            Limited Time Only!
          </div>
          <div className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 font-['Cinzel']">
            Enjoy up to <span className="text-white">80% OFF</span>
          </div>

          <div className="text-base sm:text-xl text-white font-semibold">
            On Store
          </div>
        </div>
      </div>
    </a>
  );
};

export default OfferBanner;
