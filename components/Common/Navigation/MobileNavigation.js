import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import Logo from "assets/Logo/LetterLogoWhite.svg";
import { XIcon } from "@heroicons/react/solid";

// Utils
import { navigation } from "helpers/Navigation";

export default function MobileNavigation({ setMobileMenuOpen }) {
  return (
    <>
      <div className="py-5 flex items-center justify-between px-7">
        <div className="w-3/4">
          <a className="flex items-center justify-start h-8">
            <Image className="h-8 w-auto" src={Logo} alt="RootLogic Logo" />
          </a>
        </div>
        <button
          type="button"
          className="-mr-2 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close main menu</span>
          <XIcon className="block h-8 w-8 text-white" aria-hidden="true" />
        </button>
      </div>

      <div className="max-w-8xl mx-auto mt-12 py-3 px-2 sm:px-4 space-y-8">
        {navigation.map((item) => (
          <Fragment key={item.name}>
            <Link href={`${item.path}`}>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md py-2 px-3 font-bold text-white text-4xl"
              >
                {item.name}
              </a>
            </Link>
          </Fragment>
        ))}
      </div>
    </>
  );
}
