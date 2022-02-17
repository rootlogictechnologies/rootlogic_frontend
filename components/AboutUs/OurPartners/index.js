import { useEffect, useState } from "react";

// Component
import Heading from "components/Common/Heading";
import LogosList from "components/Common/LogosList";

function OurPartners({ heading, list }) {
  const [LogoList, setLogoList] = useState([]);

  useEffect(() => {
    let temp = [];
    list?.data &&
      list?.data.length > 0 &&
      list?.data.map((item) => {
        temp.push(item?.attributes?.media?.data?.attributes);
      });
    setLogoList(temp);
  }, [list]);

  return (
    <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
      <div className="w-full flex flex-col items-center space-y-7 md:space-y-10">
        <Heading heading={heading} />
        <div className="w-full border-t border-b border-rl-light py-11">
          <LogosList list={LogoList} />
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
