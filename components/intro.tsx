"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload} from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } 
  = useActiveSectionContext();
  
  return (
    <section 
    ref={ref} 
    id="home" 
    className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image 
              src="https://images.unsplash.com/profile-1697733267783-fde4f06bcd22image?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="James profile photo"
              width="120"
              height="120"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />

          </motion.div>

          <motion.span 
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👨🏽‍💻
          </motion.span>
        </div>
      </div>

      
        <motion.h1 
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hallo, ik ben James.</span> een{" "}
          <span className="font-bold">online marketeer</span> met meerdere jaren ervaring{" "}
          <span className="font-bold">in verschillende vakgebieden,</span> waaronder educatie, retail, horeca en de reisbranche. <span className="italic">Ervaring opgedaan bij </span>diverse bedrijven,{" "}
          <span className="underline"> zoals Amazon, Sunweb en Hotel New York</span>.
        </motion.h1>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4
        text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{
        delay: 0.1,
        transition: 0.5,
          }}
        >

          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
            outline-none focus:scale-105 hover:bg-gray-950 active:scale-105  
             hover:scale-105 transition scroll-mt-20">
            Contacteer mij hier<BsArrowRight 
            className="opacity-70 group:hover:translate-x-1 transition" 
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            />
            
          </Link>

          
            <a 
      
            className="group bg-white text-black px-7 py-3 flex items-center 
            gap-2 rounded-full outline-none focus:scale-105
            hover:scale-105 hover:bg-white active:scale-105 hover:text-gray-950
             opacity-60 group-hover:translate-y-1 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV2024.pdf"
              download 
              >
              Download CV <HiDownload />
            </a>

            <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 
             "
             href="https://linkedin.com" target="_blank">
            <BsLinkedin />
            </a>

            <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70"
              href="https://github.com/Jimboriffic" target="_blank">
            <FaGithubSquare />
            </a>
          
       
      </motion.div>
    </section>
  );
}