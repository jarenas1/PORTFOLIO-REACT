import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <>
        <footer className='border-b border-neutral-900 pb-20'>
            <motion.h2 
             whileInView={{opacity:1, y:0}}
             initial={{opacity:0, y: -100}}
             transition={{duration: 0.5}}
            className='my-10 text-center text-4xl'>Información</motion.h2>        
            <div className='text-center tracking-tighter'>
                <motion.p 
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:0, x: -100}}
                 transition={{duration: 1}}
                className='my-4'>{CONTACT.address}</motion.p>
                <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x: 100}}
                transition={{duration: 1}}
                className='my-4'> {CONTACT.phoneNo}</motion.p>
                <motion.a 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, y:100}}
                transition={{duration: 1}}
                href="mailto:juanjoarenas1218@gmail.com"><p className='my-4'>{CONTACT.email}</p></motion.a>

            </div>
        </footer>
    </>
  )
}

export default Footer
