import Head from "next/head";
import EntrySection from "../portfolio/components/EntryHero";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Ascend Millwork | US-Based Millwork Solutions</title>
        <meta
          name="description"
          content="Contact Ascend Millwork for custom millwork solutions, hotel cabinetry, vanities, and stone tops. Made in USA. Turnkey manufacturing for hospitality and multifamily."
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
              "@type": ["ContactPage", "LocalBusiness"],
              name: "Ascend Millwork Contact",
              description:
                "Contact Ascend Millwork for custom millwork solutions made in USA: hotel cabinetry, vanities, stone tops, kitchenettes, and doors for hospitality and multifamily.",
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
        <EntrySection
          height="h-[80dvh]"
          title="Contact Us"
          headline="Start Your Hospitality or Multifamily Project Today"
          bottomSpacing="bottom-48"
        />
        <ContactForm />
        {/* <FAQ /> */}
      </div>
    </>
  );
}

export const metadata = {
  title: "Contact Ascend Millwork | US-Based Millwork Solutions",
  description:
    "Contact Ascend Millwork for custom millwork solutions, hotel cabinetry, vanities, and stone tops. Made in USA. Turnkey manufacturing for hospitality and multifamily.",
};
