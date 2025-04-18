"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { useInView } from "react-intersection-observer";

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
            title="Modern Next.js Portfolio"
            description="A modern portfolio built with Next.js, TailwindCSS, and Framer Motion."
            githubLink="https://github.com/yourusername/nextjs-portfolio"
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ProjectCard
            src="/CardImage.png"
            title="Interactive Website Cards"
            description="Cards with smooth hover animations and responsive layout."
            githubLink="https://github.com/yourusername/interactive-cards"
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Space Themed Website"
            description="A beautiful space-themed landing page with animations."
            githubLink="https://github.com/yourusername/space-website"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Space Themed Website"
            description="A beautiful space-themed landing page with animations."
            githubLink="https://github.com/yourusername/space-website"
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Space Themed Website"
            description="A beautiful space-themed landing page with animations."
            githubLink="https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/tree/main/lectures"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;