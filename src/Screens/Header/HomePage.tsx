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
import Footer from "../../Footer/Footer";
import TermsAndConditions from "../Components/TermsAndCondition/TermsAndCondition";
import MetaTags from "../../MetaTags/MetaTags";
import DiscoverComponent from "../DiscoverComponent/DiscoverComponent";
import { useState } from "react";
import { X } from "lucide-react";

const HomePage = () => {
  const [showTerms, setShowTerms] = useState(false);
  {
    showTerms && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-4 w-[95%] sm:w-[60%] max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setShowTerms(false)}
            aria-label="Close"
            className="absolute right-4 top-2 p-1 rounded-full hover:bg-red-500 transition-colors"
          >
            <X className="h-5 w-5 text-black hover:text-white" />
          </button>
          <TermsAndConditions />
        </div>
      </div>
    );
  }
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
        <div>
          <SmallImgCarosel />
        </div>

        <VideoComponent />
      </div>

      <DiscoverComponent title="DISCOVER" subtitle="GK JEWELERS" />

      <div className="w-[90%] mx-auto py-1">
        <SingleSlideCarousel />
      </div>

      <div>
        <RecentImg />
      </div>
      <Footer onShowTerms={() => setShowTerms(true)} />
    </>
  );
};

export default HomePage;
