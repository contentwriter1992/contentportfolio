import React from 'react'
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-2 mx-auto px-4 text-center text-gray-500 ">
        <small className="mb-2 block text-xs">
            &copy; 2024 James. All rights reserved.
        </small>
        <p>
            <span className="flex flex-auto justify-center font-semibold">Made with &nbsp; <FaHeart /> &nbsp; using</span> React & Next.js (App Router & Server Actions),
            Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.</p>
    </footer>
  )
}
