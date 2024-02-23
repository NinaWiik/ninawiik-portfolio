import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blush text-[#21262B] py-6">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/" className="text-lg hover:text-teal-dark">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg hover:text-teal-dark">
              About
            </Link>
          </li>
          <li>
            <Link to="/p" className="text-lg hover:text-teal-dark">
              The Photoshoot
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="text-lg hover:text-teal-dark">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:text-teal-dark">
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
