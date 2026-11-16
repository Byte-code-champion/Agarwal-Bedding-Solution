import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Hospitality Linen", path: "/hospitalityLinen" },
    { name: "Corporate Linen", path: "/CorporateLinen" },
    { name: "Banquet & Restaurant Linen", path: "/banquet-restaurants-Linen" },
    { name: "Blogs", path: "/blogs" },
    { name: "Our Clients", path: "/our-clients" },
  ];

  const scrollRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsScrolled(scrollRef.current.scrollTop > 10);
      }
    };

    scrollRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={scrollRef} className="h-0 overflow-y-scroll">
      
      {/* HEADER */}
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#ee6124] shadow-md py-2"
            : "bg-[#ee6124] py-3"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-16">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo-icons/SiteLogo.png"
              alt="Agarwal Bedding Logo"
              className="h-16 sm:h-18 lg:h-20 brightness-0 invert"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className={`relative font-medium transition ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-black`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP CONTACT BUTTON */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full transition ${
                isScrolled
                  ? "bg-black text-white"
                  : "bg-white text-[#ee6124] border hover:bg-transparent hover:text-white"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-white"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[70] bg-white flex flex-col items-center justify-center gap-6 transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* MENU LINKS */}
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-medium"
          >
            {link.name}
          </Link>
        ))}

        {/* CONTACT BUTTON */}
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-4 px-6 py-2 rounded-full bg-[#ee6124] text-white font-medium"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;