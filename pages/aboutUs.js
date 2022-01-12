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
import img from "assets/AboutUs.png";

// APIs
import { getSectionData } from "apis";

export default function AboutUs({
  pageBanner,
  contactText,
  gridSection,
  ourSquad,
  ourMentors,
  ourPartners,
  whyRL,
  caseStudies,
  cta,
}) {
  return (
    <div>
      <PageBanner
        image={
          pageBanner?.attributes?.media?.data &&
          pageBanner?.attributes?.media?.data[0]?.attributes
        }
        heading={pageBanner?.attributes?.heroHeading || "Who are we?"}
        description={
          pageBanner?.attributes?.description ||
          "Rootlogic is a technology solutions company building cool stuff for the new generation. With a well defined product development strategy, we can be your trusted partners in creating solutions leveraging the rapidly evolving technology landscape."
        }
      />
      <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl">
        <div className="w-full flex flex-col items-center space-y-7 md:space-y-11">
          <div className="w-full flex flex-col md:flex-row items-start justify-between md:space-x-7 space-y-5 md:space-y-0">
            <h1 className="w-full md:w-2/5 font-semibold text-md md:text-xl leading-7 md:leading-9 text-left text-rl-dark-grey">
              {contactText?.attributes?.heroHeading}
            </h1>
            <p className="w-full md:w-3/5 font-normal leading-5 md:leading-6 text-sm md:text-base text-rl-dark-grey opacity-70">
              {contactText?.attributes?.description}
            </p>
          </div>
          <div className="w-full rounded-xl h-64 hidden sm:block relative">
            <Image
              src={
                contactText?.attributes?.media?.data[0]?.attributes?.url || img
              }
              alt="Image"
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-300px relative rounded-xl h-52 sm:hidden">
            <Image
              src={
                contactText?.attributes?.media?.data[0]?.attributes?.url || img
              }
              alt="Image"
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <GridSection
        heading={gridSection?.attributes?.heroHeading}
        bgColor="bg-rl-red-opacity"
        textColor="text-rl-dark-grey"
        data={gridSection?.attributes}
      />

      <Teams
        heading={ourSquad?.attributes?.heroHeading}
        list={ourSquad?.attributes?.teamElements}
        data={ourSquad?.attributes}
      />

      <Teams
        heading={ourMentors?.attributes?.heroHeading}
        list={ourMentors?.attributes?.teamElements}
        data={ourMentors?.attributes}
      />

      <OurPartners
        heading={ourPartners?.attributes?.heroHeading}
        list={ourPartners?.attributes?.teamElements}
      />

      <WhyRootLogic
        heading={whyRL?.attributes?.heroHeading}
        data={whyRL?.attributes}
      />

      <CaseStudies
        heading={caseStudies?.attributes?.heroHeading}
        data={caseStudies?.attributes}
      />

      <ContactUsCTA data={cta?.attributes} />
    </div>
  );
}

export async function getServerSideProps() {
  let queries = ["teamElements", "case_studies"];
  const res = await getSectionData("AboutUs", queries);
  const { data } = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }
  const pageBanner =
    data.find((e) => e?.attributes?.webComponent == "PageBanner") || {};

  const contactText =
    data.find((e) => e?.attributes?.webComponent == "Contacttext") || {};

  const gridSection =
    data.find((e) => e?.attributes?.webComponent == "GridSection") || {};

  const ourSquad =
    data.find(
      (e) =>
        e?.attributes?.webComponent == "Teams" && e?.attributes?.sequence == 4
    ) || {};

  const ourMentors =
    data.find(
      (e) =>
        e?.attributes?.webComponent == "Teams" && e?.attributes?.sequence == 5
    ) || {};

  const ourPartners =
    data.find((e) => e?.attributes?.webComponent == "OurPartners") || {};

  const whyRL =
    data.find((e) => e?.attributes?.webComponent == "WhyRootLogic") || {};

  const caseStudies =
    data.find((e) => e?.attributes?.webComponent == "CaseStudies") || {};

  const cta =
    data.find((e) => e?.attributes?.webComponent == "ContactUsCTA") || {};

  return {
    props: {
      pageBanner,
      contactText,
      gridSection,
      ourSquad,
      ourMentors,
      ourPartners,
      whyRL,
      caseStudies,
      cta,
    },
  };
}
