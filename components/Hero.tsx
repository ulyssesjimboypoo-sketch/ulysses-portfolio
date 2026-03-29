"use client";

import { motion } from "framer-motion";
import { ArrowRight, Dribbble, Figma, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="container-width relative py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-sm text-fuchsia-200"
          >
            Frontend Developer • UI/UX Designer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl"
          >
            Ulysses Jimboy A. Po Jr
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
          >
            I design and build modern digital experiences with a strong focus on clean user interfaces,
            smooth interactions, and responsive frontend development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-4 text-slate-300"
          >
            <a href="#" className="transition hover:text-cyan-300"><Github size={20} /></a>
            <a href="#" className="transition hover:text-cyan-300"><Linkedin size={20} /></a>
            <a href="#" className="transition hover:text-cyan-300"><Figma size={20} /></a>
            <a href="#" className="transition hover:text-cyan-300"><Dribbble size={20} /></a>
            <a href="mailto:your@email.com" className="transition hover:text-cyan-300"><Mail size={20} /></a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass rounded-[2rem] p-6 shadow-soft"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Profile Snapshot</p>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-400">Specialization</p>
                <p className="mt-1 text-lg font-semibold text-white">Frontend & UI/UX</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Style</p>
                <p className="mt-1 text-lg font-semibold text-white">Modern, aesthetic, user-focused</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Tech</p>
                <p className="mt-1 text-lg font-semibold text-white">Next.js, React, Tailwind, Figma</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
