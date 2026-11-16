import React, { useEffect, useState } from "react";

function WhyChooseUs() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("why-choose-us");
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 120) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="why-choose-us"
      className="relative w-full py-28 bg-[#0b0b0b] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(238,97,36,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* ================= HEADING ================= */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            WHY CHOOSE US
          </h2>

          <div className="w-28 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#ee6124] to-transparent" />

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            We partner with hospitality leaders by delivering excellence,
            precision, and craftsmanship — built to elevate guest experiences.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((item, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`group relative bg-[#121212] border border-white/10 rounded-3xl p-8
                transition-all duration-700 transform
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }
                hover:-translate-y-4 hover:shadow-[0_10px_40px_rgba(238,97,36,0.2)]
                hover:border-[#ee6124]/40
              `}
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#ee6124]/40 mb-6
                group-hover:bg-[#ee6124]/10 group-hover:scale-110 transition-transform duration-300"
              >
                {item.icon}
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

              {/* GOLD LINE */}
              <span className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#ee6124] to-transparent
                opacity-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

/* ================= DATA ================= */

const cards = [
  {
    title: "Proven Hospitality Expertise",
    desc: "Backed by 11+ years of industry expertise, we support hotels, resorts, and institutional clients with reliable, hospitality-grade linen and bedding solutions.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ee6124"
        strokeWidth="1.5"
      >
        <path d="M3 21h18" />
        <path d="M6 18V7a3 3 0 016 0v11" />
        <path d="M18 18V10a3 3 0 00-6 0" />
      </svg>
    ),
  },
  {
    title: "Quality Standards",
    desc: "Every product is rigorously tested and quality-controlled to meet hospitality standards for durability, comfort, and performance.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ee6124"
        strokeWidth="1.5"
      >
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
  {
    title: "Reliable & Timely Delivery",
    desc: "Streamlined manufacturing and logistics processes ensure consistent quality, reliable supply, and on-time delivery—every order, every time.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ee6124"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Customized Hospitality Solutions",
    desc: "Custom fabrics, thread counts, sizes, and finishes crafted to align seamlessly with your brand standards and guest experience goals.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ee6124"
        strokeWidth="1.5"
      >
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Dedicated After-Sales Support",
    desc: "Committed after-sales support with responsive service, product guidance, and long-term partnership focused on your operational success.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ee6124"
        strokeWidth="1.5"
      >
        <path d="M21 11a8 8 0 01-16 0" />
        <path d="M12 3v8" />
      </svg>
    ),
  },
];
