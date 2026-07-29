"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Section3 from "@/components/about/Section3";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const container = useRef(null);

  return (
    <main
      ref={container}
      className="min-h-screen bg-background text-foreground flex flex-col"
    >
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  );
};

export default AboutPage;
