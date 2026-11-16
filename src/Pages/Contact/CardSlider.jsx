import React, { useEffect, useRef, useState } from "react";

/* ================= SLIDE DATA ================= */
const slides = [
  {
    title: "Unmatched Craftsmanship",
    desc:
      "Every detail reflects precision and care, ensuring our products and services meet the highest standards of luxury and excellence. Experience quality that speaks for itself.",
    image: "/Productimage/exibition-image1.webp",
  },
  {
    title: "Personalized Attention",
    desc:
      "We value every client’s unique needs. Our team delivers tailored solutions with elegance and efficiency, making your journey with us seamless and memorable.",
    image: "/Productimage/exibition-image8.webp",
  },
  {
    title: "Trusted Excellence",
    desc:
      "Years of expertise, premium materials, and a commitment to perfection make us the choice of discerning customers who demand nothing but the best.",
    image: "/Productimage/exibition-image5.webp",
  },
];

/* ================= EXTENDED SLIDES FOR LOOP ================= */
const extendedSlides = [
  slides[slides.length - 1],
  ...slides,
  slides[0],
];

function CardSlider() {
  const [index, setIndex] = useState(1); // start from first real slide
  const [transition, setTransition] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  /* ================= LOOP FIX ================= */
  useEffect(() => {
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slides.length);
      }, 700);
    }

    if (index === slides.length + 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }
  }, [index]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  /* ================= CONTROLS ================= */
  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  /* ================= SWIPE ================= */
  const onStart = (x) => {
    startX.current = x;
    isDragging.current = true;
  };

  const onEnd = (x) => {
    if (!isDragging.current) return;

    const diff = startX.current - x;
    if (diff > 70) nextSlide();
    if (diff < -70) prevSlide();

    isDragging.current = false;
  };

  /* ================= PAGINATION INDEX ================= */
  const realIndex =
    index === 0
      ? slides.length - 1
      : index === slides.length + 1
      ? 0
      : index - 1;

  return (
    <section className="w-full bg-[#fff] py-20 px-4 overflow-hidden">
      {/* ================= HEADING ================= */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-bold relative inline-block">
           CONNECT WITH US
          <span className="absolute -right-6 top-2 w-2 h-2 bg-orange-400 rounded-full" />
          <span className="absolute -right-10 top-4 w-2 h-2 bg-pink-500 rounded-full" />
        </h2>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative max-w-7xl mx-auto">
        <div
          className="overflow-hidden"
          onTouchStart={(e) => onStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
          onMouseDown={(e) => onStart(e.clientX)}
          onMouseUp={(e) => onEnd(e.clientX)}
        >
          <div
            className={`flex ${
              transition
                ? "transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                : ""
            }`}
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {extendedSlides.map((item, i) => (
              <div key={i} className="min-w-full px-2">
                <div
                  className={`bg-white rounded-3xl shadow-xl  p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center
                  transition-all duration-700
                  ${
                    i === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  {/* IMAGE */}
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-4xl font-bold relative inline-block">
                      {item.title}
                      <span className="absolute -right-5 top-2 w-2 h-2 bg-orange-400 rounded-full" />
                      <span className="absolute -right-9 top-4 w-2 h-2 bg-pink-500 rounded-full" />
                    </h3>

                    <p className="text-gray-600 text-base md:text-lg max-w-xl">
                      {item.desc}
                    </p>
                     
                    <a
  href="tel:+917046221100"
  className="inline-block bg-[#ee6124] text-white text-sm px-6 py-3 rounded-full shadow-md border border-[#ee6124] 
             hover:bg-transparent hover:text-[#ee6124] transition-colors duration-300"
>
  Enquire Now →
</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PAGINATION DOTS ================= */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i + 1)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                realIndex === i
                  ? "bg-orange-500 scale-125"
                  : "bg-gray-300 hover:bg-orange-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSlider;
