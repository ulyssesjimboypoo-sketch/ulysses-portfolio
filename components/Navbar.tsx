"use client";

import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#070b17]/70 backdrop-blur-xl"
    >
      <nav className="container-width flex items-center justify-between py-4">
        <a href="#" className="text-sm font-semibold tracking-[0.2em] text-slate-200">
          UJ<span className="text-fuchsia-300">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </motion.header>
  );
}
