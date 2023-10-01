import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React, { useEffect } from "react";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { TaxonomyType } from "data/types";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import sectionPopGrow from "containers/PageHome/sectionPopGrow";
import SectionHero2 from "components/SectionHero2/SectionHero2";
//
import logo1 from "images/builders/Adani-Realty-Logo.webp";
import logo1Dark from "images/logos/dark/1.png";
//
import logo2 from "images/builders/Tata-Housing-min.webp";
import logo2Dark from "images/logos/dark/2.png";
//
import logo3 from "images/builders/DLF-Logo.webp";
import logo3Dark from "images/logos/dark/3.png";
//
import logo4 from "images/builders/Suncity-Logo.webp";
import logo4Dark from "images/logos/dark/4.png";
//
import logo5 from "images/builders/SVH-Logo.webp";
import logo5Dark from "images/logos/dark/5.png";
//
import HIW1img from "images/HIT_1.webp";
import HIW2img from "images/HIT_2.webp";
import HIW3img from "images/HIT_3.webp";
import HIW1imgDark from "images/HIW2-1-dark.png";
import HIW2imgDark from "images/HIW2-2-dark.png";
import HIW3imgDark from "images/HIW2-3-dark.png";
import rightImgPng from "images/our-features-2.png";

import SectionGridFeatureProperty from "./SectionGridFeatureProperty";
import SectionDowloadApp from "./SectionDowloadApp";

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "222",
    href: "/listing-stay",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome2() {
  // CUSTOM THEME STYLE
  useEffect(() => {
    const $body = document.querySelector("body");
    if (!$body) return;
    $body.classList.add("theme-cyan-blueGrey");
    return () => {
      $body.classList.remove("theme-cyan-blueGrey");
    };
  }, []);

  return (
    <div className="nc-PageHome2 relative overflow-hidden">
      {/* GLASSMOPHIN */}
      {/* <BgGlassmorphism /> */}

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <SectionHero2 className="" />

        {/* SECTION 1 */}
        <div className="ncSectionLogos grid grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-16">
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo1} alt="logo1" />
            <img className="hidden dark:block" src={logo1} alt="logo1" />
          </div>
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo4} alt="logo4" />
            <img className="hidden dark:block" src={logo4} alt="logo4" />
          </div>
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo2} alt="logo2" />
            <img className="hidden dark:block" src={logo2} alt="logo2" />
          </div>
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo3} alt="logo3" />
            <img className="hidden dark:block" src={logo3} alt="logo3" />
          </div>

          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo5} alt="logo5" />
            <img className="hidden dark:block" src={logo5} alt="logo5" />
          </div>
        </div>

        {/* SECTION */}
        <SectionHowItWork
          data={[
            {
              id: 1,
              img: HIW1img,
              imgDark: HIW1img,
              title: "Property Buying",
              desc: "We make buying a property just as easy as going out for shopping, with the precise details of your requirement you can search the available properties.",
            },
            {
              id: 2,
              img: HIW2img,
              imgDark: HIW2img,
              title: "Home Loans",
              desc: "Backing out because of endless hassle of applying for a home loan? We provide Home loan facilitation through major banks across India.",
            },
            {
              id: 3,
              img: HIW3img,
              imgDark: HIW3img,
              title: "Property Management Services",
              desc: "We work closely with the owners assisting them in liquidating or generating rental yields from their assets",
            },
          ]}
        />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeatureProperty />
        </div>

        {/* SECTION2 */}
        <SectionOurFeatures type="type2" rightImg={rightImgPng} />

        {/* SECTION
        <SectionDowloadApp /> */}

        {/* SECTION 1 */}
        {/* <SectionSliderNewCategories
          categories={DEMO_CATS_2}
          categoryCardType="card4"
          itemPerRow={4}
          heading="Suggestions for discovery"
          subHeading="Popular places to stay that Chisfis recommends for you"
          uniqueClassName="PageHome2_s1"
        /> */}

        {/* SECTION */}
        {/* <div className="relative py-16">
          <BackgroundSection className="bg-neutral-100 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox boxCard="box2" />
        </div> */}

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          heading="Featured Collections"
          subHeading="Exclusive Properties based on your preferred category"
          categoryCardType="card5"
          itemPerRow={5}
          uniqueClassName="PageHome2_s2"
        />

        {/* SECTION */}
        {/* <SectionSubscribe2 /> */}
      </div>
    </div>
  );
}

export default PageHome2;
