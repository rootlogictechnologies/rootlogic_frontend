import { useEffect, useState } from "react";
// Component
import Heading from "components/Common/Heading";
import LogosList from "components/Common/LogosList";

function CustomerList({ heading, data }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let temp = [];
    data?.teamElements?.data &&
      data?.teamElements?.data.length > 0 &&
      data?.teamElements?.data.map((item) => {
        temp.push(item?.attributes?.media?.data?.attributes);
      });
    setList(temp);
  }, [data]);

  return (
    <div className="py-20 mx-auto px-7 lg:px-8 max-w-6xl">
      <Heading heading={heading} /> {console.log(list)}
      <LogosList list={list} />
    </div>
  );
}

export default CustomerList;
