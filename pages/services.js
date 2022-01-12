import { useEffect, useState } from "react";

// Components

import ContactUsCTA from "components/Common/ContactUsCTA";
import PageBanner from "components/Common/PageBanner";
import ServicesImage from "components/OurServices/ServicesImage";
import ServicesDetails from "components/OurServices/ServicesDetails";
import ServicesPoints from "components/OurServices/ServicesPoints";
import TechUsed from "components/OurServices/TechUsed";
import TwoColumnGrid from "components/Common/TwoColumnGrid";

// APIs
import { getSectionData } from "apis";

export default function Services({ pageBanner, process, cta, allServices }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let temp = [];
    allServices?.attributes?.services?.data &&
      allServices?.attributes?.services?.data.length > 0 &&
      allServices?.attributes?.services?.data.map((item) => {
        temp.push(item?.attributes);
      });
    setList(temp);
  }, [allServices]);

  return (
    <div>
      <PageBanner
        image={
          pageBanner?.attributes?.media?.data &&
          pageBanner?.attributes?.media?.data[0]?.attributes
        }
        heading={pageBanner?.attributes?.heroHeading || "Our Services"}
        description={
          pageBanner?.attributes?.description ||
          "We are a technology solutions company building cool stuff for the new generation. With a well defined product development strategy, we can be your trusted partners in creating solutions leveraging the rapidly evolving technology landscape."
        }
      />
      <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl space-y-8">
        {list &&
          list.length > 0 &&
          list.map((item, index) => {
            return (
              <div className="eachservicewithtech" key={index} id={index}>
                <div
                  className={`servicedetails w-full flex flex-col bg-services-graphic mlg:${
                    index % 2 == 0 ? "flex-row" : "flex-row-reverse"
                  } items-center justify-between`}
                >
                  <div
                    className={`mlg:w-1/2 ${
                      index % 2 !== 0 ? "mlg:ml-20" : ""
                    }`}
                  >
                    <ServicesImage images={item?.media?.data} />
                  </div>
                  <div
                    className={`mlg:w-1/2 ${index % 2 == 0 ? "mlg:ml-20" : ""}`}
                  >
                    <ServicesDetails {...item} />
                  </div>
                </div>
                {item.subServices?.subServices && (
                  <ServicesPoints
                    points={item.subServices?.subServices.split(",")}
                  />
                )}
                {item?.techStacks?.data &&
                  item?.techStacks?.data.length > 0 && (
                    <TechUsed data={item?.techStacks?.data} />
                  )}
                <hr className="mt-0.5" />
              </div>
            );
          })}
      </div>
      <TwoColumnGrid
        heading={process?.attributes?.heroHeading}
        data={process?.attributes}
        cssClass="md:grid-flow-col"
      />
      <ContactUsCTA data={cta?.attributes} />
    </div>
  );
}

export async function getServerSideProps() {
  let queries = ["teamElements", "services"];
  const res = await getSectionData("Services", queries);
  const { data } = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }
  const pageBanner =
    data.find((e) => e?.attributes?.webComponent == "PageBanner") || {};

  const process =
    data.find((e) => e?.attributes?.webComponent == "TwoColumnGrid") || {};

  const cta =
    data.find((e) => e?.attributes?.webComponent == "ContactUsCTA") || {};

  const allServices =
    data.find((e) => e?.attributes?.webComponent == "PageBanner") || {};

  return {
    props: {
      data,
      pageBanner,
      process,
      cta,
      allServices,
    },
  };
}
