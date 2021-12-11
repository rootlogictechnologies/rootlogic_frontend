// Components
import ContactUsCTA from "components/Common/ContactUsCTA";
import GridSection from "components/Common/GridSection";
import CustomerList from "components/Landing/CustomerList";
import HeroSection from "components/Landing/HeroSection";
import Solutions from "components/Landing/Solutions";
import TestimonialsSection from "components/Landing/Testimonials";

// Data
import { services } from "helpers/Data";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CustomerList />
      <GridSection
        heading="Our Services"
        bgColor="bg-rl-dark-grey"
        list={services}
        isCTA={true}
        textColor="text-white"
        cardHeight="h-48 smd:h-278px"
      />
      <Solutions />
      <TestimonialsSection />
      <ContactUsCTA />
    </div>
  );
}
