"use client";

import { Icon } from "lucide-react";

export default function Form() {
  return (
    <section>
      {/* Text */}
      <div>
        <div>
          <p>Start a conversation</p>
          <h1>Tell us what you&apos;re building.</h1>
          <p>
            Share your idea, current challenge or existing product. We&apos;ll
            review the details and help define the next practical step.
          </p>
        </div>
        <div>
          <div>
            <p>Direct line</p>
            <h3>+49 (0) 30 820 910</h3>
            {/* Lucide react Share icon */}
            <p>Share</p>
            {/* Lucide react Arrow icon */}
            <p>LinkedIn</p>
          </div>
          <div>
            <p>Email address</p>
            <h3>hello@schoq.eng</h3>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div>
        <form></form>
      </div>
    </section>
  );
}
