import Link from "next/link";
import Heading from "../Heading";

export default function ContactUsCTA() {
  return (
    <>
      <div className="bg-rl-red bg-cta-graphic">
        <div className="mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 max-w-6xl">
          <Heading
            heading="It is time to go to market."
            textColor="text-white"
          />
          <p className="text-4xl md:text-5xl mt-0 text-white font-normal">
            Contact us to get started today
          </p>
          <Link href="/contactUs">
            <a className="w-auto mt-10 inline-flex items-center justify-center px-9 py-3 border-2 border-white text-md font-semibold rounded-full text-white bg-transparent cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
