import "swiper/css";
import ImagesComponent from "../ImagesComponent/ImagesComponent";
import SmallImgCarosel from "../../SmallImgCarosel/SmallImgCarosel";
import SingleSlideCarousel from "../../SingleSlideCurosel/SingleSlideCurosel";
import RecentImg from "../RecentImg/RecentImg";
import Carousel from "../../Curosel/Curosel";
import Footer from "../../Footer/Footer";
import SwiperComponent from "../Components/SwiperComponent/SwiperComponent";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";
import MiddleImageComponent from "../Components/MiddleImageComponent/MiddleImageComponent";
import VideoComponent from "../Components/VideoComponent/VideoComponent";
import OfferBanner from "../Components/OfferBanner/OfferBanner";
const Header = () => {
  return (
    <>
      <div>
        <SwiperComponent />
        <NavbarComponent />
        <div>
          <div className="border-b border-gray-300"></div>
          <div className="w-[90%] mx-auto hidden sm:block">
            <OfferBanner />
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-4">
          <Carousel />
        </div>

        {/*6 Image */}
        <div>
          <ImagesComponent />
        </div>

        {/* for every text and images */}
        <MiddleImageComponent />
      </div>

      <div className="w-[90%] mx-auto">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-2 sm:py-3 md:py-4 text-start sm:text-left">
          TOP PICKS FOR YOU
        </div>
        <div>
          <SmallImgCarosel />
        </div>

        <VideoComponent />
      </div>

      <div>
        {/* Heading */}
        <div className="w-[90%] mx-auto flex flex-col sm:block items-start sm:items-start text-start sm:text-left">
          <div className="text-4xl sm:text-4xl font-bold inline-block">
            DISCOVER
          </div>
          <div className="text-5xl sm:text-6xl font-bold mt-1 sm:mt-0 inline-block sm:block">
            GK JEWELERS
          </div>
        </div>

        {/* Media Grid */}
        <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 py-10">
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px]">
            <img
              src="https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup1_q50eqy.jpg"
              alt="Watch 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px]">
            <img
              src="https://res.cloudinary.com/dov9enaie/image/upload/v1752208444/DiamondWatchGroup2_h2w7ls.jpg"
              alt="Watch 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px]">
            <video
              src="https://res.cloudinary.com/dov9enaie/video/upload/v1752209321/DiamondWatchVideo3_td9fyk.mp4"
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px]">
            <img
              src="https://res.cloudinary.com/dov9enaie/image/upload/v1752208414/DiamondWatchGroup3_yzkmiw.jpg"
              alt="Watch 4"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto py-1">
        <SingleSlideCarousel />
      </div>

      <div>
        <RecentImg />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Header;
