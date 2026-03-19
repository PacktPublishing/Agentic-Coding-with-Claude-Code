'use client';

export default function HeroMinimal() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--background)]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#d97757]/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-1.5 text-sm font-medium text-[var(--foreground)]">
                Community-Powered Automation
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl animation-delay-200">
              Supercharge Claude Code with powerful hooks
            </h1>

            {/* Description */}
            <p className="animate-fade-in text-lg leading-relaxed text-[var(--slate-light)] lg:text-xl animation-delay-400">
              Discover, share, and install community-driven hooks that transform
              your AI-powered development workflow.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in flex flex-col gap-4 sm:flex-row animation-delay-600">
              <button className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#d97757] px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#d97757]/90 hover:shadow-md">
                Browse Hooks
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-base font-semibold text-[var(--foreground)] shadow-sm transition-all hover:bg-[var(--slate-light)]/10 hover:shadow-md">
                <svg className="h-5 w-5 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Submit a Hook
              </button>
            </div>

            {/* Stats */}
            <div className="animate-fade-in flex flex-wrap gap-8 pt-4 animation-delay-600">
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)]">50+</div>
                <div className="text-sm text-[var(--slate-light)]">Hooks Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)]">1.2k</div>
                <div className="text-sm text-[var(--slate-light)]">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)]">200+</div>
                <div className="text-sm text-[var(--slate-light)]">Contributors</div>
              </div>
            </div>
          </div>

          {/* Right Column - Minimal Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Subtle horizontal accent line */}
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d97757]/20 to-transparent" />

            {/* Geometric accent - simple circles */}
            <div className="relative">
              {/* Outer circle */}
              <div className="animate-fade-in h-64 w-64 rounded-full border border-[var(--border)] lg:h-80 lg:w-80 animation-delay-400" />

              {/* Middle circle */}
              <div className="animate-fade-in absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6a9bcc]/30 lg:h-60 lg:w-60 animation-delay-600" />

              {/* Inner circle with gradient */}
              <div className="animate-fade-in absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#d97757]/20 via-[#6a9bcc]/20 to-[#788c5d]/20 lg:h-40 lg:w-40 animation-delay-800" />

              {/* Center dot */}
              <div className="animate-fade-in absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d97757] animation-delay-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
    </section>
  );
}
