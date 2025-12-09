import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBriefcase,
  FiHelpCircle,
  FiMoon,
  FiSun,
  FiUser,
  FiTrello,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../Hooks/useTheme";
import { GraduationCap, Medal } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  /** 🔥 Detect scroll to add elevation */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** 🔒 Prevent background scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const menuItems = [
    { name: "Home", href: "#home", icon: <FiHome /> },
    { name: "About Me", href: "#about-me", icon: <FiUser /> },
    { name: "Experience", href: "#experiences", icon: <FiBriefcase /> },
    { name: "Projects", href: "#projects", icon: <FiTrello /> },
    { name: "Education", href: "#education", icon: <GraduationCap /> },
    { name: "Certifications", href: "#certificates", icon: <Medal /> },
    { name: "FAQ", href: "#faq", icon: <FiHelpCircle /> },
  ];

  const socialItems = [
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/RazoelZ" },
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
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* 🔥 Top Glow Border */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 blur-sm"></div>

      <div
        className={`
          mx-auto px-5 md:px-10 py-4
          flex justify-between items-center
          backdrop-blur-xl 
          bg-white/70 dark:bg-[#0e0e12]/40
          transition-all duration-300
          border-b border-gray-200 dark:border-white/10
          ${scrolled ? "shadow-theme-md" : ""}
        `}
      >
        {/* LEFT MENU - Desktop */}
        <ul className="hidden md:flex gap-6 items-center text-2xl">
          {menuItems.map(({ name, href, icon }) => (
            <li key={name} className="relative group">
              <a
                href={href}
                className="
                  transition text-secondary
                  hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110
                "
              >
                {icon}
              </a>

              {/* Tooltip */}
              <span
                className="
                  absolute top-full mt-1 left-1/2 -translate-x-1/2 
                  opacity-0 scale-90
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  bg-gray-900/90 dark:bg-black/70 px-2 py-1 
                  rounded text-xs text-white 
                  backdrop-blur-md whitespace-nowrap
                "
              >
                {name}
              </span>
            </li>
          ))}
        </ul>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/icon.png"
            alt="Avatar"
            className="
              w-10 h-10 rounded-full object-cover
              border border-gray-300 dark:border-white/20 shadow-lg
              hover:scale-110 transition
            "
          />
        </div>

        {/* RIGHT SOCIAL + THEME - Desktop */}
        <div className="hidden md:flex items-center gap-6 text-2xl">
          {socialItems.map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              className="
                text-secondary transition
                hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 
                relative group
              "
            >
              {icon}

              {/* Tooltip */}
              <span
                className="
                  absolute top-full mt-1 left-1/2 -translate-x-1/2 
                  opacity-0 scale-90
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  bg-gray-900/90 dark:bg-black/70 px-2 py-1 
                  rounded text-xs text-white 
                  backdrop-blur-md whitespace-nowrap
                "
              >
                {name}
              </span>
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              p-2 rounded-xl bg-gray-200 dark:bg-gray-800 
              transition text-gray-800 dark:text-gray-200
              hover:scale-110
            "
          >
            {theme === "light" ? (
              <FiMoon size={20} />
            ) : (
              <FiSun size={20} className="text-yellow-400" />
            )}
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-3xl text-primary"
        >
          <FiMenu />
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-50 flex flex-col
            bg-white/95 dark:bg-black/85 backdrop-blur-xl
            animate-slideDown
          "
        >
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-900 dark:text-white text-4xl"
            >
              <FiX />
            </button>
          </div>

          {/* ITEMS */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 text-primary text-2xl">
            {menuItems.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
                className="
                  flex items-center gap-3
                  hover:text-blue-600 dark:hover:text-blue-400 transition font-sans
                "
              >
                {icon}
                {name}
              </a>
            ))}

            {/* Social + Theme */}
            <div
              className="
                flex gap-6 pt-6 text-2xl border-t 
                border-gray-300 dark:border-gray-700 mt-6
              "
            >
              {socialItems.map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  className="
                    text-secondary hover:text-blue-600 
                    dark:hover:text-blue-400 transition
                  "
                >
                  {icon}
                </a>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 transition"
              >
                {theme === "light" ? (
                  <FiMoon size={20} />
                ) : (
                  <FiSun size={20} className="text-yellow-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
