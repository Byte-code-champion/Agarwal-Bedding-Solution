import React, { useEffect, useRef, useState } from "react";

function OurStory() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fafafa] py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* ================= HEADING ================= */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            OUR STORY
          </h2>

          <div className="w-24 h-[2px] mx-auto mt-4 bg-gradient-to-r from-transparent via-[#ee6124] to-transparent" />

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            A journey shaped by passion, perseverance, and a relentless pursuit
            of excellence.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="relative mt-28 pl-12 md:pl-0">
          {/* LINE */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-200 md:-translate-x-1/2" />

          {/* ===== ITEM 1 ===== */}
          <div
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-16 mb-28 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            {/* TEXT */}
            <div className="md:text-right md:pr-16">
              <h3 className="text-xl font-semibold text-gray-900">
                Where the Journey Began
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
               What started as a simple vision soon evolved into a purpose-driven brand, rooted in craftsmanship, quality, and timeless hospitality values.
              </p>
            </div>

            {/* IMAGE CARD */}
            <div className="relative md:pl-16">
              <span
                className="absolute 
  left-[-40px] md:left-[-20px]
  top-6 
  w-5 h-5 
  rounded-full 
  bg-[#ee6124]
  shadow-md"
              />

              <div className="group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/Productimage/story-beginning.webp"
                  alt="Journey Start"
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <span className="block mt-4 text-sm font-medium text-[#ee6124]">
                2014
              </span>
            </div>
          </div>

          {/* ===== ITEM 2 ===== */}
          <div
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-16 mb-28 transition-all duration-1000 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            {/* IMAGE CARD */}
            <div className="relative md:pr-16 order-2 md:order-1">
              <span className=" absolute left-[-40px] md:left-auto md:right-[-20px] top-6 w-5 h-5 rounded-full bg-[#ee6124] shadow-md" />

              <div className="group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/Productimage/exibition-image3.webp"
                  alt="Expansion"
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <span className="block mt-4 text-sm font-medium text-[#ee6124] text-right">
                2019
              </span>
            </div>

            {/* TEXT */}
            <div className="md:pl-16 order-1 md:order-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Growth with Purpose
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
               As trust strengthened, so did our reach. Strategic collaborations, enhanced capabilities, and unwavering standards marked a new phase of expansion.
              </p>
            </div>
          </div>

          {/* ===== ITEM 3 ===== */}
             <div
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-16 mb-28 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            {/* TEXT */}
            <div className="md:text-right md:pr-16">
              <h3 className="text-xl font-semibold text-gray-900">
                Built on Excellence
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Today, our journey reflects a commitment to precision, premium materials, and consistent innovation—delivering products that meet global hospitality standards.
              </p>
            </div>

            {/* IMAGE CARD */}
            <div className="relative md:pl-16">
              <span
                className="absolute left-[-40px] md:left-[-20px] top-6 w-5 h-5 rounded-full bg-[#ee6124] shadow-md"
              />

              <div className="group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/Productimage/exibition-image5.webp"
                  alt="Journey Start"
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <span className="block mt-4 text-sm font-medium text-[#ee6124]">
                2025
              </span>
            </div>   
          </div>
        </div>

        {/* ================= FOUNDER QUOTE ================= */}
        <div
          className={`mt-32 max-w-5xl mx-auto text-center transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic leading-relaxed">
            “Luxury is not about excess — it is about intention, detail, and the
            experience we create for every guest.”
          </blockquote>

          <div className="mt-10 flex flex-col items-center">
            <img
              src="/Productimage/Avishek-Sir3.webp"
              alt="Founder"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
            <h4 className="mt-4 font-semibold text-gray-900">
              Mr. Avishek Agarwal
            </h4>
            <p className="text-sm text-[#ee6124]">Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
