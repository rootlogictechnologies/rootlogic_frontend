import Image from "next/image";

// Assets
import Check from "assets/Services/Check.svg";

function ServicesPoints({ points }) {
  return (
    <div className="w-full md:w-10/12 mx-auto py-16 md:px-4">
      <div className="w-full flex flex-row flex-wrap">
        {points.map((item) => {
          return (
            <div className="md:px-2 py-3 md:py-4 w-full md:w-1/2 flex flex-row items-center justify-start space-x-2">
              <div className="w-4 h-4">
                <Image src={Check} alt="check" />
              </div>
              <p className="font-semibold text-rl-dark-grey text-ms leading-5 text-left">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesPoints;
