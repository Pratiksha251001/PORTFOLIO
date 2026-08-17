import React from "react";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer({ darkMode }) {
  return (
    <footer
      className={`relative border-t transition-colors duration-500 ${darkMode ? "bg-[#0d1117] border-white/10" : "bg-white border-gray-200"}`}
    >
      <div className="mx-auto px-4 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 sm:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#f02e65] to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <p
            className={`text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            © {new Date().getFullYear()} Developer Portfolio by{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pratiksha-parise/"
              className="text-[#11d3bb] font-bold hover:underline inline-block"
              rel="noreferrer"
            >
              Pratiksha Parise
            </a>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link
              to="/privacy-policy"
              className={`text-xs sm:text-sm transition-colors hover:text-[#11d3bb] ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/disclaimer"
              className={`text-xs sm:text-sm transition-colors hover:text-[#11d3bb] ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Disclaimer
            </Link>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <a
              target="_blank"
              href="https://github.com/Pratiksha251001"
              className={`flex items-center gap-1.5 uppercase text-xs sm:text-sm font-bold transition-colors hover:text-[#11d3bb] ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              rel="noreferrer"
            >
              <IoStar />
              <span>Star</span>
            </a>
            <a
              target="_blank"
              href="https://github.com/Pratiksha251001"
              className={`flex items-center gap-1.5 uppercase text-xs sm:text-sm font-bold transition-colors hover:text-[#11d3bb] ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              rel="noreferrer"
            >
              <CgGitFork />
              <span>Fork</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
