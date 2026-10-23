"use client";

import React, { useMemo } from "react";

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  opacity: number;
}

export default function AmbientGlowParticles() {
  const particles = useMemo<Particle[]>(() => {
    return [
      { id: 1, left: "15%", top: "65%", size: 4, duration: "7s", delay: "0s", opacity: 0.5 },
      { id: 2, left: "28%", top: "78%", size: 6, duration: "9s", delay: "1.5s", opacity: 0.4 },
      { id: 3, left: "42%", top: "85%", size: 5, duration: "8s", delay: "3s", opacity: 0.6 },
      { id: 4, left: "68%", top: "70%", size: 7, duration: "10s", delay: "0.8s", opacity: 0.45 },
      { id: 5, left: "82%", top: "80%", size: 5, duration: "8.5s", delay: "2.2s", opacity: 0.55 },
      { id: 6, left: "55%", top: "60%", size: 3, duration: "6.5s", delay: "4s", opacity: 0.65 },
      { id: 7, left: "20%", top: "45%", size: 4, duration: "9.5s", delay: "2.8s", opacity: 0.35 },
      { id: 8, left: "75%", top: "50%", size: 6, duration: "7.8s", delay: "1s", opacity: 0.4 },
    ];
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-[5]"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-[#D6BB96] animate-bokeh-drift blur-[1px] shadow-[0_0_8px_rgba(214,187,150,0.8)]"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
