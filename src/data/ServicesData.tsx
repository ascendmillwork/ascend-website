import Concept from "@/assets/images/services/Concept.png";
import DesignDevelopment from "@/assets/images/services/Design Development.png";
import Maunfacturing from "@/assets/images/services/Manufacturing.png";
import DeliveryInstallation from "@/assets/images/services/Professional Installation.png";
import QualityControl from "@/assets/images/services/Quality Control.png";
import { StaticImageData } from "next/image";

interface ServiceType {
  title: string;
  image: StaticImageData | string;
  description: string;
}

export const Services: ServiceType[] = [
  {
    title: "Concept",
    image: Concept,
    description:
      "We begin by understanding your vision, brand identity, and functional requirements. Our team collaborates with designers, developers, and architects to translate ideas into tailored millwork and casegood solutions.",
  },
  {
    title: "Design Development",
    image: DesignDevelopment,
    description:
      "Using 3D renderings, detailed drawings, and material recommendations, we refine the design for form, function, and feasibility—ensuring your aesthetic goals align with manufacturing efficiency.",
  },
  {
    title: "Manufacturing",
    image: Maunfacturing,
    description:
      "All products are manufactured in our U.S.-based facilities using state-of-the-art machinery and skilled craftsmanship. We prioritize durability, precision, and timely production to meet project schedules.",
  },
  {
    title: "Quality Control",
    image: QualityControl,
    description:
      "Each piece undergoes strict quality checks for fit, finish, and functionality. Our QC team ensures every component meets our high standards before it leaves the facility.",
  },
  {
    title: "Professional Installation",
    image: DeliveryInstallation,
    description:
      "Our experienced installation team ensures a smooth, on-site delivery and setup—working with your project managers to minimize disruption and complete the space to specification.",
  },
];
