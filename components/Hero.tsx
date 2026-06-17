"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const services = [
    "HRIS Development",
    "CRM Development",
    "Real Estate Systems",
    "Corporate Websites",
    "Mobile Applications",
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[150px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container-width relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT SIDE */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
            >
              Full Stack Developer • React.js • Next.js • Business Systems
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl"
            >
              Building Scalable
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <h2 className="text-2xl font-bold text-white">
                Ulysses Jimboy A. Po Jr
              </h2>

              <p className="mt-2 text-cyan-300">
                Full Stack Developer • Business Systems Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-400"
            >
              I help businesses build modern web applications,
              HRIS platforms, CRM systems, attendance monitoring
              solutions, real estate management systems, and custom
              business applications that streamline operations,
              improve productivity, and support business growth.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} />
                Available for Freelance Projects
              </span>

              <span className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                <CheckCircle2 size={16} />
                Remote Friendly
              </span>

              <span className="flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
                <CheckCircle2 size={16} />
                Philippines Based
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Hire Me
              </a>

              <a
                href="/Ulysses-Jimboy-Po-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              <a
                href="https://github.com/ulyssesjimboypoo-sketch"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:poulyssesjimboy@gmail.com"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-400">
              ● Available for New Projects
            </span>

            <h3 className="mt-6 text-3xl font-black text-white">
              Services &
              <span className="block bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h3>

            <div className="mt-8 space-y-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />
                  <span className="text-white">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
              <p className="text-sm text-cyan-300">
                Based in Cavite, Philippines
              </p>

              <p className="mt-1 font-semibold text-white">
                Helping businesses build modern digital solutions.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-6 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Start a Project
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}