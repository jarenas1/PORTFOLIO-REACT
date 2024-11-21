import React from 'react'
import logo from "../assets/jarenas1Logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa' 

const Navbar = () => {
  return (
    <>
    {/* LOGO */}
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="jarenas1 logo" className='w-40 sm:w-60' />
        </div>
        {/* CONTACT INFORMATION */}
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub/>
            <FaInstagram/>
            <FaWhatsapp/>
        </div>
      </nav>
    </>
  )
}

export default Navbar
