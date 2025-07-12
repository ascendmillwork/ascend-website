import Head from "next/head";
import EntrySection from "../portfolio/components/EntryHero";
import ServicesRows from "./components/Services";

export const metadata = {
  title: "Millwork Services | Hotel Cabinetry, Stone Tops, Vanities & More",
  description:
    "Explore our turnkey millwork solutions: hotel cabinetry, stone tops, vanities, kitchenettes, and doors. US-based manufacturing for hospitality and multifamily.",
};

export default function Services() {
  return (
    <>
      <Head>
        <title>
          Millwork Services | Hotel Cabinetry, Stone Tops, Vanities & More
        </title>
        <meta
          name="description"
          content="Explore our turnkey millwork solutions: hotel cabinetry, stone tops, vanities, kitchenettes, and doors. US-based manufacturing for hospitality and multifamily."
        />
        <meta
          name="keywords"
          content="Millwork, Millwork Solutions, Made in USA, Hotel Millwork, Cabinetry, Stone Tops, Vanities, Kitchenettes, Kitchen, Doors"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Service", "LocalBusiness"],
              name: "Ascend Millwork Services",
              description:
                "Turnkey millwork solutions made in USA: hotel cabinetry, stone tops, vanities, kitchenettes, and doors for hospitality and multifamily.",
              provider: {
                "@type": "Organization",
                name: "Ascend Millwork",
                url: "https://ascendmillwork.com/",
              },
              areaServed: "United States",
              keywords:
                "Millwork, Millwork Solutions, Made in USA, Hotel Millwork, Cabinetry, Stone Tops, Vanities, Kitchenettes, Kitchen, Doors",
            }),
          }}
        />
      </Head>
      <div>
        <EntrySection title="Our Services" headline="" />
        {/* <ServiceMatrics /> */}
        <ServicesRows />
        {/* <PortfolioTestimonials /> */}
        {/* <FAQ /> */}
        {/* <CtaSection /> */}
      </div>
    </>
  );
}
