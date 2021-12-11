function Heading({ heading = "", textColor = "text-rl-dark-grey" }) {
  return (
    <h1
      className={`font-bold text-4xl md:text-5xl leading-snug text-center ${textColor}`}
    >
      {heading}
    </h1>
  );
}

export default Heading;
