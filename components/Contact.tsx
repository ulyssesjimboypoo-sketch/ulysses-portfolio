import Reveal from "./Reveal";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="container-width py-16">
      <Reveal className="glass rounded-[2rem] p-8 md:p-10 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="section-title">Let&apos;s Work Together</h2>
            <p className="section-copy">
              Ready for freelance work, creative collaborations, or frontend opportunities. You can update the
              contact details below with your real email, phone number, and location.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-300" />
                <span>ulyssesjimboy.poo@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-300" />
                <span>+63 926 535 6021</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-300" />
                <span>Philippines</span>
              </div>
            </div>
          </div>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-2xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none transition focus:border-cyan-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-2xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none transition focus:border-cyan-300"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="rounded-2xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none transition focus:border-cyan-300"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
