import Image from "next/image";
// Case Studies Demo Image
import DemoCase from "assets/DemoCases.png";

function CaseStudiesCard({ media, title, description }) {
  return (
    <div className="group relative w-260px md:w-350px mx-auto px-2">
      <div className="w-260px mlg:w-350px relative h-260px md:h-350px bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <Image
          src={media?.data[0]?.attributes?.url || DemoCase}
          alt="Case Study"
          layout="fill"
        />
      </div>
      <div className="mt-4 space-y-3">
        <h3 className="font-semibold text-md md:text-xl leading-7 md:leading-9 text-rl-dark-grey">
          <span aria-hidden="true" className="absolute inset-0" />
          {title}
        </h3>
        <p className="font-normal leading-6 md:leading-7 text-base md:text-md text-rl-dark-grey line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CaseStudiesCard;
