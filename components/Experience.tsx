import Reveal from "./Reveal";

const experiences = [
  {
    period: "2025 - Present",
    title: "Full Stack Developer",
    text: "Designing and developing scalable web applications, business management systems, and modern digital solutions using React.js, Next.js, Node.js, Firebase, and PostgreSQL.",
  },
  {
    period: "Business Systems Development",
    title: "HRIS, CRM & Enterprise Solutions",
    text: "Building Human Resource Information Systems (HRIS), Customer Relationship Management (CRM) platforms, Attendance Monitoring Systems, and custom business applications that improve operational efficiency.",
  },
  {
    period: "Real Estate Technology",
    title: "Real Estate Management Systems",
    text: "Developing property management platforms, commission tracking systems, agent management modules, and reporting tools tailored for real estate organizations.",
  },
  {
    period: "Frontend & User Experience",
    title: "Modern Web Development",
    text: "Creating responsive, high-performance interfaces with a strong focus on usability, accessibility, clean architecture, and modern UI/UX principles.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container-width py-24">
      <Reveal>
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Experience
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Professional
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              Experience & Expertise
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            My experience spans full stack development, business
            systems, enterprise applications, and modern web
            technologies focused on delivering real business value.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 space-y-6">
        {experiences.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.08}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:border-cyan-400/20">
              <p className="text-sm font-medium text-cyan-300">
                {item.period}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}