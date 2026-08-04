"use client";

import { useRef } from "react";
import ServicesHero from "@/components/services/mobile-development/ServicesHero";
import ProductBlueprint from "@/components/services/mobile-development/ProductBlueprint";
import FlexibleEngagement from "@/components/services/mobile-development/FlexibleEngagement";
import ConnectedExpertise from "@/components/services/mobile-development/ConnectedExpertise";
import ProductDemonstration from "@/components/services/mobile-development/ProductDemonstration";
import Section3 from "@/components/layout/FooterMessage";

const MobileServices = () => {
  const container = useRef(null);

  return (
    <main
      ref={container}
      className="min-h-screen bg-background text-foreground flex flex-col pb-12 pt-10"
    >
      <ServicesHero />
      <ProductBlueprint />
      <FlexibleEngagement />
      <ProductDemonstration />
      <ConnectedExpertise />
      <Section3
        description="Have a mobile app worth building?"
        buttonText="Start Building a Mobile App"
      />
    </main>
  );
};

export default MobileServices;
