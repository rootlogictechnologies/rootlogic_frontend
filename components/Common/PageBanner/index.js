import Image from "next/image";

// Component
import Heading from "../Heading";

import img from "assets/Banner/about.png";

export default function PageBanner({ image, heading = "", description = "" }) {
  return (
    <div>
      <div className="block w-screen h-32 md:h-80 relative">
        <Image
          className="h-32 md:h-80 w-full object-cover"
          src={image?.url || img}
          layout="fill"
          alt="Page Banner"
        />
      </div>
      <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
        <div className="flex flex-col items-center md:items-start space-y-5 text-center md:text-left">
          <Heading heading={heading} />
          <p className="font-normal leading-7 text-base md:text-md text-rl-dark-grey">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
