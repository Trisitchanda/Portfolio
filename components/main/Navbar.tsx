
"use client";

import { Socials } from "@/constants"
import React from "react";
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // const Socials = [
  //   { src: "/github.svg", name: "Github" },
  //   { src: "/discord.svg", name: "Discord" },
  //   { src: "/instagram.svg", name: "Instagram" },
  //   { src: "/facebook.svg", name: "Facebook" },
  //   { src: "/linkedin.svg", name: "LinkedIn" },
  // ];

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2 md:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/mylogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer duration-1000 bg-transparent invert"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Trisit
          </span>
        </a>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-white transition-colors">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-white transition-colors">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} target="_blank" key={social.name} className="hover:opacity-80 transition-opacity">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#030014e6] backdrop-blur-md w-full py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-6">
            <a 
              href="#about-me" 
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-[#7042f861]"
              onClick={toggleMobileMenu}
            >
              About me
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-[#7042f861]"
              onClick={toggleMobileMenu}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-[#7042f861]"
              onClick={toggleMobileMenu}
            >
              Projects
            </a>
            
            <div className="flex flex-row justify-center gap-6 pt-4">
              {Socials.map((social) => (
                <a href="#" key={social.name} className="hover:opacity-80 transition-opacity">
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;