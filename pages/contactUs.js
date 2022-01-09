// Components
import PageBanner from "components/Common/PageBanner";
import ContactInfo from "components/Contact/ContactInfo";
import ContactForm from "components/Contact/ContactForm";

// Assets
import Banner from "assets/Banner/contact.png";
import WorldMap from "components/Contact/Map";

// APIs
import { getSectionData } from "apis";

export default function ContactUs({ pageBanner, data }) {
  return (
    <div>
      <PageBanner
        // image={
        //   pageBanner?.attributes?.media?.data &&
        //   pageBanner?.attributes?.media?.data[0]?.attributes
        // }
        heading={pageBanner?.attributes?.heroHeading || "Contact Us"}
        description={
          pageBanner?.attributes?.description ||
          "Questions? Comments? We’d love to hear from you. Please don’t hesitate to get in touch. Complete the form below so we can direct your inquiry to the right team."
        }
      />

      <ContactForm />

      <WorldMap />

      <ContactInfo />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await getSectionData("ContactUs");
  const { data } = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  const pageBanner = data.find(
    (e) => e?.attributes?.webComponent == "PageBanner"
  );
  // const contact = data.find((e) => e?.attributes?.webComponent == "ContactUs");
  // const rootster = data.find(
  //   (e) => e?.attributes?.webComponent == "RootsterDNA"
  // );
  // const team = data.find((e) => e?.attributes?.webComponent == "TwoColumnGrid");
  // const hiringProcess = data.find(
  //   (e) => e?.attributes?.webComponent == "HiringProcess"
  // );

  return {
    props: { pageBanner, data },
  };
}
