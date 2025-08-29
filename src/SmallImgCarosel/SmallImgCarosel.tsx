import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ImageItem = {
  src: string;
  alt?: string;
  content?: string;
  title?: string;
};

type SmallImgCarouselProps = {
  media?: ImageItem[];
};

const SmallImgCarousel = ({ media }: SmallImgCarouselProps) => {
  const imagesToShow = media && media?.length > 0 ? media : [];

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
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    appendDots: (dots: any) => (
      <div className="block sm:hidden mt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full hover:scale-110 transition-transform" />
    ),
  };

  return (
    <div className="w-full mx-auto relative sm:px-1 group">
      <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold py-4 text-start sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-800">
        TOP PICKS FOR YOU
      </div>

      <Slider {...settings}>
        {imagesToShow?.map((img, index) => (
          <div key={index} className="p-1">
            <div className="border rounded-2xl overflow-hidden shadow-lg transition duration-300 h-full flex flex-col items-center group">
              <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden relative">
                <img
                  src={img?.src}
                  alt={img?.alt || `image-${index}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-3 text-center">
                {img?.content && (
                  <div className="text-xs sm:text-sm tracking-wide text-gray-500 uppercase">
                    {img?.content}
                  </div>
                )}
                {img?.title && (
                  <div className="text-sm sm:text-lg font-semibold text-gray-500 mt-1">
                    {img?.title}
                  </div>
                )}
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
      className="hidden sm:flex absolute top-1/2 right-3 transform -translate-y-1/2 z-20 items-center justify-center w-11 h-11 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full shadow-lg cursor-pointer transition hover:scale-110"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
        alt="Next"
        className="w-4 h-4 filter invert"
      />
    </div>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="hidden sm:flex absolute top-1/2 left-3 transform -translate-y-1/2 z-20 items-center justify-center w-11 h-11 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full shadow-lg cursor-pointer transition hover:scale-110"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        alt="Prev"
        className="w-4 h-4 filter invert"
      />
    </div>
  );
};

export default SmallImgCarousel;
