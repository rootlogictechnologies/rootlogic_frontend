import Image from "next/image";

// Assets
import Demo from "assets/Logo/Demo.svg";

function Logos({ image, index }) {
  return (
    <div className="px-6" key={index}>
      <div className="w-40 h-20 mx-auto px-2.5 py-4 col-span-1 flex justify-center md:col-span-2 lg:col-span-1 bg-white rounded-xl shadow-xs">
        <div className="w-36 h-14 block">
          <Image
            height="56px"
            width="110px"
            layout="responsive"
            src={image || Demo}
            alt="Logo"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Logos;
