import React, { useEffect, useState } from "react";
import Bedsheet from "./Bedsheet";
import Dohar from "./Dohar";
import ComforterSets from "./ComforterSets";
import BathmatRunner from "./Bathmat&Runners";
import SEO from "../../Components/SEO";

function Corporate() {
    
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setShow(true), 200);
      return () => clearTimeout(timer);
    }, []);

    const highlights = [
   
     {
    title: "In-house Manufacturing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 21V10L12 3L21 10V21" stroke="#c8a45d" strokeWidth="1.5"/>
        <path d="M9 21V14H15V21" stroke="#c8a45d" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Premium Raw Material",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H20V20H4V4Z" stroke="#c8a45d" strokeWidth="1.5"/>
        <path d="M4 9H20" stroke="#c8a45d" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Custom GSM & Sizes",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 12H20" stroke="#c8a45d" strokeWidth="1.5"/>
        <path d="M12 4V20" stroke="#c8a45d" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Bulk Supply Capability",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" stroke="#c8a45d" strokeWidth="1.5"/>
      </svg>
    ), 
  },
       
];
   
    return(
    <>
     
        {/* ================= SEO SECTION START ================= */}

 <SEO
  title="Corporate Linen Supplier | Bedlinen, Dohar, Comforter & Banquet Sets"
  description="Premium corporate linen supplier offering high-quality bedlinen, dohars, comforters, and banquet sets. Perfect for hotels, resorts, and bulk hospitality needs."
  url="http://localhost:5173/CorporateLinen"
  image="http://localhost:5173/Productimage/Printed-Bedsheet.webp"
/>
    
    {/* ================= End SECTION START ================= */}
   

   <div className="relative w-full h-[95vh] md:h-[98vh] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src="/Productimage/exibition-image5.webp"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl px-6 md:px-16 lg:px-24">
          <div
            className={`max-w-xl text-left transition-all duration-1000 ease-out
              ${
                show
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }
            `}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              Corporate Linen
            </h1>

            {/* Luxury Divider */}
            <div className="w-28 h-[2px] mt-5 bg-gradient-to-r from-transparent via-[#ee6124] to-transparent" />

            <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
              Corporate bedding linens crafted for hotels, guest houses, and corporate stays—offering superior comfort, durability, and a refined look to enhance every guest experience.
            </p>
   
            <a
              href="/Contact"
              className="inline-block mt-8 px-6 py-3 bg-[#ee6124] text-white rounded-full hover:bg-orange-600 transition-all duration-300 hover:translate-x-1"
            >
              Know More →
            </a>
          </div>

          <div
  className="mt-12
  flex md:grid
  md:grid-cols-4
  gap-4 sm:gap-6
  max-w-5xl
  overflow-x-auto md:overflow-visible
  snap-x snap-mandatory
  scrollbar-hide"
>
  {highlights.map((item, i) => (
    <div
      key={i}
      className="relative group
      min-w-[75%] sm:min-w-[55%] md:min-w-0
      snap-center
      rounded-2xl
      p-4 sm:p-5
      bg-white/10 backdrop-blur-xl
      border border-white/15
      transition-all duration-500
      md:hover:-translate-y-2 
      hover:border-[#c8a45d]
      hover:shadow-[0_0_45px_rgba(200,164,93,0.3)]"
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
        <div className="mb-2 sm:mb-3">
          {item.icon}
        </div>

        <p className="text-[11px] sm:text-xs text-white font-medium tracking-wide">
          {item.title}
        </p>

        {/* LUXURY LINE */}
        <div
          className="w-6 h-[1px] mt-3 bg-[#c8a45d]
          group-hover:w-full transition-all duration-500"
        />
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
   
    <Bedsheet/>
    <Dohar/>
    <ComforterSets/>
    <BathmatRunner/>
</>
);
}

export default Corporate