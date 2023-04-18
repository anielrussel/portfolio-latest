import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import ProjectData from "./ProjectData";
import projectsData from "../data/projectsData";

const Projects: React.FC = () => {
  return (
    <div className="px-5 py-12 lg:py-24 lg:px-20">
      <h1 className="pl-4 mb-5 border-8 border-l-black border-t-0 border-b-0 border-r-0 font-Grotesk text-4xl font-bold">
        Projects
      </h1>
      {/* projects overview */}
      <div className="mt-20">
        <div className="md:flex md:flex-wrap md:justify-between gap-6">
          {projectsData.map((project) => (
            <ProjectData key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 md:mt-10">
          <h1 className="pr-2 font-semibold">See More:</h1>
          <a href="https://github.com/anielrussel" target="_blank" className="py-2 px-8 border border-black cursor-pointer hover:bg-black hover:text-white ease-in-out duration-200">
            <FaGithub size={25} />
          </a>
          <a href="https://www.frontendmentor.io/profile/anielrussel" target="_blank" className="py-2 px-8 border border-black cursor-pointer hover:bg-black hover:text-white ease-in-out duration-200">
            <SiFrontendmentor size={25} />
          </a>
        </div>
    </div>
  );
};

export default Projects;
