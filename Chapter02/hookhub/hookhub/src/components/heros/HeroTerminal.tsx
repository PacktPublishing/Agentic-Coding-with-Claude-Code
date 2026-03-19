'use client';

import { useEffect, useState } from 'react';

export default function HeroTerminal() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const fullCommand = 'npx hookhub install auto-test';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullCommand.length) {
        setTypedText(fullCommand.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowOutput(true), 500);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--background)] py-24 lg:py-32">
      {/* Matrix-style background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,var(--foreground)_2px,var(--foreground)_3px)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)] shadow-sm animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-[#d97757] animate-pulse" />
              <span className="text-sm font-medium text-[var(--foreground)]">Community-Powered Automation</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--foreground)] animate-fade-in animation-delay-200">
              Supercharge <span className="text-[#d97757]">Claude Code</span> with powerful hooks
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[var(--slate-light)] max-w-2xl leading-relaxed animate-fade-in animation-delay-400">
              Discover, share, and install community-driven hooks that transform your AI-powered development workflow.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
              <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#d97757] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#c86647]">
                Browse Hooks
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--border)] text-[var(--foreground)] font-semibold hover:border-[#6a9bcc] hover:bg-[#6a9bcc]/10 transition-all duration-300">
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Submit a Hook
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border)] animate-fade-in animation-delay-600">
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)] font-mono">50+</div>
                <div className="text-sm text-[var(--slate-light)] mt-1">Hooks Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)] font-mono">1.2k</div>
                <div className="text-sm text-[var(--slate-light)] mt-1">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)] font-mono">200+</div>
                <div className="text-sm text-[var(--slate-light)] mt-1">Contributors</div>
              </div>
            </div>
          </div>

          {/* Right column - Terminal mockup */}
          <div className="relative animate-fade-in animation-delay-400">
            <div className="relative bg-[#1e1e1e] rounded-lg shadow-2xl border border-[var(--border)] overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-[#3e3e3e]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="ml-4 text-xs text-gray-400 font-mono">terminal — bash — 80x24</div>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm min-h-[300px] relative">
                <div className="space-y-4 relative z-10">
                  <div className="text-[#6a9bcc]">~ Welcome to HookHub CLI ~</div>
                  <div className="text-[#788c5d] text-xs">Version 1.0.0 | Node v20.10.0</div>
                  <div className="h-4" />

                  <div className="flex items-center">
                    <span className="text-[#d97757]">➜</span>
                    <span className="text-[#6a9bcc] ml-2">~</span>
                    <span className="text-gray-400 ml-2">$</span>
                    <span className="ml-2 text-white">{typedText}</span>
                    <span className={`ml-0.5 inline-block w-2 h-5 bg-[#d97757] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                  </div>

                  {showOutput && (
                    <div className="space-y-2 animate-fade-in">
                      <div className="text-[#788c5d]">✓ Downloading hook: auto-test</div>
                      <div className="text-[#788c5d]">✓ Installing dependencies...</div>
                      <div className="text-[#788c5d]">✓ Hook installed successfully!</div>
                      <div className="h-2" />
                      <div className="text-gray-400 text-xs">
                        Run <span className="text-[#d97757]">claude-code --help</span> to see available commands
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -inset-4 bg-[#d97757] opacity-10 blur-3xl rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
