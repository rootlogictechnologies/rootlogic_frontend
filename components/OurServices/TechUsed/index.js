// Component
import LogosList from "components/Common/LogosList";

function TechUsed() {
  return (
    <div className="py-14 mx-auto px-7 lg:px-8 max-w-6xl">
      <h1 className="mb-0.5 leading-9 md:leading-10 font-semibold text-2.5xl md:text-3.5xl text-rl-dark-grey text-center">
        Technologies we use
      </h1>
      <LogosList />
    </div>
  );
}

export default TechUsed;
