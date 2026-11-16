import React, { useEffect, useRef, useState } from "react";

function VisionMission() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ================= SCROLL REVEAL ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section
      ref={sectionRef}
      className="relative w-full py-36 overflow-hidden"
    >
      {/* ===== SOFT LUXURY BACKGROUND (LINEN / MARBLE FEEL) ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff,_#f6f6f6,_#efefef)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/src/assets/linen-texture.png')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        {/* ================= HEADING ================= */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            VISION & MISSON
          </h2>

          <div className="w-24 h-[2px] mx-auto mt-4 bg-gradient-to-r from-transparent via-[#ee6124] to-transparent" />

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our philosophy is rooted in purpose, precision, and the pursuit of
            timeless excellence.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-28 items-center">

          {/* ===== VISION CARD ===== */}
          <div
            className={`group relative bg-white/90 backdrop-blur-md p-16 rounded-3xl border border-gray-100 shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            {/* ICON */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#ee6124]/10 mb-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ee6124"
                strokeWidth="1.6"
                className="w-7 h-7"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
              </svg>
            </div>

            <span className="absolute -top-5 left-10 bg-white px-4 text-sm tracking-widest text-[#ee6124]">
              VISION
            </span>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Shaping the Future of Hospitality Comfort
            </h3>
         
            <p className="text-gray-600 text-lg leading-relaxed">    
             To become a globally trusted hospitality solutions brand, setting benchmarks in comfort, craftsmanship, and consistency—enhancing guest experiences through thoughtfully engineered linen and bedding.
            </p>

            <div className="mt-10 w-16 h-[2px] bg-[#ee6124]" />
          </div>

          {/* ===== MISSION CARD ===== */}
          <div
            className={`group relative bg-white/90 backdrop-blur-md p-16 rounded-3xl border border-gray-100 shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            {/* ICON */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#ee6124]/10 mb-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"        
                stroke="#ee6124"    
                strokeWidth="1.6"     
                className="w-7 h-7"
              >
                <path d="M12 2l4 8-4 4-4-4 4-8z" />
                <path d="M2 22h20" />
              </svg>
            </div>

            <span className="absolute -top-5 left-10 bg-white px-4 text-sm tracking-widest text-[#ee6124]">
              MISSION
            </span>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Delivering Excellence with Purpose
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              To deliver hospitality-grade linen and bedding solutions through integrated manufacturing, precise quality control, and dependable service—supporting hotels and hospitality partners in creating refined, memorable guest experiences.
            </p>

            <div className="mt-10 w-16 h-[2px] bg-[#ee6124]" />
          </div>
        </div>

        {/* ================= QUOTE ================= */}
        <div
          className={`mt-32 max-w-4xl mx-auto text-center transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed">
            “True luxury lies not in excess, but in intention, craftsmanship, and
            the emotions we create through every experience.”
          </blockquote>

          <div className="mt-8 w-20 h-[2px] mx-auto bg-[#ee6124]" />
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
