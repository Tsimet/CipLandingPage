import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Map from "./components/Map/Map";

function App() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <Clients />
      <Map />
      <Footer />
    </>
  );
}

export default App;
