"use client";

import { useRef } from "react";
import AIHeroSection from "@/components/services/artificial-intelligence/HeroSection";
import ServicesSectionTwo from "@/components/services/layout/ServicesSectionTwo";
import ServicesSectionThree from "@/components/services/layout/ServicesSectionThree";
import ConceptAI from "@/components/services/artificial-intelligence/ConceptAI";
import PracticalAI from "@/components/services/artificial-intelligence/PracticalAI";
import FooterMessage from "@/components/layout/FooterMessage";

const AiServices = () => {
  const container = useRef(null);
  // Section 2
  const opportunity = [
    {
      number: "01",
      title: "Discover",
      desc: "Identify the workflow, available data and desired outcome.",
    },
    {
      number: "02",
      title: "Validate & Architect",
      desc: "Test feasibility, sample outputs and review requirements.",
    },
    {
      number: "03",
      title: "Build & Integrate",
      desc: "Develop the solution and connect it with existing systems.",
    },
    {
      number: "04",
      title: "Control & Improve",
      desc: "Monitor performance, manage risks and refine the workflow.",
    },
  ];
  const opportunityTitle = "FROM OPPORTUNITY TO MONITORED SYSTEM";
  const opportunityDesc =
    "We validate the use case before building, integrate it into real workflows, and keep its behaviour visible after launch.";
  // Section 3
  const practicalAI = [
    {
      title: "Document Intelligence",
      desc: "Extract, classify and organise information from documents, forms and reports.",
    },
    {
      title: "Knowledge Assistants",
      desc: "Help users find reliable answers from approved business content.",
    },
    {
      title: "Workflow Automation",
      desc: "Connect requests, rules, approvals and system actions.",
    },
    {
      title: "AI Product Features",
      desc: "Add search, summarisation, recommendations or intelligent assistance to existing products.",
    },
  ];
  // Section 5

  return (
    <main
      ref={container}
      className="min-h-screen bg-background text-foreground flex flex-col pb-12 pt-10"
    >
      <AIHeroSection />
      <ServicesSectionTwo
        descriptionData={opportunity}
        mainTitle={opportunityTitle}
        mainDesc={opportunityDesc}
      />
      <ServicesSectionThree descriptionData={practicalAI} />
      <ConceptAI />
      <PracticalAI />
      <FooterMessage
        description="Have a process that could work smarter?"
        buttonText="Discuss an AI Opportunity"
      />
    </main>
  );
};

export default AiServices;
