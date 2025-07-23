import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DiamondWatch from "../Assets/DiamondWatchSlider02.avif";
import DiamondWatch2 from "../Assets/DiamondImageSlider2.jpg";

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
        <ul>{dots}</ul>
      </div>
    ),
  };

  const images = [DiamondWatch,DiamondWatch2];

  return (
    <div className="w-full mx-auto relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover h-[200px] sm:h-[350px] md:h-[600px] rounded-b-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
