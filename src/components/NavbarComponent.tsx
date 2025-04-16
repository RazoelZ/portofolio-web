import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Maulana</div>
      <ul className="flex space-x-6 font-medium text-gray-400">
        <li>
          <Link
            to="/"
            className="hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:text-white transition-colors duration-200"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
