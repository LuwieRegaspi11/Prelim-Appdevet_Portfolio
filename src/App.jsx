import "./app.css"
import Home from "./components/BannerHeader"
import About from "./components/About"
import Certificates from "./components/Certificates"
import Faq from "./components/Faq"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-white text-black font-sans">
      <Home />
      <About />
      <Certificates />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}