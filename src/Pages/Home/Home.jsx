import "./Home.css";
import PremiumScrollSection from "./PremiumScrollSection";
import Brandlogo from "./Brandlogo";
import YearTimelineGSAP from "./YearTimelineGSAP";
import HotelReviewGallery from "./HotelReviewGallery";
import { Link } from "react-router-dom";
import LuxuryInfiniteVideoSlider from "./LuxuryInfiniteVideoSlider";
import React from "react";
import { Helmet } from "react-helmet-async";

function Home() {

  /* ================= ADVANCED STRUCTURED DATA ================= */

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [

      /* ===== ORGANIZATION ===== */
      {
        "@type": "Organization",
        "@id": "https://agarwaldirect.com/#organization",
        "name": "Agarwal Bedding",
        "url": "https://agarwaldirect.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://agarwaldirect.com/SiteLogo.png"
        },
        "founder": {
          "@type": "Person",
          "name": "Avishek Agarwal"
        },
        "sameAs": [
          "https://www.facebook.com/avishekdirector/",
          "https://www.instagram.com/avishek_agarwal23/"
        ]
      },

      /* ===== LOCAL BUSINESS ===== */
      {
        "@type": "LocalBusiness",
        "@id": "https://agarwaldirect.com/#localbusiness",
        "name": "Agarwal Bedding",
        "image": "https://agarwaldirect.com/SiteLogo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Raipur",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380001",
          "addressCountry": "IN"
        },
        "telephone": "+91-7046221100",
        "priceRange": "$$",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "url": "https://agarwaldirect.com/"
      },

      /* ===== MANUFACTURER ===== */
      {
        "@type": "Manufacturer",
        "name": "Agarwal Bedding",
        "url": "https://agarwaldirect.com/",
        "makesOffer": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Cotton Bedsheets & Hotel Linen"
          }
        }
      },

      /* ===== WEBSITE + SEARCH ACTION (SITELINK SEARCH BOX) ===== */
      {
        "@type": "WebSite",
        "@id": "https://agarwaldirect.com/#website",
        "url": "https://agarwaldirect.com/",
        "name": "Agarwal Bedding",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://agarwaldirect.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
      {/* ================= SEO SECTION ================= */}
      <Helmet>

        <title>
          Hotel Linen Manufacturer & Supplier India | Agarwal Bedding
        </title>

        <meta
          name="description"
          content="Agarwal Bedding is a leading cotton bedsheets manufacturer and hotel linen supplier in India. Premium hospitality bedding, bulk hotel bedsheets, custom branding, and luxury cotton linen solutions."
        />

        <meta name="keywords" content="cotton bedsheets manufacturer India, hotel linen supplier, bulk hotel bedsheets, hospitality bedding manufacturer, Ahmedabad bedding supplier" />

        <link rel="canonical" href="https://agarwaldirect.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Hotel Linen Manufacturer & Supplier India | Agarwal Bedding" />
        <meta property="og:description" content="Leading hospitality linen manufacturer in India providing hotel bedsheets, towels and bulk linen solutions for hotels and resorts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agarwaldirect.com/" />
        <meta property="og:image" content="https://agarwaldirect.com/SiteLogo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cotton Bedsheets Manufacturer India | Agarwal Bedding" />
        <meta name="twitter:description" content="Premium cotton bedsheets & hotel linen supplier for hospitality businesses." />
        <meta name="twitter:image" content="https://agarwaldirect.com/SiteLogo.png" />

        {/* Performance Optimization */}
        <link rel="preconnect" href="https://agarwaldirect.com" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/Videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center px-4 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-xl text-white transition-all duration-1000 ease-out">

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Premium Bedding Supply
for Hotels & Businesses
            </h1>

            <p className="mt-4 text-lg text-white/90">
              Bulk supply • Custom branding • Trusted hospitality bedding partner
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/HospitalityLinen"
                className="inline-block bg-[#ee6124] text-white px-8 py-3 rounded-full hover:bg-transparent border border-[#ee6124] hover:text-[#ee6124] transition-all duration-300"
              >
                Explore Products
              </Link>

              <Link
                to="/Contact"
                className="inline-block border border-[#ee6124] text-[#ee6124] px-8 py-3 rounded-full hover:bg-[#ee6124] hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      </section>


       <section className="w-full py-30 bg-white flex items-center">
        <div className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 w-full gap-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
              ABOUT US
            </h2>

            {/* Luxury Divider */}
            <div className="w-28 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#ee6124] to-transparent"></div>

            {/* Subtitle */}
            <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed">
              Delivering premium-quality hotel bedding solutions with precision,
              consistency, and trust.
            </p>
          </div>

          {/* ORDER CHANGE HERE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            {/* RIGHT IMAGE (TOP ON MOBILE) */}
            <div className="flex justify-center animate-image md:order-2 order-1">
              <div className="relative">
                <div className="absolute -z-10 top-10 left-10 w-72 h-72 rounded-full" />
                <img
                  src="/Productimage/Avishek-Sir1.webp"
                  alt="Hotel Bedding"
                  className="w-full max-w-md rounded-full"
                />
              </div>
            </div>

            {/* LEFT CONTENT (BOTTOM ON MOBILE) */}
            <div className="space-y-6 animate-text md:order-1 order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight scroll-reveal delay-1">
                Professional Linen<br />
                <span className="text-[#ee6124]">Trusted Performance </span>
              </h2>

              <p className="text-gray-600 text-base md:text-lg max-w-xl scroll-reveal delay-2">
                We are a manufacturing-led hospitality solutions company delivering integrated linen and bedding products for hotels, corporates, restaurants, and banquets.
              </p>

              <div className="flex gap-4 flex-wrap pt-2">
                <Link
                  to="/About"
                  className="inline-block bg-[#ee6124] text-white px-8 py-3 rounded-full hover:bg-transparent border border-[#ee6124] hover:border-[#ee6124] hover:text-[#ee6124] transition-all duration-300 animate-bounce"
                >
                  Read More
                </Link>
                <Link
                  to="/Contact"
                  className=" inline-block border border-[#ee6124] text-[#ee6124] px-8 py-3 rounded-full hover:bg-[#ee6124] hover:text-white transition-all duration-300 animate-bounce"
                >
                  Call by
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Brandlogo />
      <LuxuryInfiniteVideoSlider />
      <PremiumScrollSection />
      <YearTimelineGSAP />
      <HotelReviewGallery />

    </>
  );
}

export default Home;