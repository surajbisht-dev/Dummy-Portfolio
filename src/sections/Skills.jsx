import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNpm,
  FaFigma,
  FaWordpress,
  FaSass,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  SiTailwindcss,
  SiVite,
  FaNpm,
  FaFigma,
  FaWordpress,
  FaSass,
  FaGitAlt,
  FaGithub,
];

const Skills = () => {
  return (
    <section id="technologies" className="px-6 md:px-12 py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6">
        SKILLS
      </h2>
      <p className="text-lightText mb-8">
        The skills, tools and technologies I use:
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-4xl text-white">
        {skills.map((Icon, index) => (
          <Icon key={index} className="hover:text-accent transition" />
        ))}
      </div>
    </section>
  );
};

export default Skills;
