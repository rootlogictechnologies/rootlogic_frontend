import Image from "next/image";

function SolutionsCard({ media, description }) {
  return (
    <div className="max-w-xs col-span-1 flex flex-col items-center space-y-7 mx-auto">
      <div className="w-52 h-40">
        <Image
          src={media?.data?.attributes?.url}
          alt="Illustration"
          className="mx-auto w-full"
          width="208px"
          height="160px"
          layout="fixed"
        />
      </div>
      <p className="font-normal text-md leading-7 text-center text-rl-dark-grey">
        {description}
      </p>
    </div>
  );
}

export default SolutionsCard;
