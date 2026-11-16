import React, { useEffect, useState } from "react";
import TableDining from "./TableDining";
import SEO from "../../Components/SEO";
function BanquetLinen() {
      

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

  const [show, setShow] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setShow(true), 200);
      return () => clearTimeout(timer);
    }, []);

    return(
       
      <>

    <SEO
  title="Banquet Linen Supplier | Table Cloth & Dining Linen"
  description="Leading banquet linen supplier in India providing high-quality table linen for hotels, events, weddings and hospitality businesses."
  keywords="banquet linen supplier, hotel table cloth manufacturer India"
  url="https://agarwaldirect.com/banquet-linen"
  image="https://agarwaldirect.com/Productimage/Table-Cloths.webp"
/>


   { /* About Section 1 */}
    
   <div className="relative h-[95vh] md:h-[98vh] w-full overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src="/Productimage/exibition-image5.webp"
    alt="Manufacturing"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  {/* CONTENT */}
  <div className="relative z-10 w-full h-full flex flex-col justify-center">

    <div className="max-w-7xl w-full px-4 sm:px-8 md:px-16 lg:px-20">

      {/* TEXT CONTENT */}
      <div
        className={`max-w-xl transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold">
          Banquet & Restaurant Linen
        </h1>

        <div className="w-24 h-[2px] mt-5 bg-gradient-to-r from-transparent via-[#ee6124] to-transparent" />

        <p className="mt-6 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
          Banquet and restaurant linens crafted for dining and event spaces—combining elegance, durability, and premium quality to create a refined and memorable guest experience.
        </p>

      </div>

      {/* HIGHLIGHT CARDS */}
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




        



<TableDining/> 
    </>
    );
    
}

export default BanquetLinen;