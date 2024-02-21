import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./images/NW normal.png";

export default function Navbar() {
  const location = useLocation();

  const showHomeBgImage = location.pathname === "/";
  const showAboutBgImage = location.pathname === "/about";
  const showPricingBgImage = location.pathname === "/pricing";
  const showGalleryBgImage = location.pathname === "/gallery";
  const showContactBgImage = location.pathname === "/contact";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start ${
        showHomeBgImage
          ? "home-bg-image"
          : showPricingBgImage
          ? "pricing-bg-image"
          : showAboutBgImage
          ? "about-bg-image"
          : showGalleryBgImage
          ? "gallery-bg-image"
          : showContactBgImage
          ? "contact-bg-image"
          : "default-bg-image"
      }`}
    >
      <div className="w-full hidden md:block">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full  md:w-1/5 p-4 flex items-center justify-center">
            <Link to="/about" className="navbar-link p-2 text-lg sm:text-3xl">
              ABOUT
            </Link>
          </div>
          <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
            <Link to="/pricing" className="navbar-link p-2 text-lg sm:text-3xl">
              PRICING
            </Link>
          </div>
          <div className="w-full md:w-2/5 p-4 flex items-center justify-center">
            <Link to="/" className="text-center mt-4 sm:mt-0 sm:mb-4 sm:mt-4">
              <img src={logo} alt="desc" className="max-w- sm:w-full" />
            </Link>
          </div>
          <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
          <Link to="/gallery" className="navbar-link p-2 text-lg sm:text-3xl">
              GALLERY
            </Link>
          </div>
          <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
          <Link to="/contact" className="navbar-link p-2 text-lg sm:text-3xl">
              CONTACT
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full block md:hidden">
      <div class="flex flex-col h-72 w-full items-center"> 
  <div class="w-full flex justify-center"> 
    <Link to="/" className="">
      <img src={logo} alt="desc" className="max-w-xs sm:w-full" />
    </Link>
  </div>
  <div class="flex">
    <div class="flex-1 p-4">
      <Link to="/about" className="navbar-link p-2 text-lg">
        ABOUT
      </Link>
    </div>
    <div class="flex-1 p-4">
      <Link to="/pricing" className="navbar-link p-2 text-lg">
        PRICING
      </Link>
    </div>
  </div>
  <div class="flex">
    <div class="flex-1 p-4">
    <Link to="/gallery" className="navbar-link p-2 text-lg">
        GALLERY
      </Link>
    </div>
    <div class="flex-1 p-4">
    <Link to="/contact" className="navbar-link p-2 text-lg">
        CONTACT
      </Link>
    </div>
  </div>
</div>
</div>

    </div>

    
  );
}
