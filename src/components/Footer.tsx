import React from 'react'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiFrontendmentor } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='bg-white px-5 py-12 lg:px-20 flex flex-col items-center justify-center lg:justify-between lg:flex-row'>
        <div>
            <h1 className='font-Grotesk font-bold text-5xl'>RMA.</h1>
        </div>
        <div className='flex gap-4 p-3'>
          <a href='https://web.facebook.com/profile.php?id=100009386101588' target='_blank'><FaFacebook size={30} className='bg-black border text-white border-black p-1 hover:bg-white hover:text-black hover:border-[#1A5F7A] cursor-pointer' /></a>
          <a href='https://www.linkedin.com/in/russel-aniel-48353820b/' target='_blank'><FaLinkedinIn size={30} className='bg-black border text-white border-black p-1 hover:bg-white hover:text-black hover:border-[#1A5F7A] cursor-pointer' /></a>
          <a href='https://github.com/anielrussel' target='_blank'><FaGithub size={30} className='bg-black border text-white border-black p-1 hover:bg-white hover:text-black hover:border-[#1A5F7A] cursor-pointer' /></a>
          <a href='https://www.frontendmentor.io/profile/anielrussel' target='_blank'><SiFrontendmentor size={30} className='bg-black border text-white border-black p-1 hover:bg-white hover:text-black hover:border-[#1A5F7A] cursor-pointer' /></a>
        </div>
        <div>
            <h1 className='text-md'>&copy; 2023 Created by: Russel Aniel</h1>
        </div>
    </footer>
  )
}

export default Footer