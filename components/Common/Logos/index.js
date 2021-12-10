import Image from "next/image";

// Assets
import Demo from "assets/Logo/Demo.svg";

function Logos({ image, index }) {
  return (
    <div className="px-6" key={index}>
      <div className="w-40 mx-auto px-2.5 py-4 col-span-1 flex justify-center md:col-span-2 lg:col-span-1 bg-white rounded-xl shadow-xs">
        <Image className="h-12" layout="fixed" src={Demo} alt="Logo" />
      </div>
    </div>
  );
}

export default Logos;
