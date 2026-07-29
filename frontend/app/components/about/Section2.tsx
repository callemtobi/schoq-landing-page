"use client";

import Image from "next/image";
import Frame120 from "@/public/about/Frame 120.svg";
import Adnan from "@/public/about/adnan.svg";
import Qasim from "@/public/about/qasim.svg";
import Ubaid from "@/public/about/ubaid.svg";

export default function Section2() {
  return (
    <section className="min-h-screen bg-r ed-400 text-foreground flex flex-col justify-between px-6 py-12 md:px-16 md:py-16">
      {/* TOP ROW: Text Content (Left) & Group Photo (Right) */}
      <div className="bg- blue-400 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-4">
        {/* TOP-LEFT cell: Main content */}
        <div className="bg- yellow-300 flex items-center justify-center p-6 md:p-8">
          <div className="max-w-xl">
            <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold uppercase leading-tight text-neutral-900 mb-4 md:mb-6">
              A TECHNOLOGY PARTNER BUILT AROUND CLARITY, COLLABORATION AND
              EXECUTION.
            </h2>
            <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
              Schoq was created to make sophisticated digital technology more
              accessible, practical and useful. We work with businesses,
              founders and organisations to turn ideas and complex requirements
              into products that can be launched, maintained and scaled.
            </p>
          </div>
        </div>

        {/* TOP-RIGHT cell: Group photo frame */}
        <div className="bg- orange-400 flex items-center justify-center p-6 md:p-8">
          <Image
            src={Frame120}
            alt={"Leaders"}
            height={300}
            width={500}
            className="w-full h-auto object-contain max-w-md md:max-w-lg grayscale"
            priority
          />
        </div>
      </div>

      {/* BOTTOM ROW: Team member cards side-by-side in 3 columns */}
      <div className="bg -blue-400 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 p-6 md:p-8">
        {/* Managing Director */}
        <div className="bg -red-400 flex flex-col items-center text-center">
          <div className="mb-4 relative w-full max-w-64 aspect-square flex items-end justify-center">
            <Image
              src={Adnan}
              alt={"Adnan Javed"}
              height={220}
              width={220}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-neutral-900">
            MANAGING DIRECTOR
          </p>
          <p className="text-sm font-bold uppercase bg-linear-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent mt-1">
            ADNAN JAVED
          </p>
        </div>

        {/* Chief Executive Officer */}
        <div className="bg -red-400 flex flex-col items-center text-center">
          <div className="mb-4 relative w-full max-w-64 aspect-square flex items-end justify-center">
            <Image
              src={Qasim}
              alt={"M. Qasim"}
              height={220}
              width={220}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-neutral-900">
            CHIEF EXECUTIVE OFFICER
          </p>
          <p className="text-sm font-bold uppercase bg-linear-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent mt-1">
            M. QASIM
          </p>
        </div>

        {/* Director */}
        <div className="bg- red-400 flex flex-col items-center text-center">
          <div className="mb-4 relative w-full max-w-64 aspect-square flex items-end justify-center">
            <Image
              src={Ubaid}
              alt={"Ubaid Farooq"}
              height={220}
              width={220}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-neutral-900">
            DIRECTOR
          </p>
          <p className="text-sm font-bold uppercase bg-linear-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent mt-1">
            UBAID FAROOQ
          </p>
        </div>
      </div>
    </section>
  );
}
