"use client";

import { useRef } from "react";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Section3 from "@/components/layout/FooterMessage";

const AboutPage = () => {
  const container = useRef(null);

  return (
    <main
      ref={container}
      className="min-h-screen bg-background text-foreground flex flex-col pb-12 pt-20"
    >
      <Section1 />
      <Section2 />
      <Section3
        description="Have a challenge worth solving?"
        buttonText="Start a Project"
      />
    </main>
  );
};

export default AboutPage;
