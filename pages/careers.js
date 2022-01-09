// Components
import PageBanner from "components/Common/PageBanner";
import TwoColumnGrid from "components/Common/TwoColumnGrid";
import ContactUs from "components/Careers/ContactUs";
import RootsterDNA from "components/Careers/RootsterDNA";
import HiringProcess from "components/Careers/HiringProcess";
import CurrentOpenings from "components/Careers/CurrentOpenings";

// Assets
import Banner from "assets/Banner/careers.png";

// Utils
import { teamDrives } from "helpers/Data";
import { currentOpenings } from "helpers/Data";

// APIs
import { getSectionData } from "apis";

export default function Careers({
  pageBanner,
  contact,
  rootster,
  team,
  hiringProcess,
  data,
}) {
  return (
    <div>
      <PageBanner
        // image={
        //   pageBanner?.attributes?.media?.data &&
        //   pageBanner?.attributes?.media?.data[0]?.attributes
        // }
        heading={
          pageBanner?.attributes?.heroHeading ||
          "Let’s do great things, together."
        }
        description={
          pageBanner?.attributes?.description ||
          "At Rootlogic, we are on a constant lookout for great minds brimming with fresh ideas and are willing to take the path less taken, determined to scale greater heights and bring creativity to life with technology."
        }
      />
      {console.log(data)}
      <TwoColumnGrid
        heading={team?.attributes?.heroHeading}
        data={team?.attributes}
        list={teamDrives}
      />

      <RootsterDNA
        heading={rootster?.attributes?.heroHeading}
        data={rootster?.attributes}
      />

      <HiringProcess
        heading={hiringProcess?.attributes?.heroHeading}
        data={hiringProcess?.attributes}
      />

      <ContactUs data={contact?.attributes} />

      <CurrentOpenings list={currentOpenings} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await getSectionData("Careers");
  const { data } = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  console.log(data);
  const pageBanner = data.find(
    (e) => e?.attributes?.webComponent == "PageBanner"
  );
  const contact = data.find((e) => e?.attributes?.webComponent == "ContactUs");
  const rootster = data.find(
    (e) => e?.attributes?.webComponent == "RootsterDNA"
  );
  const team = data.find((e) => e?.attributes?.webComponent == "TwoColumnGrid");
  const hiringProcess = data.find(
    (e) => e?.attributes?.webComponent == "HiringProcess"
  );

  return {
    props: { pageBanner, contact, rootster, team, hiringProcess, data },
  };
}
