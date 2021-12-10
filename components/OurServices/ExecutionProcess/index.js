//Utils
import { executionProcess } from "helpers/Data";

// Component
import Card from "./Card";

function ExecutionProcess() {
  return (
    <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
      <div className="w-full flex flex-col items-center space-y-7 md:space-y-10">
        <h1 className="font-bold text-4xl md:text-5xl leading-snug text-rl-dark-grey text-center">
          Our Execution Process
        </h1>
        <div className="w-full grid grid-cols-1 gap-y-12 gap-x-8 md:max-w-none md:grid-flow-col md:grid-rows-3 md:grid-cols-2 md:gap-y-16">
          {executionProcess.map((item, index) => {
            return <Card {...item} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ExecutionProcess;
