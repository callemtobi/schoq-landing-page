"use client";

// TypeScript Interface for the Blueprint Cards
interface BlueprintCard {
  number: string;
  title: string;
  desc: string;
}

export default function ProductBlueprint() {
  const cardsContent: BlueprintCard[] = [
    {
      number: "01",
      title: "Product Direction",
      desc: "Defining the MVP scope, technical stack selection, and market fit analysis.",
    },
    {
      number: "02",
      title: "Experience Design",
      desc: "High-fidelity UI systems, interactive prototypes, and user journey mapping.",
    },
    {
      number: "03",
      title: "Engineering",
      desc: "Native iOS/Android or cross-platform development with a robust backend.",
    },
    {
      number: "04",
      title: "Quality",
      desc: "Continuous testing, automated QA, and seamless store deployment.",
    },
  ];

  return (
    <section className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#eef2ff] via-[#f0f9ff] to-[#ecfdf5] flex items-center justify-center selection:bg-indigo-100">
      <div className="max-w-7xl mx-auto w-full space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
            Product Blueprint
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            We provide a complete product delivery stack, from strategy to
            deployment.
          </p>
        </div>

        {/* Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {cardsContent.map((card) => (
            <div
              key={card.number}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Number Indicator */}
                <span className="block text-2xl font-bold text-indigo-400/90 tracking-tight">
                  {card.number}
                </span>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Card Description */}
              <p className="mt-6 text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
