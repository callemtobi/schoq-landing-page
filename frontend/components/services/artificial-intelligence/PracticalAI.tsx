"use client";

import {
  Caution,
  DisabledCloud,
  ExamBoard,
  ProfilePicture,
  Sprinkles,
  TodoList,
} from "@/components/icons/Icons";

export default function PracticalAI() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans">
      <div className="max-w-5xl w-full mx-auto space-y-12 md:space-y-16">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] text-slate-900 uppercase">
            Practical AI Transformation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
            We bridge the gap between fragmented manual tools and unified
            automated outcomes.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-4xl mx-auto">
          {/* Left Column: Manual Complexity */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col space-y-6">
            {/* Column Header */}
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
              <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                MANUAL COMPLEXITY
              </p>
            </div>

            {/* List Items */}
            <div className="space-y-3 flex-1 flex flex-col justify-center">
              <div className="bg-[#fcf3f3] hover:bg-[#fae8e8] transition-colors rounded-xl p-4 flex items-center space-x-3 text-slate-700 font-semibold text-xs sm:text-sm">
                <div className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0">
                  <DisabledCloud />
                </div>
                <span>Disconnected Legacy Tools</span>
              </div>

              <div className="bg-[#fcf3f3] hover:bg-[#fae8e8] transition-colors rounded-xl p-4 flex items-center space-x-3 text-slate-700 font-semibold text-xs sm:text-sm">
                <div className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0">
                  <ExamBoard />
                </div>
                <span>Bottlenecks & Sync Delays</span>
              </div>

              <div className="bg-[#fcf3f3] hover:bg-[#fae8e8] transition-colors rounded-xl p-4 flex items-center space-x-3 text-slate-700 font-semibold text-xs sm:text-sm">
                <div className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0">
                  <Caution />
                </div>
                <span>Unstructured Data Silos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Intelligent Flow (Recommended) */}
          <div className="relative bg-[#f8fafc] rounded-2xl p-6 sm:p-8 border border-indigo-200/60 shadow-lg flex flex-col space-y-6 overflow-hidden">
            {/* Recommended Badge */}
            <div className="absolute top-0 right-0 bg-linear-to-r from-indigo-600 via-blue-500 to-emerald-400 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-4 rounded-bl-xl">
              RECOMMENDED
            </div>

            {/* Column Header */}
            <div className="flex items-center space-x-2.5 pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                INTELLIGENT FLOW
              </p>
            </div>

            {/* List Items */}
            <div className="space-y-3 flex-1 flex flex-col justify-center">
              <div className="bg-[#edf2fe] hover:bg-[#e2ebfe] transition-colors rounded-xl p-4 flex items-center space-x-3 text-slate-800 font-semibold text-xs sm:text-sm">
                <div className="w-5 h-5 flex items-center justify-center text-indigo-600 shrink-0">
                  <Sprinkles />
                </div>
                <span>Automated Contextual Extraction</span>
              </div>

              <div className="bg-[#edf2fe] hover:bg-[#e2ebfe] transition-colors rounded-xl p-4 flex items-center space-x-3 text-slate-800 font-semibold text-xs sm:text-sm">
                <div className="w-5 h-5 flex items-center justify-center text-indigo-600 shrink-0">
                  <TodoList />
                </div>
                <span>Heuristic-Led Rule Application</span>
              </div>

              <div className="bg-[#edf2fe] hover:bg-[#e2ebfe] transition-colors rounded-xl p-4 flex items-center space-x-3 text-slate-800 font-semibold text-xs sm:text-sm">
                <div className="w-5 h-5 flex items-center justify-center text-indigo-600 shrink-0">
                  <ProfilePicture />
                </div>
                <span>Integrated Human-in-the-Loop Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
