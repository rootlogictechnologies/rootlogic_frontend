import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function LocationsCards({ data }) {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    let temp = [];
    data?.source?.data &&
      data?.source?.data.length > 0 &&
      data?.source?.data.map((item) => {
        temp.push(item?.attributes);
      });
    setList(temp);
  }, [data]);

  return (
    <div className="w-full mx-auto block md:hidden">
      {/* <Slider {...settings}> */}

      {list &&
        list.length > 0 &&
        list.map((item) => {
          return (
            <div class="my-4 p-4">
              <div className="bg-white p-3 rounded-lg shadow-md ">
                <h1 className="font-poppins text-xl leading-8 font-semibold text-rl-dark-grey">
                  {item?.heroHeading}
                </h1>
                <p className="font-poppins font-normal text-xs leading-4 text-rl-dark-grey mt-2">
                  {item?.subHeading}
                </p>
              </div>
            </div>
          );
        })}
      {/* </Slider> */}
    </div>
  );
}

export default LocationsCards;
