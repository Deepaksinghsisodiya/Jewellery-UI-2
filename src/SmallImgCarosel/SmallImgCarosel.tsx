import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SmallImgCarosel = () => {
  const [slideCount, setSlideCount] = useState(4);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const images = [
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208445/DiamondWatchGroup4_eassip.jpg",
      alt: "Image 1",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup1_q50eqy.jpg",
      alt: "Image 2",
      content: "NEW TOP | GIFT",
      title: "Handwritten Love Charm",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup2_h2w7ls.jpg",
      alt: "Image 3",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208414/DiamondWatchGroup3_yzkmiw.jpg",
      alt: "Image 4",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208445/DiamondWatchGroup4_eassip.jpg",
      alt: "Image 1",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup1_q50eqy.jpg",
      alt: "Image 2",
      content: "NEW TOP | GIFT",
      title: "Handwritten Love Charm",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup2_h2w7ls.jpg",
      alt: "Image 3",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208414/DiamondWatchGroup3_yzkmiw.jpg",
      alt: "Image 4",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208445/DiamondWatchGroup4_eassip.jpg",
      alt: "Image 1",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup1_q50eqy.jpg",
      alt: "Image 2",
      content: "NEW TOP | GIFT",
      title: "Handwritten Love Charm",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup2_h2w7ls.jpg",
      alt: "Image 3",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208414/DiamondWatchGroup3_yzkmiw.jpg",
      alt: "Image 4",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208445/DiamondWatchGroup4_eassip.jpg",
      alt: "Image 1",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup1_q50eqy.jpg",
      alt: "Image 2",
      content: "NEW TOP | GIFT",
      title: "Handwritten Love Charm",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup2_h2w7ls.jpg",
      alt: "Image 3",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
    {
      src: "https://res.cloudinary.com/dov9enaie/image/upload/v1752208414/DiamondWatchGroup3_yzkmiw.jpg",
      alt: "Image 4",
      content: "BEST SELLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
    },
  ];

  return (
    <div className="w-full mx-auto relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="p-2 sm:p-3 text-center">
            {/* Image */}
            <div className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-72 sm:h-80 md:h-96 overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="mt-3 text-xs sm:text-sm md:text-base text-gray-800">
              {img.content}
            </div>

            {/* Title */}
            <div className="text-xs sm:text-sm md:text-base text-gray-800 font-semibold">
              {img.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer shadow-lg p-2 bg-white rounded-full"
      style={{ marginRight: "-30px" }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
        alt="Next"
        className="w-6 h-6"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer shadow-lg p-2 bg-white rounded-full"
      style={{ marginLeft: "-30px" }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        alt="Prev"
        className="w-6 h-6"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default SmallImgCarosel;
