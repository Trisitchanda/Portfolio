import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-lg border border-[#2A0E61] group">
      
      {/* Wrap image in a relative container with lower z-index */}
      <div className="relative z-0">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      </div>

      <div className="relative p-4 z-10">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>

      {/* GitHub Link Overlay */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        🔗 View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
