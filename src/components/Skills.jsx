import React from "react";
import { skillsData } from "../utils/data/skills";
import { skillsImage } from "../utils/skill-image";
import Marquee from "react-fast-marquee";
import SectionHeader from "./SectionHeader";

function Skills({ darkMode }) {
  return (
    <div
      id="skills"
      className={`relative z-50 border-t my-12 lg:my-24 transition-colors duration-500 max-w-7xl mx-auto px-8 scroll-mt-28 ${darkMode ? "border-[#25213b]" : "border-slate-200"}`}
    >
      <div
        className={`w-[100px] h-[100px] rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 ${darkMode ? "bg-violet-100" : "bg-blue-400"}`}
      ></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <SectionHeader title="Skills" darkMode={darkMode} />

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div
                className={`h-full w-full rounded-lg border transition-all duration-500 ${darkMode ? "border-[#1f223c] bg-[#11152c] group-hover:border-violet-500" : "border-slate-200 bg-white shadow-md group-hover:border-[#11d3bb]"}`}
              >
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div
                      className={`h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent`}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10 md:h-12 lg:h-16">
                    <img
                      src={skillsImage(skill)?.src}
                      alt={skill || "Skill Image"}
                      loading="lazy"
                      className={`h-full w-auto rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 ${skill.toLowerCase() === "github" ? "dark:invert" : ""}`}
                    />
                  </div>
                  <p
                    className={`text-sm sm:text-lg transition-colors ${darkMode ? "text-white" : "text-slate-800 font-semibold"}`}
                  >
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
