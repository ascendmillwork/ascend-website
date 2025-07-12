import { AboutSlider } from "./components/AboutSlider";

import AboutHero from "./components/Hero";
import OurProcess from "./components/OurProcess";
import WhatWeCanAchieve from "./components/WhatWeCanAchieve";
import WhoWeAreAbout from "./components/WhoWeAre";

export default function About() {
  return (
    <div>
      <AboutHero />
      <WhatWeCanAchieve />
      <WhoWeAreAbout />
      <OurProcess />
      {/* <ViewOurWork /> */}
      <AboutSlider />
      {/* <Testimonials /> */}
      {/* <CtaSection /> */}
      {/* <PortfolioCTA /> */}
    </div>
  );
}

export const metadata = {
  title: "About Ascend Millwork | US-Based Millwork & Cabinetry Experts",
  description:
    "Learn about Ascend Millwork's commitment to Made in USA custom millwork solutions for hotels, multifamily, and commercial spaces.",
};
