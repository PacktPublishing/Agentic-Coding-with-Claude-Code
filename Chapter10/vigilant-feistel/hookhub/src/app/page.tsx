import HookCard from '@/components/HookCard';
import { Hook } from '@/types/hook';
import hooksData from '@/data/hooks.json';

export default function Home() {
  const hooks: Hook[] = hooksData.hooks as Hook[];
  const featuredHooks = hooks.filter(hook => hook.featured);
  const regularHooks = hooks.filter(hook => !hook.featured);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#d97757] flex items-center justify-center animate-float">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-[var(--foreground)]">HookHub</span>
            </div>
            <div className="flex-1 max-w-md">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--slate-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search hooks..."
                  className="w-full pl-10 pr-4 py-2.5 border border-[var(--border)] rounded-xl bg-[var(--background)] text-[var(--foreground)] placeholder-[var(--slate-light)] focus:outline-none focus:ring-2 focus:ring-[#d97757]/30 focus:border-[#d97757] transition-all"
                />
              </div>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--slate-light)] hover:text-[var(--foreground)] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--foreground)] mb-6 leading-[1.1] tracking-tight animate-fade-in-up">
              Extend Claude Code with
              <span className="text-[#d97757]"> powerful hooks</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--slate-light)] mb-10 leading-relaxed max-w-2xl animate-fade-in-up stagger-1 opacity-0">
              Discover community-driven hooks that enhance your AI-powered development workflows. Automate, validate, and customize how Claude Code works for you.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-2 opacity-0">
              <button className="px-6 py-3 bg-[#d97757] hover:bg-[#c4684a] text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#d97757]/25 animate-pulse-glow">
                Browse Hooks
              </button>
              <button className="px-6 py-3 border border-[var(--border)] hover:border-[var(--slate-light)] text-[var(--foreground)] font-medium rounded-xl transition-all duration-200 hover:scale-105">
                Submit a Hook
              </button>
            </div>
          </div>
        </section>

        {/* Featured Hooks */}
        {featuredHooks.length > 0 && (
          <section className="pb-16">
            <div className="flex items-center gap-3 mb-8 animate-slide-in-left stagger-3 opacity-0">
              <div className="w-1 h-6 bg-[#d97757] rounded-full"></div>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Featured
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredHooks.map((hook, index) => (
                <div key={hook.id} className={`animate-fade-in-up opacity-0 stagger-${Math.min(index + 4, 6)}`}>
                  <HookCard hook={hook} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Hooks */}
        <section className="pb-20">
          <div className="flex items-center gap-3 mb-8 animate-slide-in-left stagger-5 opacity-0">
            <div className="w-1 h-6 bg-[var(--slate-light)] rounded-full"></div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              All Hooks
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularHooks.map((hook, index) => (
              <div key={hook.id} className={`animate-fade-in-up opacity-0`} style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <HookCard hook={hook} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--slate-light)]">
            <p>Built for the Claude Code community</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[var(--foreground)] transition-colors">Documentation</a>
              <a href="#" className="hover:text-[var(--foreground)] transition-colors">Contribute</a>
              <a href="#" className="hover:text-[var(--foreground)] transition-colors">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
