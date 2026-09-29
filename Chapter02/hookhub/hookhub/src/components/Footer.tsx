export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#d97757] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <span className="text-base font-semibold tracking-tight text-[var(--foreground)]">HookHub</span>
            </div>
            <p className="text-sm text-[var(--slate-light)] leading-relaxed mb-6">
              Discover and share community-driven hooks for Claude Code. Enhance your AI-powered development workflow.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[var(--light-gray)] flex items-center justify-center text-[var(--slate-light)] hover:bg-[#d97757] hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://twitter.com/anthropic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[var(--light-gray)] flex items-center justify-center text-[var(--slate-light)] hover:bg-[#d97757] hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[var(--light-gray)] flex items-center justify-center text-[var(--slate-light)] hover:bg-[#d97757] hover:text-white transition-all duration-300"
                aria-label="Discord"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  Hook Examples
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  Contribute
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  Submit a Hook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  Discussions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  Showcase
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  About Anthropic
                </a>
              </li>
              <li>
                <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  Claude
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--slate-light)] hover:text-[#d97757] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[var(--slate-light)]">
              <span>Built with</span>
              <svg className="w-4 h-4 text-[#d97757]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>for the Claude Code community</span>
            </div>

            {/* Anthropic Attribution */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-[var(--slate-light)]">Powered by</span>
              <a
                href="https://www.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--light-gray)] hover:bg-[#d97757]/10 transition-colors group"
              >
                {/* Anthropic icon mark — geometric 'A' */}
                <svg className="w-4 h-4 text-[var(--foreground)] group-hover:text-[#d97757] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.827 3.52h-3.654L2 20h3.61l1.497-3.876h9.776L18.391 20H22L13.827 3.52zm-2.085 4.26l3.342 8.646H8.401l3.341-8.645z" />
                </svg>
                <span className="text-sm font-semibold tracking-tight text-[var(--foreground)] group-hover:text-[#d97757] transition-colors">Anthropic</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 pt-4 border-t border-[var(--border)] text-center">
            <p className="text-xs text-[var(--slate-light)]">
              &copy; {new Date().getFullYear()} HookHub. All rights reserved. Made with Claude Code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
