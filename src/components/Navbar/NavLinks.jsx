import React from 'react';

const NavLinks = ({ darkMode }) => {
  const links = [
    { name: 'ABOUT', href: '#about' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'INTERNSHIP', href: '#internship' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CERTIFICATION', href: '#certification' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <div className="hidden md:flex space-x-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`text-xs font-bold tracking-widest transition-colors hover:text-[#11d3bb] ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
