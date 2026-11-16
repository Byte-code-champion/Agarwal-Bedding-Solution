import React, { useEffect, useState } from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

function Contactform() {
  const [visible, setVisible] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  
  const companyName = "AGARWAL BEDDING SOLUTION";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
      if (typeof window !== "undefined") {
    setShareUrl(window.location.origin);
  }
    return () => clearTimeout(timer);
    
  }, []);

  const copyLink = () => {
     if (!shareUrl) return;
  navigator.clipboard.writeText(shareUrl);
  alert("Link copied!");
  };

  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section className="w-full bg-white py-20 px-4">
        {/* HEADING */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            AT YOUR ASSISTANCE
          </h2>
        </div>

        {/* CARD */}
        <div
          className={`mt-16 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* MAP */}
            <iframe
              title="Office Location"
              loading="lazy"
              className="w-full h-[320px] md:h-full"
              src="https://www.google.com/maps?q=2nd+Floor,+Rembrandt+Building,+Ellisbridge,+Ahmedabad&output=embed"
            />

            {/* DETAILS */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">
                {companyName}
              </h3>

              <div className="mb-6">
                <h4 className="font-semibold">Corporate Office</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  2nd Floor, Rembrandt Building,  
                  Chimanlal Girdharlal Rd, Ellisbridge,  
                  Ahmedabad, Gujarat 380009
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold">Phone</h4>
                <a
                  href="tel:+917046221100"
                  className="text-gray-600 text-sm hover:text-orange-500"
                >
                  +91 70462 21100
                </a>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:contact@agarwaldirect.com"
                  className="text-gray-600 text-sm hover:text-orange-500"
                >
                  contact@agarwaldirect.com
                </a>
              </div>

              <button
                onClick={() => setShareOpen(true)}
                className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHARE MODAL ================= */}
      {shareOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShareOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-[90%] max-w-md p-6 animate-scaleUp relative"
          >
            <button
              onClick={() => setShareOpen(false)}
               className="absolute top-4 right-4 text-xl"
            >
                 ✕
            </button>

            <h3 className="text-xl font-bold mb-6 text-center">
              Share Our Page
            </h3>

            <div className="grid grid-cols-5 gap-4 mb-6">
              <ShareIcon
                label="Facebook"
                color="#1877F2"
                link="https://www.facebook.com/avishekdirector/"
                icon={<FaFacebookF />}
              />

              <ShareIcon
                label="X"
                color="#000"
                link={`https://twitter.com/intent/tweet?url=${shareUrl}`}
                icon={<FaXTwitter />}
              />

              <ShareIcon
                label="Instagram"
                gradient
                link="https://www.instagram.com/avishek_agarwal23/"
                icon={<FaInstagram />}
              />

              <ShareIcon
                label="Email"
                color="#6B7280"
                link="mailto:contact@agarwaldirect.com"
                icon={<FaEnvelope />}
              />

              <ShareIcon
                label="WhatsApp"
                color="#22C55E"
                link={`https://wa.me/?text=${shareUrl}`}
                icon={<FaWhatsapp />}
              />
            </div>

            <div className="flex gap-2">
              <input
                readOnly
                value={shareUrl}
                className="border rounded-lg px-3 py-2 w-full text-sm"
              />
              <button
                onClick={copyLink}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ================= SHARE ICON ================= */
const ShareIcon = ({ label, color, link, icon, gradient }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="flex flex-col items-center text-xs gap-1"
  >
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition hover:scale-110 ${
        gradient
          ? "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400"
          : ""
      }`}
      style={!gradient ? { backgroundColor: color } : {}}
    >
      <span className="text-white text-xl">{icon}</span>
    </div>
    {label}
  </a>
);

export default Contactform;