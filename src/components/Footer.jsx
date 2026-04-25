import React from "react";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer({ darkMode }) {
  return (
    <div
      className={`relative border-t transition-colors duration-500 ${darkMode ? "bg-[#0d1117] border-white/10" : "bg-white border-gray-200"}`}
    >
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#f02e65] to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            © {new Date().getFullYear()} Developer Portfolio by{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pratiksha-parise/"
              className="text-[#11d3bb] font-bold hover:underline"
              rel="noreferrer"
            >
              Pratiksha Parise
            </a>
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className={`text-sm transition-colors hover:text-[#11d3bb] ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/disclaimer"
              className={`text-sm transition-colors hover:text-[#11d3bb] ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Disclaimer
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <a
              target="_blank"
              href="https://github.com/pratiksha-parise/developer-portfolio"
              className={`flex items-center gap-2 uppercase text-sm font-bold transition-colors hover:text-[#11d3bb] ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              rel="noreferrer"
            >
              <IoStar />
              <span>Star</span>
            </a>
            <a
              target="_blank"
              href="https://github.com/pratiksha-parise/developer-portfolio/fork"
              className={`flex items-center gap-2 uppercase text-sm font-bold transition-colors hover:text-[#11d3bb] ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              rel="noreferrer"
            >
              <CgGitFork />
              <span>Fork</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
