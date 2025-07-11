import React from "react";

const MiddleImageComponent = () => {
  const imagesAndVideos = [
    {
      type: "image",
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208445/DiamondWatchGroup4_eassip.jpg",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/dov9enaie/video/upload/v1752209321/DiamondWatchVideo3_td9fyk.mp4",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup1_q50eqy.jpg",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup2_h2w7ls.jpg",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208414/DiamondWatchGroup3_yzkmiw.jpg",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/dov9enaie/video/upload/v1752209136/DiamondWatchVideo2_ythdqc.mp4",
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-[75%] mx-auto items-center lg:items-start">
        {/* Heading Section */}
        <div className="flex flex-row sm:flex-col text-center lg:text-start gap-1">
          <div className="text-lg sm:text-5xl font-bold">For every</div>
          <div className="text-lg sm:text-5xl font-bold">special</div>
          <div className="text-lg sm:text-5xl font-bold">moment</div>
        </div>

        {/* Image & Video Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {imagesAndVideos.map((item, index) =>
            item.type === "image" ? (
              <img
                key={index}
                src={item.src}
                alt={`image-${index}`}
                className="h-72 w-60 lg:h-80 lg:w-64 object-cover transform transition-transform duration-300 hover:scale-105 rounded-lg"
              />
            ) : (
              <video
                key={index}
                src={item.src}
                className="h-72 w-60 lg:h-80 lg:w-64 object-cover rounded-lg"
                autoPlay
                loop
                muted
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MiddleImageComponent;
