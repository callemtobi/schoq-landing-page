import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const TAGS = [
  "Strategy",
  "Code",
  "Human Experience",
  "Optimization",
  "Quality",
];

const Main: React.FC = () => {
  return (
    <main className="h-screen bg-black px-6 py-12 md:px-12 lg:px-20 flex flex-col justify-start">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full  flex flex-col justify-center pt-8 md:pt-0">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch px-5">
          {/* Gradient Hero Box */}
          <div className="flex-1 bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] p-6 md:p-8 lg:p-6 xl:p-10 2xl:p-12 rounded">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold tracking-tight leading-[1.05] text-white">
              STOP TALKING.
              <br />
              START BUILDING.
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-xl text-white leading-relaxed">
              We combine Swiss precision with deep technical expertise to
              architect, design, and engineer world-class software solutions for
              ambitious leaders.
            </p>

            <div className="mt-6 lg:mt-4 xl:mt-6 2xl:mt-8">
              <Link
                href="#"
                className="inline-block bg-transparent text-white text-base lg:text-sm xl:text-base 2xl:text-lg font-medium border border-white/20 px-6 py-2.5 lg:px-5 lg:py-2 xl:px-6 xl:py-2.5 2xl:px-8 2xl:py-3.5 rounded transition-colors shadow-lg hover:shadow-xl"
              >
                Let&apos;s Discuss Your Project
              </Link>
            </div>
          </div>

          {/* Tag Column */}
          <div className="flex flex-col justify-evenly h-auto gap-4 lg:gap-3 xl:gap-4 2xl:gap-6 shrink-0">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="text-xl sm:text-2xl lg:text-lg xl:text-xl 2xl:text-3xl font-bold tracking-tight text-[#555B6D] whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-red-500 flex  justify-center items-end h-100">
        <div className="flex items-end justify-center h-[10%] text-gray-400 text-xs sm:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-widest uppercase animate-bounce">
          <span className="">SCROLL TO BUILD</span>
          <ChevronDown className=" w-4 h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
        </div>
      </div>
    </main>
  );
};

export default Main;
