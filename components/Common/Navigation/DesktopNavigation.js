import Link from "next/link";
import { useRouter } from "next/router";

// Utils
import { navigation } from "helpers/Navigation";

function DesktopNavigation() {
  const route = useRouter();
  return (
    <nav aria-label="Global" className="flex space-x-8">
      {navigation.map((nav, index) => {
        return (
          <Link href={`${nav.path}`} key={index}>
            <a
              target={nav.newTab ? "_blank" : ""}
              className={`${
                route.route == nav.path ? "text-rl-red" : "text-rl-dark-grey"
              } font-semibold text-sm cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out`}
            >
              {nav.name}
            </a>
          </Link>
        );
      })}
    </nav>
  );
}

export default DesktopNavigation;
