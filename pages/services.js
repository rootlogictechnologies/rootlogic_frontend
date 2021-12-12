import ContactUsCTA from "components/Common/ContactUsCTA";
import PageBanner from "components/Common/PageBanner";

import Banner from "assets/Banner/services.png";
import ServicesImage from "components/OurServices/ServicesImage";
import ServicesDetails from "components/OurServices/ServicesDetails";
import ServicesPoints from "components/OurServices/ServicesPoints";
import TechUsed from "components/OurServices/TechUsed";
import TwoColumnGrid from "components/Common/TwoColumnGrid";

//Utils
import { executionProcess } from "helpers/Data";
import { serviceDetails } from "helpers/Data";

export default function Services() {
  return (
    <div>
      <PageBanner
        image={Banner}
        heading="Our Services"
        description="We are a technology solutions company building cool stuff for the new generation. With a well defined product development strategy, we can be your trusted partners in creating solutions leveraging the rapidly evolving technology landscape."
      />

      <div className="mx-auto px-7 lg:px-8 py-12 md:py-20 max-w-6xl space-y-8">
        {serviceDetails.map((item, index) => {
          return (
            <div className="eachservicewithtech" key={index}>
              <div
                className={`servicedetails w-full flex flex-col bg-services-graphic mlg:${
                  index % 2 == 0 ? "flex-row" : "flex-row-reverse"
                } items-center justify-between`}
              >
                <div
                  className={`mlg:w-1/2 ${index % 2 !== 0 ? "mlg:ml-20" : ""}`}
                >
                  <ServicesImage {...item} />
                </div>
                <div
                  className={`mlg:w-1/2 ${index % 2 == 0 ? "mlg:ml-20" : ""}`}
                >
                  <ServicesDetails {...item} />
                </div>
              </div>
              {item.showPoints && <ServicesPoints {...item} />}
              {item.showTech && <TechUsed {...item} />}
              <hr className="mt-0.5" />
            </div>
          );
        })}
      </div>
      <TwoColumnGrid
        heading="Our Execution Process"
        list={executionProcess}
        cssClass="md:grid-flow-col"
      />
      <ContactUsCTA />
    </div>
  );
}
