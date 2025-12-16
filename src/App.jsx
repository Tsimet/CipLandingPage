import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Clients from "./components/Clients/Clients";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <Clients />
    </>
  );
}

export default App;
