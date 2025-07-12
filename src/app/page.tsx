import HeroSection from "./components/Hero";
import Highlight from "./components/Highlight";
import OurServices from "./components/OurServices";
import OurValues from "./components/OurValues";
import OurWork from "./components/OurWork";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Highlight />
      <WhoWeAre />
      <OurServices />
      {/* <Testimonials /> */}
      <OurValues />
      <OurWork />
      {/* <CtaSection /> */}
    </div>
  );
}

export const metadata = {
  title: "Custom Millwork Solutions Made in USA | Ascend Millwork",
  description:
    "Ascend Millwork delivers turnkey hotel millwork, cabinetry, stone tops, vanities, and kitchenettes for hospitality and multifamily projects. US-based manufacturing, quality, and speed.",
};
