import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-600 text-sm py-6 mt-5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Razoel. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-black transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
