import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
        darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800 shadow-md'
      }`}
      aria-label="Toggle Theme"
    >
      {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
    </button>
  );
};

export default ThemeToggle;
