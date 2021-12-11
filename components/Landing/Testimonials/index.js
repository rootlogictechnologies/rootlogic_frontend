import Heading from "components/Common/Heading";
import Testimonial from "./Testimonial";

function TestimonialsSection() {
  return (
    <div className="bg-rl-pink">
      <div className="py-14 md:py-20 mx-auto px-7 sm:px-6 lg:px-8 max-w-6xl">
        <div className="w-full flex flex-col items-center space-y-10">
          <Heading heading="Look at what our clients are saying about us" />
        </div>
        <Testimonial />
      </div>
    </div>
  );
}

export default TestimonialsSection;
