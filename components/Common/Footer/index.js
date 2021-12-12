import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import Logo from "assets/Logo/LetterLogoWhite.svg";
import SendIcon from "assets/Send.svg";

// Data
import { navigation } from "helpers/FooterNavigations";

// Component
import NavList from "./NavList";

export default function Footer() {
  const [email, setEmail] = useState("");

  const onSubmitEmail = () => {
    console.log(email);
  };

  return (
    <footer
      className="bg-rl-dark-grey text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto py-14 px-7 lg:py-20 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-start space-y-10 md:space-y-0 md:grid md:grid-cols-10 gap-10">
          <div className="col-span-3 flex flex-col items-start space-y-10">
            <Image className="h-10" src={Logo} alt="Company name" />
            <div className="flex flex-col items-start space-y-2 font-normal opacity-50">
              <p className="text-sm leading-5">Copyright © 2021 Rootlogic.</p>
              <p className="text-sm leading-5">All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a className="h-8 w-8 bg-white bg-opacity-10 rounded-full flex flex-row items-center justify-center p-1.5 cursor-pointer transform transition hover:scale-125 duration-300 ease-in-out">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-7 col-end-11 flex flex-col items-start space-y-10 md:space-y-0 md:grid md:grid-cols-6 gap-10">
            <div className="col-span-4 flex flex-col items-start space-y-10 md:space-y-0 md:grid md:grid-cols-6 gap-10">
              <div className="col-span-2 col-start-2">
                <NavList heading="Company" list={navigation.company} />
              </div>
              <div className="mt-12 md:mt-0 col-span-3 col-end-7">
                <NavList heading="Our Services" list={navigation.services} />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-6 col-span-2">
              <h2 className="inline text-xl leading-8 font-normal tracking-wider sm:block sm:text-xl">
                Stay updated with our newsletter
              </h2>
              <form className="mt-8 sm:flex w-full">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="mt-1 flex items-center py-2 px-3 border-0 bg-white bg-opacity-20 rounded-lg w-full">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => {
                      e.target.value = e.target.value
                        .trimStart()
                        .replace(/[^a-zA-Z\s]/gi, "");
                      setEmail(e.target.value);
                    }}
                    className="appearance-none p-0 bg-transparent text-sm font-normal block w-full border-transparent placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-transparent focus:border-transparent"
                  />
                  <Image
                    src={SendIcon}
                    className="cursor-pointer transform transition hover:scale-125 duration-300 ease-in-out"
                    alt="Send"
                    onClick={() => {
                      onSubmitEmail();
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
