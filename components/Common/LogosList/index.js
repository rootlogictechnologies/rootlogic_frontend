import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Component
import Logos from "components/Common/Logos";

// Partners' Logos
import CaaryaLogo from "assets/Logo/CaaryaLogo.svg";

function LogosList({ list }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: Math.min(list.length, 5),
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(list.length, 4),
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: Math.min(list.length, 3),
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(list.length, 2),
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-transparent">
      <div className="py-12 px-7 lg:px-8">
        <div className="grid grid-cols-1">
          <Slider {...settings}>
            {list &&
              list.length > 0 &&
              list.map((item, index) => {
                return <Logos image={item?.url || CaaryaLogo} index={index} />;
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default LogosList;
