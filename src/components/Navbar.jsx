import React, { useState } from "react";
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
    { name: "PRIVACY POLICY", href: "/privacy-policy" },
    { name: "DISCLAIMER", href: "/disclaimer" },
  ];

  return (
    <nav className="relative z-50 px-8 py-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center space-x-4 md:space-x-8">
          <NavLinks darkMode={darkMode} />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Mobile Hamburger Icon */}
          <button
            className={`md:hidden p-2 text-2xl transition-colors ${darkMode ? "text-white" : "text-slate-900"}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div
          className={`mt-2 mx-4 p-6 rounded-2xl border shadow-2xl ${darkMode ? "bg-[#0d1117] border-white/10" : "bg-white border-slate-200"}`}
        >
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold tracking-widest transition-colors hover:text-[#11d3bb] ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
