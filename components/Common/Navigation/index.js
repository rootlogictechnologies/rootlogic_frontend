import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";

// Icons
import { MenuIcon } from "@heroicons/react/outline";

// Assets
import Logo from "assets/Logo/LetterLogoBlack.svg";

// Components
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

export default function Navigation({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Top nav*/}
        <header className="relative py-3 md:py-5 bg-white flex items-center justify-between mx-auto px-7 lg:px-8 w-full max-w-6xl">
          {/* Logo area */}
          <div className="w-1/2 md:w-1/4 cursor-pointer">
            <Link href="/">
              <a className="flex items-center justify-start cursor-pointer">
                <Image
                  className="h-8 w-auto cursor-pointer"
                  src={Logo}
                  alt="RootLogic Logo"
                />
              </a>
            </Link>
          </div>
          {/* Menu button area */}
          <div className="w-1/2 pr-4 flex items-center justify-end sm:pr-6 md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-rl-dark-grey focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="block h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          {/* Desktop nav area */}
          <div className="hidden md:min-w-0 w-3/4 md:flex-1 md:flex md:items-center md:justify-end">
            <DesktopNavigation />
            <Link href="/contactUs">
              <button className="ml-8 bg-rl-red text-white font-semibold text-sm text-center px-5 py-2.5 rounded-full cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out">
                Let's Talk
              </button>
            </Link>
          </div>
          {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
          <Transition.Root show={mobileMenuOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-40 md:hidden"
              onClose={setMobileMenuOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
                enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
                leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
                leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
              >
                <nav
                  className="fixed z-40 inset-0 h-full w-full bg-rl-dark-grey sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
                  aria-label="Global"
                >
                  <MobileNavigation setMobileMenuOpen={setMobileMenuOpen} />
                </nav>
              </Transition.Child>
            </Dialog>
          </Transition.Root>
        </header>

        {/* Bottom section */}
        <main className="min-h-0 overflow-hidden">{children}</main>
      </div>
    </>
  );
}
