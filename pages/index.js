// Components
import ContactUsCTA from "components/Common/ContactUsCTA";
import GridSection from "components/Common/GridSection";
import CustomerList from "components/Landing/CustomerList";
import HeroSection from "components/Landing/HeroSection";
import Solutions from "components/Landing/Solutions";
import TestimonialsSection from "components/Landing/Testimonials";

// Data
import { services } from "helpers/Data";
import { testimonials } from "helpers/Data";

// APIs
import { getPageData, getSectionData } from "apis";

export default function Home({
  heroSection,
  testimonialsSection,
  cta,
  services,
  solutions,
  customers,
  data,
}) {
  return (
    <div>
      <HeroSection data={heroSection?.attributes} />
      <CustomerList
        heading={customers?.attributes?.heroHeading}
        data={customers?.attributes}
      />
      <GridSection
        heading={services?.attributes?.heroHeading}
        bgColor="bg-rl-dark-grey"
        type="services"
        data={services?.attributes}
        isCTA={true}
        textColor="text-white"
        cardHeight="h-48 smd:h-278px"
      />

      <Solutions
        heading={solutions?.attributes?.heroHeading}
        data={solutions?.attributes}
      />
      <TestimonialsSection
        heading={testimonialsSection?.attributes?.heroHeading}
        data={testimonialsSection?.attributes}
        testimonials={testimonials}
      />
      <ContactUsCTA data={cta?.attributes} />
    </div>
  );
}

export async function getServerSideProps() {
  let queries = ["teamElements", "testimonials", "services", "solutions"];
  const res = await getSectionData("HomePage", queries);
  const { data } = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  const heroSection =
    data.find((e) => e?.attributes?.webComponent == "HeroSection") || {};
  const testimonialsSection =
    data.find((e) => e?.attributes?.webComponent == "TestimonialsSection") ||
    {};
  const cta =
    data.find((e) => e?.attributes?.webComponent == "ContactUsCTA") || {};
  const services =
    data.find((e) => e?.attributes?.webComponent == "PageBanner") || {};

  const solutions =
    data.find((e) => e?.attributes?.webComponent == "Solutions") || {};
  const customers =
    data.find((e) => e?.attributes?.webComponent == "CustomerList") || {};

  return {
    props: {
      heroSection,
      testimonialsSection,
      cta,
      services,
      solutions,
      customers,
      data,
    },
  };
}
