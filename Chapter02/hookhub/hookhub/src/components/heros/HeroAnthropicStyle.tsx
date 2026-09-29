export default function HeroAnthropicStyle() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--background)] py-20 lg:py-28">

      {/* === BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm radial glow — bleeds from top center */}
        <div
          className="absolute -top-56 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(217,119,87,0.09) 0%, transparent 65%)' }}
        />
        {/* Cool blue accent — lower right */}
        <div
          className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(106,155,204,0.06) 0%, transparent 65%)' }}
        />
        {/* Dot grid — uses foreground color so it inverts in dark mode */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--foreground) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="space-y-8 max-w-xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)] shadow-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97757] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d97757]" />
              </span>
              <span className="text-xs font-medium tracking-[0.07em] uppercase text-[var(--slate-dark)]">
                Community-Powered Automation
              </span>
            </div>

            {/* Headline — three stacked lines, tight Anthropic tracking */}
            <h1
              className="animate-slide-up animation-delay-100 font-bold tracking-[-0.03em] leading-[1.04]"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.25rem)' }}
            >
              <span className="block text-[var(--foreground)]">Supercharge</span>
              <span className="block bg-gradient-to-r from-[#d97757] via-[#e0895f] to-[#c56b44] bg-clip-text text-transparent pb-1">
                Claude Code
              </span>
              <span className="block text-[var(--foreground)]">with hooks.</span>
            </h1>

            {/* Body copy */}
            <p className="text-base lg:text-[1.05rem] text-[var(--slate-light)] leading-relaxed animate-slide-up animation-delay-200">
              Discover, share, and install community-driven hooks that transform
              your AI-powered development workflow. From automated testing to
              smart notifications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-slide-up animation-delay-300">
              <button className="group inline-flex items-center gap-2 px-6 py-2.5 bg-[#d97757] hover:bg-[#c4684a] text-white font-semibold text-sm rounded-full transition-all duration-200 hover:shadow-[0_4px_24px_rgba(217,119,87,0.38)]">
                Browse Hooks
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-2.5 border border-[var(--border)] hover:border-[#d97757]/40 hover:bg-[var(--light-gray)] text-[var(--foreground)] font-semibold text-sm rounded-full transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Submit a Hook
              </button>
            </div>

            {/* Stats strip */}
            <div className="flex gap-10 pt-6 border-t border-[var(--border)] animate-fade-in animation-delay-500">
              {[
                { value: '50+',  label: 'Hooks Available' },
                { value: '1.2k', label: 'Downloads' },
                { value: '200+', label: 'Contributors' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-bold tracking-tight text-[var(--foreground)]">{s.value}</div>
                  <div className="text-xs text-[var(--slate-light)] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Claude Orbital Orb ── */}
          <div className="relative hidden lg:flex items-center justify-center animate-fade-in animation-delay-300">
            <div className="relative w-[460px] h-[460px]">

              {/* Soft ambient glow behind the SVG */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(217,119,87,0.15) 0%, rgba(106,155,204,0.07) 42%, transparent 65%)',
                }}
              />

              {/* ── THE ORB ── */}
              <svg
                viewBox="0 0 460 460"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  {/* Band stroke gradients — fade from transparent at endpoints */}
                  <linearGradient id="ahs-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#d97757" stopOpacity="0" />
                    <stop offset="22%"  stopColor="#d97757" stopOpacity="0.75" />
                    <stop offset="78%"  stopColor="#d97757" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#d97757" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="ahs-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#6a9bcc" stopOpacity="0" />
                    <stop offset="22%"  stopColor="#6a9bcc" stopOpacity="0.65" />
                    <stop offset="78%"  stopColor="#6a9bcc" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#6a9bcc" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="ahs-green" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#788c5d" stopOpacity="0" />
                    <stop offset="22%"  stopColor="#788c5d" stopOpacity="0.55" />
                    <stop offset="78%"  stopColor="#788c5d" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#788c5d" stopOpacity="0" />
                  </linearGradient>

                  {/* Core radial glow */}
                  <radialGradient id="ahs-core" cx="50%" cy="50%" r="50%">
                    <stop offset="0%"   stopColor="#d97757" stopOpacity="0.45" />
                    <stop offset="55%"  stopColor="#d97757" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#d97757" stopOpacity="0" />
                  </radialGradient>

                  {/* Glow filter for particles and core dot */}
                  <filter id="ahs-glow" x="-120%" y="-120%" width="340%" height="340%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outermost whisper ring */}
                <circle cx="230" cy="230" r="200" stroke="rgba(217,119,87,0.07)" strokeWidth="1" />

                {/* Ambient core glow */}
                <circle cx="230" cy="230" r="115" fill="url(#ahs-core)" />

                {/* ── ROTATING BANDS ──
                    Each <g> animates via CSS orb-rotate-cw / orb-rotate-ccw.
                    The inner ellipse carries the base offset angle via SVG transform.
                    Varying durations + directions create an organic, breathing effect. */}

                <g style={{ transformOrigin: '230px 230px', animation: 'orb-rotate-cw 28s linear infinite' }}>
                  <ellipse cx="230" cy="230" rx="195" ry="52" stroke="url(#ahs-orange)" strokeWidth="1.5" />
                </g>

                <g style={{ transformOrigin: '230px 230px', animation: 'orb-rotate-ccw 36s linear infinite' }}>
                  <ellipse cx="230" cy="230" rx="195" ry="52" stroke="url(#ahs-blue)" strokeWidth="1.5" transform="rotate(30 230 230)" />
                </g>

                <g style={{ transformOrigin: '230px 230px', animation: 'orb-rotate-cw 43s linear infinite' }}>
                  <ellipse cx="230" cy="230" rx="195" ry="52" stroke="url(#ahs-green)" strokeWidth="1.5" transform="rotate(60 230 230)" />
                </g>

                <g style={{ transformOrigin: '230px 230px', animation: 'orb-rotate-ccw 31s linear infinite' }}>
                  <ellipse cx="230" cy="230" rx="195" ry="52" stroke="url(#ahs-orange)" strokeWidth="1" opacity="0.6" transform="rotate(90 230 230)" />
                </g>

                <g style={{ transformOrigin: '230px 230px', animation: 'orb-rotate-cw 48s linear infinite' }}>
                  <ellipse cx="230" cy="230" rx="195" ry="52" stroke="url(#ahs-blue)" strokeWidth="1" opacity="0.5" transform="rotate(120 230 230)" />
                </g>

                <g style={{ transformOrigin: '230px 230px', animation: 'orb-rotate-ccw 39s linear infinite' }}>
                  <ellipse cx="230" cy="230" rx="195" ry="52" stroke="url(#ahs-green)" strokeWidth="1" opacity="0.45" transform="rotate(150 230 230)" />
                </g>

                {/* ── ORBITING PARTICLES ──
                    Each group rotates around the center; the circle is offset on the x-axis.
                    Staggered directions + speeds give them independent trajectories. */}

                {/* Orange particle — CW fast */}
                <g style={{ transformOrigin: '230px 230px', animation: 'orb-rotate-cw 9s linear infinite' }}>
                  <circle cx="422" cy="230" r="3.5" fill="#d97757" filter="url(#ahs-glow)" />
                </g>

                {/* Blue particle — CCW, slower */}
                <g style={{ transformOrigin: '230px 230px', animation: 'orb-rotate-ccw 14s linear infinite' }}>
                  <circle cx="408" cy="230" r="2.5" fill="#6a9bcc" filter="url(#ahs-glow)" opacity="0.9" />
                </g>

                {/* Green particle — CW medium, delayed start */}
                <g style={{ transformOrigin: '230px 230px', animation: 'orb-rotate-cw 11s linear -4s infinite' }}>
                  <circle cx="400" cy="230" r="2" fill="#788c5d" opacity="0.85" />
                </g>

                {/* ── CENTER CORE ── */}
                <circle cx="230" cy="230" r="22" fill="#d97757" opacity="0.1">
                  <animate attributeName="r" values="22;28;22" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="230" cy="230" r="13" fill="#d97757" opacity="0.45">
                  <animate attributeName="r" values="13;15;13" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="230" cy="230" r="6" fill="#d97757" opacity="0.95" filter="url(#ahs-glow)" />
                <circle cx="230" cy="230" r="2.5" fill="white" opacity="0.8" />
              </svg>

              {/* ── FLOATING HOOK CARDS ── */}

              {/* Card — top right, auto-test */}
              <div className="absolute top-10 right-0 translate-x-6 bg-[var(--background)] border border-[var(--border)] rounded-2xl px-3.5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#d97757]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#d97757]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--foreground)] whitespace-nowrap">auto-test</div>
                    <div className="text-[10px] text-[var(--slate-light)] whitespace-nowrap">⭐ 4.9 · 342 installs</div>
                  </div>
                  <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#788c5d]/10 text-[#788c5d] whitespace-nowrap">
                    installed
                  </span>
                </div>
              </div>

              {/* Card — left middle, smart-notify */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-6 bg-[var(--background)] border border-[var(--border)] rounded-2xl px-3.5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-float-delayed">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#6a9bcc]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#6a9bcc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--foreground)] whitespace-nowrap">smart-notify</div>
                    <div className="text-[10px] text-[var(--slate-light)] whitespace-nowrap">⭐ 4.7 · 218 installs</div>
                  </div>
                </div>
              </div>

              {/* Card — bottom right, terminal snippet */}
              <div
                className="absolute bottom-10 right-8 bg-[#1c1c1b] border border-white/[0.08] rounded-xl px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
                style={{ animation: 'float 9s ease-in-out 1.4s infinite' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#d97757] text-xs font-mono select-none">$</span>
                  <span className="text-xs font-mono text-gray-300 whitespace-nowrap">npx hookhub install</span>
                  <span className="text-[#788c5d] text-xs font-mono whitespace-nowrap">auto-test</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
