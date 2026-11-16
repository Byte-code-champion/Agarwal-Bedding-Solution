import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2014",
    title: "The Beginning",
    desc: "We started our journey by supplying bedsheets, towels, and pillows to small local hotels. From stitching and packing to delivery, everything was handled in-house, laying a strong foundation of quality and reliability.",
  },
  {
    year: "2016",
    title: "Budget Hospitality & Nationwide Expansion",
    desc: "We became a linen supplier for OYO hotels across India. This phase helped us scale rapidly, streamline operations, and expand our presence to multiple cities.",
  },
  {
    year: "2017",
    title: "Entry into Premium & Large Hotel Chains",
    desc: "We partnered with leading hotel brands such as Hyatt, Fern, Lemon Tree, Courtyard, Renaissance, Sarovar etc, strengthening our expertise in premium comfort, consistent quality, large-scale supply, and professional packaging.",
  },
  {
    year: "2019",
    title: "Co-living & Student Housing Solutions",
    desc: "We expanded into co-living and student housing segments, supplying durable and long-lasting linen solutions designed for daily and high-usage environments.",
  },
  {
    year: "2020",
    title: "Entering the Retail Segment",
    desc: "During the COVID period, we expanded into the retail segment to connect directly with home customers, delivering hotel-quality comfort to everyday living.",
  },
  {
    year: "2024",
    title: "Launch of ENERA – Our D2C Brand",
    desc: "We introduced ENERA, our direct-to-consumer brand, and built a strong presence across leading online platforms such as Amazon, Flipkart, and Myntra—bringing premium bedding to homes across India.",
  },
  {
    year: "2025",
    title: "Corporate & Industrial Projects",
    desc: "We expanded into large-scale corporate and industrial supply segments by partnering with organizations like Suzuki and Hindalco, marking a new phase of growth beyond hospitality and retail.",
  },
  {
    year: "2026",
    title: "Showcasing Hospitality Innovation",
    desc: "Discover our hospitality-grade linen and furnishing solutions, crafted for comfort, durability, and elegance—perfectly suited for hotels, resorts, banquets, corporate spaces, and homes.",
  },
];

const YearTimelineGSAP = () => {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    /* PROGRESS LINE */
    gsap.fromTo(
      progressRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    /* ACTIVE ITEM */
    itemRefs.current.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top center+=120",
        end: "bottom center",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* TITLE */}
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-32">
          OUR JOURNEY THROUGH YEARS
        </h2>

        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[4px] bg-gray-200 rounded-full">
            <div
              ref={progressRef}
              className="absolute top-0 left-0 w-full bg-[#ee6124] rounded-full"
            />
          </div>

          {/* TIMELINE ITEMS */}
          <div className="flex flex-col gap-36">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-20"
                >
                  {/* LEFT CARD */}
                  {isLeft && (
                    <TimelineCard
                      item={item}
                      active={activeIndex === index}
                      align="left"
                    />
                  )}

                  {/* CENTER DOT */}
                  <div className="hidden md:flex justify-center">
                    <span
                      className={`w-6 h-6 rounded-full z-10 transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-[#ee6124] scale-125"
                          : "bg-gray-300"
                      }`}
                    />
                  </div>

                  {/* RIGHT CARD */}
                  {!isLeft && (
                    <TimelineCard
                      item={item}
                      active={activeIndex === index}
                      align="right"
                    />
                  )}

                  {/* MOBILE DOT */}
                  <div className="md:hidden flex justify-start">
                    <span className="w-5 h-5 bg-[#ee6124] rounded-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearTimelineGSAP;

/* ================= CARD ================= */

const TimelineCard = ({ item, active, align }) => {
  return (
    <div
      className={`relative ${
        align === "left" ? "md:pr-20 md:text-right" : "md:pl-20"
      }`}
    >
      <div
        className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl 
        transition-all duration-500 ${
          active
            ? "opacity-100 translate-y-0"
            : "opacity-60 translate-y-6"
        }`}
      >
        {/* ICON + YEAR */}
        <div
          className={`flex items-center gap-4 mb-4 ${
            align === "left" ? "justify-end" : ""
          }`}
        >
          <div className="w-14 h-14 flex items-center justify-center 
                          rounded-xl bg-gradient-to-br 
                          from-[#ee6124]/20 to-[#ee6124]/5 
                          shadow-md text-[#ee6124]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M3 21h18v-2H3v2zm2-4h3V7H5v10zm5 0h3V3h-3v14zm5 0h3V11h-3v6z" />
            </svg>
          </div>

          <span className="text-[#ee6124] font-bold text-lg">
            {item.year}
          </span>
        </div>

        {/* CONTENT */}
        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          {item.title}
        </h4>

        <p className="text-gray-600 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
};
