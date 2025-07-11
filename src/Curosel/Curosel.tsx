import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    appendDots: (dots: any) => (
      <div className="absolute bottom-2 w-[90%] flex justify-center z-10">
        <ul className="m-0">{dots}</ul>
      </div>
    ),
  };

  const images = [
    "https://res.cloudinary.com/dov9enaie/image/upload/v1752208945/DiamondWatchSlider01_cexuqj.jpg",
    "https://res.cloudinary.com/dov9enaie/image/upload/v1752208449/DiamondWatchSlider02_gwnror.avif",
  ];

  return (
    <div className="w-full mx-auto relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover h-[200px] sm:h-[350px] md:h-[600px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
