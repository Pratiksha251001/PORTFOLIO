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
      className={`my-12 lg:my-16 relative mt-24 transition-colors duration-500 max-w-7xl mx-auto px-8 py-20 scroll-mt-28 ${darkMode ? "text-white" : "text-gray-900"}`}
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm darkMode={darkMode} />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3 group"
              >
                <MdAlternateEmail
                  className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                  size={36}
                />
                <span
                  className={`transition-colors ${darkMode ? "text-white" : "text-gray-700"}`}
                >
                  {personalData.email}
                </span>
              </a>
            </p>

            <p className="text-sm md:text-xl flex items-center gap-3">
              <a
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-3 group"
              >
                <IoMdCall
                  className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                  size={36}
                />
                <span
                  className={`transition-colors ${darkMode ? "text-white" : "text-gray-700"}`}
                >
                  {personalData.phone}
                </span>
              </a>
            </p>

            <p className="text-sm md:text-xl flex items-center gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalData.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <CiLocationOn
                  className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                  size={36}
                />
                <span
                  className={`transition-colors ${darkMode ? "text-white" : "text-gray-700"}`}
                >
                  {personalData.address}
                </span>
              </a>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" to={personalData.github} className="group">
              <IoLogoGithub
                className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                size={48}
              />
            </Link>
            <Link target="_blank" to={personalData.linkedIn} className="group">
              <BiLogoLinkedin
                className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                size={48}
              />
            </Link>
            {personalData.Preskilet && (
              <Link
                target="_blank"
                to={personalData.Preskilet}
                className="group"
              >
                <div
                  className={`p-3 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
                    darkMode
                      ? "bg-[#8b98a5] group-hover:bg-[#16f2b3]"
                      : "bg-slate-200 group-hover:bg-[#11d3bb]"
                  } group-hover:scale-110`}
                >
                  <img
                    src={Preskilet1}
                    alt="Preskilet"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </Link>
            )}
            {/*} {personalData.twitter && (
              <Link target="_blank" to={personalData.twitter} className="group">
                <FaXTwitter
                  className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${darkMode ? "bg-[#8b98a5] text-gray-800 group-hover:bg-[#16f2b3] group-hover:scale-110" : "bg-slate-200 text-slate-700 group-hover:bg-[#11d3bb] group-hover:text-white group-hover:scale-110"}`}
                  size={48}
                />
              </Link>
            )}*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
