"use client";

import { useRef } from "react";
import ServicesHero from "@/components/services/mobile-development/ServicesHero";
import ProductDemonstration from "@/components/services/mobile-development/ProductDemonstration";
import Section3 from "@/components/layout/FooterMessage";
import ServicesSectionFive from "@/components/services/layout/ServicesSectionFive";
import ServicesSectionThree from "@/components/services/layout/ServicesSectionThree";
import ServicesSectionTwo from "@/components/services/layout/ServicesSectionTwo";

const MobileServices = () => {
  const container = useRef(null);
  // Section 2
  const productBlueprint = [
    {
      number: "01",
      title: "Product Direction",
      desc: "Defining the MVP scope, technical stack selection, and market fit analysis.",
    },
    {
      number: "02",
      title: "Experience Design",
      desc: "High-fidelity UI systems, interactive prototypes, and user journey mapping.",
    },
    {
      number: "03",
      title: "Engineering",
      desc: "Native iOS/Android or cross-platform development with a robust backend.",
    },
    {
      number: "04",
      title: "Quality",
      desc: "Continuous testing, automated QA, and seamless store deployment.",
    },
  ];
  const productBlueprintTitle = "Product Blueprint";
  const productBlueprintTitleDesc =
    "We provide a complete product delivery stack, from strategy todeployment.";
  // Section 3
  const flexibleEngagement = [
    {
      title: "New Product Build",
      desc: "Complete ownership of the mobile product development from zero.",
    },
    {
      title: "Legacy Modernization",
      desc: "Re-engineering and enhancing existing mobile applications.",
    },
    {
      title: "Team Extension",
      desc: "Dedicated engineers integrated directly into your internal team.",
    },
  ];
  // Section 5
  const expertiseItems = [
    {
      id: "custom-software",
      firstLine: "CUSTOM",
      secondLine: "SOFTWARE",
    },
    {
      id: "product-design",
      firstLine: "PRODUCT",
      secondLine: "DESIGN",
    },
    {
      id: "ai-solutions",
      firstLine: "AI",
      secondLine: "SOLUTIONS",
    },
    {
      id: "cloud-engineering",
      firstLine: "CLOUD",
      secondLine: "ENGINEERING",
    },
  ];
  const expertiseItemsTitle =
    "Everything your mobile product may need beyond the app.";

  return (
    <main
      ref={container}
      className="min-h-screen bg-background text-foreground flex flex-col pb-12 pt-10"
    >
      <ServicesHero />
      <ServicesSectionTwo
        descriptionData={productBlueprint}
        mainTitle={productBlueprintTitle}
        mainDesc={productBlueprintTitleDesc}
      />
      <ServicesSectionThree descriptionData={flexibleEngagement} />
      <ProductDemonstration />
      <ServicesSectionFive
        descriptionData={expertiseItems}
        mainTitle={expertiseItemsTitle}
      />
      <Section3
        description="Have a mobile app worth building?"
        buttonText="Start Building a Mobile App"
      />
    </main>
  );
};

export default MobileServices;
