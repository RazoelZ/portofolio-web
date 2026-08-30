"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "../Hooks/useTheme";

const BackgroundParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  /* Keep the animation loop reading the latest theme without restarting it */
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.6,
      speedY: Math.random() * 0.2 + 0.05,
      opacity: Math.random() * 0.4 + 0.15,
    }));

    let frameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Light mode -> black dots, Dark mode -> white dots.
      const isDark = themeRef.current === "dark";
      const rgb = isDark ? "255, 255, 255" : "15, 23, 42";
      const glow = isDark
        ? "rgba(214, 172, 92, 0.35)"
        : "rgba(15, 23, 42, 0.15)";

      particles.forEach((p) => {
        p.y -= p.speedY;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.opacity})`;
        ctx.shadowColor = glow;
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
};

export default BackgroundParticles;
