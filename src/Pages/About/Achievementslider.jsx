import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Achievementslider = () => {
  const headingRef = useRef(null);
  const gridsRef = useRef([]);

  useEffect(() => {
    /* ================= HEADING FADE IN ================= */
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
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const gridData = [
    {
      img: "/HotelImages/Oyorooms.webp",
      title: "OYO ROOMS",
      description:
        "We proudly partner with OYO Rooms, supplying high-quality bedding solutions tailored for large-scale hospitality operations.",
      align: "left",
    },
    {
      img: "/HotelImages/Taj.webp",
      title: "TAJ",
      description:
        "Premium linen and soft furnishings complementing Taj Hotels’ legacy of luxury.",
      align: "right",
    },
    {
      img: "/HotelImages/HayattRegency.webp",
      title: "HYATT",
      description:
        "World-class bedding solutions supporting Hyatt’s promise of exceptional sleep experiences.",
      align: "left",
    },
    {
      img: "/HotelImages/Adityabirla.webp",
      title: "ADITYA BIRLA",
      description:
        "Refined comfort and durability meeting high corporate standards.",
      align: "right",
    },
    {
      img: "/HotelImages/Itchotel.webp",
      title: "ITC NARMADA",
      description:
        "Bespoke bedding aligned with sustainability and responsible luxury.",
      align: "left",
    },
    {
      img: "/HotelImages/Radisson.webp",
      title: "RADISSON BLU",
      description:
        "Quality linen enhancing Radisson’s contemporary hospitality standards.",
      align: "right",
    },
    {
      img: "/HotelImages/Nalanda.webp",
      title: "NALANDA",
      description:
        "Durable and elegant bedding solutions designed for restful experiences.",
      align: "left",
    },
    {
      img: "/HotelImages/Ahmedabaduniversity.webp",
      title: "AHMEDABAD UNIVERSITY",
      description:
        "High-quality linen engineered for comfort and long-term reliability.",
      align: "right",
    },
    {
      img: "/HotelImages/Marutisuzuki.webp",
      title: "MARUTI SUZUKI",
      description:
        "Premium linen solutions supporting professional corporate environments.",
      align: "left",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      
      {/* ================= HEADING ================= */}
      <div ref={headingRef} className="text-center mb-24 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          WHERE WE ARE NOW
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
          Today, we proudly serve as a trusted manufacturing partner to some of
          the most recognized names in the hospitality industry.
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

export default Achievementslider;
