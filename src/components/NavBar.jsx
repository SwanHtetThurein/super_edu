import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = 200; // Adjust offset as needed
        if (rect.top <= offset && rect.bottom >= offset) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-[#f9fafb]/30 sticky top-0 z-50 py-3 backdrop-blur-lg shadow-sm border-gray-100">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="#">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              {/* <span className="text-xl tracking-tight">Super Education</span> */}
            </a>
          </div>

          <ul className="hidden md:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  className={`hover-effect relative font-semibold text-gray-900 uppercase ${
                    activeSection === item.href.substring(1) ? "text-blue-500" : ""
                  }`}
                  href={item.href}
                >
                  <button>{item.label}</button>
                </a>
              </li>
            ))}
          </ul>
{/* 
          <div className="hidden md:flex justify-center space-x-12 items-center">
            <button className="btn-grad font-semibold transition-transform duration-500 transform hover:scale-105">
              Talk with us
            </button>
          </div> */}

          <div className="md:hidden sm:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-blue-50 w-full p-12 flex flex-col justify-center items-center md:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-3">
                  <a
                    className={`hover:underline relative font-semibold text-gray-900 uppercase ${
                      activeSection === item.href.substring(1) ? "text-blue-500" : ""
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* <div className="flex space-x-6 py-3">
              <button
                href="#"
                className="font-semibold btn-grad hover:from-green-500 hover:to-blue-700 rounded-md"
              >
                Talk with us
              </button>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;