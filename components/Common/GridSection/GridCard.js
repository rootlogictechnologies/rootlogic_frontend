import Image from "next/image";

function GridCard({ icons, title, description, cardHeight }) {
  return (
    <div key={title}>
      <div
        className={`mx-auto w-full col-span-1 bg-white py-7 md:py-10 px-5 md:px-8 rounded-xl flex flex-col items-start space-y-6 md:space-y-7 max-w-350px ${cardHeight}`}
      >
        {icons?.data && (
          <div className="w-6 h-6">
            <Image
              src={icons?.data?.attributes?.url}
              layout="fixed"
              width="24px"
              height="24px"
              alt="Illustration"
            />
          </div>
        )}
        <div className="flex flex-col items-start space-y-2 md:space-y-3">
          <h1 className="font-semibold text-md md:text-xl leading-7 md:leading-9 text-rl-dark-grey">
            {title}
          </h1>
          <p className="font-normal line-clamp-2 text-sm md:text-base leading-5 md:leading-6 text-rl-dark-grey opacity-70">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridCard;
