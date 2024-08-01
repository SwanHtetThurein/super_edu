import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import HeroTest from "./components/HeroTest";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
      <NavBar />
      <HeroTest/>
      <Services/>
      <About/>
      <FAQ/>
      <Contact/>
    </div>
  );
}
