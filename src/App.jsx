import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Map from "./components/Map/Map";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <Clients />
      <Gallery />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default App;
