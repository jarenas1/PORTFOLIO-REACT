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

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Tecnologías</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJava className='text-6xl text-blue-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSpringboot className='text-6xl text-green-600'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaLaravel className='text-6xl text-red-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiDocker className='text-6xl text-blue-700'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiGithubactions className='text-6xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-6xl text-green-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-6xl text-blue-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPostgresql className='text-6xl text-blue-700'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-6xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJsBadge className='text-6xl text-yellow-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-6xl text-orange-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiSass className='text-6xl text-pink-400'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
