"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
    className="sm:m-[8rem] mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-900 dark:text-rgb(31, 41, 55) shadow-lg dark:shadow-md p-8"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    ref={ref}
    id="about"
    >
      <SectionHeading>James in een 🥜 dop </SectionHeading>
      <p className="mb-3">
        Na het afmaken van mijn studie verliet ik mijn horeca bijbaan en ging ik voor het eerst echt abroad. Het werd Andalucië: Malaga en Sevilla. Na deze transformerende zomer ging ik werken bij touroperator Sundio Group{" "}
        <span className="font-medium">als Customer Service specialist</span>, ik kreeg dankzij het werk de reiskriebels te pakken en besloot te gaan backpacken door Zuid-Oost Azië. Tijdens deze reis maakte ik veel internationale vrienden.
        Zij gaven mij inspiratie om TEFL leraar te worden, zodat ik overal kon werken.{" "}
        <span className="font-medium">
          Zo gezegd zo gedaan. Ik won een TEFL cursus en ging aan de slag bij Oxford House in het zonnige Barcelona.
        </span><span className="italic"> Behalve talenkennis groeide ook mijn sociale skills.</span> Ik stond vrijwel dagelijks voor grote groepen om les te geven of om als gids de geschiedenis van de stad uit te leggen.</p>
        <p>
        <span className="underline"> In 2019, eenmaal terug in Nederland,</span> ging ik aan de slag als freelance copywriter en daarna als online marketeer bij Vakanties.nl. Ik deed ervaring op met{" "}
        <span className="font-medium">
          Google Analytics/Tag Manager/Optimize/Dialogflow, Ads en Hootsuite.
        </span>
         Ik heb ook ervaring met het schrijven van blogartikelen, het fotograferen van producten en SEO. Ik ben op zoek naar{" "}
        <span className="font-medium"> een positie als all-round of content</span> 
        marketeer. Ik groei graag mee met het dynamische marketinglandschap.
      </p>

      
        <p>
        <span className="italic">In mijn vrije tijd</span>, zijn mijn passies reizen, boardsporten en kijk ik graag series en films. Ik houd me ook graag bezig met{" "}
        <span className="font-medium">tech</span>. Zo heb ik deze portfolio site zelf -- met behulp van tutorials -- geprogrammeerd{" "}
        <span className="font-medium">en heb ik onlangs mijn eigen PC in elkaar gezet.</span> Daarnaast oefen ik dagelijks mijn Spaanse en Duitse vaardigheden.
        </p>
    
      
    </motion.section>
  );
}
