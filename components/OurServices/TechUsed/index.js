import { useEffect, useState } from "react";

// Component
import LogosList from "components/Common/LogosList";

function TechUsed({ data }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let temp = [];
    data &&
      data.length > 0 &&
      data.map((item) => {
        temp.push(item?.attributes);
      });
    setList(temp);
  }, [data]);

  return (
    <div className="py-14 mx-auto px-7 lg:px-8 max-w-6xl">
      <h1 className="mb-0.5 leading-9 md:leading-10 font-semibold text-2.5xl md:text-3.5xl text-rl-dark-grey text-center">
        Technologies we use
      </h1>
      <LogosList list={list} />
    </div>
  );
}

export default TechUsed;
