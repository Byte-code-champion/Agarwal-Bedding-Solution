import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopArrow() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  /* ===== SHOW / HIDE ARROW ===== */
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  /* ===== AUTO SCROLL ON MENU / ROUTE CHANGE ===== */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-50 w-14 h-14 rounded-full
        bg-[#ee6124] text-white flex items-center justify-center
        shadow-lg transition-all duration-500
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
        hover:bg-orange-600 hover:-translate-y-1
      `}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTopArrow;