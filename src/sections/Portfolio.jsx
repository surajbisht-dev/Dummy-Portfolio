import React from "react";
import { FiExternalLink } from "react-icons/fi";
import projectImg from "../assets/project.png"; // replace with actual project screenshot

const projects = new Array(6).fill({
  image: projectImg,
  title: "Website Coding",
  tech: "(HTML, CSS, JS)",
});

const Portfolio = () => {
  return (
    <section id="portfolio" className="px-6 md:px-12 py-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-12">
        PORTFOLIO
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1f2b] p-4 rounded-lg shadow-lg relative group"
          >
            <img
              src={project.image}
              alt="project"
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4 text-white font-semibold text-center">
              {project.title}
            </div>
            <div className="text-lightText text-sm text-center">
              {project.tech}
            </div>
            <FiExternalLink className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
