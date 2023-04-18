//images for skills
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";

//images for tools
import typescript from "../assets/typescript.png";
import tailwind from "../assets/tailwind.png";
import npm from "../assets/npm.png";
import express from "../assets/express.png";
import mysql from "../assets/mysql.png";
import figma from "../assets/figma.png";
import prisma from "../assets/prisma.png";
import framer from "../assets/framer.png";
import vscode from "../assets/vscode.png";
import vite from "../assets/vite.svg";
import nextjs from "../assets/nextjs.svg";

const Skills = () => {
  return (
    <div className="px-5 py-12 lg:py-20 lg:px-20 flex flex-col gap-4 bg-[#DAF5FF] ">
      <h1 className="pl-4 mb-5 border-8 border-l-black border-t-0 border-b-0 border-r-0 font-Grotesk text-4xl font-bold">
        Skills
      </h1>
      <div className="mt-16 lg:mt-12 lg:flex lg:justify-between lg:gap-8 lg:flex-wrap">
        <div className="bg-white border-4 shadow-lg border-l-black border-t-0 border-b-0 border-r-0 pb-6 lg:w-[450px]">
          <div className="flex pt-4 md:pt-8 -m-4 gap-4 items-center">
            <img
              src={html}
              alt="html"
              className="w-20 p-4 bg-black border-4 shadow-lg border-black hover:bg-white hover:rounded-full ease-in-out duration-500"
            />
            <h1 className="font-Grotesk text-3xl font-bold text-[#0B2447]">
              HTML
            </h1>
          </div>
          <p className="px-6 pt-8">
            I've been using HTML since the day when I started coding back in 2018 when I was in Senior High School.
          </p>
        </div>

        <div className="bg-white border-4 shadow-lg mt-8 lg:mt-0 border-l-black border-t-0 border-b-0 border-r-0 pb-6 lg:w-[450px]">
          <div className="flex pt-4 md:pt-8 -m-4 gap-4 items-center">
            <img
              src={css}
              alt="html"
              className="w-20 p-4 bg-black border-4 shadow-lg border-black hover:bg-white hover:rounded-full ease-in-out duration-500"
            />
            <h1 className="font-Grotesk text-3xl font-bold text-[#0B2447]">
              CSS
            </h1>
          </div>
          <p className="px-6 pt-8">
            I've been using CSS for styling alongside with HTML since the day when I started coding back in 2018 when I was in Senior High School.
          </p>
        </div>

        <div className="bg-white border-4 shadow-lg mt-8 lg:mt-0 border-l-black border-t-0 border-b-0 border-r-0 pb-6 lg:w-[450px]">
          <div className="flex pt-4 md:pt-8 -m-4 gap-4 items-center">
            <img
              src={javascript}
              alt="html"
              className="w-20 p-4 bg-black border-4 shadow-lg border-black hover:bg-white hover:rounded-full ease-in-out duration-500"
            />
            <h1 className="font-Grotesk text-3xl font-bold text-[#0B2447]">
              JAVASCRIPT
            </h1>
          </div>
          <p className="px-6 pt-8">
            I have a bsaic understanding and knowledge about Javascript as well as ES6+ and Javascript OOP.
          </p>
        </div>

        <div className="bg-white border-4 shadow-lg mt-8 lg:mt-0 border-l-black border-t-0 border-b-0 border-r-0 pb-6 lg:w-[450px]">
          <div className="flex pt-4 md:pt-8 -m-4 gap-4 items-center">
            <img
              src={react}
              alt="html"
              className="w-20 p-4 bg-black border-4 shadow-lg border-black hover:bg-white hover:rounded-full ease-in-out duration-500"
            />
            <h1 className="font-Grotesk text-3xl font-bold text-[#0B2447]">
              REACTJS
            </h1>
          </div>
          <p className="px-6 pt-8">
            I have built projects using React alongside with different tech stack and libraries, so I can say that I have enough knowledge using React framework.
          </p>
        </div>

        <div className="bg-white border-4 shadow-lg mt-8 lg:mt-0 border-l-black border-t-0 border-b-0 border-r-0 pb-6 lg:w-[450px]">
          <div className="flex pt-4 md:pt-8 -m-4 gap-4 items-center">
            <img
              src={node}
              alt="html"
              className="w-20 p-4 bg-black border-4 shadow-lg border-black hover:bg-white hover:rounded-full ease-in-out duration-500"
            />
            <h1 className="font-Grotesk text-3xl font-bold text-[#0B2447]">
              NODEJS
            </h1>
          </div>
          <p className="px-6 pt-8">
            I have basic knowledge and understanding about NodeJs and how to make a server side using this platform using express framework.
          </p>
        </div>

        <div className="bg-white border-4 shadow-lg mt-8 lg:mt-0 border-l-black border-t-0 border-b-0 border-r-0 pb-6 lg:w-[450px]">
          <div className="flex pt-4 md:pt-8 -m-4 gap-4 items-center">
            <img
              src={mongodb}
              alt="html"
              className="w-20 p-4 bg-black border-4 shadow-lg border-black hover:bg-white hover:rounded-full ease-in-out duration-500"
            />
            <h1 className="font-Grotesk text-3xl font-bold text-[#0B2447]">
              MONGODB
            </h1>
          </div>
          <p className="px-6 pt-8">
            MongoDB is a no sql database and this is my prefered database in creating a backend or full stack websites alongside with Node and Express for backend and React/Next for frontend.
          </p>
        </div>
      </div>

      {/* tools and other knowledge */}
      <div className="pt-6">
        <h1 className="font-Grotesk text-center text-2xl">Tools and other kowledge</h1>
        <div className="pt-8 flex flex-wrap gap-5 items-center justify-center w-full">
          <img src={typescript} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200" title="typescript"/>
          <img src={vite} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200 w-[58px]" title="vite"/>
          <img src={nextjs} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200 w-[58px]" title="nextjs"/>
          <img src={tailwind} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200" title="tailwind"/>
          <img src={npm} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200" title="npm"/>
          <img src={express} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200" title="express"/>
          <img src={mysql} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200" title="mysql"/>
          <img src={figma} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200" title="figma"/>
          <img src={prisma} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200" title="prisma"/>
          <img src={framer} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200" title="framer"/>
          <img src={vscode} alt="" className="p-1 shadow-lg bg-white border border-gray-400 rounded-md hover:-translate-y-2 ease-out duration-200" title="vscode"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
