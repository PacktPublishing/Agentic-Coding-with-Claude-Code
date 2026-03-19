'use client';

export default function HeroCentered() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-24 md:py-32">
      {/* Symmetric Background Decorations */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Left gradient orb */}
        <div className="absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[#d97757] opacity-10 blur-3xl animate-pulse-slow" />
        {/* Right gradient orb */}
        <div className="absolute right-0 top-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-[#6a9bcc] opacity-10 blur-3xl animate-pulse-slow animation-delay-1000" />
        {/* Center gradient orb */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#788c5d] opacity-5 blur-3xl animate-pulse-slow animation-delay-2000" />

        {/* Centered grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Symmetric floating elements */}
      <div className="absolute left-8 top-20 h-2 w-2 animate-pulse-slow rounded-full bg-[#d97757] opacity-60" />
      <div className="absolute left-16 top-40 h-3 w-3 animate-pulse-slow animation-delay-1000 rounded-full bg-[#6a9bcc] opacity-60" />
      <div className="absolute right-8 top-20 h-2 w-2 animate-pulse-slow animation-delay-2000 rounded-full bg-[#d97757] opacity-60" />
      <div className="absolute right-16 top-40 h-3 w-3 animate-pulse-slow animation-delay-1500 rounded-full bg-[#788c5d] opacity-60" />

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm font-medium text-[var(--foreground)] shadow-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d97757] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d97757]"></span>
            </span>
            Community-Powered Automation
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl animate-slide-up animation-delay-200">
            Supercharge Claude Code with{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#d97757] via-[#6a9bcc] to-[#788c5d] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                powerful hooks
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--slate-light)] animate-slide-up animation-delay-400">
            Discover, share, and install community-driven hooks that transform your AI-powered development workflow.
          </p>

          {/* CTAs */}
          <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row animate-fade-in animation-delay-600">
            <button className="group inline-flex items-center gap-2 rounded-2xl bg-[#d97757] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#c4684a] hover:shadow-[0_0_40px_rgba(217,119,87,0.4)] hover:scale-[1.02]">
              Browse Hooks
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="group inline-flex items-center gap-2 rounded-2xl border-2 border-[var(--border)] bg-[var(--background)] px-8 py-4 font-semibold text-[var(--foreground)] shadow-sm transition-all duration-300 hover:border-[#6a9bcc]/50 hover:bg-[#6a9bcc]/5 hover:shadow-[0_0_30px_rgba(106,155,204,0.15)]">
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Submit a Hook
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-fade-in animation-delay-800">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d97757] to-[#c4684a] p-3 shadow-lg shadow-[#d97757]/20">
                <svg className="h-full w-full text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[var(--foreground)]">50+</div>
                <div className="text-sm text-[var(--slate-light)]">Hooks Available</div>
              </div>
            </div>

            <div className="hidden h-12 w-px bg-[var(--border)] sm:block" />

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6a9bcc] to-[#5a8bbc] p-3 shadow-lg shadow-[#6a9bcc]/20">
                <svg className="h-full w-full text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[var(--foreground)]">1.2k</div>
                <div className="text-sm text-[var(--slate-light)]">Downloads</div>
              </div>
            </div>

            <div className="hidden h-12 w-px bg-[var(--border)] sm:block" />

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#788c5d] to-[#687c4d] p-3 shadow-lg shadow-[#788c5d]/20">
                <svg className="h-full w-full text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[var(--foreground)]">200+</div>
                <div className="text-sm text-[var(--slate-light)]">Contributors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
