import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function LuxuryContactSection() {
  
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const initialFormState = {
    hotel: "",
    location: "",
    rooms: "",
    name: "",
    email: "",
    phone: "",
    category: [],
    message: "",
  };

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const emailFormRef = useRef(null);

  const productCategories = [
    "Hotel Bed Linen",
    "Bath & Spa Linen",
    "Banquet & Table Linen",
    "Mattresses & Pillows",
    "Duvets & Comforters",
    "Room Soft Furnishing",
    "Custom Manufacturing",
  ];

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= VALIDATION ================= */
  function validate() {
    const newErrors = {};

    if (!form.hotel) newErrors.hotel = "Property / Hotel name is required";
    if (!form.location) newErrors.location = "Location is required";
    if (!form.rooms) newErrors.rooms = "Number of rooms is required";

    if (!form.name) newErrors.name = "Contact person is required";
    if (!form.email) newErrors.email = "Email is required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.phone) newErrors.phone = "Phone number is required";

    if (form.category.length === 0)
      newErrors.category = "Select at least one product category";

    return newErrors;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCategoryChange(value) {
    setForm((prev) => ({
      ...prev,
      category: prev.category.includes(value)
        ? prev.category.filter((item) => item !== value)
        : [...prev.category, value],
    }));
  }

  function buildMessage() {
    const message = `
Hospitality Inquiry

Property: ${form.hotel}
Location: ${form.location}
Rooms: ${form.rooms}

Contact Person: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Products: ${form.category.join(", ")}

Project Details:
${form.message}
    `;
    return encodeURIComponent(message);
  }

  function resetForm() {
    setForm(initialFormState);
    setErrors({});
    setTimeout(() => setSubmitted(false), 4000);
  }

    /* ================= EMAILJS SUBMIT ================= */
     function submitEmailJS(e) {
    e.preventDefault();
     
     const publickey="y7ngwCG3cWBRarmpp";
    const serviceId="service_fn6sakc";
    const templateId="template_shwhwqf";

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm(
        serviceId,
  templateId,
  emailFormRef.current,
  publickey
      )
      .then(
        () => {
          setSubmitted(true);
          resetForm();
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
  }



  /* ================= SUBMIT HANDLERS ================= */
  function submitWhatsApp(e) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);

    window.open(
      `https://wa.me/917046221100?text=${buildMessage()}`,
      "_blank"
    );

    resetForm();
  }


  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-16
      bg-gradient-to-br from-[#ee6124] via-[#f0723a] to-[#ee6124]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

      <div
        className={`relative w-full max-w-6xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {/* HEADER */}
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Start Your Hospitality Project
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Share your requirements and our team will connect with you shortly.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white/95 rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.25)] p-6 md:p-10">
          {submitted && (
            <div className="mb-6 text-green-600 text-center font-medium">
              ✅ Thank you! Your inquiry has been sent successfully.
            </div>
          )}

          <form 
          ref={emailFormRef}
            onSubmit={submitEmailJS}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <input
              name="hotel"
              value={form.hotel}
              placeholder="Property / Hotel Name *"
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-3 ${
                errors.hotel && "border-red-500"
              }`}
            />

            <input
              name="name"
              value={form.name}
              placeholder="Contact Person *"
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-3 ${
                errors.name && "border-red-500"
              }`}
            />

            <input
              name="location"
              value={form.location}
              placeholder="Location (City, State, Country) *"
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-3 ${
                errors.location && "border-red-500"
              }`}
            />

            <input
              name="email"
              value={form.email}
              placeholder="Email Address *"
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-3 ${
                errors.email && "border-red-500"
              }`}
            />

            <select
              name="rooms"
              value={form.rooms}
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-3 ${
                errors.rooms && "border-red-500"
              }`}
            >
              <option value="">Number of Rooms *</option>
              <option>1–50</option>
              <option>50–150</option>
              <option>150–300</option>
              <option>300+</option>
            </select>

            <input
              name="phone"
              value={form.phone}
              placeholder="Phone / WhatsApp *"
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-3 ${
                errors.phone && "border-red-500"
              }`}
            />

            <div className="md:col-span-2">
              <p className="font-semibold mb-3">Product Categories *</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {productCategories.map((item) => (
                  <label
                    key={item}
                    className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer ${
                      form.category.includes(item)
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.category.includes(item)}
                      onChange={() => handleCategoryChange(item)}
                      className="accent-orange-500"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              value={form.message}
              placeholder="Project Details  (OPTIONAL)"
              rows="4"
              onChange={handleChange}
              className="md:col-span-2 w-full rounded-xl border px-4 py-3"
            />

            <div className="md:col-span-2 flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <button
                onClick={submitWhatsApp}
                className="bg-[#ee6124] hover:bg-[#ee6124] text-white px-8 py-4 rounded-full font-semibold"
              >
                Send via WhatsApp
              </button>

              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LuxuryContactSection;
