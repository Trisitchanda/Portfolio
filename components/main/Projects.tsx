"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "@/utils/motion";

const Projects = () => {
  // Animation variants for the project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Animation for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex flex-col items-center justify-center py-[0px]"
      id="projects"
    >
      <motion.h1
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        My Projects
      </motion.h1>

      <motion.div
        variants={containerVariants}
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10"
      >
        <motion.div variants={cardVariants}>
          <ProjectCard
            src="/NextWebsite.png"
            title="Pokedex website"
            description="A stylish wesite using html css and js."
            githubLink="https://github.com/Trisitchanda/Pokedex"
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ProjectCard
            src="/CardImage.png"
            title="Chatbot"
            description="chat anything with ai"
            githubLink="https://github.com/Trisitchanda/Chatbot"
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Simon says game"
            description="A simple game using html css and js"
            githubLink="https://github.com/Trisitchanda/Simons-says-game"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;