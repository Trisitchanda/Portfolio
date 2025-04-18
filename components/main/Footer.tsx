import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="about-me" className="relative z-50 w-full bg-transparent text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 text-center">
        
        {/* About Me Section */}
        <h2 className="text-2xl font-extrabold text-white">About Me</h2>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://www.youtube.com/watch?v=z93hMloV6HY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors"
          >
            <FaYoutube />
            Youtube
          </a>

          <a
            href="https://github.com/Trisitchanda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-gray-100 transition-colors"
          >
            <RxGithubLogo />
            GitHub
          </a>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-indigo-400 transition-colors"
          >
            <RxDiscordLogo />
            Discord
          </a>

          <a
            href="https://www.linkedin.com/in/trisit-chanda-2a2548260/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
          >
            <RxLinkedinLogo />
            LinkedIn
          </a>
        </div>

        <a href="mailto:trisitchanda@gmail.com" className="text-sm text-gray-400 mt-2 hover:text-gray-100 transition-colors">
          trisitchanda@gmail.com
        </a>

        {/* Footer Message */}
        <div className="text-center text-sm text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} Trisit Chanda <br />
          Made with 💖 and Next.js
        </div>
      </div>
    </footer>
  );
};

export default Footer;
