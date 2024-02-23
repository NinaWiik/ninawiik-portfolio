
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/NW normal.png";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-blush p-4 flex justify-between items-center">
      <a href="/">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img className="h-24 w-auto mr-2" src={logo} alt="Logo" />
        </div>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {/* Links on the right */}
              <Link to="/" className="navbar-link cursor-pointer text-lg sm:text-xl hover:text-teal-dark hover:no-underline my-2">
                Home
              </Link>
              <Link to="/about" className="navbar-link cursor-pointer text-lg sm:text-xl hover:text-teal-dark hover:no-underline my-2">
                About
              </Link>
              <Link to="/p" className="navbar-link cursor-pointer text-lg sm:text-xl hover:text-teal-dark hover:no-underline my-2">
                The Photoshoot
              </Link>
              <Link to="/gallery" className="navbar-link cursor-pointer text-lg sm:text-xl hover:text-teal-dark hover:no-underline my-2">
                Portfolio
              </Link>
              <Link to="/contact" className="navbar-link cursor-pointer text-lg sm:text-xl hover:text-teal-dark hover:no-underline my-2">
                Contact
              </Link>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          {/* Links on the right */}
          <div className={`sm:flex ${isNavOpen ? 'block' : 'hidden'} mt-4 sm:mt-0`}>
            <Link to="/" className="navbar-link cursor-pointer mx-10 text-lg sm:text-xl hover:text-teal-dark hover:no-underline">Home</Link>
            <Link to="/about" className="navbar-link cursor-pointer mx-10 text-lg sm:text-xl hover:text-teal-dark hover:no-underline">About</Link>
            <Link to="/pricing" className="navbar-link cursor-pointer mx-10 text-lg sm:text-xl hover:text-teal-dark hover:no-underline">The Photoshoot</Link>
            <Link to="/gallery" className="navbar-link cursor-pointer mx-10 text-lg sm:text-xl hover:text-teal-dark hover:no-underline">Portfolio</Link>
            <Link to="/contact" className="navbar-link cursor-pointer mx-10 text-lg sm:text-xl hover:text-teal-dark hover:no-underline">Contact</Link>
          </div>
        </ul>
      </nav>
    </div>
  );


}

// export default function Navbar() {
//   const location = useLocation();

//   const showHomeBgImage = location.pathname === "/";
//   const showAboutBgImage = location.pathname === "/about";
//   const showPricingBgImage = location.pathname === "/pricing";
//   const showGalleryBgImage = location.pathname === "/gallery";
//   const showContactBgImage = location.pathname === "/contact";

//   return (
//     <div
//       className={`min-h-screen flex flex-col items-center justify-start ${
//         showHomeBgImage
//           ? "home-bg-image"
//           : showPricingBgImage
//           ? "pricing-bg-image"
//           : showAboutBgImage
//           ? "about-bg-image"
//           : showGalleryBgImage
//           ? "gallery-bg-image"
//           : showContactBgImage
//           ? "contact-bg-image"
//           : "default-bg-image"
//       }`}
//     >
//       <div className="w-full hidden md:block">
//         <div className="flex flex-col sm:flex-row">
//           <div className="w-full  md:w-1/5 p-4 flex items-center justify-center">
//             <Link to="/about" className="navbar-link p-2 text-lg sm:text-3xl">
//               ABOUT
//             </Link>
//           </div>
//           <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
//             <Link to="/pricing" className="navbar-link p-2 text-lg sm:text-3xl">
//               PRICING
//             </Link>
//           </div>
//           <div className="w-full md:w-2/5 p-4 flex items-center justify-center">
//             <Link to="/" className="text-center mt-4 sm:mt-0 sm:mb-4 sm:mt-4">
//               <img src={logo} alt="desc" className="max-w- sm:w-full" />
//             </Link>
//           </div>
//           <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
//           <Link to="/gallery" className="navbar-link p-2 text-lg sm:text-3xl">
//               GALLERY
//             </Link>
//           </div>
//           <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
//           <Link to="/contact" className="navbar-link p-2 text-lg sm:text-3xl">
//               CONTACT
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="w-full block md:hidden">
//       <div class="flex flex-col h-72 w-full items-center"> 
//   <div class="w-full flex justify-center"> 
//     <Link to="/" className="">
//       <img src={logo} alt="desc" className="max-w-xs sm:w-full" />
//     </Link>
//   </div>
//   <div class="flex">
//     <div class="flex-1 p-4">
//       <Link to="/about" className="navbar-link p-2 text-lg">
//         ABOUT
//       </Link>
//     </div>
//     <div class="flex-1 p-4">
//       <Link to="/pricing" className="navbar-link p-2 text-lg">
//         PRICING
//       </Link>
//     </div>
//   </div>
//   <div class="flex">
//     <div class="flex-1 p-4">
//     <Link to="/gallery" className="navbar-link p-2 text-lg">
//         GALLERY
//       </Link>
//     </div>
//     <div class="flex-1 p-4">
//     <Link to="/contact" className="navbar-link p-2 text-lg">
//         CONTACT
//       </Link>
//     </div>
//   </div>
// </div>
// </div>

//     </div>

    
//   );
// }
