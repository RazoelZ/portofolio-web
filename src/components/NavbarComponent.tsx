import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBriefcase,
  FiBookOpen,
  FiHelpCircle,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const menuItems = [
    { name: "Home", to: "/", icon: <FiHome /> },
    { name: "Experience", to: "/experiences", icon: <FiBriefcase /> },
    { name: "Education", to: "/education", icon: <FiBookOpen /> },
    { name: "FAQ", to: "/faq", icon: <FiHelpCircle /> },
  ];

  const socialItems = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/RazoelZ",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/danydarmawan",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      href: "mailto:danydarmawannn@gmail.com",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 text-gray-800 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-5 flex justify-between items-center relative">
        {/* Left - Menu */}
        <ul className="hidden md:flex gap-6 text-3xl items-center">
          {menuItems.map(({ name, to, icon }) => {
            const isActive = location.pathname === to;
            return (
              <li key={name} className="group relative">
                <Link
                  to={to}
                  className={`transition ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                      : "hover:text-blue-400"
                  }`}
                >
                  {icon}
                </Link>
                <span
                  className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 scale-0 
                  group-hover:scale-100 transition-all duration-150 bg-gray-800 text-xs px-2 py-1 
                  rounded shadow-lg text-white whitespace-nowrap md:text-xl"
                >
                  {name}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 cursor-pointer">
          <img
            src="/icon.png"
            alt="Avatar"
            className="w-9 h-9 rounded-full object-cover border border-gray-500"
          />
        </div>

        {/* Right - Icons */}
        <div className="hidden md:flex items-center gap-5 text-3xl">
          {socialItems.map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-blue-400 transition"
            >
              {icon}
              <span
                className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 
                scale-0 group-hover:scale-100 transition-all duration-150 bg-gray-800 text-xs 
                px-2 py-1 rounded shadow-lg text-white whitespace-nowrap md:text-xl"
              >
                {name}
              </span>
            </a>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="hover:text-yellow-400 transition cursor-pointer"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex flex-col">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl"
            >
              <FiX />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6 text-white text-xl">
            {menuItems.map(({ name, to, icon }) => (
              <Link
                key={name}
                to={to}
                className={`flex items-center gap-3 transition text-2xl ${
                  location.pathname === to
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {icon}
                <span>{name}</span>
              </Link>
            ))}

            <div className="flex gap-6 pt-6 text-2xl border-t border-gray-700 mt-4">
              {socialItems.map(({ name, icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  {icon}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsDark(!isDark);
                  setIsOpen(false);
                }}
                className="hover:text-yellow-400 transition"
              >
                {isDark ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
