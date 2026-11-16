import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "./blogData";
import BlogSchema from "./BlogSchema";

const SingleBlog = () => {
  const { slug } = useParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);  
    window.scrollTo(0, 0);
  }, []);

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Blog Not Found
      </div>
    );
 
  return (
    <>
      <BlogSchema blog={blog} />

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div
            className={`max-w-3xl transition-all duration-1000 ${
              show
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              {blog.title}
            </h1>

            <div className="w-24 h-[2px] mt-6 mx-auto bg-gradient-to-r from-transparent via-[#ee6124] to-transparent" />

            <p className="mt-6 text-gray-200 text-sm md:text-base">
              By Agarwal Bedding • {blog.date}
            </p>
          </div>
        </div>
      </div>

      {/* ================= BLOG CONTENT ================= */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            show
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-p:text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Trusted Hotel Linen Manufacturer in India
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover high-quality bedsheets, towels and bulk hospitality linen tailored for hotels and resorts.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-[#ee6124] text-white rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105"
        >
          Get a Quote →
        </a>
      </div>
    </>
  );
};

export default SingleBlog;