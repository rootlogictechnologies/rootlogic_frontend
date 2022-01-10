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

export default function Home({ heroSection, testimonialsSection, cta, data }) {
  return (
    <div>
      {console.log(testimonialsSection)}
      <HeroSection data={heroSection?.attributes} />
      <CustomerList />
      <GridSection
        heading="Our Services"
        bgColor="bg-rl-dark-grey"
        list={services}
        isCTA={true}
        textColor="text-white"
        cardHeight="h-48 smd:h-278px"
      />
      <Solutions />
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
  let queries = ["teamElements", "testimonials"];
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

  return {
    props: { heroSection, testimonialsSection, cta, data },
  };
}
