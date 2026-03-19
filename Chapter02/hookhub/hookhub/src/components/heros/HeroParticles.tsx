'use client';

import { useEffect, useRef } from 'react';

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulsePhase: number;
      pulseSpeed: number;
      isHookShape: boolean;

      constructor(x: number, y: number, isHookShape = false) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 1;
        const colors = ['#d97757', '#6a9bcc', '#788c5d'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.isHookShape = isHookShape;
      }

      update() {
        if (!this.isHookShape) {
          this.x += this.vx;
          this.y += this.vy;
          if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
        }
        this.pulsePhase += this.pulseSpeed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = pulse * 0.8;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 8000);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    if (canvas.width > 1024) {
      const hookCenterX = canvas.width * 0.75;
      const hookCenterY = canvas.height * 0.5;
      const hookRadius = Math.min(canvas.width, canvas.height) * 0.15;

      for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 1.5 - Math.PI * 0.25;
        particles.push(new Particle(hookCenterX + Math.cos(angle) * hookRadius, hookCenterY + Math.sin(angle) * hookRadius * 0.6, true));
      }
    }

    const drawConnections = () => {
      const maxDistance = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = '#6a9bcc';
            ctx!.globalAlpha = (1 - distance / maxDistance) * 0.15;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
            ctx!.globalAlpha = 1;
          }
        }
      }
    };

    const animate = () => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      drawConnections();
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx!);
      });
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-24 lg:py-32 min-h-screen">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-[#d97757]" />
              <span className="text-sm font-medium text-[var(--foreground)]">Community-Powered Automation</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight animate-fade-in animation-delay-200">
              Supercharge Claude Code with powerful{' '}
              <span className="bg-gradient-to-r from-[#d97757] to-[#6a9bcc] bg-clip-text text-transparent">hooks</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[var(--slate-light)] max-w-2xl animate-fade-in animation-delay-400">
              Discover, share, and install community-driven hooks that transform your AI-powered development workflow.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
              <button className="px-8 py-4 rounded-lg font-semibold text-white bg-[#d97757] transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group">
                Browse Hooks
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-[#6a9bcc] text-[#6a9bcc] flex items-center justify-center gap-2 group">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Submit a Hook
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[var(--border)] animate-fade-in animation-delay-600">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#d97757]">50+</div>
                <div className="text-sm text-[var(--slate-light)] mt-1">Hooks Available</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#6a9bcc]">1.2k</div>
                <div className="text-sm text-[var(--slate-light)] mt-1">Downloads</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#788c5d]">200+</div>
                <div className="text-sm text-[var(--slate-light)] mt-1">Contributors</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative h-[600px]" />
        </div>
      </div>
    </section>
  );
}
