"use client";

import { useRef } from "react";
import Form from "@/components/contact/Form";
import GetInTouch from "@/components/contact/GetInTouch";
import Section3 from "@/components/layout/FooterMessage";

const ContactPage = () => {
  const container = useRef(null);

  return (
    <main
      ref={container}
      className="min-h-screen bg-background text-foreground flex flex-col pb-12 pt-10"
    >
      <Form />
      <GetInTouch />
      <Section3
        description="Have a challenge worth solving?"
        buttonText="Start a project"
      />
    </main>
  );
};

export default ContactPage;
