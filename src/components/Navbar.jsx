import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Navbar/Logo";
import NavLinks from "./Navbar/NavLinks";
import ThemeToggle from "./Navbar/ThemeToggle";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { name: "ABOUT", href: "#about" },
    { name: "EDUCATION", href: "#education" },
    { name: "INTERNSHIP", href: "#internship" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CERTIFICATION", href: "#certification" },
    { name: "CONTACT", href: "#contact" },
    { name: "PRIVACY POLICY", href: "/privacy-policy", isRoute: true },
    { name: "DISCLAIMER", href: "/disclaimer", isRoute: true },
  ];

  const handleLinkClick = (href, isRoute) => {
    setIsMenuOpen(false);
    if (!isRoute && href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="relative z-50 px-4 sm:px-8 py-4 sm:py-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-2">
        <Logo />

        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-8">
          <NavLinks darkMode={darkMode} />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Mobile Hamburger Icon */}
          <button
            className={`md:hidden p-2 rounded-lg text-xl sm:text-2xl transition-colors ${darkMode ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-slate-100"}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-[85vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div
          className={`mt-2 mx-3 sm:mx-4 p-5 sm:p-6 rounded-2xl border shadow-2xl max-h-[75vh] overflow-y-auto backdrop-blur-xl ${
            darkMode
              ? "bg-[#0d1117]/95 border-white/10"
              : "bg-white/95 border-slate-200"
          }`}
        >
          <div className="flex flex-col space-y-3">
            {links.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-bold tracking-widest py-2 px-3 rounded-lg transition-colors hover:text-[#11d3bb] ${
                    darkMode
                      ? "text-gray-300 hover:bg-white/5"
                      : "text-gray-700 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold tracking-widest py-2 px-3 rounded-lg transition-colors hover:text-[#11d3bb] ${
                    darkMode
                      ? "text-gray-300 hover:bg-white/5"
                      : "text-gray-700 hover:bg-slate-50"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href, false);
                  }}
                >
                  {link.name}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
