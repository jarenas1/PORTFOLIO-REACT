import React from 'react'
import { CONTACT } from '../constants'

const Footer = () => {
  return (
    <>
        <footer className='border-b border-neutral-900 pb-20'>
            <h2 className='my-10 text-center text-4xl'>Información</h2>        
            <div className='text-center tracking-tighter'>
                <p className='my-4'>{CONTACT.address}</p>
                <p className='my-4'> {CONTACT.email}</p>
                <a href="mailto:juanjoarenas1218@gmail.com"><p className='my-4'>{CONTACT.phoneNo}</p></a>

            </div>
        </footer>
    </>
  )
}

export default Footer
