import Image from "next/image";

function MemberCard({ image, name, title, description }) {
  return (
    <div className="m-3.5">
      <div className="space-y-4 w-300px md:w-350px">
        <div className="aspect-w-3 aspect-h-2 w-300px h-300px md:w-350px md:h-350px">
          <Image
            className="object-cover shadow-lg rounded-xl"
            src={image}
            alt="Team Member"
            layout="responsive"
          />
        </div>
        <div className="space-y-3">
          <h3 className="flex flex-row items-center space-x-2 text-rl-dark-grey font-semibold leading-7 md:leading-9 text-md md:text-xl">
            {name} {title && <span className="text-md">{`(${title})`}</span>}
          </h3>
          <div className="w-full">
            <p className="font-normal opacity-70 text-sm md:text-base leading-5 md:leading-6 text-rl-dark-grey">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
