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
      className="relative z-10 max-w-7xl mx-auto px-8 py-20 space-y-24 scroll-mt-28"
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <SectionHeader title="CERTIFICATION" darkMode={darkMode} />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`group p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${darkMode ? "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-[#11d3bb]/50" : "bg-slate-900/[0.02] border-slate-900/10 hover:bg-slate-900/[0.05] hover:border-[#11d3bb]/50"}`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#11d3bb]/10 flex items-center justify-center text-[#11d3bb]">
                <svg
                  className="w-6 h-6"
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
                className={`font-bold leading-relaxed ${darkMode ? "text-gray-200" : "text-slate-800"}`}
              >
                {cert.name}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-[#f02e65]">
                CERTIFIED
              </span>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#11d3bb] opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold underline cursor-pointer"
              >
                VIEW
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
