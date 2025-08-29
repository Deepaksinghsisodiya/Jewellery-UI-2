import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import Carousel from "../../../Curosel/Curosel";
import ImagesComponent from "../../ImagesComponent/ImagesComponent";
import MiddleImageComponent from "../MiddleImageComponent/MiddleImageComponent";
import SmallImgCarosel from "../../../SmallImgCarosel/SmallImgCarosel";
import VideoComponent from "../VideoComponent/VideoComponent";
import DiscoverComponent from "../../DiscoverComponent/DiscoverComponent";
import SingleSlideCarousel from "../../../SingleSlideCurosel/SingleSlideCurosel";
import RecentImg from "../../RecentImg/RecentImg";
import Footer from "../../../Footer/Footer";
import TermsAndConditions from "../TermsAndCondition/TermsAndCondition";
import { X } from "lucide-react";
import OfferBanner from "../OfferBanner/OfferBanner";
import { categoryData } from "../../DummyData/DummyData";

const DynamicHomePage = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [category, setCategory] = useState<any>(null);
  const [subCategory, setSubCategory] = useState<any>(null);

  const { catId, subCatId } = useParams();

  useEffect(() => {
    const defaultCategory = categoryData[0];
    const defaultSubCategory = defaultCategory.subCategories[0];

    const currentCategory =
      categoryData.find((cat) => String(cat.id) === String(catId)) ||
      defaultCategory;

    const currentSubCategory =
      currentCategory.subCategories.find(
        (sub) => String(sub.id) === String(subCatId)
      ) || defaultSubCategory;

    setCategory(currentCategory);
    setSubCategory(currentSubCategory);
  }, [catId, subCatId]);

  if (!category || !subCategory) return null;

  return (
    <>
      {showTerms && (
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
      )}

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
          <Carousel media={subCategory?.media?.carousel} />
        </div>

        <ImagesComponent media={subCategory?.media?.imagesComponent} />
        <MiddleImageComponent
          media={subCategory?.media?.middleImageComponent}
        />

        <div className="w-[90%] mx-auto">
          <SmallImgCarosel media={subCategory?.media?.smallImgCarousel} />
          <VideoComponent
            key={subCategory?.id} 
            media={subCategory?.media?.videoComponent}
            content={subCategory?.media?.content} // यहाँ ध्यान दें कि content media के अंदर है
          />
        </div>

        <DiscoverComponent
          title="DISCOVER"
          subtitle="GK JEWELERS"
          media={subCategory?.media?.discoverImg}
        />

        <div className="w-[90%] mx-auto py-1">
          <SingleSlideCarousel />
        </div>

        <RecentImg media={subCategory?.media?.recentImg} />

        <Footer onShowTerms={() => setShowTerms(true)} />
      </div>
    </>
  );
};

export default DynamicHomePage;
