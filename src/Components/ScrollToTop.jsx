import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.lenis) {
      window.scrollTo(0, 0);
      return;
    }

    // 🔒 Stop Lenis temporarily
    window.lenis.stop();

    // ✅ FORCE top (no animation, no restore)
    window.lenis.scrollTo(0, { immediate: true });

    // 🧠 GSAP sync reset
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh(true);

    // 🔓 Restart Lenis after frame
    requestAnimationFrame(() => {
      window.lenis.start();
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
