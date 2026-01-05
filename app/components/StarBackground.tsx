'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    console.log('StarBackground montado');

    const STAR_COUNT = 100;
    let stars: Star[] = [];

    const initStars = (width: number, height: number) => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1 + 0.3,
        speed: Math.random() * 0.8 + 0.1,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.03 + 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log('Canvas dimensions:', canvas.width, canvas.height);
      initStars(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    let animationId: number;
    let frame = 0;

    const draw = () => {
      // Fondo negro con ligero fade para efecto de estela
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        // Efecto de parpadeo más intenso
        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinklePhase) * 0.6 + 0.4;
        const currentOpacity = s.opacity * twinkle;

        // Dibujar estrella con brillo
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 2);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 2, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo brillante
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        // Movimiento
        s.y += s.speed;
        if (s.y > canvas.height + 10) {
          s.y = -10;
          s.x = Math.random() * canvas.width;
        }
      });

      frame++;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-black" />;
}
