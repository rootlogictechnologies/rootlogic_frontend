function ServicesDetails({ heading, description }) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-4xl md:text-5xl text-rl-dark-grey leading-10 md:leading-snug text-left">
        {heading}
      </h1>
      <p className="mt-5 text-rl-dark-grey text-base md:text-md leading-6 md:leading-7 font-normal text-left">
        {description}
      </p>
    </div>
  );
}

export default ServicesDetails;
