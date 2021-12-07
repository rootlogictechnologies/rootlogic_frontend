import Link from "next/link";
import Image from "next/image";

// Assets
import Landing from "assets/Banner/Landing.png";

function HeroSection() {
  return (
    <main className="bg-rl-light bg-hero-graphic">
      <div className="py-16 mx-auto px-7 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:max-w-2xl w-10/12 md:w-1/2 lg:col-span-6 text-left">
            <h1 className="leading-snug font-bold text-4xl md:text-5xl text-rl-dark-grey">
              Because we believe your products can change the{" "}
              <span className="text-rl-red">world</span>
            </h1>
            <p className="mt-5 d:mt-1 font-normal opacity-7 text-rl-dark-grey text-base md:text-md">
              Technology enabled innovation for a better world!
            </p>
            <div className="mt-16 sm:max-w-lg sm:mx-auto text-left lg:mx-0">
              <Link href="/contactUs">
                <button className="bg-rl-red text-white font-semibold text-sm text-center px-7 py-2.5 rounded-full cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
          <div className="relative mt-10 md:mt-0 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:flex-row-reverse lg:items-end">
            <div className="relative w-full rounded-xl lg:max-w-md bg-transparent">
              <Image className="w-full" src={Landing} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
