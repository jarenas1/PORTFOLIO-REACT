import React, { useEffect, useState } from "react";
import logo from "../assets/jarenas1Logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickBurguer = () => {
    setIsOpen(!isOpen);
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
      <header className="w-full flex justify-center">
         <nav
          className={`mb-24 flex items-center justify-between py-0 fixed z-30 w-full transition-all duration-300 ease-in-out ${
            shouldShowBackground ? "bg-neutral-900" : "bg-transparent"
          }`}
        >
          <div className="flex flex-shrink-0 items-center ml-4">
            <img src={logo} alt="jarenas1 logo" className="w-40 sm:w-60" />
          </div>
          
          <div className="justify-around xl:w-2/5 lg:w-4/6 hidden lg:flex">
            <a href="#hero" className="py-1">Inicio</a>
            <a href="#about" className="py-1">Sobre mí</a>
            <a href="#technologies" className="py-1">Tecnologías</a>
            <a href="#projects" className="py-1">Proyectos</a>
            <a href="#contact" className="py-1">Contacto</a>
            <a href className="bg-purple-600 rounded-lg py-1 px-2">Descargar cv</a>
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
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </nav>
      </header>

      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <section className="w-full justify-center flex mb-28">
        <div
          className={`w-full bg-neutral-900 flex-col fixed mt-20 sm:mt-32 pt-6 mb-28 transition-all duration-300 ease-in-out lg:hidden ${
            isOpen 
              ? "opacity-100 translate-y-0 visible" 
              : "opacity-0 -translate-y-full invisible"
          }`}
        >
          <div>
            <a href="#hero" className="py-2 text-white text-center block hover:bg-neutral-800 transition-colors duration-200">
              Inicio
            </a>
            <a href="#about" className="py-2 text-white text-center block hover:bg-neutral-800 transition-colors duration-200">
              Sobre mí
            </a>
            <a href="#technologies" className="py-2 text-white text-center block hover:bg-neutral-800 transition-colors duration-200">
              Tecnologías
            </a>
            <a href="#projects" className="py-2 text-white text-center block hover:bg-neutral-800 transition-colors duration-200">
              Proyectos
            </a>
            <a href="#contact" className="py-2 text-white text-center block hover:bg-neutral-800 transition-colors duration-200">
              Contacto
            </a>
            <a href className="bg-purple-600 rounded-lg py-1 px-2 text-center block">Descargar cv</a>
          </div>
          
          {/* MOBILE ICONS */}
          <div className="flex items-center justify-center gap-4 text-2xl mt-6 text-white pb-4">
            <a href="#" className="hover:text-purple-500 transition-colors duration-200">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors duration-200">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors duration-200">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;