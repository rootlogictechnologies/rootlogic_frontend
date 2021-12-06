import ContactUsCTA from "components/Common/ContactUsCTA";
import CustomerList from "components/Landing/CustomerList";
import HeroSection from "components/Landing/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CustomerList />
      <ContactUsCTA />
    </div>
  );
}
