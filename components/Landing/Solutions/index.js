import { useEffect, useState } from "react";

// Data
import Heading from "components/Common/Heading";

// Component
import SolutionsCard from "./SolutionsCard";

function Solutions({ heading = "", data }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let temp = [];
    data?.solutions?.data &&
      data?.solutions?.data.length > 0 &&
      data?.solutions?.data.map((item) => {
        temp.push(item?.attributes);
      });
    setList(temp);
  }, [data]);

  return (
    <div className="md:mb-4">
      <div className="py-14 md:py-20 mx-auto px-7 sm:px-6 lg:px-8 max-w-6xl">
        <div className="w-full flex flex-col items-center space-y-20">
          <Heading heading={heading} />
          <div className="w-full container mx-auto grid grid-cols-1 smd:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
            {list &&
              list.length > 0 &&
              list.map((item) => {
                return <SolutionsCard {...item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
