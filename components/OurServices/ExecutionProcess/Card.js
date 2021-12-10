function Card({ title, description, index }) {
  return (
    <div key={index} className="sm:flex flex-row items-start">
      <div className="sm:flex-shrink-0">
        <div className="flow-root">
          <div className="w-11 h-11 md:w-16 md:h-16 bg-rl-light flex flex-row items-center justify-center rounded-full text-sm md:text-2xl font-bold leading-7 text-rl-dark-grey">
            {index + 1}
          </div>
        </div>
      </div>
      <div className="mt-3 sm:mt-0 ml-2.5 md:ml-7 space-y-3">
        <h3 className="font-semibold text-md md:text-xl leading-7 md:leading-9 text-rl-dark-grey">
          {title}
        </h3>
        <p className="font-normal text-sm md:text-md leading-5 md:leading-7 text-rl-dark-grey opacity-70 md:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
