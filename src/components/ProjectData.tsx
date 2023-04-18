import React from "react";
import { Project } from "../types/type";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"
import { motion } from "framer-motion"

type ProjectProps = {
    project: Project;
};
const ProjectData: React.FC<ProjectProps> = (props) => {
    const { project } = props;
    const tools = project.tools.split(", "); // Split the tools string by comma

    return (
        <motion.div className="mb-12 md:mb-0 bg-[#DAF5FF] shadow-lg rounded-md md:flex md:flex-col md:max-w-[450px] overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ type: 'tween', duration: 1, delay: .3 }}
        >
            <img src={project.image} alt="" className="hover:scale-[110%] ease-in duration-300" />
            <div className="p-5">
                <div className="flex justify-between items-end pb-4">
                    <h1 className="font-Grotesk font-bold text-2xl pt-3">{project.name}</h1>
                    <div className="flex gap-4 items-center justify-center">
                        <a href={project.github.toString()} target="_blank"><FaGithub size={25} /></a>
                        <a href={project.demo.toString()} target="_blank"><FiExternalLink size={25} /></a>
                    </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap pt-4">
                    <h1 className="font-Oswald font-semibold">Built with:</h1>
                    {tools.map((tool, index) => (
                        <p key={index} className="font-Grotesk font-semibold bg-white shadow-lg py-1 px-3 rounded-lg">
                            {tool}
                        </p>
                    ))}
                </div>
                <p className="pt-8 font-Oswald font-medium">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectData;
