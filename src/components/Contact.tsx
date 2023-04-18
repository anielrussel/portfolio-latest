import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im"
import location from "../assets/location.jpg"

const Contact = () => {
    return (
        <div className="bg-[#DAF5FF] px-5 py-12 lg:px-20 lg:py-28">
            <h1 className="pl-4 mb-5 border-8 border-l-black border-t-0 border-b-0 border-r-0 font-Grotesk text-4xl font-bold">
                Contact
            </h1>
            <div className="flex justify-between items-center mt-16">
                <div className="bg-white py-4 px-6 lg:p-10 font-Oswald shadow-lg lg:w-[50%] w-full">
                    <h1 className="text-2xl font-semibold pb-2">Get in Touch</h1>
                    <div className="mt-10">
                        <p className="flex items-center font-bold pb-2 gap-2"><AiFillPhone size={40} className="bg-black text-white p-2" />0945 683 0673</p>
                        <p className="flex items-center font-bold pb-2 gap-2"><MdEmail size={40} className="bg-black text-white p-2" />anielrussel13@gmail.com</p>
                        <p className="flex items-center font-bold gap-2"><ImLocation2 size={40} className="bg-black text-white p-2" />Quezon City, Philippines</p>
                    </div>
                    <a href="/public/Aniel CV.pdf" download>
                        <button className="border border-black py-2 px-8 font-Oswald text-black text-md mt-10 hover:bg-black hover:text-white">
                            Download CV
                        </button>
                    </a>
                </div>
                <div className="hidden lg:flex justify-end w-[50%]">
                    <img src={location} alt="location" className="w-[650px]" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
