import { useEffect, useState } from "react";

import Heading from "components/Common/Heading";

// Data
import { rootsterdna } from "helpers/Data";

function RootsterDNA({ heading = "", data }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let temp = [];
    data?.teamElements?.data &&
      data?.teamElements?.data.length > 0 &&
      data?.teamElements?.data.map((item) => {
        temp.push(item?.attributes);
      });
    setList(temp);
  }, [data]);

  return (
    <div className="bg-rl-blue pt-12 sm:pt-16">
      <div className="mx-auto px-7 lg:px-8 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          <Heading heading={heading} textColor="text-white" />
        </div>
      </div>
      <div className="mt-7 md:mt-10 pb-12 bg-white sm:pb-20">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-rl-blue border-t border-rl-blue" />
          <div className="relative mx-auto px-4 max-w-6xl">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-lg bg-white shadow-lg sm:grid grid-cols-2 md:grid-cols-3 py-7 px-8 md:py-5 md:px-20">
                {list &&
                  list.length > 0 &&
                  list.map((item, index) => {
                    return (
                      <div className="flex flex-row items-center py-2.5 md:py-5 font-semibold text-md md:text-xl leading-5">
                        <span className="text-rl-blue">{index + 1}.&nbsp;</span>
                        <p className="text-rl-dark-grey">{item.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootsterDNA;
