import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBriefcase,
  FiBookOpen,
  FiHelpCircle,
  // FiMoon,
  // FiSun,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isDark, setIsDark] = useState(
  //   localStorage.getItem("theme") === "dark"
  // );

  // useEffect(() => {
  //   const root = document.documentElement;
  //   if (isDark) {
  //     root.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     root.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [isDark]);

  const menuItems = [
    { name: "Home", href: "#home", icon: <FiHome /> },
    { name: "Experience", href: "#experiences", icon: <FiBriefcase /> },
    { name: "Education", href: "#education", icon: <FiBookOpen /> },
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
      <div
        className="
          mx-auto px-5 md:px-10 py-4
          flex justify-between items-center
          backdrop-blur-xl bg-white/5 dark:bg-black/20
          border-b border-white/10 dark:border-white/5
          shadow-[0_4px_25px_rgba(0,0,0,0.2)]
        "
      >
        {/* LEFT MENU */}
        <ul className="hidden md:flex gap-6 items-center text-2xl">
          {menuItems.map(({ name, href, icon }) => (
            <li key={name} className="relative group">
              <a
                href={href}
                className="
                  transition text-white/80 dark:text-gray-200
                  hover:text-blue-400 hover:scale-110
                "
              >
                {icon}
              </a>

              {/* Tooltip */}
              <span
                className="
                  absolute top-full mt-1 left-1/2 -translate-x-1/2 opacity-0 scale-90
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-150
                  bg-black/70 px-2 py-1 rounded text-xs text-white
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
              border border-white/20 shadow-lg
              hover:scale-110 transition
            "
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-6 text-2xl">
          {socialItems.map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              className="
                hover:text-blue-400 hover:scale-110 transition relative group
              "
            >
              {icon}

              {/* Tooltip */}
              <span
                className="
                  absolute top-full mt-1 left-1/2 -translate-x-1/2 opacity-0 scale-90
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-150
                  bg-black/70 px-2 py-1 rounded text-xs text-white
                  backdrop-blur-md whitespace-nowrap
                "
              >
                {name}
              </span>
            </a>
          ))}

          {/* <button
            onClick={() => setIsDark(!isDark)}
            className="
              hover:text-yellow-400 hover:scale-110 transition
            "
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button> */}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-3xl text-white"
        >
          <FiMenu />
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex flex-col">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-4xl"
            >
              <FiX />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-6 text-white text-2xl">
            {menuItems.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
                className="
                  flex items-center gap-3 hover:text-blue-400 transition
                "
              >
                {icon}
                {name}
              </a>
            ))}

            <div className="flex gap-6 pt-6 text-2xl border-t border-gray-700 mt-6">
              {socialItems.map(({ icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-blue-400 transition"
                >
                  {icon}
                </a>
              ))}

              {/* <button
                onClick={() => {
                  setIsDark(!isDark);
                  setIsOpen(false);
                }}
                className="hover:text-yellow-400 transition"
              >
                {isDark ? <FiSun /> : <FiMoon />}
              </button> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
