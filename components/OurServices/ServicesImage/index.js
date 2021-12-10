import Image from "next/image";

// Assets
import img from "assets/Image.png";
import Dots1 from "assets/Services/ServicesDots.svg";

function ServicesImage() {
  return (
    <div className="w-full mb-12 md:mb-0 relative max-w-300px min-h-300px md:max-w-540px md:min-h-650px">
      {/* <div className="rounded-xl mx-auto relative w-154px h-188px md:w-280px md:h-340px ml-3.5 md:ml-14">
        <Image alt="services" layout="fill" className="mx-auto" src={img} />
      </div>
      <div className="rounded-xl mx-auto relative w-110px h-135px md:w-200px md:h-242px -mt-16 mr-3.5 md:-mt-32 md:mr-12">
        <Image alt="services" layout="fill" className="mx-auto" src={img} />
      </div> */}
      <div className="rounded-xl mx-auto relative w-154px h-188px md:w-280px md:h-340px ml-4 md:ml-14 md:mt-20">
        <Image alt="services" layout="fill" className="mx-auto" src={img} />
        <div className="rounded-xl mx-auto relative w-110px h-135px md:w-200px md:h-242px absolute left-88px top-118px md:left-160px md:top-230px">
          <Image alt="services" layout="fill" className="mx-auto" src={img} />
        </div>
      </div>
    </div>
  );
}

export default ServicesImage;
