import Reveal from "./Reveal";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="container-width py-24">
      <Reveal>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Contact
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
              Let's Build
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Looking for a website, HRIS, CRM, Attendance Monitoring
              System, Real Estate Platform, or custom business
              application? Let's discuss your project and transform
              your ideas into a modern digital solution.
            </p>

            {/* Contact Information */}
            <div className="mt-10 space-y-6">
              <a
                href="mailto:poulyssesjimboy@gmail.com"
                className="group flex items-center gap-4 text-slate-300 transition"
              >
                <div className="rounded-full border border-white/10 bg-white/5 p-3 transition group-hover:border-cyan-400/30">
                  <Mail size={18} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="group-hover:text-cyan-300">
                    poulyssesjimboy@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+639265356021"
                className="group flex items-center gap-4 text-slate-300 transition"
              >
                <div className="rounded-full border border-white/10 bg-white/5 p-3 transition group-hover:border-cyan-400/30">
                  <Phone size={18} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="group-hover:text-cyan-300">
                    +63 926 535 6021
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="rounded-full border border-white/10 bg-white/5 p-3">
                  <MapPin size={18} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p>Cavite, Philippines</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10 flex gap-4">
              <a
                href="https://github.com/ulyssesjimboypoo-sketch"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-4 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-4 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-10 backdrop-blur-xl">
            {/* Glow Effects */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-400">
                ● Available for New Projects
              </span>

              <h3 className="mt-6 text-3xl font-black text-white md:text-4xl">
                Let's Turn Your Idea Into
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  A Scalable Digital Solution
                </span>
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                I help businesses, startups, and entrepreneurs build
                modern websites, HRIS platforms, CRM systems,
                attendance monitoring solutions, real estate management
                systems, and custom business applications.
              </p>

              {/* Info Cards */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="text-slate-400">
                    Project Consultation
                  </span>

                  <span className="font-semibold text-emerald-400">
                    Free
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="text-slate-400">
                    Response Time
                  </span>

                  <span className="font-semibold text-white">
                    Within 24 Hours
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="text-slate-400">
                    Specialization
                  </span>

                  <span className="font-semibold text-white">
                    Web & Business Systems
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="mailto:poulyssesjimboy@gmail.com"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02]"
              >
                Schedule a Discussion
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}