// Component
import Heading from "components/Common/Heading";
import LogosList from "components/Common/LogosList";

function CustomerList() {
  return (
    <div className="py-20 mx-auto px-7 lg:px-8 max-w-6xl">
      <Heading heading="We would love to add you to our list of ever growing customers" />
      <LogosList />
    </div>
  );
}

export default CustomerList;
