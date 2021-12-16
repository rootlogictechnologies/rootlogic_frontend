import Image from "next/image";

// Assets
import Check from "assets/Services/Check.svg";

function HiringTimeline({ list }) {
  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
          <div className="relative pb-6">
            {index !== list.length - 1 ? (
              <span
                className="absolute top-4 left-4 -ml-px h-full w-0.5 border-l-2 border-dotted border-rl-red border-opacity-40"
                aria-hidden="true"
              />
            ) : null}
            <div className="relative flex flex-row items-center">
              <div className="bg-white h-10 w-10 flex flex-row items-center">
                <span className="h-8 w-8 rounded-full flex items-center justify-center">
                  <Image
                    src={Check}
                    alt="icon"
                    layout="fixed"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="">
                <p className="font-normal text-xl leading-8 text-rl-dark-grey">
                  {item}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <p className="mt-1.5 font-normal text-sm leading-5 text-rl-dark-grey">
        The entire process typically takes a week to 10 days***
      </p>
    </div>
  );
}

export default HiringTimeline;
