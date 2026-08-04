"use client";

import Image from "next/image";
import ConceptAIImage from "@/public/services/ConceptAI.png";

export default function ConceptAI() {
  return (
    <section className="w-full min-h-screen pt-12 sm:pt-16 md:pt-24 pb-0 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#f0f9ff] via-[#eef2ff] to-[#ecfdf5] flex flex-col items-center justify-end font-sans overflow-hidden">
      <div className="bg-re d-400 w-full max-w-6xl mx-auto flex justify-center items-end px-10">
        <Image
          src={ConceptAIImage}
          alt="Concept AI Workflow Demonstration"
          priority
          className="w-full h-auto object-contain rounded-t-2xl sm:rounded-t-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}
