import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" flex justify-center w-screen  ">
      <nav
        className={`fixed max-w-[1860px] w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg rounded-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1860px] px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              SocialBrand
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary hover:bg-gray-100/80"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item}
                </Link>
              ))}
              <button className="ml-4 px-6 py-2 bg-primary text-black rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                    isOpen ? "rotate-45 top-2" : "rotate-0 top-0"
                  } ${isScrolled ? "bg-gray-600" : "bg-white"}`}
                />
                <span
                  className={`absolute h-0.5 w-6 top-2 transition-all duration-200 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  } ${isScrolled ? "bg-gray-600" : "bg-white"}`}
                />
                <span
                  className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-2" : "rotate-0 top-4"
                  } ${isScrolled ? "bg-gray-600" : "bg-white"}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="py-2 space-y-1">
              {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button className="w-full mt-4 px-6 py-2  text-white rounded-lg  transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
