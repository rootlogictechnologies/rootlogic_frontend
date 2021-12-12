import Heading from "../Heading";
import MemberCard from "./MemberCard";

function Teams({ heading, list = [] }) {
  return (
    <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-7xl">
      <div className="w-full flex flex-col items-center space-y-7 md:space-y-10">
        <Heading heading={heading} />
        <div className="flex flex-row items-start flex-wrap justify-center">
          {list.map((member) => {
            return <MemberCard {...member} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Teams;
