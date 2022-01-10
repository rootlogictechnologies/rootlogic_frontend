import Image from "next/image";

// Assets
import img from "assets/Image.png";
import BgGraphic from "assets/Services/ServicesBg.svg";

function ServicesImage({ images }) {
  return (
    <div className="w-full mb-12 md:mb-0 pt-7 relative max-w-300px min-h-300px md:max-w-540px md:min-h-650px .bg-services-graphic">
      <Image src={BgGraphic} layout="fill" />
      <div className="rounded-xl mx-auto relative w-154px h-188px md:w-280px md:h-340px -ml-20 xs:-ml-10 md:ml-14 md:mt-20">
        <Image
          alt="services"
          layout="fill"
          className="mx-auto"
          src={(images[0] && images[0]?.attributes?.url) || img}
        />
        <div className="rounded-xl mx-auto relative w-110px h-135px md:w-200px md:h-242px absolute left-88px top-118px md:left-160px md:top-230px">
          <Image
            alt="services"
            layout="fill"
            className="mx-auto"
            src={(images[1] && images[1]?.attributes?.url) || img}
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesImage;
