import { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (

      <nav className={`navbarcontain w-full z-10 absolute top-0 left-0 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-full flex items-center justify-between p-4 md:px-8">
          
          {/* Logo on the left */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" width={82} height={82} />
          </a>

          {/* Centered navigation */}
          <div className="hidden md:flex space-x-8 px-5 py-3">

            <a href="#Home" className="text-lg font-medium text-white hover:text-blue-500">Home</a>
            <a href="#about" className="text-lg font-medium text-white hover:text-blue-500">About</a>
            <a href="#" className="text-lg font-medium text-white hover:text-blue-500">Features</a>
            <a href="#" className="text-lg font-medium text-white hover:text-blue-500">Tokenomics</a>
            <a href="#" className="text-lg font-medium text-white hover:text-blue-500">Roadmap</a>
          </div>

          {/* New Button on the right */}
          <div className="hidden md:flex space-x-4">
          <Link to="/Stages">
            <button className="bg-custom-gradient text-white px-4 py-2 rounded-md">Login</button>
          </Link>
        </div>

          {/* Hamburger menu button for mobile */}
          <button
            onClick={toggleNav}
            className="md:hidden block text-white hover:{text-blue-800}"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isNavVisible ? "block" : "hidden"} bg-custom-gradient shadow-lg`}>
          <a href="#home" className="block px-4 py-2 text-white hover:bg-blue-600">Home</a>
          <a href="#about" className="block px-4 py-2 text-white hover:bg-blue-600">About Us</a>
          <a href="#feature" className="block px-4 py-2 text-white hover:bg-blue-600">Feature</a>
          <a href="#tokenomics" className="block px-4 py-2 text-white hover:bg-blue-600">Tokenomics</a>
          <a href="#roadmap" className="block px-4 py-2 text-white hover:bg-blue-600">Roadmap</a>
          <Link to="/Stages">
          <button className="w-full hover:text-blue-600 text-white px-2 text-2xl font-bold py-8">Login</button>
        </Link>
        </div>
      </nav>
  );
};

export default Navbar;
