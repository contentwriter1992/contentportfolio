"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div className="flex col bg-gray-400 my-10 -mt-8  h-17 w-1 
    rounded-full py-8 hidden sm:block sm:mt-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.12 }}

></motion.div>
  );
}
