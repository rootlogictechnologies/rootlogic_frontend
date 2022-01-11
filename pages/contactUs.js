// Components
import PageBanner from "components/Common/PageBanner";
import ContactInfo from "components/Contact/ContactInfo";
import ContactForm from "components/Contact/ContactForm";

// Assets
import WorldMap from "components/Contact/Map";

// APIs
import { getSectionData } from "apis";
import LocationsCards from "components/Contact/Map/LocationsCards";

export default function ContactUs({ pageBanner, contact, locations, data }) {
  return (
    <div>
      <PageBanner
        image={
          pageBanner?.attributes?.media?.data &&
          pageBanner?.attributes?.media?.data[0]?.attributes
        }
        heading={pageBanner?.attributes?.heroHeading || "Contact Us"}
        description={
          pageBanner?.attributes?.description ||
          "Questions? Comments? We’d love to hear from you. Please don’t hesitate to get in touch. Complete the form below so we can direct your inquiry to the right team."
        }
      />
      <ContactForm />

      <WorldMap />

      <LocationsCards data={locations?.attributes} />

      <ContactInfo data={contact?.attributes} />
    </div>
  );
}

export async function getServerSideProps() {
  let queries = ["teamElements", "source"];
  const res = await getSectionData("Contact", queries);
  const { data } = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  const pageBanner =
    data.find((e) => e?.attributes?.webComponent == "PageBanner") || {};
  const contact =
    data.find((e) => e?.attributes?.webComponent == "ContactInfo") || {};
  const locations =
    data.find((e) => e?.attributes?.webComponent == "Locations") || {};

  return {
    props: { pageBanner, contact, locations, data },
  };
}
