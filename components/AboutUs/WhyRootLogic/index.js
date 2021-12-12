import Image from "next/image";

// Component
import Heading from "components/Common/Heading";

// Utils
import { whyRootlogic } from "helpers/Data";

function WhyRootLogic() {
  return (
    <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-7xl">
      <div className="w-full flex flex-col items-center space-y-7 md:space-y-10">
        <Heading heading="Why Rootlogic?" />
        <div className="flex flex-row items-start flex-wrap justify-center">
          {whyRootlogic.map((item) => {
            return (
              <div className="mx-3 mb-8 md:mb-16">
                <div className="flex flex-col items-center space-y-5 md:space-y-4 w-300px md:w-350px">
                  <div className="bg-rl-light rounded-xl flex flex-row items-center justify-center w-300px md:w-318px h-200px">
                    <div className="w-18 h-18">
                      <Image src={item.icon} alt="icon" layout="fixed" />
                    </div>
                  </div>
                  <p className="font-normal text-md md:text-xl leading-7 md:leading-8 text-center text-rl-dark-grey">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyRootLogic;
