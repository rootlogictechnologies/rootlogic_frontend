import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Component
import Heading from "components/Common/Heading";
import CaseStudiesCard from "./CaseStudiesCard";

// Icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

function CaseStudies({ list = [] }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    prevArrow: (
      <div className="focus:outline-none">
        <div className="z-10 w-16 h-16 hidden sm:flex rounded-full bg-white shadow-lg  flex-row items-center justify-center">
          <ChevronLeftIcon className="text-rl-dark-grey h-6 w-6 mx-auto hover:text-rl-red transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer" />
        </div>
      </div>
    ),
    nextArrow: (
      <div className="focus:outline-none">
        <div className="z-10 w-16 h-16 hidden sm:flex rounded-full bg-white shadow-lg  flex-row items-center justify-center">
          <ChevronRightIcon className="text-rl-dark-grey h-6 w-6 mx-auto hover:text-rl-red transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer" />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 658,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="ml-3 mr-10 px-7 lg:px-8 py-12 md:py-20 max-w-6xl xl:mx-auto">
      <div className="w-full flex flex-col items-center space-y-8 md:space-y-10">
        <Heading heading="Case Studies" />

        <div className="w-full">
          <Slider {...settings}>
            {list.map((cases) => {
              return <CaseStudiesCard {...cases} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
