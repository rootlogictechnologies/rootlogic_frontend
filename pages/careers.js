import PageBanner from "components/Common/PageBanner";

import Banner from "assets/Banner/careers.png";

export default function Careers() {
  return (
    <div>
      <PageBanner
        image={Banner}
        heading="Let’s do great things, together."
        description="At Rootlogic, we are on a constant lookout for great minds brimming with fresh ideas and are willing to take the path less taken, determined to scale greater heights and bring creativity to life with technology."
      />

      <div className="bg-rl-red-opacity">
        <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
          <div className="p-7 md:py-10 md:px-40 bg-rl-red rounded-xl">
            <h1 className="font-normal text-md md:text-xl leading-7 md:leading-9 text-center text-white">
              If you are a fresher right out of college or a student currently
              in college looking for some great learning and practical working
              opportunities, please send us your CV to{" "}
              <span className="font-bold">rootsters@rootlogic.tech</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
