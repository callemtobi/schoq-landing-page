"use client";

export default function GetInTouch() {
  return (
    <section className="w-full bg-white text-neutral-900 px-6 py-16 md:px-16 md:py-24 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* TOP SECTION: Title and Paragraph Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-16 md:mb-20">
          <div className="md:col-span-6 lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-neutral-950">
              WHAT HAPPENS AFTER
              <br />
              YOU GET IN TOUCH?
            </h2>
          </div>
          <div className="md:col-span-6 lg:col-span-5 md:pt-2">
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
              Our engineering audit process is designed for clarity and speed.
              We move from initial contact to a concrete technical
              recommendation within 5 business days.
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION: Horizontal Line with Dots */}
        <div className="relative w-full mb-12 hidden md:block">
          {/* Gray Background Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-200 -translate-y-1/2" />

          {/* Step Indicator Dots aligned with the 3 columns below */}
          <div className="relative grid grid-cols-3 w-full">
            {/* Step 1 Dot (Active/Colored) */}
            <div className="flex items-center justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white z-10" />
            </div>

            {/* Step 2 Dot (Gray) */}
            <div className="flex items-center justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 ring-2 ring-white z-10" />
            </div>

            {/* Step 3 Dot (Gray) */}
            <div className="flex items-center justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 ring-2 ring-white z-10" />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: 3 Steps Process Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {/* STEP 01 */}
          <div className="flex flex-col">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-500 mb-3">
              01 / REVIEW
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 mb-4">
              INTERNAL ASSESSMENT
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              We analyze your brief against our expertise modules. We identify
              potential technical blockers and architectural opportunities
              before our first call.
            </p>
          </div>

          {/* STEP 02 */}
          <div className="flex flex-col">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3">
              02 / CONVERSATION
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 mb-4">
              DISCOVERY SESSION
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              A focused 30-minute technical deep-dive. No sales pitch - just
              engineering talk to understand your stack, timeline, and core
              goals.
            </p>
          </div>

          {/* STEP 03 */}
          <div className="flex flex-col">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3">
              03 / RECOMMENDATION
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 mb-4">
              ROADMAP & PROPOSAL
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              You receive a detailed breakdown of how we would build it,
              including suggested technologies, team structure, and estimated
              fixed-cost modules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
