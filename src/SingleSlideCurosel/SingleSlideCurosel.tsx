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
      <div className="mt-4">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const items = [
    {
      icon: <Heart size={40} />,
      title: "My GK JEWELERS",
      desc: "Save 10% + Earn Points with your purchases",
    },
    {
      icon: <CreditCard size={40} />,
      title: "GK Credit Card",
      desc: "Open a GK Jewelers Credit Card & Save 20% of your first qualifying purchase today",
    },
    {
      icon: <Pencil size={40} />,
      title: "Student Discount",
      desc: "Eligible students save 10% with student Beans or ID.me",
    },
    {
      icon: <Check size={40} />,
      title:
        "Military & Veterans, First Responders, Teachers, Students, Nurses",
      desc: "Get verified with ID.me and save 10% online",
    },
    {
      icon: <Store size={40} />,
      title: "Free in Store Pickup",
      desc: "Buy Online, Pickup In-Store within 2 hours",
    },
    {
      icon: <CreditCard size={40} />,
      title: "Sparkle Now, Pay Later",
      desc: "Buy now and pay later, Interest-free with Afterpay or Klarna",
    },
    {
      icon: <CreditCard size={40} />,
      title: "Free Returns",
      desc: "Prepaid shipping label included with every order.",
    },
  ];

  return (
    <div className="w-full px-2 sm:px-4 py-1">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2 flex justify-center">
            <div className="w-full max-w-xs bg-gray-200 text-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center justify-center h-60 sm:h-64 md:h-72 text-center gap-3">
              <div className="text-primary">{item.icon}</div>
              <h3 className="text-sm sm:text-base font-semibold px-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 px-3">
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
