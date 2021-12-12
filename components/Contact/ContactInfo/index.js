import Image from "next/image";

// Icons
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

// Assets
import Patterns from "assets/Contact/Patterns.svg";

function ContactInfo() {
  return (
    <div className="bg-rl-blue relative">
      <Image src={Patterns} layout="fill" />
      <div className="py-8 md:py-16 mx-auto px-7 lg:px-8 max-w-6xl z-5">
        <div className="flex flex-col mlg:flex-row items-center justify-center">
          <div className="w-full mlg:max-w-max py-7 mlg:py-0 mlg:my-7 border-b mlg:border-b-0 mlg:border-r border-white mlg:px-20 flex flex-col items-center space-y-5 md:space-y-8">
            <div className="bg-white rounded-full h-14 w-14 md:h-16 md:w-16 flex flex-row items-center justify-center">
              <MailIcon className="text-rl-blue h-5 w-5 md:h-8 md:w-8" />
            </div>
            <p className="text-white text-center font-semibold text-md md:text-3.5xl leading-7 md:leading-snug">
              Hello@rootlogic.in
            </p>
          </div>
          <div className="w-full mlg:max-w-max py-7 mlg:py-0 mlg:my-7 mlg:px-20 flex flex-col items-center space-y-5 md:space-y-8">
            <div className="bg-white rounded-full h-14 w-14 md:h-16 md:w-16 flex flex-row items-center justify-center">
              <PhoneIcon className="text-rl-blue h-5 w-5 md:h-8 md:w-8" />
            </div>
            <p className="text-white text-center font-semibold text-md md:text-3.5xl leading-7 md:leading-snug">
              +91 2345 5678 90
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
