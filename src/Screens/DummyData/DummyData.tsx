import DiamondEarRings1 from "../../Assets/DiamondEarRings1.jpg";
import DiamondEarRings2 from "../../Assets/DiamondEarRings2.jpg";
import DiamondEarRings3 from "../../Assets/DiamondEarRings3.jpg";
import DiamondEarRings4 from "../../Assets/DiamondEarRings4.jpg";
import GoldEarRings1 from "../../Assets/GoldEarRings1.jpg";
import GoldEarRings2 from "../../Assets/GoldEarRings2.jpg";
import GoldEarRings3 from "../../Assets/GoldEarRings3.jpg";
import GoldEarRings4 from "../../Assets/GoldEarRings4.jpg";
import DiamondRings1 from "../../Assets/DiamondRing1.jpg";
import DiamondRings2 from "../../Assets/DiamondRing2.jpg";
import DiamondEarringsvideo1 from "../../Assets/DiamondEarringvideo1.mp4";
import DiamondWatch1 from "../../Assets/DiamondWatchGroup1.jpg";
import DiamondWatch2 from "../../Assets/DiamondWatchGroup2.jpg";
import DiamondWatch3 from "../../Assets/DiamondWatchGroup3.jpg";
import DiamondWatch4 from "../../Assets/DiamondWatchGroup4.jpg";
import DiamondWatch from "../../Assets/DiamondWatchSlider02.avif";
import DiamondWatchSlider2 from "../../Assets/DiamondImageSlider2.jpg";
import video1 from "../../Assets/DiamondWatchVideo1.mp4";
import video2 from "../../Assets/DiamondWatchVideo2.mp4";

export const categoryData = [
  {
    id: "1",
    category: "Watches",
    subCategories: [
      {
        id: "1-1",
        name: "All Watches",
        media: {
          carousel: [
            {
              type: "image",
              src: DiamondWatch,
              alt: "Earrings Carousel 1",
            },
            {
              type: "image",
              src: DiamondWatchSlider2,
              alt: "Earrings Carousel 2",
            },
          ],
          imagesComponent: [
            {
              type: "image",
              src: DiamondWatch1,
              alt: "Diamond Watch 1",
              name: "Diamond Watch 1",
            },
            {
              type: "image",
              src: DiamondWatch2,
              alt: "Diamond Watch 1",
              name: "Diamond Watch 2",
            },
            {
              type: "image",
              src: DiamondWatch3,
              alt: "Diamond Watch 1",
              name: "Diamond Watch 3",
            },
            {
              type: "image",
              src: DiamondWatch4,
              alt: "Diamond Watch  1",
              name: "Diamond Watch 4",
            },
          ],
          videoComponent: [{ type: "video", src: video1 }],
          content: {
            title: (
              <>
                Timeless Elegance,
                <br className="hidden md:block" /> Diamond Watches
              </>
            ),
            description: (
              <>
                Discover refined craftsmanship with our latest
                <br className="hidden md:block" />
                collection of diamond watches. Each piece blends
                <br className="hidden md:block" />
                precision with elegance — perfect for layering,
                <br className="hidden md:block" />
                gifting, or collecting.
              </>
            ),
            buttonText: "EXPLORE DIAMOND WATCHES",
            onButtonClick: () => alert("Explore Watches clicked!"),
          },

          middleImageComponent: [
            {
              type: "image",
              src: DiamondWatch1,
              alt: "Earrings Middle 1",
            },
            {
              type: "video",
              src: video1,
            },
            {
              type: "image",
              src: DiamondWatch2,
              alt: "Earrings Middle 2",
            },

            {
              type: "image",
              src: DiamondWatch3,
              alt: "Earrings Middle 1",
            },
            {
              type: "image",
              src: DiamondWatch4,
              alt: "Earrings Middle 2",
            },
            {
              type: "video",
              src: video2,
              alt: "Earrings Middle 1",
            },
          ],
          smallImgCarousel: [
            {
              src: DiamondWatch1,
              alt: "Diamond Watch 1",
              content: "BEST SELLER | DIAMOND WATCH",
              title: "Classic Silver Diamond Watch",
            },
            {
              src: DiamondWatch2,
              alt: "Diamond Watch 2",
              content: "NEW ARRIVAL | DIAMOND WATCH",
              title: "Rose Gold Diamond Watch",
            },
            {
              src: DiamondWatch3,
              alt: "Diamond Watch 3",
              content: "PREMIUM | DIAMOND WATCH",
              title: "Midnight Black Diamond Watch",
            },
            {
              src: DiamondWatch3,
              alt: "Diamond Watch 4",
              content: "LIMITED EDITION | DIAMOND WATCH",
              title: "Blue Sapphire Diamond Watch",
            },
          ],
          recentImg: [
            {
              src: DiamondWatch1,
              alt: "Diamond Watch 1",
              content: "LUXURY TIMEPIECE | BEST SELLER",
              title: "Eternal Diamond Classic Watch",
            },
            {
              src: DiamondWatch2,
              alt: "Diamond Watch 2",
              content: "NEW ARRIVAL | SIGNATURE STYLE",
              title: "Lunar Radiance Diamond Dial",
            },
          ],
          discoverImg: [
            {
              src: DiamondWatch1,
              type: "image",
            },
            {
              src: DiamondWatch2,
              type: "image",
            },
            {
              src: DiamondWatch3,
              type: "image",
            },
            {
              src: DiamondWatch4,
              type: "image",
            },
          ],
        },
      },
    ],
  },
  {
    id: "2",
    category: "Jewelry",
    subCategories: [
      {
        id: "2-1",
        name: "Earrings",
        media: {
          carousel: [
            {
              type: "image",
              src: DiamondEarRings1,
              alt: "Earrings Carousel 1",
            },
            {
              type: "image",
              src: GoldEarRings4,
              alt: "Earrings Carousel 2",
            },
            {
              type: "image",
              src: DiamondEarRings3,
              alt: "Earrings Carousel 1",
            },
            {
              type: "image",
              src: DiamondRings1,
              alt: "Earrings Carousel 1",
            },
            {
              type: "image",
              src: GoldEarRings4,
              alt: "Earrings Carousel 2",
            },
            {
              type: "image",
              src: DiamondRings2,
              alt: "Earrings Carousel 2",
            },
          ],
          imagesComponent: [
            {
              type: "image",
              src: DiamondEarRings1,
              alt: "Earrings Gallery 1",
              name: "Moissanite Fancy Studs 1",
            },
            {
              type: "image",
              src: DiamondEarRings3,
              alt: "Earrings Gallery 1",
              name: "Moissanite Fancy Studs 2",
            },
            {
              type: "image",
              src: DiamondEarRings2,
              alt: "Earrings Gallery 1",
              name: "Moissanite Fancy Studs 3",
            },
            {
              type: "image",
              src: DiamondEarRings4,
              alt: "Earrings Gallery 1",
              name: "Moissanite Fancy Studs 4",
            },
          ],
          videoComponent: [
            {
              type: "video",
              src: DiamondEarringsvideo1,
            },
          ],
          content: {
            title: (
              <>
                Elegant & Shiny,
                <br className="hidden md:block" /> Exclusive Rings
              </>
            ),
            description: (
              <>
                Discover our exquisite collection of rings,
                <br className="hidden md:block" />
                crafted with passion and precision.
                <br className="hidden md:block" />
                Each piece embodies timeless elegance,
                <br className="hidden md:block" />
                perfect for every occasion and style.
              </>
            ),
            buttonText: "SHOP RINGS",
            onButtonClick: () => alert("Explore Rings clicked!"),
          },
          middleImageComponent: [
            {
              type: "image",
              src: DiamondEarRings1,
              alt: "Earrings Middle 1",
            },
            {
              type: "image",
              src: DiamondEarRings4,
              alt: "Earrings Middle 2",
            },
            {
              type: "image",
              src: DiamondEarRings2,
              alt: "Earrings Middle 1",
            },
            {
              type: "image",
              src: DiamondEarRings3,
              alt: "Earrings Middle 2",
            },
            {
              type: "image",
              src: DiamondEarRings4,
              alt: "Earrings Middle 1",
            },
            {
              type: "image",
              src: DiamondEarRings1,
              alt: "Earrings Middle 2",
            },
          ],
          smallImgCarousel: [
            {
              src: GoldEarRings1,
              alt: "Small Earrings 1",
              title: "Gold Classic Earrings",
              content: "Moissanite Fancy Studs 1",
            },
            {
              src: GoldEarRings2,
              alt: "Small Earrings 1",
              title: "Gold Classic Earrings",
              content: "Moissanite Fancy Studs 2",
            },
            {
              src: GoldEarRings3,
              alt: "Small Earrings 2",
              title: "Gold Classic Earrings",
              content: "Moissanite Fancy Studs 3",
            },
            {
              src: GoldEarRings4,
              alt: "Small Earrings 2",
              title: "Gold Classic Earrings",
              content: "Moissanite Fancy Studs 4",
            },
            {
              src: DiamondEarRings1,
              alt: "Small Earrings 1",
              title: "Diamond Earrings",
              content: "Moissanite Fancy Studs 1",
            },
            {
              src: DiamondEarRings2,
              alt: "Small Earrings 1",
              title: "Diamond Earrings",
              content: "Moissanite Fancy Studs 2",
            },
            {
              src: DiamondEarRings3,
              alt: "Small Earrings 2",
              title: "Diamond Earrings",
              content: "Moissanite Fancy Studs 3",
            },
            {
              src: DiamondEarRings4,
              alt: "Small Earrings 2",
              title: "Diamond Earrings",
              content: "Moissanite Fancy Studs 4",
            },
            {
              src: DiamondRings1,
              alt: "Small Earrings 1",
              title: "Diamond Rings",
              content: "Moissanite Fancy Studs 1",
            },
            {
              src: DiamondRings2,
              alt: "Small Earrings 1",
              title: "Diamond Rings",
              content: "Moissanite Fancy Studs 2",
            },
            {
              src: DiamondRings1,
              alt: "Small Earrings 2",
              title: "Diamond Rings",
              content: "Moissanite Fancy Studs 3",
            },
            {
              src: DiamondRings2,
              alt: "Small Earrings 2",
              title: "Diamond Rings",
              content: "Moissanite Fancy Studs 4",
            },
          ],
          recentImg: [
            {
              src: GoldEarRings1,
              alt: "Recent Earrings 1",
              title: "Gold Classic Earrings",
              content: "Moissanite Fancy Studs 1",
            },
            {
              src: GoldEarRings2,
              alt: "Recent Earrings 1",
              title: "Gold Classic Earrings",
              content: "Moissanite Fancy Studs 2",
            },
          ],
          discoverImg: [
            {
              src: GoldEarRings1,
              type: "image",
            },
            {
              src: GoldEarRings3,
              type: "image",
            },
            {
              src: GoldEarRings2,
              type: "image",
            },
            {
              src: GoldEarRings4,
              type: "image",
            },
          ],
        },
      },
    ],
  },
];

export const sections = [
  {
    title: "Shop",
    links: [
      // "New Arrivals",
      // "Luxury Watches",
      // "Men’s Watches",
      // "Women’s Watches",
      // "Smart Watches",
      // "Limited Editions",
      "Custom Designs",
      "Gift a Watch",
      "Gift Cards",
    ],
  },
  {
    title: "Customer Service",
    links: [
      // "FAQs",
      // "Order Tracking",
      // "Shipping Info",
      "Returns & Exchanges",
      // "Size Guide",
      // "Watch Care Tips",
      "Warranty & Repairs",
      "Contact Support",
    ],
  },
  {
    title: "Services",
    links: [
      "EMI Options",
      //  "Insurance Plans",
      "Gift Wrapping",
    ],
  },
  // {
  //   title: "Manage",
  //   links: [
  //     "My Account",
  //     "My Orders",
  //     "Saved Items",
  //     "Wishlist",
  //     "Track Order",
  //   ],
  // },
  {
    title: "About Us",
    links: [
      "Our Story",
      "Craftsmanship",
      "Store Locator",
      // "Authorized Dealers",
      // "Careers",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];
