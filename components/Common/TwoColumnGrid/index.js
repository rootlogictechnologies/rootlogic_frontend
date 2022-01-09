import { useEffect, useState } from "react";

// Components
import Heading from "../Heading";
import Card from "./Card";

function TwoColumnGrid({ heading = "", data, cssClass = "" }) {
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
    <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
      <div className="w-full flex flex-col items-center space-y-7 md:space-y-10">
        <Heading heading={heading} />
        <div
          className={`w-full grid grid-cols-1 gap-y-12 gap-x-8 md:max-w-none md:grid-rows-3 md:grid-cols-2 md:gap-y-16 ${cssClass}`}
        >
          {list &&
            list.length > 0 &&
            list.map((item, index) => {
              return <Card {...item} index={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default TwoColumnGrid;
