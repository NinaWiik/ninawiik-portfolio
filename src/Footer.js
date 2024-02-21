import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/" className="text-lg hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="text-lg hover:text-blue-500">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="text-lg hover:text-blue-500">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
        <p className="text-sm mt-4">© {new Date().getFullYear()} Nina Wiik</p>
      </div>
    </footer>
  );
};

export default Footer;
