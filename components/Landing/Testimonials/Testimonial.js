import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import Quote from "assets/Quote.svg";
import Demo from "assets/DemoMember.png";

function Testimonial({ testimonials }) {
  const [list, setList] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState();
  const [toolTipOffset, setToolTipOffset] = useState("50%");
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: list.length > 3 ? 4 : list.length || 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: list.length > 2 ? 3 : list.length || 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: list.length > 1 ? 2 : list.length || 1,
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
    setSelectedTestimonial(temp[0]);
    getOffset();
  }, [testimonials]);

  const getOffset = () => {
    let divId = `person-${selectedTestimonial?.id}`;
    let person = document.getElementById(divId.trim());
    if (person) {
      let personOffset = person.offsetLeft;
      let personWidth = person.offsetWidth;
      let offset = personOffset + personWidth / 2;
      setToolTipOffset(`${offset}px`);
    } else {
      setToolTipOffset("50%");
    }
  };

  useEffect(() => {
    getOffset();
  }, [selectedTestimonial]);

  return (
    <>
      <div className="testimonial mx-auto max-w-5xl bg-white rounded-xl p-7 md:py-10 md:px-8">
        <div className="w-7 h-7 md:w-8 md:h-8 absolute relative">
          <Image src={Quote} alt="Quote" layout="fill" />
        </div>
        <div className="font-normal ml-10 md:ml-14 -mt-7 md:-mt-8 text-sm md:text-md leading-5 md:leading-7 text-rl-dark-grey">
          {selectedTestimonial?.description}
        </div>
        <div className="testimonial-tooltip" style={{ left: toolTipOffset }} />
      </div>
      <div className="mt-14">
        <Slider {...settings}>
          {list &&
            list.length > 0 &&
            list.map((item, index) => {
              return (
                <div
                  id={`person-${item?.id}`}
                  className="flex flex-row items-center testimonial-people max-w-max mx-auto cursor-pointer transform transition ease-in-out mb-8"
                  key={index}
                  onClick={() => {
                    setSelectedTestimonial(item);
                  }}
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
                    className={`${
                      item.id == selectedTestimonial.id ? "flex" : "hidden"
                    } flex-col items-start ml-4 cursor-pointer`}
                  >
                    <h1 className="font-bold text-base md:text-md leading-6 md:leading-7 text-rl-dark-grey cursor-pointer">
                      {item?.writer}
                    </h1>
                    <h2 className="font-normal text-xs md:text-sm leading-4 md:leading-6 text-rl-dark-grey cursor-pointer">
                      {item?.position}
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
