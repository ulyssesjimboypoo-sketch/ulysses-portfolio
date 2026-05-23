"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
  "UI Design",
  "Responsive Design",
  "Wireframing",
  "Prototyping",
  "Git",
  "User Experience",
  "Visily"
];

export default function Skills() {
  return (
    <section id="skills" className="container-width py-16">
      <Reveal>
        <h2 className="section-title">Skills & Tech Stack</h2>
        <p className="section-copy">
          Tools and technologies I use to create smooth, responsive, and aesthetic web experiences.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass rounded-2xl p-5 text-center text-sm font-medium text-slate-100 shadow-soft"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
