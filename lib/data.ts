import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import dalmasjen from "@/public/dalmasjen.jpg";
import imker from "@/public/imker.jpg";
import blijeBoeddha from "@/public/blijeBhoeddha.jpg";
import pubQuiz from "@/public/pubQuiz_Page_1.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Artikelen",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Fotografie",
    hash: "#photo",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "HTRO",
    location: "Inholland Rotterdam",
    description: "Mijn studie Hoger toeristisch en recreatief onderwijs heeft me alle nodige bagage geveven om als jonge professional mijn weg te vinden in een wereld waarin belevenissen belangrijker zijn dan materie",
    icon: React.createElement(FaGraduationCap),
    date: "2010-2014",
  },
  {
    title: "Online marketeer",
    location: "Snowtime",
    description:
      "In een ver verleden toen ik nog geen rimpels en grijze haartjes had volgde ik mijn online marketing afstudeerstage bij Snowtime in Amsterdam. Als fanatiek wintersporter greep ik deze kans maar al te graag aan. Ik mocht namelijk mee naar Val Thorens om te helpen bij het opzetten van hun jaarlijkse evenement: Dutch Week. In deze periode leerde ik de figuurlijke klappen van de zweep in het digitale marketinglandschap.",
    icon: React.createElement(FaUniversity),
    date: "2014",
  },
  {
    title: "Online marketeer",
    location: "Rotterdam, The Netherlands",
    description:
      "Ik heb gewerkt als growth hacker bij Vakanties.nl, en daarna ben ik naar Amazon RBS (Retail Business Services) gegaan, waar ik twee jaar lang werkzaam was. Daar richtte ik me voornamelijk op de cross-channel communicatie tussen leveranciers en diverse marketplaces, voordat ik weer overstapte naar online marketing. Bij Holland Watch Group werkte ik in 2021 en 2022 als content marketeer. Daar was ik verantwoordelijk voor alle content op alle kanalen, zowel geschreven als visueel.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Redacteur",
    location: "Rotterdam, The Netherlands",
    description:
      "Ik schrijf artikelen voor de wijkkrant Bergpolder, Blijdorp en Liskwartier. Mijn sterktes liggen onder meer bij het interviewen van één of meerdere personen, maar ook het vastleggen van personen en situaties om zo de juiste sfeer over te dragen. Ik gebruik hiervoor fotografie als medium.",
    icon: React.createElement(FaBookOpen),
    date: "2023 - heden",
  },
  {
    title: "Front Office",
    location: "Westcord Hotel New York, Rotterdam",
    description:
      "Ik werk sinds januari 2023 bij Hotel New York in de receptie. Hier heb ik mijn communicatieskills aangescherpt en help ik zowel hotel als restaurantgasten bij het creëren van een zorgeloos verblijf.",
    icon: React.createElement(FaHotel ),
    date: "2023 - heden",
  },
] as const;

export const projectsData = [
  {
    title: "Dalmasjen",
    description:
      "Artikel geschreven over een opkomende tattoostudio in Rotterdam Noord. Klik op de afbeeldingen om de artikelen te downloaden.",
    tags: ["cultuur", "wijkkrant", "redactie", "tattoostudio", "ontwerp"],
    imageUrl: dalmasjen,
    imageLink: "https://drive.google.com/file/d/1000Kc9GQanF6QpQT14GTdp0EdOjHDi1B/view?usp=sharing",
  },
  {
    title: "Imker Piet",
    description:
      "In mei 2023 bezocht ik Piet en zijn bijen in Bergpolder. Het interview leidde tot een boeiend artikel met bijpassende foto's.",
    tags: ["natuur", "wijkkrant", "portret", "content", "redactie"],
    imageUrl: imker,
    imageLink: "https://drive.google.com/file/d/1XUQ8ipCi24pBnsyxGjZpqjfWaI-XKs9-/view?usp=sharing",
  },
  {
    title: "Yogastudio de Blije Boeddha",
    description:
      "Esther runt een fijne yogastudio waar iedereen terecht kan",
    tags: ["ondernemers", "wijkkrant", "redactie", "portret", "content"],
    imageUrl: blijeBoeddha,
    imageLink: "https://drive.google.com/file/d/1dE8VwTf-WxTHCR0qk8rKB4hl-lA1cJ6F/view?usp=sharing",
  },
  {
    title: "Pubquizzen in Rotterdam Noord",
    description:
      "Bij café de Komedie en café Bergpolder kun je terecht voor uitdagende pubquizzen",
    tags: ["horeca", "wijkkrant", "redactie", "pubquiz", "trivia"],
    imageUrl: pubQuiz,
    imageLink: "https://drive.google.com/file/d/1bEVM2qH_MaMLFV70rd7Yb586LG5-wRwE/view?usp=sharing",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "SEO",
  "Ads",
  "Hootsuite",
  "Google Analytics",
  "Google Tag Manager",
  "ChatGPT",
  "Stable Diffusion",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
