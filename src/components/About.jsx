import React from "react";
import meeImg from "../assets/pratiksha.png";
import SectionHeader from "./SectionHeader";

const About = ({ darkMode }) => {
  const education = [
    {
      institution: "MIT CORER BARSHI , SOLAPUR UNIVERSITY",
      degree: "Bachelor of Technology in Computer Science Engineering",
      info: "Cumulative CGPA: 9.3/10",
      location: "Barshi, Solapur",
      period: "Pursuing Third Year [2027]",
    },
    {
      institution: "GOVT POLYTECHNIC ARVI",
      degree: "Diploma in Computer Science",
      info: "Percentage : 81.37 %",
      location: "Arvi, Wardha",
      period: "[2022-24]",
    },
  ];

  return (
    <section
      id="about"
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 pb-16 sm:pb-20 space-y-12 sm:space-y-20 scroll-mt-28"
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <SectionHeader title="ABOUT ME" darkMode={darkMode} />

      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div className="space-y-6">
          <p
            className={`leading-relaxed text-sm sm:text-base md:text-lg font-medium transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            I am a proficient and passionate software developer with a strong
            focus on building innovative technology solutions. With experience
            across multiple programming languages and frameworks, I specialize
            in developing scalable web applications, APIs, and data-driven
            systems. I also have a growing interest in data science, applying
            analytical techniques and insights to solve real-world problems. My
            recent internships provided hands-on experience working in
            collaborative teams, where I contributed to enhancing user
            experience and optimizing workflows. I continuously strive to learn
            and improve, aiming to deliver impactful, efficient, and intelligent
            solutions.
          </p>
        </div>
        <div className="relative flex justify-center lg:justify-end pr-0 lg:pr-16">
          <div
            className={`w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[350px] rounded-2xl overflow-hidden border transition-all duration-700 shadow-2xl grayscale hover:grayscale-0 ${darkMode ? "border-white/10" : "border-gray-200"}`}
          >
            <img
              src={meeImg}
              alt="Pratiksha Parise"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Vertical Sidebar Tab */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <div
              className={`px-3 py-10 rounded-lg border [writing-mode:vertical-lr] text-[10px] font-black tracking-[0.5em] transition-colors duration-500 ${darkMode ? "bg-[#1e1b4b] border-white/10 text-white" : "bg-gray-100 border-gray-300 text-gray-800"}`}
            >
              WHO I AM?
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="space-y-8 sm:space-y-12 scroll-mt-28">
        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
          </div>
        </div>
        <SectionHeader title="EDUCATION" darkMode={darkMode} />
        <div className="grid gap-6 sm:gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`p-5 sm:p-8 rounded-2xl border transition-all ${darkMode ? "bg-white/[0.02] border-white/10 hover:bg-white/[0.04]" : "bg-slate-900/[0.02] border-slate-900/10 hover:bg-slate-900/[0.04]"}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 sm:mb-4">
                <h4 className="text-lg sm:text-xl font-bold text-[#f02e65]">
                  {edu.institution}
                </h4>
                <span
                  className={`text-xs sm:text-sm font-bold ${darkMode ? "text-gray-500" : "text-gray-400"}`}
                >
                  {edu.period}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <p className="font-semibold text-sm sm:text-base">{edu.degree}</p>
                <p
                  className={`text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {edu.location}
                </p>
              </div>
              <p className="mt-3 sm:mt-4 text-[#11d3bb] font-mono text-xs sm:text-sm">
                {edu.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
