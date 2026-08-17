import React from "react";

const SectionHeader = ({ title, darkMode }) => {
  return (
    <div className="flex justify-center my-4 sm:my-6 lg:py-8">
      <div className="flex items-center max-w-full">
        <span
          className={`w-6 sm:w-16 md:w-24 h-[2px] shrink ${darkMode ? "bg-[#1a1443]" : "bg-slate-200"}`}
        ></span>
        <span
          className={`w-fit p-1.5 px-3.5 sm:p-2 sm:px-5 text-xs sm:text-sm md:text-xl rounded-md font-bold uppercase tracking-wider text-center shrink-0 ${darkMode ? "bg-[#1a1443] text-white" : "bg-slate-200 text-slate-800"}`}
        >
          {title}
        </span>
        <span
          className={`w-6 sm:w-16 md:w-24 h-[2px] shrink ${darkMode ? "bg-[#1a1443]" : "bg-slate-200"}`}
        ></span>
      </div>
    </div>
  );
};

export default SectionHeader;
