import React, { useRef, useState } from "react";
import "./Home.css";

const videos = [
  "/Videos/ABS4.0.mp4",
  "/Videos/work_video.mp4",
  "/Videos/TAJ-4.0.mp4",
  "/Videos/MS6.0.mp4",
];

export default function LuxuryVideoSlider() {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [activeSound, setActiveSound] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  /* ================= DRAG ================= */

  const startDrag = (x) => {
    isDragging.current = true;
    startX.current = x;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const onMove = (x) => {
    if (!isDragging.current) return;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  /* ================= PLAY CONTROL ================= */

  const togglePlay = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      videoRefs.current.forEach((vid) => vid && vid.pause());
      video.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-12 px-4">
        THE ART OF THOUGHTFUL COMFORT
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-auto px-6 md:px-16 cursor-grab active:cursor-grabbing no-scrollbar snap-x snap-mandatory"
        onMouseDown={(e) => startDrag(e.pageX)}
        onMouseMove={(e) => onMove(e.pageX)}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].pageX)}
        onTouchMove={(e) => onMove(e.touches[0].pageX)}
        onTouchEnd={endDrag}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] md:w-[420px] snap-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">

              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video}
                loop
                playsInline
                muted={activeSound !== index}
                className="w-full h-[400px] md:h-[520px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* PLAY BUTTON */}
              <button
                onClick={() => togglePlay(index)}
                className="absolute inset-0 flex items-center justify-center"
              >
                {playingIndex === index ? null : (
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                    ▶
                  </div>
                )}
              </button>

              {/* SOUND BUTTON */}
              <button
                className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white p-3 rounded-full hover:bg-black transition"
                onClick={() =>
                  setActiveSound(activeSound === index ? null : index)
                }
              >
                {activeSound === index ? <UnmuteIcon /> : <MuteIcon />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= ICONS ================= */

const MuteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M11 5L6 9H3v6h3l5 4V5z" />
    <line x1="16" y1="8" x2="22" y2="16" stroke="white" strokeWidth="2" />
    <line x1="22" y1="8" x2="16" y2="16" stroke="white" strokeWidth="2" />
  </svg>
);

const UnmuteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M11 5L6 9H3v6h3l5 4V5z" />
    <path d="M15 9a4 4 0 010 6" stroke="white" strokeWidth="2" fill="none" />
    <path d="M17.5 6.5a7 7 0 010 11" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);
