"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[150px]" />

      <div className="container-width relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* LEFT SIDE */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
            >
              Full Stack Developer • React.js • Next.js • UI/UX Designer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl"
            >
              Building Modern
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-lg font-medium text-slate-300"
            >
              Ulysses Jimboy A. Po Jr
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              I help businesses transform ideas into scalable web
              applications, corporate systems, and modern digital products
              through clean code, intuitive user experiences, and
              high-performance development.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
              >
                Explore My Work
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
              >
                Hire Me
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-8 py-4 font-semibold text-cyan-300 transition-all hover:bg-cyan-400/20"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white">10+</h3>
                <p className="text-sm text-slate-400">
                  Projects Completed
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white">3+</h3>
                <p className="text-sm text-slate-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="text-sm text-slate-400">
                  Responsive Design
                </p>
              </div>
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-5"
            >
              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <Github size={20} />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:your@email.com"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
              <div>
                <h3 className="font-semibold text-white">
                  Professional Overview
                </h3>
                <p className="text-sm text-slate-400">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400">
                  Expertise
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Web Application Development
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Technologies
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  React.js, Next.js, Node.js, Tailwind CSS
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Specialization
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  HRIS, CRM, Real Estate & Business Systems
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Availability
                </p>
                <p className="mt-1 text-lg font-semibold text-emerald-400">
                  Available for Freelance Projects
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
              <p className="text-sm text-cyan-300">
                Helping businesses build modern, scalable, and user-focused
                digital solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}