import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../src/Assets/DiamondWatchGroup1.jpg";
import image2 from "../../src/Assets/DiamondWatchGroup2.jpg";
import image3 from "../../src/Assets/DiamondWatchGroup3.jpg";
import image4 from "../../src/Assets/DiamondWatchGroup4.jpg";

const SmallImgCarosel = () => {
  const settings = {
    dots: true, // always enable
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    arrows: true, // always enable, but conditionally hidden via CSS
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: any) => (
      <div className="block sm:hidden mt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 bg-gray-400 rounded-full hover:bg-black transition-all duration-300" />
    ),
  };

  const images = [
    {
      src: image4,
      alt: "Diamond Watch 1",
      content: "BEST SELLER | DIAMOND WATCH",
      title: "Classic Silver Diamond Watch",
    },
    {
      src: image1,
      alt: "Diamond Watch 2",
      content: "NEW ARRIVAL | DIAMOND WATCH",
      title: "Rose Gold Diamond Watch",
    },
    {
      src: image2,
      alt: "Diamond Watch 3",
      content: "PREMIUM | DIAMOND WATCH",
      title: "Midnight Black Diamond Watch",
    },
    {
      src: image3,
      alt: "Diamond Watch 4",
      content: "LIMITED EDITION | DIAMOND WATCH",
      title: "Blue Sapphire Diamond Watch",
    },
  ];

  return (
    <div className="w-full mx-auto relative sm:px-6 group">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="p-3">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col items-center">
              <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <div className="text-xs sm:text-sm text-gray-600">
                  {img.content}
                </div>
                <div className="text-sm sm:text-base font-semibold text-black mt-1">
                  {img.title}
                </div>
              </div>
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
      className="hidden sm:flex absolute top-1/2 right-2 transform -translate-y-1/2 z-20 items-center justify-center w-10 h-10 bg-white rounded-full shadow-md cursor-pointer transition hover:scale-110"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
        alt="Next"
        className="w-4 h-4"
      />
    </div>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="hidden sm:flex absolute top-1/2 left-2 transform -translate-y-1/2 z-20 items-center justify-center w-10 h-10 bg-white rounded-full shadow-md cursor-pointer transition hover:scale-110"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        alt="Prev"
        className="w-4 h-4"
      />
    </div>
  );
};

export default SmallImgCarosel;
