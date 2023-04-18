import React, { useState } from 'react'
import profile from '../assets/IMG_20230122_134051-removebg-preview1.png'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiFrontendmentor } from 'react-icons/si'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link as ScrollLink } from "react-scroll"

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar
}) => {

  return (
    <nav className={`bg-[#DAF5FF] fixed w-[260px] flex flex-col items-center justify-between h-screen  p-4 z-50 ease-in-out duration-500 ${isOpen ? "" : 'ml-[-53.8%] lg:ml-[-16.5%] z-50'}`}>
      {isOpen ? <AiOutlineArrowLeft size={40} className='absolute ml-[228px] mt-8 border border-[#1A5F7A] p-1 bg-[#1A5F7A] text-white cursor-pointer' onClick={toggleSidebar} /> : <AiOutlineArrowRight size={40} className='absolute ml-[290px] lg:ml-[290px] mt-8 border bg-[#1A5F7A] text-white p-1 cursor-pointer' onClick={toggleSidebar} />}
      <div className='flex flex-col items-center'>
        <img src={profile} alt='' className='w-[150px] rounded-full p-1 border border-gray-600' />
        <h1 className='pt-2 font-Grotesk font-bold text-lg text-[#0B2447]'>Web Developer</h1>
        <p className='text-[#0B2447] font-Grotesk font-medium'>Russel M. Aniel</p>
      </div>

      <div>
        <ul className='flex flex-col items-center gap-3 font-Oswald text-[#0B2447] font-semibold'>
          <ScrollLink activeClass="text-blue-600 font-extrabold" spy={true} to="Home" smooth={true}><li className='cursor-pointer'>Home</li></ScrollLink>
          <ScrollLink activeClass="text-blue-600 font-extrabold" spy={true} to="About" smooth={true}><li className='cursor-pointer'>About</li></ScrollLink>
          <ScrollLink activeClass="text-blue-600 font-extrabold" spy={true} to="Skills" smooth={true}><li className='cursor-pointer'>Skills</li></ScrollLink>
          <ScrollLink activeClass="text-blue-600 font-extrabold" spy={true} to="Projects" smooth={true}><li className='cursor-pointer'>Projects</li></ScrollLink>
          <ScrollLink activeClass="text-blue-600 font-extrabold" spy={true} to="Contact" smooth={true}><li className='cursor-pointer'>Contact</li></ScrollLink>
        </ul>
      </div>

      <div className='flex flex-col items-center font-Grotesk text-[#0B2447]'>
        <h1 className='text-md'>Follow me</h1>
        <div className='flex gap-4 p-3'>
          <a href='https://web.facebook.com/profile.php?id=100009386101588' target='_blank'><FaFacebook size={30} className='border border-black p-1 hover:bg-[#1A5F7A] hover:text-white hover:border-[#1A5F7A] cursor-pointer' /></a>
          <a href='https://www.linkedin.com/in/russel-aniel-48353820b/' target='_blank'><FaLinkedinIn size={30} className='border border-black p-1 hover:bg-[#1A5F7A] hover:text-white hover:border-[#1A5F7A] cursor-pointer' /></a>
          <a href='https://github.com/anielrussel' target='_blank'><FaGithub size={30} className='border border-black p-1 hover:bg-[#1A5F7A] hover:text-white hover:border-[#1A5F7A] cursor-pointer' /></a>
          <a href='https://www.frontendmentor.io/profile/anielrussel' target='_blank'><SiFrontendmentor size={30} className='border border-black p-1 hover:bg-[#1A5F7A] hover:text-white hover:border-[#1A5F7A] cursor-pointer' /></a>
        </div>
        <h1 className='text-sm'>&copy; 2023 Created by: Russel Aniel</h1>
      </div>
    </nav>
  )
}

export default Sidebar