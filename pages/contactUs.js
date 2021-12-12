// Components
import PageBanner from "components/Common/PageBanner";
import ContactInfo from "components/Contact/ContactInfo";
import ContactForm from "components/Contact/ContactForm";

// Assets
import Banner from "assets/Banner/contact.png";

export default function ContactUs() {
  return (
    <div>
      <PageBanner
        image={Banner}
        heading="Contact Us"
        description="Questions? Comments? We’d love to hear from you. Please don’t hesitate to get in touch.
Complete the form below so we can direct your inquiry to the right team."
      />
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
