import React, { useEffect, useState } from "react";
import BrandLogoShowcase from "./BrandLogoShowcase";
import "./OurClients";
/* ================= COUNT UP COMPONENT ================= */
function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
}

/* ================= MAIN COMPONENT ================= */
function OurClients() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  /* ===== STATS DATA ===== */
  const stats = [
    { value: 9500, suffix: "+", label: "Our Clients" },
    { value: 150, suffix: "+", label: "Locations Across India" },
    { value: 100, suffix: "%", label: "Custom Manufacturing" },
    { value: 100, suffix: "%", label: "Hotel Grade Quality" },
  ];

  return (
    <>
    <div className="relative h-[95vh] md:h-[98vh] w-full overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="/Productimage/exibition-image5.webp"
        alt="Our Clients Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl px-6 md:px-16 lg:px-24">

          {/* ===== TEXT CONTENT ===== */}
          <div
            className={`max-w-xl transition-all duration-1000 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              Our Clients
            </h1>

            {/* LUXURY DIVIDER */}
            <div className="w-28 h-[2px] mt-5 bg-gradient-to-r from-transparent via-[#ee6124] to-transparent" />

            <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
              We proudly manufacture textile solutions for premium hotels,
              resorts & hospitality brands across India, delivering consistency,
              quality and trust at scale.
            </p>
          </div>

          {/* ===== STATS SECTION ===== */}
         <div
  className={`mt-8
  flex md:grid
  md:grid-cols-4
  gap-5
  overflow-x-auto md:overflow-visible
  snap-x snap-mandatory
  scrollbar-hide
  transition-all duration-1000 delay-300
  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
>
  {stats.map((item, index) => ( 
    <div
      key={index}
      className="relative group
      min-w-[80%] sm:min-w-[60%] md:min-w-0
      snap-center
      bg-white/10 backdrop-blur-xl
      border border-white/15
      rounded-2xl p-5
      transition-all duration-500 ease-out
      md:hover:-translate-y-2
      hover:border-[#c8a45d]
      hover:shadow-[0_30px_60px_rgba(200,164,93,0.25)]"
    >
      {/* GLOW LAYER */}
      <div
        className="absolute inset-0 rounded-2xl
        bg-gradient-to-br from-[#c8a45d]/15 to-transparent
        opacity-0 group-hover:opacity-100
        transition duration-500 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <p className="text-2xl md:text-3xl text-white font-semibold">
          <CountUp end={item.value} />
          {item.suffix}
        </p>

        <p className="mt-2 text-xs sm:text-sm text-gray-400 tracking-wide">
          {item.label}
        </p>

        {/* LUXURY LINE */}
        <div
          className="w-10 h-[1px] mt-4 bg-[#c8a45d]
          group-hover:w-full transition-all duration-500"
        />
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>

    <BrandLogoShowcase/>
    </>
  );
}

export default OurClients;
