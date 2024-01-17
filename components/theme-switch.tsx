"use client";

import { MdOutlineLightMode} from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";
import { useTheme } from '@/context/theme-context';

export default function ThemeSwitch() {
const { theme, toggleTheme } = useTheme();

  return (
    <button 
    className="fixed bottom-5 right-5 bg-white h-[3rem] w-[3rem]
    bg-opacity-80 backdrop-blir-[0.5rem] border border-white border-opacity-40
    shadow-2xl rounded-full flex items-center justify-center 
    hover:scale-[1.15]
    active:scale-[1.05] transition-all dark:bg-gray-950"
    onClick={toggleTheme}
    
    >
        {theme === 'light' ? <MdOutlineLightMode />  : <FaRegMoon />}
       
    </button>
  );
}
