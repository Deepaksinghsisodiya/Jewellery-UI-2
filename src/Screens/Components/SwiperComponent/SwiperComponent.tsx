import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <div>
      <div className="bg-gray-200 py-1">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={false}
          navigation={false}
          modules={[Autoplay]}
          className="sm:block z-1 relative"
        >
          <SwiperSlide>
            <div className="text-center text-md gap-1">
              <span className="text-black text-xs sm:text-xs md:text-sm font-bold">
                LIMITED TIME ONLY!
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center hover:underline decoration-black">
              <span className="text-black text-xs sm:text-xs md:text-sm font-bold">
                FREE WATCH STYLING CONSULTATION
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center items-center hover:underline decoration-black gap-1 text-center">
              <span className="text-black text-xs sm:text-xs md:text-sm font-bold">
                COMPLIMENTARY GIFT WRAPPING
              </span>
              <span className="text-black text-xs sm:text-xs md:text-sm">
                for all luxury diamond watch purchases
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
