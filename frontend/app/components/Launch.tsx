import React from "react";
import { Check, ArrowRight } from "lucide-react";

const Launch: React.FC = () => {
  const timelineSteps = [
    { week: "1", label: "Brief" },
    { week: "2", label: "Prototype" },
    { week: "3 - 4", label: "Interface" },
    { week: "5 - 6", label: "Development" },
    { week: "7", label: "Testing" },
    { week: "8", label: "Launch" },
  ];

  const painPoints = ["Freelancer chaos", "Agency chains", "Friction"];

  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* Header */}
          <div>
            <div className="mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                LAUNCH
                <br />
                YOUR MVP IN
                <br />
                6-8 WEEKS.
              </h2>
            </div>

            {/* Left - Description */}
            <div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Design • Development • Testing • Launch
                <br />
                All under one roof. No noise, just engineering excellence.
              </p>
            </div>
          </div>

          {/* Right - Pain Points */}
          <div className="h-fit rounded-lg bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] px-10 lg:px-20 absolute right-0">
            <div className="grid grid-cols-2 items-center">
              <div className="text-[8rem] font-bold text-white uppercase tracking-wider mb-2 transform scale-y-[1.3] scale-x-[0.85] origin-left">
                NO
              </div>
              <div>
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-center py-1">
                    <span className="text-[1.5rem]  text-white  font-normal leading-tight tracking-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Bar - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-0 relative">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Timeline Dot - Desktop */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white text-sm font-bold relative z-10">
                  {step.week}
                </div>

                {/* Mobile Card Style */}
                <div className="md:hidden w-full bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                    Week {step.week}
                  </div>
                  <div className="text-base font-semibold text-gray-900">
                    {step.label}
                  </div>
                </div>

                {/* Label - Desktop */}
                <div className="hidden md:block mt-3 text-sm font-medium text-gray-700">
                  {step.label}
                </div>

                {/* Mobile Connector Line */}
                {index < timelineSteps.length - 1 && (
                  <div className="md:hidden w-px h-6 bg-gray-200 mx-auto" />
                )}
              </div>
            ))}
          </div>

          {/* Timeline Arrow - Desktop */}
          <div className="hidden md:flex justify-end mt-8">
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <span>8 WEEKS TO MVP</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Launch;
