import React, { useEffect, useState } from "react";
import PgHostelSupply from "./PgHostelSupply";
import EventSupply from "./EventSupply";

function UniversityLinen() {
 
     const [show, setShow] = useState(false);
      
        useEffect(() => {
          const timer = setTimeout(() => setShow(true), 200);
          return () => clearTimeout(timer);
        }, []);
       
        return(
        <>
       <div className="relative w-full h-[95vh] md:h-[80vh] overflow-hidden">
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
                  University
                </h1>
    
                {/* Luxury Divider */}
                <div className="w-28 h-[2px] mt-5 bg-gradient-to-r from-transparent via-[#ee6124] to-transparent" />
    
                <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
                  We craft premium hospitality experiences with attention to detail,
                  comfort, and timeless elegance, ensuring every moment feels special.
                </p>
       
                <a
                  href="/Contact"
                  className="inline-block mt-8 px-6 py-3 bg-[#ee6124] text-white rounded-full hover:bg-orange-600 transition-all duration-300 hover:translate-x-1"
                >
                  Know More →
                </a>
              </div>
            </div>
          </div>
        </div>


        <PgHostelSupply/>
        <EventSupply/>
        </>
    )

}
export default UniversityLinen