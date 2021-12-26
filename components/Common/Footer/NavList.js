import Link from "next/link";

export default function NavList({ heading = "", list = [] }) {
  return (
    <>
      <h3 className="text-xl font-normal tracking-wider">{heading}</h3>
      <ul role="list" className="mt-6 space-y-5">
        {list.map((item) => (
          <li
            key={item.name}
            className="cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <Link href={`${item.href}`} key={item.name}>
              <a
                target={item.newTab ? "_blank" : ""}
                className="text-sm opacity-60 tracking-wide"
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
