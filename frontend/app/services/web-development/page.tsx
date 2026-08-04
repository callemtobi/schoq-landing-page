"use client";

import { useRef } from "react";
import HeroSection from "@/components/services/web-development/HeroSection";
import ServicesSectionTwo from "@/components/services/layout/ServicesSectionTwo";
import ServicesSectionThree from "@/components/services/layout/ServicesSectionThree";
import OnePlatform from "@/components/services/web-development/OnePlatform";
import ServicesSectionFive from "@/components/services/layout/ServicesSectionFive";
import Section3 from "@/components/layout/FooterMessage";

const WebServices = () => {
  const container = useRef(null);
  // Section 2
  const conceptToLaunch = [
    {
      number: "01",
      title: "Discover",
      desc: "Defining the MVP scope, technical stack selection, and market fit analysis.",
    },
    {
      number: "02",
      title: "Architect",
      desc: "High-fidelity UI systems, interactive prototypes, and user journey mapping.",
    },
    {
      number: "03",
      title: "Build",
      desc: "Native iOS/Android or cross-platform development with a robust backend.",
    },
    {
      number: "04",
      title: "Launch & Scale",
      desc: "Continuous testing, automated QA, and seamless store deployment.",
    },
  ];
  const conceptToLaunchTitle = "From Concept To Launch.";
  const conceptToLaunchDesc =
    "We provide a complete product delivery stack, from strategy to deployment.";

  // Section 3
  const flexibleEngagement = [
    {
      title: "New Web Platform",
      desc: "End-to-End development of a modern digital ecosystem from scratch.",
    },
    {
      title: "Modernization",
      desc: "Migrating legacy systems to modern, headless frontend architectures.",
    },
    {
      title: "Team Extension",
      desc: "Frontend, backend and product specialists integrated into your existing team.",
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
      id: "mobile-dev",
      firstLine: "Mobile",
      secondLine: "Dev",
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
    "Everything your web platform may need beyond the interface.";

  return (
    <main
      ref={container}
      className="min-h-screen bg-background text-foreground flex flex-col pb-12 pt-10"
    >
      <HeroSection />
      <ServicesSectionTwo
        descriptionData={conceptToLaunch}
        mainTitle={conceptToLaunchTitle}
        mainDesc={conceptToLaunchDesc}
      />
      <ServicesSectionThree descriptionData={flexibleEngagement} />
      <OnePlatform />
      <ServicesSectionFive
        descriptionData={expertiseItems}
        mainTitle={expertiseItemsTitle}
      />
      <Section3
        description="Have a challenge worth solving? "
        buttonText="Discuss Your Web Platform"
      />
    </main>
  );
};

export default WebServices;
