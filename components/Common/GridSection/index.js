import Link from "next/link";
import Heading from "../Heading";

// Component
import GridCard from "./GridCard";

function GridSection({ heading, list, bgColor, isCTA, textColor, cardHeight }) {
  return (
    <div className={`${bgColor}`}>
      <div className="py-14 md:py-20 mx-auto px-7 lg:px-8 max-w-6xl">
        <div className="w-full flex flex-col items-center space-y-10">
          <Heading heading={heading} textColor={textColor} />
          <div className="w-full container mx-auto grid grid-cols-1 smd:grid-cols-2 lg:grid-cols-3 gap-7">
            {list.map((item) => {
              return <GridCard {...item} cardHeight={cardHeight} />;
            })}
          </div>
          {isCTA && (
            <div className="mt-10 sm:max-w-lg sm:mx-auto text-left lg:mx-0">
              <Link href="/services">
                <button className="bg-transparent text-white font-semibold text-md text-center px-12 py-2.5 border-2 border-white rounded-full cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out">
                  View All
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GridSection;
