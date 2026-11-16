import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-16 pb-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">

          {/* Brand */}
          <div>
           {/* Logo */}
                     <Link to="./" className="flex items-center">
             <img
               src="/logo-icons/SiteLogo1.png"
               alt="Agarwal Bedding Logo"
               className={`h-10 transition-all duration-300 brightness-[#ee6124] brightness-0 invert text:
    }`}
             />
           </Link>
           
            <p className="mt-5 text-sm leading-relaxed">
              Agarwal Bedding Solution (AGS) is a trusted hospitality linen manufacturer in India, delivering premium-quality bed linens, bath linens, mattresses, duvets, and customized textile solutions for hotels, resorts, and luxury properties across the country.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-medium mb-5">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li> <Link to="/HospitalityLinen" className="hover:text-[#ee6124] transition">Hotel Bed Linens</Link></li>
              <li><Link to="/HospitalityLinen" className="hover:text-[#ee6124] transition">Mattresses & Fillers</Link></li>
              <li><Link to="/HospitalityLinen" className="hover:text-[#ee6124] transition">Duvets & Comforters</Link></li>
              <li><Link to="/HospitalityLinen" className="hover:text-[#ee6124] transition">Bath & Spa Linens</Link></li>
              <li><Link to="/BanquetLinen" className="hover:text-[#ee6124] transition">Restaurant & Banquet Linens</Link></li>
              <li><Link to="/BanquetLinen" className="hover:text-[#ee6124] transition">Room Interior Soft Furnishings</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-5">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#ee6124] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ee6124] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/HospitalityLinen"
                  className="hover:text-[#ee6124] transition"
                >
                  HospitalityLinen
                </Link>
              </li>
              <li>
                <Link
                  to="/CorporateLinen"
                  className="hover:text-[#ee6124] transition"
                >
                  CorporateLinen
                </Link>
              </li>
              <li>
                <Link
                  to="/banquet-restaurants-Linen"
                  className="hover:text-[#ee6124] transition"
                >
                  Banquet Restaurants Linen
                </Link>
              </li>
              <li>
                <Link
                  to="/our-clients"
                  className="hover:text-[#ee6124] transition"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ee6124] transition">
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-5">Get in Touch</h3>

            <div className="space-y-3 text-sm">
              <p>
                Ahmedabad, Gujarat<br />
                India
              </p>
              <p><a href="tel:+917046221100" className="hover:underline">
    +91 7046221100
  </a></p>
              <p>  <a href="mailto:contact@agarwaldirect.com" className="hover:underline">
    contact@agarwaldirect.com
  </a></p>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-block mt-6 bg-[#ee6124] text-white px-6 py-2.5 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
          <p>
            © {new Date().getFullYear()} Agarwal Bedding. All Rights Reserved.
          </p>

          <p className="text-gray-500">
            Hotel Linen Manufacturer & Supplier in India
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
