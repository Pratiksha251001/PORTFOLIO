import React from "react";

const SectionHeader = ({ title, darkMode }) => {
  return (
    <div className="flex justify-center my-5 lg:py-8">
      <div className="flex items-center">
        <span
          className={`w-24 h-[2px] ${darkMode ? "bg-[#1a1443]" : "bg-slate-200"}`}
        ></span>
        <span
          className={`w-fit p-2 px-5 text-xl rounded-md font-bold uppercase tracking-wider ${darkMode ? "bg-[#1a1443] text-white" : "bg-slate-200 text-slate-800"}`}
        >
          {title}
        </span>
        <span
          className={`w-24 h-[2px] ${darkMode ? "bg-[#1a1443]" : "bg-slate-200"}`}
        ></span>
      </div>
    </div>
  );
};

export default SectionHeader;
