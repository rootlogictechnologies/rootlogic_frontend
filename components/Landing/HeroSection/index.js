import Link from "next/link";
import Image from "next/image";

// Assets
import Landing from "assets/Banner/Landing.png";
import BgGraphics from "assets/HeroSection.svg";

function HeroSection({ data }) {
  return (
    <main className="bg-white relative bg-hero-graphic">
      <Image src={BgGraphics} layout="fill" />
      <div className="py-16 mx-auto px-7 lg:px-8 max-w-6xl z-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:max-w-2xl w-10/12 md:w-1/2 lg:col-span-6 text-left">
            <h1 className="leading-snug font-bold text-4xl md:text-5xl text-rl-dark-grey">
              {data?.heroHeading}
            </h1>
            <p className="mt-5 d:mt-1 font-normal opacity-7 text-rl-dark-grey text-base md:text-md">
              {data?.subHeading}
            </p>
            <div className="mt-16 sm:max-w-lg sm:mx-auto text-left lg:mx-0">
              <Link href="/contactUs">
                <button className="bg-rl-red text-white font-semibold text-sm text-center px-7 py-2.5 rounded-full cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out">
                  {data?.buttonText?.title}
                </button>
              </Link>
            </div>
          </div>
          <div className="relative mt-10 md:mt-0 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:flex-row-reverse lg:items-end">
            <div className="relative w-300px h-300px md:w-445px md:h-600px rounded-xl lg:max-w-md bg-transparent">
              <Image
                className="w-300px h-300px md:w-445px md:h-600px"
                src={
                  (data?.media?.data[0] &&
                    data?.media?.data[0]?.attributes?.url) ||
                  Landing
                }
                layout="fill"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
