import Hero from "@/components/home/Hero";
import PioneeringFuture from "@/components/home/PioneeringFuture";
import ValueProps from "@/components/home/ValueProps";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import BejoFinance from "@/components/home/BejoFinance";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <PioneeringFuture />
      <ValueProps />
      <Services />
      <Testimonials />
      <BejoFinance />
    </div>
  );
}
