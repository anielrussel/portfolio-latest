import React from "react";
import aboutpic from "../assets/IMG_20230122_134051-removebg-preview1.png";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="px-5 py-20 lg:py-28 lg:px-20 flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-0 lg:items-end">
            <div className="flex flex-col gap-5 lg:w-[50%]">
                <h1 className="pl-4 mb-5 border-8 border-l-black border-t-0 border-b-0 border-r-0 font-Grotesk text-4xl font-bold">
                    About Me
                </h1>
                <h2 className="font-Oswald text-2xl text-[#0B2447] font-semibold">
                    I'am Russel M. Aniel
                </h2>
                <p className="font-Oswald text-md text-[#0B2447] font-md leading-8">
                    I began writing codes back when I was in Senior High School in the
                    year 2018, that was my first interaction and the start of my journey
                    in computer programming.The "Hello World" things comes when I
                    was taking my SHS work immersion(OJT), it was Notepad++ that I've been
                    using that time and that was my first experience in front-end
                    developing. It was God's plan for me to engaged in a software field
                    because it was the passion that I have been looking when I was
                    undecided what path to take in life.
                </p>
                <div className="flex gap-10 py-5">
                    <Link to="Contact" smooth={true}><button className="border border-black py-2 px-8 font-Oswald bg-black text-white text-md mt-4 hover:bg-transparent hover:text-black">
                        Hire Me
                    </button>
                    </Link>
                    <a href="/Aniel, Russel-CV.pdf" download>
                    <button className="border border-black py-2 px-8 font-Oswald text-black text-md mt-4 hover:bg-black hover:text-white">
                        Download CV
                    </button>
                    </a>
                </div>
                <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-end lg:mt-4">
                    <span className="flex flex-col items-center gap-2 justify-center bg-[#DAF5FF] border-2 border-[#DAF5FF] shadow-lg py-4 lg:py-6 lg:w-[500px] font-Oswald hover:bg-transparent hover:border-[#68bfdf] ease-in-out duration-500">
                        <AiFillPhone size={30} />
                        <p className="text-xl font-bold text-[#0B2447]">Phone</p>
                        <p className="text-black">0945 683 0673</p>
                    </span>
                    <span className="flex flex-col items-center gap-2 justify-center bg-[#DAF5FF] border-2 border-[#DAF5FF] shadow-lg py-4 lg:py-6 lg:w-[500px] font-Oswald hover:bg-transparent hover:border-[#68bfdf] ease-in-out duration-500">
                        <MdEmail size={30} />
                        <p className="text-xl font-bold text-[#0B2447]">Email</p>
                        <p className="text-black">anielrussel13@gmail.com</p>
                    </span>
                </div>
            </div>
            <div className="lg:w-[50%] lg:flex lg:justify-end">
                <motion.img src={aboutpic} alt="profile" className="w-[70%]" 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1}}
                    transition={{ type: 'tween', duration: 1, delay: .3 }}
                />
            </div>
        </div>
    );
};

export default About;
