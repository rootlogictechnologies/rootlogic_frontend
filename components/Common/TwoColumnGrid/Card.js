import Image from "next/image";

function Card({ title, description, media, index }) {
  return (
    <div key={index} className="flex flex-row items-start">
      <div className="sm:flex-shrink-0">
        <div className="flow-root">
          <div className="w-11 h-11 md:w-16 md:h-16 bg-rl-light flex flex-row items-center justify-center rounded-full text-sm md:text-2xl font-bold leading-7 text-rl-dark-grey">
            <div className="w-4 h-4 md:w-8 md:h-8 text-center">
              {media?.data ? (
                <Image
                  src={media?.data?.attributes?.url}
                  layout="responsive"
                  width="40px"
                  height="40px"
                  alt="Illustration"
                />
              ) : (
                index + 1
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ml-2.5 md:ml-7 space-y-3">
        <h3 className="font-semibold text-md md:text-xl leading-7 md:leading-9 text-rl-dark-grey">
          {title}
        </h3>
        <p className="font-normal text-sm md:text-md leading-5 md:leading-7 text-rl-dark-grey opacity-70 md:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
