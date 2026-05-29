"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Reveal from "./Reveal";
import Image from "next/image";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Developed a fully responsive personal portfolio showcasing frontend and UI/UX skills with modern design principles and smooth interactions.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/portfolio.png",
    live: "https://ulysses-portfolio-neon.vercel.app/",
    github: "https://github.com/ulyssesjimboypoo-sketch/ulysses-portfolio",
  },

  {
    title: "JJ Weddings",
    description:
      "The platform features a clean and responsive user interface built using React JS, Tailwind CSS, and Vite, providing smooth navigation, modern animations, and a premium visual aesthetic.",
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/projects/jjproject.jpg",
    live: "https://jimproject.vercel.app/",
    github: "https://github.com/ulyssesjimboypoo-sketch/velvet-vows",
  },

    {
    title: "School Portal",
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/projects/SIC.jpg",
    live: "https://sicwebsite-halndbm3v-ulyssesjimboypoo-sketchs-projects.vercel.app/",
    github: "https://github.com/ulyssesjimboypoo-sketch/SICWEBSITE",
  },

    {
    title: "Travels and Tours",
    description:
      "A modern and professional travel booking platform designed for travel and tours businesses.",
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/projects/travels.jpg",
    live: "https://travel-booking-demo-1mb8pv556-ulyssesjimboypoo-sketchs-projects.vercel.app/",
    github: "https://github.com/ulyssesjimboypoo-sketch/travel-booking-demo",
  },

    {
    title: "Nature",
    description:
      "A modern and professional travel booking platform designed for travel and tours businesses.",
    stack: ["JavaScript", "HTML", ],
    image: "/projects/nature.jpg",
    live: "https://nature-resort-demo.vercel.app/",
    github: "https://github.com/ulyssesjimboypoo-sketch/Nature",
  },

  {
    title: "Cafe Mobile App",
    description:
      " Once a customer places and pays for an order, it automatically reflects in the Admin Dashboard in real-time so the shop owner can instantly see and manage incoming orders.",
    stack: ["JavaScript"],
    image: "/projects/cafe.jpg",
    github: "https://github.com/ulyssesjimboypoo-sketch/Cafe-System",
  },


];



export default function Projects() {
  return (
    <section id="projects" className="container-width py-16">
      <Reveal>
        <h2 className="section-title">Featured Projects</h2>

        <p className="section-copy">
          Sample projects showcasing my approach to clean UI,
          strong visual hierarchy, and smooth user experience.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass rounded-[1.75rem] p-5 shadow-soft"
          >
            {/* CLICKABLE IMAGE */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-44 w-full overflow-hidden rounded-[1.25rem]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-300 hover:scale-105"
              />
            </a>

            {/* TITLE */}
            <h3 className="mt-5 text-xl font-semibold text-white">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.description}
            </p>

            {/* STACK */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black transition hover:scale-105"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}