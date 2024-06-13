"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from '@/lib/hooks';
import { Slider } from './slider';
import slides from '@/lib/slides.json';
import viewPort from '@../app/page/viewPort'; 

export default function Photo() {
  const { ref } = useSectionInView("Fotografie", 1);

  return (
    <motion.section
      // className="sm:m-[8rem] mb-16 max-w-[45rem] text-center leading-6 sm:mb-40 scroll-mt-28"
      className="max-w-screen-md mx-auto px-4 py-8 sm:py-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="photo"
    >


<div className="text-center mb-8">
        <SectionHeading>Een greep uit mijn foto's 📷</SectionHeading>
      </div>
      
  
   <Slider 
   slides={slides}/>

    </motion.section>
  );
}
