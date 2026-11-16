import React from "react";

const bedsheet = [
    { name: "Plain Bedsheet", img: "/Productimage/Plain-Bedsheet.webp", des1:"Pattern: Plain (Solid Color, Minimal Look) " , des2:"Fabric: Cotton, Cotton Satin, Cotton-Poly Mix, Polyester " , des3:"Sizes: Standard & Customized", des4:"Thread Count Range: 144 – 600 TC" },
    { name: "Printed Bedsheet", img: "/Productimage/Printed-Bedsheet.webp", des1:"Pattern: Printed (Floral, Abstract)" , des2:"Fabric: Cotton, Cotton-Poly Mix, Polyester, Micro " , des3:"Sizes: Standard & Customized ", des4:"Thread Count Range: 90 – 600 TC" },
    { name: "Jacquard Bedsheet", img: "/Productimage/Jacquard-Bedsheet.webp", des1:"Pattern: Jacquard (Woven Designer Pattern) " , des2:"Fabric: Cotton" , des3:"Sizes: Standard & Customized ", des4:"Thread Count Range: 300 – 600 TC" },
      
  ];

  const Bedsheet = () => {

  /* ================= WHATSAPP MESSAGE ================= */
 
  const whatsappNumber = "917046221100"; // apna number

  const getWhatsappLink = (item) => {
    const message = encodeURIComponent(
      `Hello, I would like a quote for the following product:\n\n` +
      `🛏️ Product Name: ${item.name}\n` + 
      `${item.des1}\n` +
      `${item.des2}\n` +
      `${item.des3}\n` +
      `${item.des4}\n\n` +
      `Please share price, MOQ and delivery details.`
    );

    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
  
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-sm tracking-[0.35em] uppercase text-gray-500 mb-4">
            Manufacturing Excellence
          </h2>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">
            BED LINEN  
          </h1>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bedsheet.map((item, index) => (
            <div
              key={index}
              className="group border border-gray-200 bg-white 
                         hover:border-gray-400 transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full
                             group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 border-t border-gray-200 flex flex-col">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-600">{item.des1}</p>
                <p className="text-sm text-gray-600">{item.des2}</p>
                <p className="text-sm text-gray-600">{item.des3}</p>
                <p className="text-sm text-gray-600 mb-5">{item.des4}</p>
                 
                {/* WHATSAPP BUTTON */}
                <a
                  href={getWhatsappLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 
                             bg-[#ee6124] hover:bg-[#ee6124] text-white
                             py-3 text-sm tracking-widest uppercase
                             transition-all duration-300"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

  );
}
export default Bedsheet