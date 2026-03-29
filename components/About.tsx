import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="container-width py-16">
      <Reveal className="glass rounded-[2rem] p-8 md:p-10 shadow-soft">
        <h2 className="section-title">About Me</h2>
        <p className="section-copy">
          I am a frontend developer and UI/UX designer who enjoys creating interfaces that are both
          visually polished and easy to use. My goal is to turn ideas into responsive, engaging, and
          user-centered products that feel modern across desktop and mobile devices.
        </p>
      </Reveal>
    </section>
  );
}
