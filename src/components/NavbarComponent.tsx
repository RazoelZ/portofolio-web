import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Experience", to: "/experiences" },
    { name: "Education", to: "/education" },
    { name: "Frequently Asked Questions", to: "/faq" },
    // { name: "Skills", to: "/skills" },
    // { name: "Portfolio", to: "/portfolio" },
    // { name: "Cover Letter", to: "/cover-letter" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0e1116]/90 text-white shadow-md">
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/icon.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover border border-gray-500"
          />
          <div>
            <h1 className="text-white text-sm font-semibold leading-tight">
              Dany Darmawan
            </h1>
            <p className="text-xs text-gray-400">Frontend Developer</p>
          </div>
        </div>

        {/* Center: Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {menuItems.map(({ name, to }) => (
            <li key={name}>
              <Link
                to={to}
                className="text-gray-300 hover:text-white transition"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-xl cursor-pointer"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sticky Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden sticky top-[64px] px-6 pb-4 space-y-3 shadow-md transition-all duration-300">
          {menuItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className="block text-sm text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded transition cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
