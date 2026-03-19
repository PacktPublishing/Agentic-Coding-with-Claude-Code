export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#d97757]/30 to-[#d97757]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#6a9bcc]/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-[#788c5d]/15 to-transparent rounded-full blur-2xl animate-float-delayed" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Floating Nodes */}
        <div className="absolute top-20 right-[15%] w-3 h-3 bg-[#d97757] rounded-full animate-ping-slow opacity-60" />
        <div className="absolute top-40 right-[25%] w-2 h-2 bg-[#6a9bcc] rounded-full animate-ping-slow animation-delay-1000 opacity-50" />
        <div className="absolute bottom-32 right-[20%] w-2.5 h-2.5 bg-[#788c5d] rounded-full animate-ping-slow animation-delay-2000 opacity-50" />
        <div className="absolute top-1/3 right-[10%] w-2 h-2 bg-[#d97757]/70 rounded-full animate-bounce-slow" />

        {/* Connection Lines SVG */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-20" viewBox="0 0 400 500" fill="none">
          <path d="M350 50 L280 120 L320 200 L250 180 L200 250" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4 4" className="animate-dash" />
          <path d="M380 150 L300 180 L320 250 L280 320" stroke="url(#gradient2)" strokeWidth="1" strokeDasharray="4 4" className="animate-dash-delayed" />
          <path d="M250 80 L200 150 L220 220 L150 280" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4 4" className="animate-dash" />
          <circle cx="350" cy="50" r="4" fill="#d97757" className="animate-pulse" />
          <circle cx="280" cy="120" r="3" fill="#6a9bcc" className="animate-pulse animation-delay-500" />
          <circle cx="320" cy="200" r="3" fill="#d97757" className="animate-pulse animation-delay-1000" />
          <circle cx="200" cy="250" r="4" fill="#788c5d" className="animate-pulse animation-delay-1500" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97757" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6a9bcc" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6a9bcc" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#788c5d" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d97757]/10 border border-[#d97757]/20 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97757] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d97757]"></span>
            </span>
            <span className="text-sm font-medium text-[#d97757]">Community-Powered Automation</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-[1.05] tracking-tight animate-slide-up">
            <span className="block">Supercharge</span>
            <span className="block mt-2">Claude Code with</span>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-[#d97757] via-[#e8956e] to-[#d97757] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                powerful hooks
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#d97757]/30" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 Q50 2 100 8 T198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[var(--slate-light)] mb-10 leading-relaxed animate-slide-up animation-delay-200">
            Discover, share, and install community-driven hooks that transform your AI-powered development workflow. From automated testing to smart notifications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-400">
            <button className="group relative px-8 py-4 bg-[#d97757] text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,119,87,0.4)] hover:scale-[1.02]">
              <span className="relative z-10 flex items-center gap-2">
                Browse Hooks
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c4684a] to-[#d97757] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="group px-8 py-4 border-2 border-[var(--border)] hover:border-[#d97757]/50 text-[var(--foreground)] font-semibold rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,119,87,0.15)] hover:bg-[#d97757]/5">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Submit a Hook
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-[var(--border)] animate-fade-in animation-delay-600">
            <div>
              <div className="text-3xl font-bold text-[var(--foreground)]">50+</div>
              <div className="text-sm text-[var(--slate-light)]">Hooks Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--foreground)]">1.2k</div>
              <div className="text-sm text-[var(--slate-light)]">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--foreground)]">200+</div>
              <div className="text-sm text-[var(--slate-light)]">Contributors</div>
            </div>
          </div>
        </div>

        {/* Hero Visual - Animated Hook Illustration */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--border)] animate-spin-slow" />

            {/* Middle Ring */}
            <div className="absolute inset-8 rounded-full border border-[#d97757]/30 animate-reverse-spin" />

            {/* Inner Glow */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#d97757]/20 to-[#6a9bcc]/10 blur-xl animate-pulse-slow" />

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#d97757]/20 rounded-3xl blur-xl animate-pulse" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-[#d97757] to-[#c4684a] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#d97757]/30">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--background)] border border-[var(--border)] rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-[#6a9bcc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>

            <div className="absolute inset-0 animate-spin-slow animation-delay-1000" style={{ animationDirection: 'reverse' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[var(--background)] border border-[var(--border)] rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-[#788c5d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <div className="absolute inset-0 animate-reverse-spin animation-delay-500">
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--background)] border border-[var(--border)] rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-[#d97757]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
