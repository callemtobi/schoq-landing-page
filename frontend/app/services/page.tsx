"use client";

import { useRef } from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ProductBlueprint from "@/components/services/ProductBlueprint";
import FlexibleEngagement from "@/components/services/FlexibleEngagement";
import ConnectedExpertise from "@/components/services/ConnectedExpertise";
import ProductDemonstration from "@/components/services/ProductDemonstration";

const Section1 = () => {
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

export default Section1;
