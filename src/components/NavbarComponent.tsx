import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur shadow-sm px-14 py-4 flex justify-between items-center">
      <div className="text-3xl font-bold text-gray-400 hover:text-white cursor-pointer">
        Dany
      </div>
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
            to="/experiences"
            className="hover:text-white transition-colors duration-200"
          >
            Experiences
          </Link>
        </li>
        <li>
          <Link
            to="/education"
            className="hover:text-white transition-colors duration-200"
          >
            Educations
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
