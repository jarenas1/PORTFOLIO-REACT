import React from 'react'
import {PROJECTS} from "../constants"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h2 className='my-20 text-center text-4xl'> Proyectos
      </h2>
        <div>
            {PROJECTS.map((project, index) =>{
                return <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <div className='w-full lg:w-1/4'>
                                <img src={project.image}
                                width={150}
                                height={150}
                                alt={project.title} 
                                className='mb-6 rounded'/>
                            </div>
                            <div className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                                <p className='mb-4 text-neutral-400'>{project.description}</p>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm  text-purple-900 font-semibold'>{tech}</span>
                                ))}
                                <div className='flex flex-row gap-5 my-5'>
                                    {project.deploy && <a className='mr-2 px-2 py-1 rounded bg-neutral-900 text-purple-900 font-semibold hover:bg-purple-900 hover:text-neutral-900 transition-all duration-300' 
                                    href={project.deploy} target="_blank">Deploy Link</a>}
                                    <a className='mr-2 px-2 py-1 rounded bg-neutral-900 text-purple-900 font-semibold hover:bg-purple-900 hover:text-neutral-900 transition-all duration-300'
                                    href={project.repo} target="_blank" >Github</a>
                                </div>
                            </div>
                </div>
            })}
        </div>
    </div>
    )
}

export default Projects
