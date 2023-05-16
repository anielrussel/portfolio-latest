import React from 'react';
import 'tailwindcss/tailwind.css'
import Typewriter from 'typewriter-effect';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-scroll';

interface Props {
  isOpen: boolean;
}

const HomePage: React.FC<Props> = ({ isOpen }) => {

  return (

    <div className={`flex-1 transition-all duration-500 ease-in-out overflow-x-hidden ${isOpen ? 'ml-[260px] md:ml-[16.5%]' : 'ml-0'}`}>
      <div id="Home">
        <div className='absolute w-full h-screen top-0 left-0 bg-black opacity-30 z-40'></div>
        <div className='h-screen bg-bg-main bg-cover bg-center z-30'>
          <div className='relative flex flex-col gap-4 items-center justify-center text-center h-screen z-[40]'>
            <h1 className='font-Oswald text-4xl text-white lg:text-5xl pb-8'>Hello!</h1>
            <h2 className='font-Grotesk text-5xl text-center font-extrabold lg:text-6xl text-white'>I'm Russel M. Aniel</h2>
            <p className='font=Oswald flex gap-2 text-xl text-black font-bold lg:text-2xl'>I can do<Typewriter
              options={{
                strings: ['Frontend', 'Backend', 'Fullstack'],
                autoStart: true,
                loop: true,
                deleteSpeed: 2,
                delay: 50
              }}
            /></p>
            <Link to="Contact" smooth={true}>
              <button className='border-2 border-black py-2 px-8 font-Oswald bg-black text-white text-md mt-4 hover:bg-transparent'>
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* About component */}
      <div id='About'>
        <About />
      </div>

      {/* Skills component */}
      <div id='Skills'>
        <Skills />
      </div>

      {/* Projects component */}
      <div id='Projects'>
        <Projects />
      </div>

      {/* Contact component */}
      <div id='Contact'>
        <Contact />
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default HomePage;
