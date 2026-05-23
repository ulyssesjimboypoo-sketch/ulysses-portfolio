import Reveal from "./Reveal";

const items = [
  {
    period: "Current Focus",
    title: "Frontend Development",
    text: "Building clean, responsive, and modern interfaces for websites and web applications."
  },
  {
    period: "Creative Focus",
    title: "UI/UX Design",
    text: "Designing user-friendly layouts, prototypes, and visual systems with a strong aesthetic sense."
  },
  {
    period: "Growth Focus",
    title: "Continuous Improvement",
    text: "Improving skills in frontend architecture, interaction design, and real-world project execution."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="container-width py-16">
      <Reveal>
        <h2 className="section-title">Experience & Focus</h2>
        <p className="section-copy">
          A quick overview of the areas I&apos;m currently building and improving as a developer and designer.
        </p>
      </Reveal>

      <div className="mt-8 space-y-5">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} className="glass rounded-[1.75rem] p-6 shadow-soft">
            <p className="text-sm text-fuchsia-200">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
