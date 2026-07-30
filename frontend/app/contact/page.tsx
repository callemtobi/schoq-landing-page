"use client";

import { useRef } from "react";
import Form from "@/components/contact/Form";
import GetInTouch from "@/components/contact/GetInTouch";
import Section3 from "@/components/about/Section3";

const ContactPage = () => {
  const container = useRef(null);

  return (
    <main
      ref={container}
      className="min-h-screen bg-background text-foreground flex flex-col pb-12 pt-10"
    >
      <Form />
      <GetInTouch />
      <Section3 />
    </main>
  );
};

export default ContactPage;
