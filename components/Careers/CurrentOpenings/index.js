import { useEffect, useState } from "react";

import Heading from "components/Common/Heading";
import Openings from "./Openings";

function CurrentOpenings({ heading, data }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let temp = [];
    data?.jobOpenings?.data &&
      data?.jobOpenings?.data.length > 0 &&
      data?.jobOpenings?.data.map((item) => {
        temp.push(item?.attributes);
      });
    setList(temp);
  }, [data]);
  return (
    <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
      <div className="w-full flex flex-col items-center space-y-7 md:space-y-10">
        <Heading heading={heading} />

        <div className="flex flex-col items-center w-full space-y-7">
          {list &&
            list.length > 0 &&
            list.map((item) => {
              return <Openings {...item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default CurrentOpenings;
