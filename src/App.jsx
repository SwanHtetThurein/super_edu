import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Services/>
      <FAQ/>
      <About/>
      <Contact/>
    </div>
  );
}
