import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ===================== DATA ===================== */
const exhibitions = [
  {
    title: "Hotel Expo India",
    year: "2024",
    hero: "/Productimage/exibition-image1.webp",
    desc:
      "We showcase our premium hotel bedding solutions at leading hospitality exhibitions, connecting directly with luxury hotel chains and industry experts.",
    review:
      "An exceptional platform to connect with premium hotel brands and gain valuable insights into evolving hospitality standards.",
    images: [
      "/Productimage/exibition-image2.webp",
      "/Productimage/exibition-image8.webp",
      "/Productimage/exibition-image4.webp",
      "/Productimage/exibition-image9.webp",
    ],
  },
  {
    title: "Hospitality & Interiors Expo",
    year: "2024",
    hero: "/Productimage/exibition-image5.webp",
    desc:
      "A strong platform that bridges premium manufacturing with the evolving demands of luxury hotels.",
    review:
      "A strong platform that bridges premium manufacturing with the evolving demands of luxury hotels.",
    images: [
      "/Productimage/exibition-image7.webp",
      "/Productimage/exibition-image3.webp",
      "/Productimage/exibition-image6.webp",
      "/Productimage/exibition-image10.webp",
    ],
  },
];

/* ===================== COMPONENT ===================== */
const HotelReviewGallery = () => {
  const sectionRefs = useRef([]);
  const heroRefs = useRef([]);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    sectionRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    heroRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { scale: 1.1 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* ===================== SECTION HEADING ===================== */}
      <div className="text-center max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          SHOWCASING HOSPITALITY INNOVATION
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Discover our hospitality-grade linen and furnishing solutions, engineered for comfort, durability, and elegance—perfectly suited for hotels, resorts, and banquets..
        </p>
      </div>

      {/* ===================== LIGHTBOX ===================== */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-xl"
          />
        </div>
      )}

      {/* ===================== EXHIBITIONS ===================== */}
      <section className="w-full bg-[#fafafa]">
        {exhibitions.map((expo, i) => (
          <div key={i} ref={(el) => (sectionRefs.current[i] = el)}>
            {/* HERO */}
            <div className="relative md:h-[100vh] h-[50vh] w-full overflow-hidden">
              <img
                ref={(el) => (heroRefs.current[i] = el)}
                src={expo.hero}
                alt={expo.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <span className="text-[#ee6124] tracking-widest text-xl">
                  {expo.year}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                  {expo.title}
                </h2>
                <p className="text-white/80 mt-4 max-w-2xl">
                  {expo.desc}
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* REVIEW */}
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl">
                <p className="italic text-gray-700 text-lg">
                  “{expo.review}”
                </p>
              </div>

              {/* GALLERY */}
              <div className="grid grid-cols-2 gap-4">
                {expo.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightbox(img)}
                    className="cursor-pointer overflow-hidden rounded-2xl shadow-lg group"
                  >
                    <img
                      src={img}
                      alt="Exhibition"
                      loading="lazy"
                      className="w-full h-[22vh] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HotelReviewGallery;
