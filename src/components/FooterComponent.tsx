import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 pb-10 pt-14 relative">
      {/* GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 blur-sm"></div>

      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        {/* Main Footer Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* LEFT SIDE */}
          <div>
            <p className="text-primary font-sans text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-display font-semibold text-blue-600 dark:text-blue-400">
                Razoel
              </span>{" "}
              • All Rights Reserved.
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-sans">
              Built with ❤️ using React, TailwindCSS, and modern web tooling.
            </p>
          </div>

          {/* RIGHT SIDE — SOCIAL ICONS */}
          <div className="flex items-center space-x-6 text-xl">
            <a
              href="https://github.com/RazoelZ"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-600 dark:text-gray-400 
                hover:text-blue-600 dark:hover:text-blue-400 
                transition-colors duration-300 transform hover:-translate-y-1
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/danydarmawan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-600 dark:text-gray-400 
                hover:text-blue-600 dark:hover:text-blue-400 
                transition-colors duration-300 transform hover:-translate-y-1
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:danydarmawannn@gmail.com"
              className="
                text-gray-600 dark:text-gray-400 
                hover:text-blue-600 dark:hover:text-blue-400 
                transition-colors duration-300 transform hover:-translate-y-1
              "
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Subtle Bottom Text */}
        <div className="mt-6 text-center md:text-right">
          <p className="text-xs text-gray-500 dark:text-gray-500 tracking-wide">
            Designed with precision • Developed with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
