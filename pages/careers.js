// Assets
import Banner from "assets/Banner/careers.png";

// Utils
import { teamDrives } from "helpers/Data";
import { currentOpenings } from "helpers/Data";

// Components
import PageBanner from "components/Common/PageBanner";
import TwoColumnGrid from "components/Common/TwoColumnGrid";
import ContactUs from "components/Careers/ContactUs";
import RootsterDNA from "components/Careers/RootsterDNA";
import HiringProcess from "components/Careers/HiringProcess";
import CurrentOpenings from "components/Careers/CurrentOpenings";

export default function Careers() {
  return (
    <div>
      <PageBanner
        image={Banner}
        heading="Let’s do great things, together."
        description="At Rootlogic, we are on a constant lookout for great minds brimming with fresh ideas and are willing to take the path less taken, determined to scale greater heights and bring creativity to life with technology."
      />
      <TwoColumnGrid heading="What drives our Team" list={teamDrives} />
      <RootsterDNA />
      <HiringProcess />
      <ContactUs />
      <CurrentOpenings list={currentOpenings} />
    </div>
  );
}
