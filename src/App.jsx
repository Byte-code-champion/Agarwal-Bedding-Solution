import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SmoothScrollProvider from "./Components/SmoothScrollProvider";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import HospitalityLinen from "./Pages/HospitalityLinen/HospitalityLinen";
import BanquetLinen from "./Pages/BanquetLinen/BanquetLinen";
import CorporateLinen from "./Pages/CorporateLinen/CorporateLinen";
import UniversityLinen from "./Pages/UniversityLinen/UniversityLinen";
import OurClients from "./Pages/OurClients/OurClients";
import Contact from "./Pages/Contact/Contact";
import ScrollToTopArrow from "/src/Pages/Home/ScrollToTopArrow";
import ScrollToTop from "./Components/ScrollToTop";
import Blogs from "./Pages/Blogs/Blogs";
import SingleBlog from "./Pages/Blogs/SingleBlog";

function App() {

  useEffect(() => {
  window.history.scrollRestoration = "manual";
}, []);


  return (
    <>
      <Header />
      <SmoothScrollProvider>
         <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hospitalityLinen" element={<HospitalityLinen/>} />
        <Route path="/CorporateLinen" element={<CorporateLinen/>} />
        <Route path="/banquet-restaurants-Linen" element={<BanquetLinen/>} />
        <Route path="/UniversityLinen" element={<UniversityLinen/>} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/blogs" element={<Blogs />} />
         <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </SmoothScrollProvider>
            <ScrollToTopArrow />
      <Footer />
    </>
  );
}

export default App;
