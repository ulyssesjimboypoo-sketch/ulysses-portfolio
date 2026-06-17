"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";

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
      "The platform features a clean and responsive user interface built using React JS, Tailwind CSS, and Vite.",
    stack: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/jjproject.jpg",
    live: "https://jimproject.vercel.app/",
    github: "https://github.com/ulyssesjimboypoo-sketch/velvet-vows",
  },

  {
    title: "School Portal",
    description:
      "A modern and responsive school portal designed to showcase academic information, announcements, and school services.",
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
    title: "Nature Resort",
    description:
      "A responsive resort and tourism website focused on modern design and seamless user experience.",
    stack: ["JavaScript", "HTML"],
    image: "/projects/nature.jpg",
    live: "https://nature-resort-demo.vercel.app/",
    github: "https://github.com/ulyssesjimboypoo-sketch/Nature",
  },

  {
    title: "Cafe Mobile App",
    description:
      "Mobile ordering application with real-time order management and admin dashboard integration.",
    stack: ["React Native", "Expo", "Firebase"],
    image: "/projects/cafe.jpg",
    github: "https://github.com/ulyssesjimboypoo-sketch/Cafe-System",
  },

  {
    title: "Herstal Advance Security Agency",
    description:
      "Corporate website showcasing professional security services, company profile, and business information.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/herstalpic.jpg",
    live: "https://herstaldemo.vercel.app/",
  },

  {
    title: "Apec Homes",
    description:
      "Discover quality and affordable homes built for Filipino families. Experience modern living inside thriving communities.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/apecpic.jpg",
    live: "https://apechomesdemosite.vercel.app//",
  },

   {
    title: "Philtech AMS",
    description:
      "Globally Competitive Through Academic Excellence.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/AMSPIC.jpg",
    live: "https://philtechams.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="container-width relative py-24"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Portfolio Showcase
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            A collection of web applications, business systems,
            landing pages, and mobile applications showcasing
            modern UI/UX design and full-stack development.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
  key={project.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.5,
    delay: index * 0.08,
  }}
  whileHover={{
    y: -10,
  }}
  className="
    group
    flex
    flex-col
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-gradient-to-b
    from-slate-900/90
    to-slate-950/90
    backdrop-blur-xl
    transition-all
    duration-300
    hover:border-cyan-400/30
    hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
  "
>
            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 min-h-[90px] text-sm leading-7 text-slate-300">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}