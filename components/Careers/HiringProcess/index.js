import Image from "next/image";

// Assets
import Illustration from "assets/Career/HiringProcess.svg";

// Utils
import { hiringTimeline } from "helpers/Data";

// Component
import HiringTimeline from "./HiringTimeline";
import Heading from "components/Common/Heading";

function HiringProcess() {
  return (
    <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
      <div className="w-full flex flex-col items-center space-y-7 md:space-y-10">
        <Heading heading="Our Hiring Process" />
        <div className="flex flex-col-reverse items-center justify-between mlg:flex-row w-full">
          <div className="w-full mlg:w-1/2">
            <HiringTimeline list={hiringTimeline} />
          </div>
          <div className="w-full mlg:w-1/2 mb-8 mlg:mb-0">
            <div className="relative mx-auto w-300px h-254px md:w-540px md:h-458px">
              <Image src={Illustration} alt="Graphics" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiringProcess;
