import { useEffect, useRef } from "react";

const Brandlogo = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  /* ===== DRAG STATE ===== */
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const isPaused = useRef(false);

  /* ================= AUTO SCROLL (LOOP) ================= */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const speed = 0.6; // luxury slow speed

    const autoScroll = () => {
      if (!isPaused.current) {
        slider.scrollLeft += speed;

        // infinite loop
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  /* ================= MOUSE EVENTS ================= */
  const handleMouseDown = (e) => {
    isDragging.current = true;
    isPaused.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    isPaused.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    isPaused.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollStart.current - walk;
  };

  /* ================= TOUCH EVENTS ================= */
  const handleTouchStart = (e) => {
    isDragging.current = true;
    isPaused.current = true;
    startX.current = e.touches[0].pageX;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    isPaused.current = false;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX.current) * 1.2;
    sliderRef.current.scrollLeft = scrollStart.current - walk;
  };

  /* ================= LOGOS ================= */
  const logos = [
    "/HotelImages/HayattRegency.webp",
    "/HotelImages/Oyorooms.webp",
    "/HotelImages/Adityabirla.webp",
    "/HotelImages/Taj.webp",
    "/HotelImages/adani.webp",
    "/HotelImages/Renaissance.webp",
    "/HotelImages/Platinum.webp",
    "/HotelImages/Itchotel.webp",
  ];

  return (
    <section className="w-full bg-white py-30 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 ">
          TRUSTED BY LEADING HOTELS & CORPORATE
          </h2>
          
        </div>

        {/* ================= LOGOS ================= */}
        <div className="relative mt-20">

          {/* ===== MOBILE GRID ===== */}
          <div className="grid grid-cols-2 gap-6 px-4 md:hidden">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center
                bg-white/70 backdrop-blur-md
                border border-gray-200 rounded-xl
                p-4
                hover:border-[#c8a45d]
                hover:shadow-[0_0_25px_rgba(200,164,93,0.25)]
                transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="Brand Logo"
                  className="h-30 w-auto object-contain opacity-80"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* ===== SLIDER (TABLET & DESKTOP) ===== */}
          <div
            ref={sliderRef}
            className="hidden md:flex
            items-center gap-24
            overflow-x-scroll select-none
            scrollbar-hide"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Brand Logo"
                className="h-20 md:h-35 lg:h-35
                w-auto object-contain
                opacity-80 hover:opacity-100 transition"
                draggable={false}
              />
            ))}
          </div>

          {/* ===== GRADIENT EDGES ===== */}
          <div className="hidden md:block fade-left" />
          <div className="hidden md:block fade-right" />
        </div>
      </div>
    </section>
  );
};

export default Brandlogo;