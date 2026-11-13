"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  cyan: boolean;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let reduceMotion = motionQuery.matches;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frameId = 0;

    const createParticles = () => {
      const count = Math.min(
        70,
        Math.max(24, Math.floor((width * height) / 22000))
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.4 + 0.6,
        cyan: Math.random() < 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const maxDistance = 130;
      const maxDistanceSquared = maxDistance * maxDistance;

      // Connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < maxDistanceSquared) {
            const distance = Math.sqrt(distanceSquared);
            const alpha = (1 - distance / maxDistance) * 0.18;

            ctx.strokeStyle = `rgba(57, 229, 140, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Particles
      for (const particle of particles) {
        ctx.fillStyle = particle.cyan
          ? "rgba(34, 211, 238, 0.55)"
          : "rgba(57, 229, 140, 0.55)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
      }
    };

    const tick = () => {
      step();
      draw();
      frameId = window.requestAnimationFrame(tick);
    };

    const start = () => {
      window.cancelAnimationFrame(frameId);

      if (reduceMotion || document.hidden) {
        draw();
        return;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
      start();
    };

    const handleVisibility = () => start();

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;
      start();
    };

    resize();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-glow" />
      <canvas ref={canvasRef} className="ambient-canvas" />
      <div className="ambient-scanlines" />
    </div>
  );
}