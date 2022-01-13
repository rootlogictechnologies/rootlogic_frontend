import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Component
import Heading from "components/Common/Heading";

// Partners' Logos
import CaaryaLogo from "assets/Logo/CaaryaLogo.svg";

// Icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Logos from "components/Common/Logos";

function OurPartners({ heading, list }) {
  const [LogoList, setLogoList] = useState([]);

  useEffect(() => {
    let temp = [];
    list?.data &&
      list?.data.length > 0 &&
      list?.data.map((item) => {
        temp.push(item?.attributes?.media?.data?.attributes);
      });
    setLogoList(temp);
  }, [list]);

  const settings = {
    dots: false,
    arrows: false,
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
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
      <div className="w-full flex flex-col items-center space-y-7 md:space-y-10">
        <Heading heading={heading} />
        <div className="w-full border-t border-b border-rl-light py-11">
          <Slider {...settings}>
            {LogoList &&
              LogoList.length > 0 &&
              LogoList.map((item, index) => {
                return (
                  <div className="mb-5">
                    <Logos image={item?.url} index={index} />
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
