import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import Quote from "assets/Quote.svg";

function Testimonial({ testimonials }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[1]
  );

  return (
    <>
      <div className="mx-auto max-w-5xl bg-white rounded-xl p-7 md:py-10 md:px-8">
        <div className="w-7 h-7 md:w-8 md:h-8 absolute relative">
          <Image src={Quote} alt="Quote" layout="fill" />
        </div>
        <div className="font-normal ml-10 md:ml-14 -mt-7 md:-mt-8 text-sm md:text-md leading-5 md:leading-7 text-rl-dark-grey">
          {selectedTestimonial.testimonial}
        </div>
      </div>
      <div className="mt-14">
        <Slider {...settings}>
          {testimonials.map((item) => {
            return (
              <div
                className="flex flex-row items-center testimonial max-w-max mx-auto cursor-pointer transform transition ease-in-out"
                key={item.id}
                onClick={() => {
                  setSelectedTestimonial(item);
                }}
              >
                <div className="h-11 w-11 md:h-16 md:w-16 rounded-full relative mx-auto cursor-pointer">
                  <Image
                    src={item.image}
                    alt="Person"
                    layout="fill"
                    className="rounded-full cursor-pointer"
                  />
                </div>
                <div
                  className={`${
                    item.id == selectedTestimonial.id ? "flex" : "hidden"
                  } flex-col items-start ml-4 cursor-pointer`}
                >
                  <h1 className="font-bold text-base md:text-md leading-6 md:leading-7 text-rl-dark-grey cursor-pointer">
                    {item.name}
                  </h1>
                  <h2 className="font-normal text-xs md:text-sm leading-4 md:leading-6 text-rl-dark-grey cursor-pointer">
                    {item.title}
                  </h2>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Testimonial;
