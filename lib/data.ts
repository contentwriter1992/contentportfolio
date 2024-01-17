import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import dadJokes from "@/public/landingPage.gif";
import randomChoice from "@/public/randomChoice.png";
import roboFriends from "@/public/roboFriends.png";

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
    hash: "photo",
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
      "I worked as a growth hacker at Vakanties.nl and after that I went to Amazon RBS (Retail business services) where I was employed for two years and focused mostly on cross channel communication between vendors and several marketplaces, before I made a switch to online marketing again. At Holland Watch Group I worked as a content marketeer in 2021 and 2022",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Rotterdam, The Netherlands",
    description:
      "I'm now a full-stack developer self study student. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dalmasjen",
    description:
      "Artikel geschreven over een opkomende tattoostudio in Rotterdam Noord",
    tags: ["cultuur", "wijkkrant", "redacteur", "tattoostudio", "ontwerp"],
    imageUrl: dadJokes,
  },
  {
    title: "Random Choice",
    description:
      "A small, but neat javascript app that lets the user input options. When enter is pressed a random option is selected",
    tags: ["Javascript", "HTML", "CSS", "Vanilla JS", "DOM manipulation"],
    imageUrl: randomChoice,
  },
  {
    title: "Robot friends",
    description:
      "My first React project. A simple database with search functionality",
    tags: ["React", "Javascript", "HTML", "CSS", "Typescript"],
    imageUrl: roboFriends,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;