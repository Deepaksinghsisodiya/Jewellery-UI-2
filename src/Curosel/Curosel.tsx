import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ media }: { media?: { src: string }[] }) => {
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

  const images = media && media.length > 0 ? media.map((m) => m.src) : [];

  return (
    <div className="w-full mx-auto relative">
      <Slider {...settings}>
        {images?.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover h-[200px] sm:h-[350px] md:h-[600px] rounded-b-md gap-5"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
