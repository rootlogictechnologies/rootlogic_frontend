import Heading from "components/Common/Heading";
import MobileTestimonial from "./MobileTestimonial";
import Testimonial from "./Testimonial";

function TestimonialsSection({ heading, data, testimonials }) {
  return (
    <>
      <div className="bg-rl-pink">
        <div className="py-14 md:py-20 mx-auto px-7 sm:px-6 lg:px-8 max-w-6xl">
          <div className="w-full space-y-10">
            <Heading
              heading={
                heading || "Look at what our clients are saying about us"
              }
            />
            <div id="testimonialOuter" className="xsm:block hidden">
              <Testimonial testimonials={data?.testimonials} />
            </div>
            <div className="xsm:hidden block">
              <MobileTestimonial testimonials={data?.testimonials} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsSection;
