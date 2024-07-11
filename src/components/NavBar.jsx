import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="bg-[#fafaf7] sticky top-0 z-50 py-3 backdrop-blur-lg ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Super Education</span>
          </div>

          <ul className="hidden md:flex ml-14 space-x-12 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:underline relative"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex justify-center space-x-12 items-center">
            <a className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-3 hover:from-green-500 hover:to-blue-700 rounded-md">
              Talk with us
            </a>
          </div>

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
                    className="hover:underline relative"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6 py-3">
              <a
                href="#"
                className="py-2 px-3 border rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-3 hover:from-green-500 hover:to-blue-700 rounded-md"
              >
                Talk with us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
