import React from "react";

const RecentImg = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup1_q50eqy.jpg",
      alt: "Diamond Watch 1",
      content: "LUXURY TIMEPIECE | BEST SELLER",
      title: "Eternal Diamond Classic Watch",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup2_h2w7ls.jpg",
      alt: "Diamond Watch 2",
      content: "NEW ARRIVAL | SIGNATURE STYLE",
      title: "Lunar Radiance Diamond Dial",
    },
  ];

  return (
    <>
      <div className="py-6">
        <div className="text-2xl text-center font-bold py-4">
          RECENTLY VIEWED
        </div>

        <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="p-3 text-center">
              {/* Image container with fixed height */}
              <div className="w-full h-72 overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-3 text-xs text-gray-800">{img.content}</div>
              <div className="text-xs text-gray-800 font-semibold">
                {img.title}
              </div>
              {/* <div className="text-xs text-gray-800">{img?.price}</div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentImg;
