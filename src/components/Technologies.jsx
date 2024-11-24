import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiJava} from 'react-icons/di'
import { DiJsBadge } from 'react-icons/di'
import { DiSass  } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { SiSpringboot } from 'react-icons/si'
import { FaLaravel } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa6'
import { SiGithubactions } from 'react-icons/si'
import {DiDocker } from 'react-icons/di'
import { RiTailwindCssLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial:{y: -10},
    animate: {
        y:[10, -10],
        transition:{
            duration:duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 lg:scroll-mt-40 scroll-mt-32 xl:scroll-mt-44 md:scroll-mt-96' id='technologies'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Tecnologías</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJava className='text-6xl text-blue-400 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSpringboot className='text-6xl text-green-600 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaLaravel className='text-6xl text-red-400 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiDocker className='text-6xl text-blue-700 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiGithubactions className='text-6xl text-cyan-400 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-6xl text-green-400 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-6xl text-blue-500 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPostgresql className='text-6xl text-blue-700 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-6xl text-cyan-400 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJsBadge className='text-6xl text-yellow-400 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-6xl text-orange-500 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiSass className='text-6xl text-pink-400 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssLine className='text-6xl text-blue-500 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaBootstrap className='text-6xl text-purple-600 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaFigma className='text-6xl text-pink-500 hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithub className='text-6xl text-white hover:scale-110 transition-all ease-in-out'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
