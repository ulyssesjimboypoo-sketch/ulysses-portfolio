import Reveal from "./Reveal";

export default function About() {


  return (
    <section id="about" className="container-width py-24">
      <Reveal>
        <div className="max-w-5xl">
          {/* Badge */}
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            About Me
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Full Stack Developer Building
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              Modern Business Solutions
            </span>
          </h2>

          {/* Description */}
          <div className="mt-8 max-w-4xl space-y-6">
            <p className="text-lg leading-8 text-slate-300">
              I am a Full Stack Developer passionate about building
              modern web applications, scalable business systems,
              and user-focused digital experiences. I specialize in
              transforming business requirements into powerful and
              efficient software solutions using modern technologies
              and industry best practices.
            </p>

            <p className="text-lg leading-8 text-slate-400">
              My experience includes developing HRIS platforms,
              CRM systems, Attendance Monitoring Systems,
              Real Estate Management Systems, Corporate Websites,
              and Mobile Applications that help businesses streamline
              operations, improve productivity, and enhance user
              experiences.
            </p>

            <p className="text-lg leading-8 text-slate-400">
              I primarily work with React.js, Next.js, Node.js,
              Firebase, PostgreSQL, Tailwind CSS, and modern
              frontend technologies to deliver secure, scalable,
              and high-performance solutions across desktop,
              tablet, and mobile devices.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              ✓ Available for Freelance Projects
            </span>

            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
              ✓ Business Systems Developer
            </span>

            <span className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
              ✓ Remote Friendly
            </span>
          </div>

          
        </div>
      </Reveal>
    </section>
  );
}