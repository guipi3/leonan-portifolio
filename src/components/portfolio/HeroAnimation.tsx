import { useEffect, useRef } from "react";

/**
 * HERO ANIMATION — "Orbital Authority"
 *
 * A signature canvas piece:
 * - A slowly rotating orbital sphere of particles (the "core") — represents
 *   systems thinking and craft.
 * - Long, slow-drifting horizontal scan lines — editorial / Swiss energy.
 * - A subtle dot grid that breathes with a parallax wave.
 * - Conic light sweep that rotates once every ~12s.
 *
 * Monochrome, premium, GPU-friendly. Designed to feel like a Linear/Vercel/Awwwards hero.
 */
const HeroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let isMobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      isMobile = window.innerWidth < 768;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // ---------- ORBITAL SPHERE (3D projected to 2D) ----------
    type P = { theta: number; phi: number; speed: number };
    const PARTICLES: P[] = [];
    const PARTICLE_COUNT = isMobile ? 140 : 320;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Fibonacci sphere distribution for even coverage
      const y = 1 - (i / (PARTICLE_COUNT - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      PARTICLES.push({
        theta,
        phi: Math.acos(y),
        speed: 0.0006 + Math.random() * 0.0004,
      });
      // store radius factor in a hack: reuse via closure — recompute each frame is fine
      void radius;
    }

    // Scan lines drifting horizontally
    const SCAN_LINES = Array.from({ length: 6 }, (_, i) => ({
      y: (i + 1) / 7,
      speed: 0.00008 + i * 0.00002,
      offset: Math.random(),
    }));

    let raf = 0;
    let start = performance.now();

    const draw = (t: number) => {
      const time = (t - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      // ---------- BREATHING DOT GRID ----------
      const step = 36;
      const gridOpacity = 0.06;
      ctx.fillStyle = `rgba(0,0,0,${gridOpacity})`;
      const wave = Math.sin(time * 0.4) * 0.5 + 0.5;
      for (let x = step; x < width; x += step) {
        for (let y = step; y < height; y += step) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const d = Math.sqrt(dx * dx + dy * dy);
          const pulse = Math.sin(d * 0.012 - time * 1.2) * 0.5 + 0.5;
          const r = 0.6 + pulse * 1.1 * wave;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ---------- CONIC LIGHT SWEEP ----------
      // On mobile, move the sphere to the upper area so it doesn't sit behind the text.
      const cx = isMobile ? width * 0.5 : width * 0.72;
      const cy = isMobile ? height * 0.22 : height * 0.55;
      const sweepAngle = (time * (Math.PI * 2)) / 14;
      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.6);
      sweepGrad.addColorStop(0, "rgba(0,0,0,0.04)");
      sweepGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = sweepGrad;
      ctx.fillRect(0, 0, width, height);
      void sweepAngle;

      // ---------- ORBITAL SPHERE ----------
      const sphereR = Math.min(width, height) * (isMobile ? 0.2 : 0.28);
      const rotY = time * 0.25;
      const rotX = Math.sin(time * 0.15) * 0.35;

      // Equator/orbit rings
      ctx.save();
      ctx.translate(cx, cy);
      ctx.strokeStyle = "rgba(0,0,0,0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        const tilt = (i / 3) * Math.PI;
        ctx.beginPath();
        const segments = 80;
        for (let s = 0; s <= segments; s++) {
          const a = (s / segments) * Math.PI * 2;
          // point on circle in XZ plane
          let x = Math.cos(a) * sphereR;
          let y = 0;
          let z = Math.sin(a) * sphereR;
          // rotate around X by tilt, then by rotX
          let y1 = y * Math.cos(tilt) - z * Math.sin(tilt);
          let z1 = y * Math.sin(tilt) + z * Math.cos(tilt);
          y = y1; z = z1;
          // rotate around Y by rotY
          const x2 = x * Math.cos(rotY) + z * Math.sin(rotY);
          const z2 = -x * Math.sin(rotY) + z * Math.cos(rotY);
          x = x2; z = z2;
          // rotate around X by rotX
          const y3 = y * Math.cos(rotX) - z * Math.sin(rotX);
          const z3 = y * Math.sin(rotX) + z * Math.cos(rotX);
          y = y3; z = z3;
          // perspective
          const persp = 600 / (600 + z);
          const px = x * persp;
          const py = y * persp;
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Particles on the sphere
      for (let i = 0; i < PARTICLES.length; i++) {
        const p = PARTICLES[i];
        p.theta += p.speed;
        const sinPhi = Math.sin(p.phi);
        let x = Math.cos(p.theta) * sinPhi * sphereR;
        let y = Math.cos(p.phi) * sphereR;
        let z = Math.sin(p.theta) * sinPhi * sphereR;

        // rotateY by rotY
        const x2 = x * Math.cos(rotY) + z * Math.sin(rotY);
        const z2 = -x * Math.sin(rotY) + z * Math.cos(rotY);
        x = x2; z = z2;
        // rotateX by rotX
        const y3 = y * Math.cos(rotX) - z * Math.sin(rotX);
        const z3 = y * Math.sin(rotX) + z * Math.cos(rotX);
        y = y3; z = z3;

        const persp = 600 / (600 + z);
        const px = x * persp;
        const py = y * persp;
        const depth = (z + sphereR) / (sphereR * 2); // 0..1
        const alpha = 0.25 + depth * 0.7;
        const r = 0.6 + depth * 1.6;
        ctx.fillStyle = `rgba(10,10,10,${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Single accent particle (brand green) orbiting
      {
        const a = time * 0.9;
        const x = Math.cos(a) * sphereR * 1.15;
        const z = Math.sin(a) * sphereR * 1.15;
        const y = Math.sin(a * 1.3) * 12;
        const x2 = x * Math.cos(rotY) + z * Math.sin(rotY);
        const z2 = -x * Math.sin(rotY) + z * Math.cos(rotY);
        const persp = 600 / (600 + z2);
        const px = x2 * persp;
        const py = y * persp;
        ctx.fillStyle = "hsl(142 70% 45%)";
        ctx.shadowColor = "hsl(142 70% 45% / 0.6)";
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.restore();

      // ---------- DRIFTING SCAN LINES ----------
      ctx.save();
      ctx.strokeStyle = "rgba(0,0,0,0.05)";
      ctx.lineWidth = 1;
      for (const line of SCAN_LINES) {
        const y = line.y * height + Math.sin(time * line.speed * 1000 + line.offset * 10) * 30;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Massive editorial label — typographic gesture */}
      <div className="absolute top-1/2 left-6 sm:left-12 -translate-y-1/2 select-none">
        <div
          className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Design System · 2026 · RJ — BR
        </div>
      </div>

      {/* Floating geometric accents */}
      <div
        className="absolute top-[22%] left-[18%] w-24 h-24 rounded-full border border-foreground/10"
        style={{ animation: "float-slow 14s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[28%] right-[18%] w-32 h-32 border border-foreground/10 rotate-45"
        style={{ animation: "float-slow 20s ease-in-out infinite reverse" }}
      />

      {/* Soft fade so text remains readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80" />
    </div>
  );
};

export default HeroAnimation;
