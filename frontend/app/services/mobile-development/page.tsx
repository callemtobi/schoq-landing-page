"use client";

import { useRef } from "react";
import ServicesHero from "@/components/services/mobile-development/ServicesHero";
import ProductBlueprint from "@/components/services/mobile-development/ProductBlueprint";
import FlexibleEngagement from "@/components/services/mobile-development/FlexibleEngagement";
import ConnectedExpertise from "@/components/services/mobile-development/ConnectedExpertise";
import ProductDemonstration from "@/components/services/mobile-development/ProductDemonstration";

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
    </main>
  );
};

export default MobileServices;
