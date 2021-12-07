// Data
import { solutions } from "helpers/Data";

// Component
import SolutionsCard from "./SolutionsCard";

function Solutions() {
  return (
    <div className="md:mb-4">
      <div className="py-14 md:py-20 mx-auto px-7 sm:px-6 lg:px-8 max-w-6xl">
        <div className="w-full flex flex-col items-center space-y-20">
          <h1 className="font-bold text-4xl md:text-5xl leading-snug text-rl-dark-grey text-center">
            Solutions focussed on people
          </h1>
          <div className="w-full container mx-auto grid grid-cols-1 smd:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
            {solutions.map((item) => {
              return <SolutionsCard {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
