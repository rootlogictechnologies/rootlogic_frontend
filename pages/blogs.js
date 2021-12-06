import ContactUsCTA from "components/Common/ContactUsCTA";
import PageBanner from "components/Common/PageBanner";

import Banner from "assets/Banner/blog.png";

export default function Blogs() {
  return (
    <div>
      <PageBanner
        image={Banner}
        heading="Latest from our Blog"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <ContactUsCTA />
    </div>
  );
}
