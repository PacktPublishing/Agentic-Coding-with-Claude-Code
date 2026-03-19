'use client';

export default function HeroGradientMesh() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-24 lg:py-32">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient blob - coral */}
        <div className="absolute -left-20 top-20 h-[500px] w-[500px] animate-morph rounded-full bg-gradient-to-br from-[#d97757] to-[#d97757]/40 opacity-40 blur-3xl" />

        {/* Secondary gradient blob - blue */}
        <div className="absolute right-20 top-40 h-[600px] w-[600px] animate-morph animation-delay-3000 rounded-full bg-gradient-to-br from-[#6a9bcc] to-[#6a9bcc]/40 opacity-40 blur-3xl" />

        {/* Tertiary gradient blob - olive */}
        <div className="absolute bottom-20 left-1/3 h-[550px] w-[550px] animate-morph animation-delay-6000 rounded-full bg-gradient-to-br from-[#788c5d] to-[#788c5d]/40 opacity-30 blur-3xl" />

        {/* Additional blending blob */}
        <div className="absolute right-1/4 bottom-40 h-[400px] w-[400px] animate-morph animation-delay-9000 rounded-full bg-gradient-to-br from-[#d97757]/30 via-[#6a9bcc]/30 to-[#788c5d]/30 opacity-50 blur-3xl mix-blend-multiply dark:mix-blend-screen" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="relative z-10 space-y-8">
            {/* Badge */}
            <div className="inline-flex animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-4 py-1.5 text-sm font-medium text-[var(--foreground)] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d97757] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d97757]"></span>
                </span>
                Community-Powered Automation
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl animation-delay-200">
              Supercharge Claude Code with{' '}
              <span className="bg-gradient-to-r from-[#d97757] via-[#6a9bcc] to-[#788c5d] bg-clip-text text-transparent">
                powerful hooks
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in text-lg text-[var(--slate-light)] sm:text-xl animation-delay-400">
              Discover, share, and install community-driven hooks that transform your AI-powered development workflow.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-in animation-delay-600">
              <button className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#d97757] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#d97757]/20 transition-all hover:bg-[#d97757]/90 hover:shadow-xl hover:shadow-[#d97757]/30 hover:scale-105">
                Browse Hooks
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)]/80 px-6 py-3 text-base font-semibold text-[var(--foreground)] backdrop-blur-sm transition-all hover:bg-[var(--background)] hover:border-[#6a9bcc]/50 hover:scale-105">
                <svg className="h-4 w-4 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Submit a Hook
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-in sm:gap-8 animation-delay-600">
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">50+</div>
                <div className="text-sm text-[var(--slate-light)]">Hooks Available</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">1.2k</div>
                <div className="text-sm text-[var(--slate-light)]">Downloads</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">200+</div>
                <div className="text-sm text-[var(--slate-light)]">Contributors</div>
              </div>
            </div>
          </div>

          {/* Right column - Abstract 3D shape */}
          <div className="relative hidden lg:block h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[500px] w-[500px]">
                {/* Back layer */}
                <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-3xl bg-gradient-to-br from-[#6a9bcc]/30 to-[#788c5d]/30 backdrop-blur-sm animate-morph animation-delay-1000" />

                {/* Middle layer - glassmorphism card */}
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-2xl animate-morph animation-delay-2000">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d97757]/20 via-transparent to-[#6a9bcc]/20" />
                </div>

                {/* Front layer */}
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-3xl bg-gradient-to-br from-[#d97757]/40 to-[#6a9bcc]/40 backdrop-blur-sm animate-morph shadow-xl" />

                {/* Floating accent elements */}
                <div className="absolute right-10 top-20 h-20 w-20 rounded-full bg-gradient-to-br from-[#788c5d]/60 to-[#788c5d]/20 backdrop-blur-sm animate-morph animation-delay-4000" />
                <div className="absolute bottom-20 left-10 h-16 w-16 rounded-2xl bg-gradient-to-br from-[#d97757]/50 to-[#d97757]/20 backdrop-blur-sm animate-morph animation-delay-6000 rotate-45" />

                {/* Subtle rings */}
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" />
                <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 animate-pulse animation-delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
