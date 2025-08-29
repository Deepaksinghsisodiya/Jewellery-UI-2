import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <div>
      <div className="bg-pink-200 py-1">
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
          className="z-1 relative"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="text-center px-2">
              <span className="text-black text-[10px] sm:text-xs md:text-sm font-bold">
                LIMITED TIME ONLY!
              </span>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="text-center px-2 hover:underline decoration-black">
              <span className="text-black text-[10px] sm:text-xs md:text-sm font-bold">
                FREE WATCH STYLING CONSULTATION
              </span>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col sm:flex-row justify-center items-center px-2 gap-1 text-center hover:underline decoration-black">
              <span className="text-black text-[10px] sm:text-xs md:text-sm font-bold">
                COMPLIMENTARY GIFT WRAPPING
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
