import "./App.css";
import { useState, lazy, Suspense } from "react";

import AboutUs from "./components/AboutUs/AboutUs";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Map from "./components/Map/Map";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Navigation from "./components/Navigation/Navigation";
const Pictures = lazy(() => import("./components/Pictures/Pictures"));
const Certificates = lazy(() =>
  import("./components/Certificates/Certificates")
);

import Modal from "./components/Modal/Modal";
import AboutUsContact from "./components/AboutUsContact/AboutUsContact";

function App() {
  const [activeGallery, setActiveGallery] = useState(null);

  return (
    <>
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <AboutUsContact />

      <Clients />
      <Gallery onSelectGallery={setActiveGallery} />
      <Suspense fallback={<div className="loader">Loading Gallery...</div>}>
        {activeGallery == "pictures" && (
          <Modal onClose={() => setActiveGallery(null)}>
            <Pictures />
          </Modal>
        )}
        {activeGallery == "certificates" && (
          <Modal onClose={() => setActiveGallery(null)}>
            <Certificates />
          </Modal>
        )}
      </Suspense>
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default App;
