import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-600 dark:text-gray-400 text-sm py-6 mt-5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Razoel. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/RazoelZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/danydarmawan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:danydarmawannn@gmail.com "
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
