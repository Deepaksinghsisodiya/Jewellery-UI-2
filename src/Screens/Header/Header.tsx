import "swiper/css";
import ImagesComponent from "../ImagesComponent/ImagesComponent";
import SmallImgCarosel from "../../SmallImgCarosel/SmallImgCarosel";
import SingleSlideCarousel from "../../SingleSlideCurosel/SingleSlideCurosel";
import RecentImg from "../RecentImg/RecentImg";
import Carousel from "../../Curosel/Curosel";
import SwiperComponent from "../Components/SwiperComponent/SwiperComponent";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";
import MiddleImageComponent from "../Components/MiddleImageComponent/MiddleImageComponent";
import VideoComponent from "../Components/VideoComponent/VideoComponent";
import OfferBanner from "../Components/OfferBanner/OfferBanner";
import image1 from "../../Assets/DiamondWatchGroup1.jpg";
import image2 from "../../Assets/DiamondWatchGroup2.jpg";
import image3 from "../../Assets/DiamondWatchGroup3.jpg";
import video4 from "../../Assets/DiamondWatchVideo3.mp4";
import MetaTags from "../../MetaTags/MetaTags";

const Header = () => {
  return (
    <>
      <MetaTags page="home" />
      <div>
        <SwiperComponent />
        <NavbarComponent />
        <div>
          <div className="border-b border-gray-300"></div>
          <div className="w-[90%] mx-auto">
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

        <MiddleImageComponent />
      </div>

      <div className="w-[90%] mx-auto">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-2 sm:py-3 md:py-2 text-start sm:text-left">
          TOP PICKS FOR YOU
        </div>
        <div>
          <SmallImgCarosel />
        </div>

        <VideoComponent />
      </div>

      <div>
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
          {/* Image 1 */}
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px] overflow-hidden rounded-lg group">
            <img
              src={image1}
              alt="Image 1"
              className="w-full h-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
            />
          </div>

          {/* Image 2 */}
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px] overflow-hidden rounded-lg group">
            <img
              src={image2}
              alt="Image 2"
              className="w-full h-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:-rotate-1"
            />
          </div>

          {/* Video */}
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px] overflow-hidden rounded-lg group">
            <video
              src={video4}
              className="w-full h-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
              autoPlay
              loop
              muted
            />
          </div>

          {/* Image 3 */}
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px] overflow-hidden rounded-lg group">
            <img
              src={image3}
              alt="Image 3"
              className="w-full h-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:-rotate-1"
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
    </>
  );
};

export default Header;
