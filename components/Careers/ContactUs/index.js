function ContactUs({ data }) {
  return (
    <div className="bg-rl-red-opacity">
      <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
        <div className="p-7 md:py-10 md:px-40 bg-rl-red rounded-xl">
          <h1 className="font-normal text-md md:text-xl leading-7 md:leading-9 text-center text-white">
            {data?.description}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
