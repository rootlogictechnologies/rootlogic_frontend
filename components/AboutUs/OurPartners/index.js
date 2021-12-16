import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Component
import Heading from "components/Common/Heading";

// Partners' Logos
import CaaryaLogo from "assets/Logo/CaaryaLogo.svg";
import Synctatic from "assets/Logo/Synctatic.svg";
import DigitalPi from "assets/Logo/DigitalPi.svg";

// Icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

function OurPartners() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    prevArrow: (
      <div className="focus:outline-none">
        <ChevronLeftIcon className="text-rl-dark-grey h-6 w-6 mx-auto hover:text-rl-red transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="focus:outline-none">
        <ChevronRightIcon className="text-rl-dark-grey h-6 w-6 mx-auto hover:text-rl-red transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
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
    <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
      <div className="w-full flex flex-col items-center space-y-7 md:space-y-10">
        <Heading heading="Our Partners" />
        <div className="w-full border-t border-b border-rl-light py-11">
          <Slider {...settings}>
            <div className="">
              <div className="h-10 w-36 pt-2 mx-auto">
                <Image
                  src={CaaryaLogo}
                  alt="Caarya Logo"
                  layout="fixed"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="">
              <div className="h-10 w-36 pt-2 mx-auto">
                <Image
                  src={Synctatic}
                  alt="Synctatic Logo"
                  layout="fixed"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="">
              <div className="h-10 w-36 pt-2 mx-auto">
                <Image
                  src={DigitalPi}
                  alt="DigitalPi Logo"
                  layout="fixed"
                  className="mx-auto"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
