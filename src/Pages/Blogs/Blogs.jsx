import { useEffect, useState } from "react";
import blogs from "./blogData";
import BlogCard from "./BlogCard";
import SEO from "../../Components/SEO";
const Blogs = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
       <SEO
  title="Hotel Linen Blog | Bedding & Hospitality Insights"
  description="Expert guides on thread count, hotel bedding standards, cotton vs microfiber and hospitality textile trends."
  keywords="hotel bedding guide, thread count explained, cotton vs microfiber bedsheets"
  url="https://agarwaldirect.com/blog"
  image="https://agarwaldirect.com/Productimage/Bed-Skirts.webp"
  schema={{
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Enera Hospitality Blog"
  }}
/>

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[90vh] md:h-[98vh] overflow-hidden">
        
        {/* Background */}
        <img
          src="/Productimage/exibition-image5.webp"
          alt="Hotel Linen Blog - Agarwal Bedding"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl px-6 md:px-16 lg:px-24">
            
            <div
              className={`max-w-2xl transition-all duration-1000 ease-out
              ${
                show
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <span className="text-[#ee6124] uppercase tracking-widest text-sm">
                Industry Insights & Linen Expertise
              </span>

              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                Our Blogs
              </h1>

              <div className="w-32 h-[2px] mt-6 bg-gradient-to-r from-transparent via-[#ee6124] to-transparent" />

              <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
                Explore blogs for expert guides on hotel bedding standards, fabric comparisons, thread count insights and smart bulk linen sourcing strategies.
              </p>

              <a
                href="/contact"
                className="inline-block mt-8 px-6 py-3 bg-[#ee6124] text-white rounded-full hover:bg-orange-600 transition-all duration-300 hover:translate-x-1"
              >
                Contact Us →
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ================= BLOG GRID SECTION ================= */}
      <div
        id="latest-blogs"
        className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
            LATEST ARTICLES
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Blogs;