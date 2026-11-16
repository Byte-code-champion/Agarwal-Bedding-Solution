import React from "react";

const Comforter = [
  { 
    name: "Comforter", 
    img: "/Productimage/Comforters.webp", 
    des1:"Pattern: Plain (Solid Color),Printed (Floral/Abstract)", 
    des2:"Construction: Quilted, Single Needle, Multi Needle", 
    des3:"Shell Fabric: Cotton, Microfiber", 
    des4:"Filling: Poly Fiber, Micro Fiber", 
    des5:"Sizes: Standard & Customized", 
    des6:"GSM Range: 150 – 350 GSM" 
  },
  { 
    name: "Comforter Sets", 
    img: "/Productimage/Comforter-Sets.webp", 
    des1:"Pattern: Plain (Solid Color),Printed (Floral/Abstract)", 
    des2:"Construction: Quilted, Single Needle, Multi Needle", 
    des3:"Shell Fabric: Cotton, Microfiber", 
    des4:"Filling: Poly Fiber, Micro Fiber", 
    des5:"Sizes: Standard & Customized", 
    des6:"GSM Range: 150 – 350 GSM"
  }
];

const ComforterSets = () => {

  const whatsappNumber = "917046221100";

  const getWhatsappLink = (item) => {
    const message = encodeURIComponent(
      `Hello, I would like a quote for the following product:\n\n` +
      `🛏️ Product Name: ${item.name}\n` +
      `${item.des1}\n` +
      `${item.des2}\n` +
      `${item.des3}\n` +
      `${item.des4}\n` +
      `${item.des5}\n` +
      `${item.des6}\n\n` +
      `Please share price, MOQ and delivery details.`
    );

    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-3">
            Manufacturing Excellence
          </h2>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">
            COMFORTER & SETS
          </h1>
        </div>

        {/* CENTERED PRODUCTS */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">

          {Comforter.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-sm border border-gray-200 bg-white 
                         hover:border-gray-400 transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover 
                             hover:scale-105 transition-transform duration-700"
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
                <p className="text-sm text-gray-600 ">{item.des4}</p>
                <p className="text-sm text-gray-600 ">{item.des5}</p> 
                <p className="text-sm text-gray-600 mb-5">{item.des6}</p>
                {/* BUTTON */}
                <a
                  href={getWhatsappLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 
                             bg-[#ee6124] text-white py-3 text-sm uppercase
                             hover:opacity-90 transition"
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
};

export default ComforterSets;