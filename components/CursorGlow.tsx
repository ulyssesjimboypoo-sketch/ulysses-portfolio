"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
};

export default function CursorGlow() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => p.id !== newParticle.id)
        );
      }, 600);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="pointer-events-none fixed z-[9999] h-5 w-5 rounded-full bg-cyan-400/40 blur-xl animate-ping"
          style={{
            left: particle.x - 10,
            top: particle.y - 10,
          }}
        />
      ))}
    </>
  );
}