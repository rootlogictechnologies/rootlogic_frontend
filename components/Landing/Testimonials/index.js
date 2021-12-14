import Heading from "components/Common/Heading";
import Testimonial from "./Testimonial";

function TestimonialsSection({ testimonials }) {
  return (
    <>
      {testimonials && (
        <div className="bg-rl-pink">
          <div className="py-14 md:py-20 mx-auto px-7 sm:px-6 lg:px-8 max-w-6xl">
            <div className="w-full space-y-10">
              <Heading heading="Look at what our clients are saying about us" />
              <Testimonial testimonials={testimonials} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TestimonialsSection;
