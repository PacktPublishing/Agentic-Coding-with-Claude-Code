'use client';

export default function HeroWaveform() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-24 lg:py-32">
      {/* Animated Waveform Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d97757" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#d97757" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97757" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6a9bcc" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#6a9bcc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6a9bcc" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#788c5d" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#788c5d" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#788c5d" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200" fill="none" stroke="url(#wave-gradient-1)" strokeWidth="3" className="animate-wave" />
          <path d="M0,300 Q200,250 400,300 T800,300 T1200,300 T1600,300 T2000,300" fill="none" stroke="url(#wave-gradient-2)" strokeWidth="2.5" className="animate-wave animation-delay-1000" />
          <path d="M0,400 Q300,350 600,400 T1200,400 T1800,400 T2400,400" fill="none" stroke="url(#wave-gradient-3)" strokeWidth="2" className="animate-wave animation-delay-500" />
        </svg>

        {/* Pulse circles */}
        <div className="absolute left-[20%] top-[30%] h-4 w-4 animate-ping-slow rounded-full bg-[#d97757]" />
        <div className="absolute left-[60%] top-[50%] h-3 w-3 animate-ping-slow animation-delay-2000 rounded-full bg-[#6a9bcc]" />
        <div className="absolute left-[40%] top-[70%] h-3.5 w-3.5 animate-ping-slow animation-delay-1000 rounded-full bg-[#788c5d]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-1.5 text-sm font-medium text-[var(--foreground)] shadow-sm">
                <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-[#d97757]" />
                Community-Powered Automation
              </div>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl animation-delay-200">
              Supercharge Claude Code with{' '}
              <span className="bg-gradient-to-r from-[#d97757] via-[#6a9bcc] to-[#788c5d] bg-clip-text text-transparent">
                powerful hooks
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in max-w-2xl text-lg text-[var(--slate-light)] sm:text-xl animation-delay-400">
              Discover, share, and install community-driven hooks that transform your AI-powered development workflow.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in flex flex-col gap-4 sm:flex-row animation-delay-600">
              <button className="group inline-flex items-center justify-center rounded-lg bg-[#d97757] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                Browse Hooks
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="group inline-flex items-center justify-center rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-6 py-3 text-base font-semibold text-[var(--foreground)] transition-all hover:border-[#6a9bcc]">
                <svg className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Submit a Hook
              </button>
            </div>

            {/* Stats */}
            <div className="animate-fade-in flex flex-wrap gap-8 pt-4 animation-delay-600">
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

          {/* Right Column - Equalizer Visualization */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-md">
              {/* Equalizer Bars */}
              <div className="flex h-full items-end justify-around gap-2 rounded-2xl border border-[var(--border)] bg-[var(--background)]/50 p-8 backdrop-blur-sm">
                {[
                  { height: '60%', color: '#d97757' },
                  { height: '40%', color: '#6a9bcc' },
                  { height: '75%', color: '#788c5d' },
                  { height: '50%', color: '#d97757' },
                  { height: '85%', color: '#6a9bcc' },
                  { height: '45%', color: '#788c5d' },
                  { height: '70%', color: '#d97757' },
                  { height: '55%', color: '#6a9bcc' },
                  { height: '65%', color: '#788c5d' },
                  { height: '80%', color: '#d97757' },
                ].map((bar, index) => (
                  <div
                    key={index}
                    className="w-full animate-equalizer rounded-t-lg"
                    style={{
                      height: bar.height,
                      backgroundColor: bar.color,
                      opacity: 0.7,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  />
                ))}
              </div>

              {/* Floating particles */}
              <div className="absolute -left-4 top-[20%] h-2 w-2 animate-float rounded-full bg-[#d97757]" />
              <div className="absolute -right-4 top-[40%] h-2.5 w-2.5 animate-float animation-delay-1000 rounded-full bg-[#6a9bcc]" />
              <div className="absolute -left-4 top-[60%] h-2 w-2 animate-float animation-delay-2000 rounded-full bg-[#788c5d]" />
              <div className="absolute -right-4 top-[80%] h-2.5 w-2.5 animate-float animation-delay-1500 rounded-full bg-[#d97757]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
