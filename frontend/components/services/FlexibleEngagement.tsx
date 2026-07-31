"use client";

// TypeScript interface for engagement cards
interface EngagementCard {
  title: string;
  desc: string;
}

export default function FlexibleEngagement() {
  const cardsContent: EngagementCard[] = [
    {
      title: "New Product Build",
      desc: "Complete ownership of the mobile product development from zero.",
    },
    {
      title: "Legacy Modernization",
      desc: "Re-engineering and enhancing existing mobile applications.",
    },
    {
      title: "Team Extension",
      desc: "Dedicated engineers integrated directly into your internal team.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans">
      <div className="max-w-5xl w-full mx-auto space-y-10 md:space-y-12">
        {/* Header Section */}
        <div className="space-y-3 text-left">
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
            How We Work
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            Flexible Engagement
          </h2>
        </div>

        {/* Engagement Cards Container */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {cardsContent.map((card, index) => (
            <div
              key={index}
              /* Gradient border effect wrapper */
              className="relative p-[1.5px] rounded-2xl bg-gradient-to-r from-purple-200 via-sky-200 to-emerald-200 hover:from-purple-300 hover:via-sky-300 hover:to-emerald-300 transition-all duration-300 shadow-xs"
            >
              {/* Inner card content */}
              <div className="w-full bg-white rounded-[14px] p-6 sm:p-8 md:p-10 flex flex-col justify-center space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
