import ContactUsCTA from "components/Common/ContactUsCTA";
import PageBanner from "components/Common/PageBanner";

import Banner from "assets/Banner/services.png";

export default function Services() {
  return (
    <div>
      <PageBanner
        image={Banner}
        heading="Our Services"
        description="We are a technology solutions company building cool stuff for the new generation. With a well defined product development strategy, we can be your trusted partners in creating solutions leveraging the rapidly evolving technology landscape."
      />
      <ContactUsCTA />
    </div>
  );
}
