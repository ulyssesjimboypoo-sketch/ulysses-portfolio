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
    live: "https://ulysses-portfolio.vercel.app",
    github: "https://github.com/ulyssesjimboypoo-sketch/ulysses-portfolio"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container-width py-16">
      <Reveal>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-copy">
          Sample projects showcasing my approach to clean UI, strong visual hierarchy, and smooth user experience.
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
            <div className="relative h-44 w-full overflow-hidden rounded-[1.25rem]">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />
</div>
            <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

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
          </motion.article>
        ))}
      </div>
    </section>
  );
}
