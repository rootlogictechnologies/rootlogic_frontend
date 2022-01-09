// Components

import ContactUsCTA from "components/Common/ContactUsCTA";
import PageBanner from "components/Common/PageBanner";
import ServicesImage from "components/OurServices/ServicesImage";
import ServicesDetails from "components/OurServices/ServicesDetails";
import ServicesPoints from "components/OurServices/ServicesPoints";
import TechUsed from "components/OurServices/TechUsed";
import TwoColumnGrid from "components/Common/TwoColumnGrid";

// Assets
import Banner from "assets/Banner/services.png";

//Utils
import { executionProcess } from "helpers/Data";
import { serviceDetails } from "helpers/Data";

// APIs
import { getSectionData } from "apis";

export default function Services({ data }) {
  return (
    <div>
      <PageBanner
        // image={
        //   pageBanner?.attributes?.media?.data &&
        //   pageBanner?.attributes?.media?.data[0]?.attributes
        // }
        heading={pageBanner?.attributes?.heroHeading || "Our Services"}
        description={
          pageBanner?.attributes?.description ||
          "We are a technology solutions company building cool stuff for the new generation. With a well defined product development strategy, we can be your trusted partners in creating solutions leveraging the rapidly evolving technology landscape."
        }
      />
      {console.log(data)}
      <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl space-y-8">
        {serviceDetails.map((item, index) => {
          return (
            <div className="eachservicewithtech" key={index} id={item.id}>
              <div
                className={`servicedetails w-full flex flex-col bg-services-graphic mlg:${
                  index % 2 == 0 ? "flex-row" : "flex-row-reverse"
                } items-center justify-between`}
              >
                <div
                  className={`mlg:w-1/2 ${index % 2 !== 0 ? "mlg:ml-20" : ""}`}
                >
                  <ServicesImage {...item} />
                </div>
                <div
                  className={`mlg:w-1/2 ${index % 2 == 0 ? "mlg:ml-20" : ""}`}
                >
                  <ServicesDetails {...item} />
                </div>
              </div>
              {item.showPoints && <ServicesPoints {...item} />}
              {item.showTech && <TechUsed {...item} />}
              <hr className="mt-0.5" />
            </div>
          );
        })}
      </div>

      <TwoColumnGrid
        heading="Our Execution Process"
        list={executionProcess}
        cssClass="md:grid-flow-col"
      />

      <ContactUsCTA />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await getSectionData("Services");
  const { data } = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }
  console.log(data);
  // const pageBanner = data.find(
  //   (e) => e?.attributes?.webComponent == "PageBanner"
  // );
  // const contactText = data.find(
  //   (e) => e?.attributes?.webComponent == "Contacttext"
  // );
  // const gridSection = data.find(
  //   (e) => e?.attributes?.webComponent == "GridSection"
  // );
  // const ourSquad = data.find(
  //   (e) =>
  //     e?.attributes?.webComponent == "Teams" && e?.attributes?.sequence == 4
  // );
  // const ourMentors = data.find(
  //   (e) =>
  //     e?.attributes?.webComponent == "Teams" && e?.attributes?.sequence == 5
  // );
  // const ourPartners = data.find(
  //   (e) => e?.attributes?.webComponent == "OurPartners"
  // );
  // const whyRL = data.find((e) => e?.attributes?.webComponent == "WhyRootLogic");

  // const caseStudies = data.find(
  //   (e) => e?.attributes?.webComponent == "CaseStudies"
  // );

  // const cta = data.find((e) => e?.attributes?.webComponent == "ContactUsCTA");

  return {
    props: {
      data,
      // pageBanner,
      // contactText,
      // gridSection,
      // ourSquad,
      // ourMentors,
      // ourPartners,
      // whyRL,
      // caseStudies,
      // cta,
    },
  };
}
