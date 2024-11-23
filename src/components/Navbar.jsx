import React, { useEffect, useState } from 'react'
import logo from "../assets/jarenas1Logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa' 
import { log } from 'three/webgpu'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className='w-full flex justify-center'>
    {/* LOGO */}
      <nav className={`mb-20 flex items-center justify-between py-0 fixed z-30 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-neutral-900 shadow-md" : "bg-transparent"
      }`}>
        
        <div className='flex flex-shrink-0 items-center ml-4'>
            <img src={logo} alt="jarenas1 logo" className='w-40 sm:w-60' />
        </div>

        <div className=' justify-around w-2/5 hidden lg:flex'>
          <a href="">Inicio</a>
          <a href="">Sobre mi</a>
          <a href="">Tecnologías</a>
          <a href="">Proyectos</a>
          <a href="">Contacto</a>
        </div>

         <button 
      id="menu-btn" 
      className="block lg:hidden focus:outline-none mr-9"
    >
      <div className="w-8 h-0.5 bg-white mb-2"></div>
      <div className="w-8 h-0.5 bg-white mb-2"></div>
      <div className="w-8 h-0.5 bg-white"></div>
    </button>
    

        {/* CONTACT INFORMATION */}
        <div className='m-8 hidden lg:flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub/>
            <FaInstagram/>
            <FaWhatsapp/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
