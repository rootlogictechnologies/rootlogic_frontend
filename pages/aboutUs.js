import Image from "next/image";

// Components
import ContactUsCTA from "components/Common/ContactUsCTA";
import PageBanner from "components/Common/PageBanner";
import GridSection from "components/Common/GridSection";
import Teams from "components/Common/Teams";
import WhyRootLogic from "components/AboutUs/WhyRootLogic";
import OurPartners from "components/AboutUs/OurPartners";
import CaseStudies from "components/AboutUs/CaseStudies";

// Assets
import Banner from "assets/Banner/about.png";
import img from "assets/AboutUs.png";

// Data
import { aboutUsList, mentors, ourSquad } from "helpers/Data";
import { CaseStudiesData } from "helpers/Data";

export default function AboutUs() {
  return (
    <div>
      <PageBanner
        image={Banner}
        heading="Who are we?"
        description="Rootlogic is a technology solutions company building cool stuff for the new generation. With a well defined product development strategy, we can be your trusted partners in creating solutions leveraging the rapidly evolving technology landscape."
      />

      <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
        <div className="w-full flex flex-col items-center space-y-7 md:space-y-11">
          <div className="w-full flex flex-col md:flex-row items-start justify-between md:space-x-7 space-y-5 md:space-y-0">
            <h1 className="w-full md:w-2/5 font-semibold text-md md:text-xl leading-7 md:leading-9 text-left text-rl-dark-grey">
              Let’s bring great ideas to action. Because we believe they can
              change the world.
            </h1>
            <p className="w-full md:w-3/5 font-normal leading-5 md:leading-6 text-sm md:text-base text-rl-dark-grey opacity-70">
              All you need is the right vision, technologies and the team to
              understand technology at its core. We at Rootlogic embrace new
              challenges and move forward with strategies, commitment and the
              right tools to give life to those ideas and scale them to greater
              heights.
            </p>
          </div>
          <div className="w-full rounded-xl h-52 sm:h-auto hidden sm:block">
            <Image src={img} alt="Image" className="object-cover" />
          </div>
          <div className="w-300px relative rounded-xl h-52 sm:hidden">
            <Image
              src={img}
              alt="Image"
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <GridSection
        heading="Values that define Rootlogic and help us drive Delivery"
        bgColor="bg-rl-red-opacity"
        list={aboutUsList}
        textColor="text-rl-dark-grey"
      />

      <Teams heading="Our Squad" list={ourSquad} />

      <Teams heading="Mentors" list={mentors} />

      <OurPartners />

      <WhyRootLogic />

      <CaseStudies list={CaseStudiesData} />

      <ContactUsCTA />
    </div>
  );
}
