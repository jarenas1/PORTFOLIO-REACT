import React, { useEffect, useState } from "react";
import logo from "../assets/jarenas1Logo.png";
import cv from "../assets/JuanJoseArenasGaviriaCV.pdf";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickBurguer = () => {
    setIsOpen(!isOpen);
    localStorage.setItem('closed-hb-menu-pripra', isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shouldShowBackground = isScrolled || isOpen;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={`flex items-center justify-between w-full transition-all duration-300 ease-in-out ${
            shouldShowBackground ? "bg-neutral-900" : "bg-transparent"
          }`}
        >
          <div className="flex flex-shrink-0 items-center ml-4 py-2">
            <img src={logo} alt="jarenas1 logo" className="w-40 sm:w-60" />
          </div>
          
          <div className="justify-around xl:w-2/5 lg:w-4/6 hidden lg:flex">
            <a href="#hero" className="py-1 hover:text-purple-500 transition-colors duration-200">Inicio</a>
            <a href="#about" className="py-1 hover:text-purple-500 transition-colors duration-200">Sobre mí</a>
            <a href="#technologies" className="py-1 hover:text-purple-500 transition-colors duration-200">Tecnologías</a>
            <a href="#projects" className="py-1 hover:text-purple-500 transition-colors duration-200">Proyectos</a>
            <a href="#contact" className="py-1 hover:text-purple-500 transition-colors duration-200">Contacto</a>
            <a href={cv} download="JuanJoséArenasGaviriaCV.pdf" className="bg-purple-600 rounded-lg py-1 px-2">Descargar cv</a>
          </div>

          <button
            onClick={handleClickBurguer}
            id="menu-btn"
            className="block lg:hidden focus:outline-none mr-9 z-50"
          >
            <div className={`w-8 h-0.5 bg-white mb-2 transition-all duration-300 ${
              isOpen ? "transform rotate-45 translate-y-2.5" : ""
            }`}></div>
            <div className={`w-8 h-0.5 bg-white mb-2 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}></div>
            <div className={`w-8 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-2.5" : ""
            }`}></div>
          </button>

          <div className="m-8 hidden lg:flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/juan-jos%C3%A9-arenas-gaviria-144b79249/" className="hover:text-purple-500 transition-colors duration-200">
              <FaLinkedin />
            </a>
            <a href="https://github.com/jarenas1" className="hover:text-purple-500 transition-colors duration-200">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/juan______a07/?hl=es" className="hover:text-purple-500 transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=573022260938&text=Hola%20Jarenas1%2C" className="hover:text-purple-500 transition-colors duration-200">
              <FaWhatsapp />
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bg-neutral-900 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-y-16 sm:translate-y-24" : "-translate-y-full"
        }`}
      >
        <div className="py-8">
          <a href="#hero" className="py-2 text-white text-center block hover:bg-neutral-800 hover:text-purple-500 transition-colors duration-200">
            Inicio
          </a>
          <a href="#about" className="py-2 text-white text-center block hover:bg-neutral-800 hover:text-purple-500 transition-colors duration-200">
            Sobre mí
          </a>
          <a href="#technologies" className="py-2 text-white text-center block hover:bg-neutral-800 hover:text-purple-500 transition-colors duration-200">
            Tecnologías
          </a>
          <a href="#projects" className="py-2 text-white text-center block hover:bg-neutral-800 hover:text-purple-500 transition-colors duration-200">
            Proyectos
          </a>
          <a href="#contact" className="py-2 text-white text-center block hover:bg-neutral-800 hover:text-purple-500 transition-colors duration-200">
            Contacto
          </a>
          <div className="px-4">
            <a href={cv} download="JuanJoséArenasGaviriaCV.pdf" className="bg-purple-600 rounded-lg py-1 px-2 text-center block w-full">
              Descargar cv
            </a>
          </div>
          
          {/* Mobile Icons */}
          <div className="flex items-center justify-center gap-4 text-2xl mt-6 text-white pb-4">
            <a href="https://www.linkedin.com/in/juan-jos%C3%A9-arenas-gaviria-144b79249/" className="hover:text-purple-500 transition-colors duration-200">
              <FaLinkedin />
            </a>
            <a href="https://github.com/jarenas1" className="hover:text-purple-500 transition-colors duration-200">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/juan______a07/?hl=es" className="hover:text-purple-500 transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=573022260938&text=Hola%20Jarenas1%2C" className="hover:text-purple-500 transition-colors duration-200">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;