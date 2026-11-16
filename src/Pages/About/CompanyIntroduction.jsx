import React, { useEffect, useRef, useState } from "react";

function CompanyIntroduction() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= COUNTER ================= */
  useEffect(() => {
    if (!visible) return;

    let y = 0;
    let c = 0;

    const yInterval = setInterval(() => {
      if (y < 11) {
        y++;
        setYears(y);
      } else clearInterval(yInterval);
    }, 80);

    const cInterval = setInterval(() => {
      if (c < 9500) {
        c += 200;
        setClients(c);
      } else clearInterval(cInterval);
    }, 30);

    return () => {
      clearInterval(yInterval);
      clearInterval(cInterval);
    };
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        {/* ================= HEADING ================= */}
     <div
  className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
  }`}
>
  <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
    WHO WE ARE
  </h2>

  <div className="w-24 h-[2px] mx-auto mt-4 bg-gradient-to-r from-transparent via-[#ee6124] to-transparent" />

  <p className="mt-6 text-gray-600 text-lg leading-relaxed">
    We are a luxury-driven hospitality company delivering refined
    experiences through craftsmanship, quality, and timeless design.
  </p>
</div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20 items-center">

          {/* LEFT INFO */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <ul className="space-y-6 text-gray-700 text-lg">
              <li>
                <span className="font-semibold text-gray-900">Established:</span>{" "}
                2014
              </li>
              <li>
                <span className="font-semibold text-gray-900">Industry:</span>{" "}
                Hospitality & Luxury Lifestyle
              </li>
              <li>
                <span className="font-semibold text-gray-900">Clients:</span>{" "}
                Hotels, Resorts, Architects & Corporate Groups
              </li>
            </ul>

            {/* COUNTERS */}
            <div className="grid grid-cols-2 gap-10 mt-14">
              <div>
                <h3 className="text-5xl font-bold text-[#ee6124]">
                  {years}+
                </h3>
                <p className="text-gray-600 mt-2">Years of Excellence</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-[#ee6124]">
                  {clients}+
                </h3>
                <p className="text-gray-600 mt-2">Trusted Clients</p>
              </div>
            </div>
          </div>

          {/* RIGHT LEADERS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">

            {/* OWNER */}
            <div
              className={`group text-center transition-all duration-1000 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-xl">
                <img
                  src="/Productimage/Avishek-Sir2.webp"
                  alt="Owner"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-gray-900">
                Mr. Avishek Agarwal
              </h4>
              <p className="text-sm text-[#ee6124] font-medium">
                Founder & CEO
              </p>
              <p className="mt-4 text-[13px] text-gray-600 leading-relaxed">
                “Success isn’t about never failing, it’s about standing up every time you do.
From setbacks to breakthroughs, our journey is proof of that.”
              </p>
            </div>

            {/* CEO */}
            <div
              className={`group text-center transition-all duration-1000 delay-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-xl">
                <img
                  src="/Productimage/Mamta-Ma'am.webp"
                  alt="CEO"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-gray-900">
                Ms. Mamta Agarwal
              </h4>
              <p className="text-sm text-[#ee6124] font-medium">
                Co-Founder
              </p>
              <p className="mt-4 text-[13px] text-gray-600 leading-relaxed">
                “Every challenge we faced wasn’t a setback; it was a lesson.
And every lesson brought us one step closer to where we are today.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CompanyIntroduction;
