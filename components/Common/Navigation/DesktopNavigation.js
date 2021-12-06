import Link from "next/link";

// Utils
import { navigation } from "helpers/Navigation";

function DesktopNavigation() {
  return (
    <nav aria-label="Global" className="flex space-x-8">
      {navigation.map((nav, index) => {
        return (
          <Link href={`${nav.path}`} key={index}>
            <a className="font-poppins text-rl-dark-grey font-semibold text-sm cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out">
              {nav.name}
            </a>
          </Link>
        );
      })}
    </nav>
  );
}

export default DesktopNavigation;
