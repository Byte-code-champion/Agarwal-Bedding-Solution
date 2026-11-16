import React, { useEffect, useState } from "react";
import "./Contact.css";
import Contactform from "./Contactform";
import CardSlider from "./CardSlider";
import LuxuryContactSection from "./Luxury-Contact-Section";
import SEO from "../../Components/SEO";

function Contact() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        
    <SEO
  title="Contact Enera | Hotel Linen Bulk Orders"
  description="Contact Enera for bulk hotel linen supply, customized bedding and hospitality textile requirements."
  keywords="contact hotel linen supplier, bulk bedding inquiry India"
  url="https://agarwaldirect.com/contact"
  image="https://agarwaldirect.com/Productimage/Avishek-Sir1.webp"
/>


    <section className="relative w-full h-[95vh] md:h-[80vh] overflow-hidden">
      
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <img
          src="/Productimage/exibition-image5.webp"
          alt="Contact"
          className="w-full h-full object-cover scale-110 animate-zoomSlow"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl px-6 md:px-16 lg:px-24 text-white">
          
          <div
            className={`transition-all duration-1000 ease-out ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h2>

            {/* PARAGRAPH */}
            <p className="max-w-xl text-sm sm:text-base md:text-lg text-gray-200 mb-10 leading-relaxed">
              At Ginger, we’re all about crafting moments that you’ll cherish
              forever. If there’s anything we can do to make your stay even
              better, don’t hesitate to share your thoughts with us.
            </p>

            {/* INDICATORS */}
            <div className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              <span className="w-3 h-3 rounded-full bg-pink-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
     
     <Contactform/>
      
<LuxuryContactSection />;

      <CardSlider/>
    </>
  );
}

export default Contact;
