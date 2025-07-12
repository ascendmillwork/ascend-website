import Head from "next/head";
import EntrySection from "./components/EntryHero";
import ProjectTabs from "./components/ProjectsTabs";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>
          Project Portfolio | Hotel Millwork, Vanities, Kitchenettes
        </title>
        <meta
          name="description"
          content="See our completed hotel millwork, custom cabinetry, vanities, and kitchenettes for hospitality and multifamily clients. Made in USA."
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
              "@type": ["CollectionPage", "LocalBusiness"],
              name: "Ascend Millwork Portfolio",
              description:
                "Portfolio of custom millwork solutions made in USA: hotel millwork, cabinetry, vanities, kitchenettes, and doors for hospitality and multifamily.",
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
        <EntrySection title="Our Work" headline="" />
        {/* <InfoSection /> */}
        <ProjectTabs />
        {/* {PortfolioData.map((data, index) => (
          <Services key={index} data={data} />
        ))} */}
        {/* <PortfolioTestimonials /> */}
        {/* <PortfolioCTA /> */}
        {/* <CtaSection /> */}
      </div>
    </>
  );
}

export const metadata = {
  title: "Project Portfolio | Hotel Millwork, Vanities, Kitchenettes",
  description:
    "See our completed hotel millwork, custom cabinetry, vanities, and kitchenettes for hospitality and multifamily clients. Made in USA.",
};
