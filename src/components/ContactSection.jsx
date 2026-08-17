import React from "react";
import { personalData } from "../utils/data/personal-data";
import { Link } from "react-router-dom";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
import SectionHeader from "./SectionHeader";
import Preskilet1 from "../assets/preskilet1.png";

function ContactSection({ darkMode }) {
  return (
    <div
      id="contact"
      className={`my-8 sm:my-16 lg:my-20 relative transition-colors duration-500 max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 scroll-mt-28 ${darkMode ? "text-white" : "text-gray-900"}`}
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <SectionHeader title="CONTACT" darkMode={darkMode} />

      <div className="hidden lg:flex flex-col items-center absolute top-1/2 -translate-y-1/2 -right-4">
        <div
          className={`px-3 py-10 rounded-lg border [writing-mode:vertical-lr] text-[10px] font-black tracking-[0.5em] transition-colors duration-500 ${darkMode ? "bg-[#1e1b4b] border-white/10 text-white" : "bg-gray-100 border-gray-300 text-gray-800"}`}
        >
          CONTACT
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
        <ContactForm darkMode={darkMode} />
        <div className="w-full lg:w-3/4">
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-9">
            <p className="text-sm sm:text-base md:text-xl flex items-center gap-3">
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3 group break-all"
              >
                <span className="shrink-0">
                  <MdAlternateEmail
                    className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                    size={36}
                  />
                </span>
                <span
                  className={`transition-colors text-xs sm:text-sm md:text-base ${darkMode ? "text-white" : "text-gray-700"}`}
                >
                  {personalData.email}
                </span>
              </a>
            </p>

            <p className="text-sm sm:text-base md:text-xl flex items-center gap-3">
              <a
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-3 group"
              >
                <span className="shrink-0">
                  <IoMdCall
                    className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                    size={36}
                  />
                </span>
                <span
                  className={`transition-colors text-xs sm:text-sm md:text-base ${darkMode ? "text-white" : "text-gray-700"}`}
                >
                  {personalData.phone}
                </span>
              </a>
            </p>

            <p className="text-sm sm:text-base md:text-xl flex items-center gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalData.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="shrink-0">
                  <CiLocationOn
                    className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                    size={36}
                  />
                </span>
                <span
                  className={`transition-colors text-xs sm:text-sm md:text-base ${darkMode ? "text-white" : "text-gray-700"}`}
                >
                  {personalData.address}
                </span>
              </a>
            </p>
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-16 flex flex-wrap items-center gap-4 sm:gap-5 lg:gap-8">
            <Link
              target="_blank"
              to={personalData.github}
              className="group"
              aria-label="GitHub Profile"
            >
              <IoLogoGithub
                className={`p-2.5 sm:p-3 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                size={42}
              />
            </Link>
            <Link
              target="_blank"
              to={personalData.linkedIn}
              className="group"
              aria-label="LinkedIn Profile"
            >
              <BiLogoLinkedin
                className={`p-2.5 sm:p-3 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                size={42}
              />
            </Link>
            {personalData.Preskilet && (
              <Link
                target="_blank"
                to={personalData.Preskilet}
                className="group"
                aria-label="Preskilet Profile"
              >
                <div
                  className={`p-2.5 sm:p-3 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
                    darkMode
                      ? "bg-[#8b98a5] group-hover:bg-[#16f2b3]"
                      : "bg-slate-200 group-hover:bg-[#11d3bb]"
                  } group-hover:scale-110`}
                >
                  <img
                    src={Preskilet1}
                    alt="Preskilet"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
