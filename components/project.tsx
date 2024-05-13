// when interactivity from the user comes into play we add use client
"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // const handleDownload = () => {
  //   // Construct the full URL to the image based on its relative path within the public folder
  //   const fullUrl = process.env.PUBLIC_URL + imageUrl;
  //   // Create an anchor element
  //   const anchor = document.createElement('a');
  //   // Set the href attribute to the constructed full URL
  //   anchor.href = fullUrl;
    
  //   // Check if imageUrl is a string before splitting
  //   if (typeof imageUrl === 'string') {
  //     // Extract the filename from the URL (assuming the URL ends with the filename)
  //     const filename = imageUrl.split('/').pop();
  //     // Set the download attribute to specify the file name
  //     anchor.download = filename || 'download'; // Use 'download' as fallback filename
  //   } else {
  //     // If imageUrl is not a string, set a default download filename
  //     anchor.download = 'download';
  //   }
    
  //   // Programmatically trigger a click event to initiate the download
  //   anchor.click();
  // };

  // console.log(imageUrl)

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-2 sm:mb-8 last:mb-0"
    >
      <section
        className="group 
    bg-gray-100 
    max-w-[42rem] borderBlack rounded-lg
     overflow-hidden sm:pr-8 
     relative wm:h-[20rem] hover:bg-gray-200 border
      border-black/20 transition group-even:pl-7 dark:bg-black"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10
        sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] dark:bg-black/10"
        >
          <h3 className="text-2xl font-semibold dark:text-gray-100">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 pb-6 dark:text-gray-40 dark:text-white/90">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index} 
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="project I worked on"
          quality={90}
          style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickable
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem]
    rounded-t-lg shadow-2xl 
    transition
    group-hover:scale-[1.04]
    group-hover:-translate-x-3
    group-hover:-translate-y-3
    group-hover:rotate-2

    group-even:group-hover:translate-x-3
    group-even:group-hover:translate-y-3
    group-even:group-hover:rotate-2

    group-even:right-[initial]
    group-even:-left-40"
    />
      </section>
    </motion.div>
  );
}
