import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const PremiumScrollSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridsRef = useRef([]);

  useEffect(() => {
    /* ================= SMOOTH SCROLL ================= */
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    /* ================= HEADING FADE ================= */
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );

    /* ================= GRID FADE IN ================= */
    gridsRef.current.forEach((grid) => {
      gsap.fromTo(
        grid,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const gridData = [
    {
      img: "/Productimage/Bedsheet.webp",
      title: "BED LINEN",
      description:
        "Agarwal Bedding Solutions offers a comprehensive range of bed linen crafted specifically for the hospitality industry. Available in Stripe, Percale, and Jacquard constructions with multiple thread counts and finishes, engineered for commercial durability.",
      align: "left",
    },
    {
      img: "/Productimage/Fillers.webp",
      title: "PILLOW & CUSHION COVER",
      description:
        "Designed for hospitality use, our pillow & cushion covers combine refined aesthetics with durable construction and excellent breathability for long-term performance.",
      align: "right",
    },
    {
      img: "/Productimage/BathTowel.webp",
      title: "BATH LINEN",
      description:
        "Superior absorbency and softness available in multiple quality & GSM options to suit both luxury and high-usage hotel environments.",
      align: "left",
    },
    {
      img: "/Productimage/Mattress.webp",
      title: "MATTRESSES & ACCESSORIES",
      description:
        "Engineered for durability, hygiene, and consistent support, suitable for diverse hospitality guest requirements.",
      align: "right",
    },
    {
      img: "/Productimage/Duvet.webp",
      title: "COMFORTER / DUVET",
      description:
        "Available in natural and synthetic fillings, offering breathable warmth, lightweight comfort, and hypoallergenic benefits.",
      align: "left",
    },
    {
      img: "/Productimage/TableCover.webp",
      title: "BANQUET & RESTAURANT LINEN",
      description:
        "Elegant event linen including table covers, chair covers, and napkins crafted for weddings, conferences, and hospitality events.",
      align: "right",
    },
    {
      img: "/Productimage/RoomCurtain.webp",
      title: "SOFT FURNISHING",
      description:
        "Bed runners, cushion Covers, carpets, and decorative covers designed to elevate room aesthetics while maintaining durability.",
      align: "left",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24"
    >
      {/* ================= HEADING ================= */}
      <div
        ref={headingRef}
        className="text-center mb-24 px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          QUALITY BEDDING COLLECTION
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Luxury hospitality bedding engineered for comfort, durability, and elegance.
        </p>
      </div>

      {/* ================= GRID SECTIONS ================= */}
      <div className="space-y-28">
        {gridData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (gridsRef.current[index] = el)}
            className={`w-full flex items-center px-6 md:px-16 ${
              item.align === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 bg-white p-10 md:p-14 rounded-3xl shadow-xl max-w-6xl w-full transition-transform duration-500 hover:scale-[1.02]">

              {/* IMAGE */}
              <div
                className={`
                  order-1
                  ${item.align === "right" ? "md:order-2" : "md:order-1"}
                  flex justify-center
                `}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-2xl w-full max-w-[380px] h-[260px] object-cover"
                />
              </div>

              {/* TEXT */}
              <div
                className={`
                  order-2
                  ${item.align === "right" ? "md:order-1" : "md:order-2"}
                  flex flex-col justify-center space-y-5 text-center md:text-left
                `}
              >
                <h3 className="text-2xl md:text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumScrollSection;
