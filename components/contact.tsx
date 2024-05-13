"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 mx-auto w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Stuur me een mail</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Je kunt me direct bereiken via {" "} 
        <a className="underline" href="mailto:jamesmls@pm.me">
          jamesmls@pm.me
        </a>{" "}
        of via dit formulier.
      </p>

      <form
        className="mt-10 mx-auto flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white 
          dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Je e-mail adres"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4
           dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 
           transition-all dark:outline-none"
          name="message"
          placeholder="Je bericht"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}