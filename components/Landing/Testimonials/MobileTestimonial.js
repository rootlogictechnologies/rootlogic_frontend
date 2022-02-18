import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import Quote from "assets/Quote.svg";
import Demo from "assets/DemoMember.png";

function MobileTestimonial({ testimonials }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    let temp = [];
    testimonials?.data &&
      testimonials?.data.length > 0 &&
      testimonials?.data.map((item) => {
        let temp1 = item?.attributes;
        temp1["id"] = item?.id;
        temp.push(temp1);
      });
    setList(temp);
  }, [testimonials]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <Slider {...settings}>
        {list &&
          list.length > 0 &&
          list.map((item, index) => {
            return (
              <>
                <div className="testimonial-mobile mx-2 max-w-5xl bg-white rounded-xl p-7 md:py-10 md:px-8">
                  <div className="w-7 h-7 md:w-8 md:h-8 absolute relative">
                    <Image src={Quote} alt="Quote" layout="fill" />
                  </div>
                  <div className="font-normal ml-10 md:ml-14 -mt-7 md:-mt-8 text-sm md:text-md leading-5 md:leading-7 text-rl-dark-grey">
                    {item?.description}
                  </div>
                  <div className="testimonial-tooltip-mobile" />
                </div>
                <div className="mt-14">
                  <div
                    className="flex flex-row items-center testimonial max-w-max mx-auto cursor-pointer transform transition ease-in-out mb-8"
                    key={index}
                  >
                    <div className="h-11 w-11 md:h-16 md:w-16 rounded-full relative mx-auto cursor-pointer">
                      <Image
                        src={Demo}
                        alt="Person"
                        layout="fill"
                        className="rounded-full cursor-pointer"
                      />
                    </div>
                    <div
                      className={`flex flex-col items-start ml-4 cursor-pointer`}
                    >
                      <h1 className="font-bold text-base md:text-md leading-6 md:leading-7 text-rl-dark-grey cursor-pointer">
                        {item?.writer}
                      </h1>
                      <h2 className="font-normal text-xs md:text-sm leading-4 md:leading-6 text-rl-dark-grey cursor-pointer">
                        {item?.position}
                      </h2>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </Slider>
    </>
  );
}

export default MobileTestimonial;
