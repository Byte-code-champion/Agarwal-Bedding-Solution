import React from "react";

const brands = [
  { name: "OYO", logo: "/HotelImages/Oyorooms.webp" },
  { name: "Taj", logo: "/HotelImages/Taj.webp" },
  { name: "Fairfield Marriott", logo: "/HotelImages/Fairfield.webp" },
  { name: "ITC", logo: "/HotelImages/Itchotel.webp" },
  { name: "Hyatt", logo: "/HotelImages/HayattRegency.webp" },
  { name: "Radisson", logo: "/HotelImages/Radisson.webp" },
  { name: "Adityabirla", logo: "/HotelImages/Adityabirla.webp" },
  { name: "Aarriott", logo: "/HotelImages/aarriott.webp" },
  { name: "Adani", logo: "/HotelImages/adani.webp" },
  { name: "Ahmedabad University", logo: "/HotelImages/Ahmedabaduniversity.webp" },
  { name: "Crowneplaza", logo: "/HotelImages/Crowneplaza.webp" },
  { name: "Fortune", logo: "/HotelImages/Fortune.webp" },
  { name: "Fourpoints", logo: "/HotelImages/Fourpoints.webp" },
  { name: "Grandmercure", logo: "/HotelImages/Grandmercure.webp" },
  { name: "Holidaylnn Express", logo: "/HotelImages/Holidaylnn.webp" },
  { name: "Hotel lake point", logo: "/HotelImages/Hotellakepoint.webp" },
  { name: "Hotel Mivaante", logo: "/HotelImages/Hotelmivaante.webp" },
  { name: "Lemon tree", logo: "/HotelImages/Lemontree.webp" },
  { name: "Maruti suzuki", logo: "/HotelImages/Marutisuzuki.webp" },
  { name: "Nalanda", logo: "/HotelImages/Nalanda.webp" },
  { name: "Narayani heights", logo: "/HotelImages/Narayaniheights.webp" },
  { name: "Pragati", logo: "/HotelImages/Pragati.webp" },
  { name: "Renaissance", logo: "/HotelImages/Renaissance.webp" },
  { name: "Riverview", logo: "/HotelImages/Riverview.webp" },
  { name: "Scenaria", logo: "/HotelImages/Scenaria.webp" },
  { name: "Siddharth hotels", logo: "/HotelImages/Siddharthhotels.webp" },
  { name: "Stanzaliving", logo: "/HotelImages/Stanzaliving.webp" },
  { name: "Thecama", logo: "/HotelImages/thecama.webp" },
  { name: "Thecloud", logo: "/HotelImages/Thecloud.webp" },
  { name: "Thegrandvinayak", logo: "/HotelImages/Thegrandvinayak.webp" },
    { name: "Theleela", logo: "/HotelImages/Theleela.webp" },
      { name: "Theparkresidency", logo: "/HotelImages/Theparkresidency.webp" },
        { name: "Theummed", logo: "/HotelImages/Theummed.webp" },
        { name: "Vivanta", logo: "/HotelImages/Vivanta.webp" },
        { name: "", logo: "/HotelImages/ADD-MORE.webp" },

];

export default function BrandLogoShowcase() {
  return (
    <section className="bg-[#0b0b0b] py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-4xl text-white font-semibold">
           TRUSTED BY LEADING HOSPITALITY BRANDS
          </h2>
          <div className="w-24 h-[2px] mt-4 mx-auto bg-gradient-to-r from-transparent via-[#c8a45d] to-transparent" />
          <p className="mt-6 text-gray-400">
            Partnering with India’s most respected hotels, resorts, and institutional brands.
          </p>
        </div>

        {/* GRID – Mobile, Tablet, Desktop */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
  {brands.map((brand, i) => (
    <div key={i} className="flex flex-col items-center">
      <LogoCard brand={brand} />

      {/* HOTEL NAME – OUTSIDE CARD */}
      <p className="mt-3 text-xs sm:text-sm font-semibold text-gray-300 text-center uppercase tracking-widest group-hover:text-[#c8a45d] transition-colors duration-300">
        {brand.name}
      </p>
    </div>
  ))}
</div>

       

      </div>
    </section>
  );
}

/* ================= LOGO CARD ================= */
function LogoCard({ brand }) {
  return (
    <div
      className="group relative flex items-center justify-center
      h-32 w-full md:h-[20vh] h-[30vh]
      rounded-2xl
      bg-white backdrop-blur-xl
      border border-white/15
      transition-all duration-500 ease-out
      hover:-translate-y-2
      hover:border-[#c8a45d]
      hover:shadow-[0_20px_40px_rgba(200,164,93,0.2)]"
    >
      {/* Glow Layer */}
      <div
        className="absolute inset-0 rounded-2xl
        bg-gradient-to-br from-[#c8a45d]/20 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500 ease-out
        pointer-events-none"
      />

      {/* LOGO */}
      <img
        src={brand.logo}
        alt={brand.name}
        className="relative z-10
        max-w-full max-h-full
        object-contain
        transition-transform duration-500 ease-out
        group-hover:scale-110"
      />
    </div>
  );
}
