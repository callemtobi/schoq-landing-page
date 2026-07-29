"use client";

export default function Section1() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[40%_60%] grid-rows-1 md:grid-rows-2 flex-1 mt-13 mb-10 bg-white text-foreground relative">
      {/* Vertical divider - hidden on mobile */}
      {/* <div className="hidden md:block absolute left-[40%] top-1/2 -translate-y-1/2 h-[180%] w-0.5 bg-linear-to-r from-emerald-400 to-blue-600 " /> */}
      <div className="hidden md:block absolute left-[40%] top-1/2 -translate-y-1/2 h-[180%] w-0.5 bg-linear-to-r from-emerald-400 to-blue-600 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]" />

      {/* Horizontal divider - hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2" />
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-400 to-blue-600 -translate-y-1/2" />

      {/* TOP-LEFT cell - Human Thinking */}
      <div className="flex items-center justify-center px-4 md:ps-20 py-6 md:py-4 order-1 md:order-0">
        <div className="text-5xl sm:text-6xl md:text-6xl font-extrabold uppercase leading-[0.85] tracking-tight text-neutral-900 text-center md:text-left">
          HUMAN
          <br />
          THINKING
        </div>
      </div>

      {/* TOP-RIGHT cell - About Schoq content */}
      <div className="flex flex-col justify-center px-4 md:px-8 py-4 md:py-4 gap-1 md:gap-1.5 order-2 md:order-0">
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-neutral-400">
          ABOUT SCHOQ
        </p>

        <h2 className="text-lg sm:text-xl md:text-3xl font-bold uppercase leading-[1.1] text-neutral-900">
          TECHNOLOGY SHOULD FEEL
          <br />
          CLEAR-
          <span className="bg-linear-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">
            EVEN WHEN THE
            <br />
            CHALLENGE IS COMPLEX.
          </span>
        </h2>

        <p className="text-[11px] md:text-xs text-neutral-500 max-w-sm leading-relaxed mt-1">
          Schoq brings product thinking, human-centred design and software
          engineering together to create digital systems built around real
          business needs.
        </p>
      </div>

      {/* BOTTOM-LEFT cell - empty spacer */}
      <div className="hidden md:block px-8 py-4" />

      {/* BOTTOM-RIGHT cell - Engineered Delivery */}
      <div className="flex items-center justify-center md:justify-start px-4 md:px-8 py-6 order-3 md:order-0">
        <div className="text-5xl sm:text-6xl md:text-6xl font-extrabold uppercase leading-[0.85] tracking-tight text-neutral-900 text-center md:text-left">
          ENGINEERED
          <br />
          DELIVERY
        </div>
      </div>
    </section>
  );
}
