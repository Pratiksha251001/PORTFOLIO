import React from "react";
import SectionHeader from "./SectionHeader";
import powerBI from "../assets/powerbi.jpg";
import aiWorkshop from "../assets/b10x.pdf";
import pythonDS from "../assets/python.pdf";
import IIDEclass from "../assets/iide.pdf";
import hackethon from "../assets/hackethon.pdf";
import hackethon2 from "../assets/codehack.pdf";
const Certification = ({ darkMode }) => {
  const certifications = [
    {
      name: "Power BI Micro Course",
      file: powerBI,
    },
    {
      name: "B10X AI workshop",
      file: aiWorkshop,
    },
    {
      name: "Python for Data Science",
      file: pythonDS,
    },
    {
      name: "IIDE AI Master Class",
      file: IIDEclass,
    },
    {
      name: " SIH Hackathon Participation",
      file: hackethon,
    },
    {
      name: " Python Quiz hackathon Participation",
      file: hackethon2,
    },
  ];

  return (
    <section
      id="certification"
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 space-y-12 sm:space-y-20 scroll-mt-28"
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <SectionHeader title="CERTIFICATION" darkMode={darkMode} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`group p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
              darkMode
                ? "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-[#11d3bb]/50"
                : "bg-slate-900/[0.02] border-slate-900/10 hover:bg-slate-900/[0.05] hover:border-[#11d3bb]/50"
            }`}
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#11d3bb]/10 flex items-center justify-center text-[#11d3bb]">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p
                className={`font-bold text-sm sm:text-base leading-relaxed ${
                  darkMode ? "text-gray-200" : "text-slate-800"
                }`}
              >
                {cert.name}
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono text-[#f02e65] font-semibold">
                CERTIFIED
              </span>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#11d3bb] hover:text-[#0ea5e9] text-xs font-bold underline cursor-pointer py-1 px-2 rounded transition-colors"
              >
                VIEW ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
