import React from "react";
import Slider from "react-slick";
import { Check, CreditCard, Heart, Pencil, Store } from "lucide-react";

const SingleSlideCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots: any) => (
      <div className="mt-8">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),

    customPaging: () => (
      <div className="w-2 h-2 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full hover:scale-110 transition-transform" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, arrows: false },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  const items = [
    {
      icon: <Heart size={30} />,
      title: "My GK JEWELERS",
      desc: "Save 10% + Earn Points with your purchases",
    },
    {
      icon: <CreditCard size={30} />,
      title: "GK Credit Card",
      desc: "Open a GK Jewelers Credit Card & Save 20% on your first qualifying purchase today",
    },
    {
      icon: <Pencil size={30} />,
      title: "Student Discount",
      desc: "Eligible students save 10% with Student Beans or ID.me",
    },
    {
      icon: <Check size={30} />,
      title: "Military, Veterans, First Responders, Teachers, Nurses",
      desc: "Get verified with ID.me and save 10% online",
    },
    {
      icon: <Store size={30} />,
      title: "Free In-Store Pickup",
      desc: "Buy Online, Pickup In-Store within 2 hours",
    },
    {
      icon: <CreditCard size={30} />,
      title: "Sparkle Now, Pay Later",
      desc: "Interest-free installments with Afterpay or Klarna",
    },
    {
      icon: <CreditCard size={30} />,
      title: "Free Returns",
      desc: "Prepaid shipping label included with every order",
    },
  ];

  return (
    <div className="w-full px-2 sm:px-1 py-6">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-1 flex justify-center">
            <div className="w-full max-w-lg bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center justify-center h-60 sm:h-64 md:h-72 text-center gap-4">
              {/* Icon with glow background */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-lg">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold tracking-wide text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed px-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SingleSlideCarousel;
