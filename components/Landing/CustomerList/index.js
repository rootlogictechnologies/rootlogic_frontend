import LogosList from "components/Common/LogosList";

function CustomerList() {
  return (
    <div className="py-20 mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="leading-snug font-bold text-4xl md:text-5xl text-rl-dark-grey text-center">
        We would love to add you to our list of ever growing customers
      </h1>
      <LogosList />
    </div>
  );
}

export default CustomerList;
