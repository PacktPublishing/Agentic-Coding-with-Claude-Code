import { Hook, HookCategory } from '@/types/hook';

interface HookCardProps {
  hook: Hook;
}

const categoryStyles: Record<string, { bg: string; text: string }> = {
  [HookCategory.MONITORING]: { bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400' },
  [HookCategory.SECURITY]: { bg: 'bg-red-500/10', text: 'text-red-600 dark:text-red-400' },
  [HookCategory.WORKFLOW]: { bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400' },
  [HookCategory.TESTING]: { bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400' },
  [HookCategory.INTEGRATION]: { bg: 'bg-violet-500/10', text: 'text-violet-600 dark:text-violet-400' },
  [HookCategory.UTILITY]: { bg: 'bg-slate-500/10', text: 'text-slate-600 dark:text-slate-400' },
  [HookCategory.LEARNING]: { bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400' },
  [HookCategory.TEAM]: { bg: 'bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400' },
};

const languageColors: Record<string, string> = {
  'Python': 'bg-[#3776ab]',
  'JavaScript': 'bg-[#f7df1e]',
  'TypeScript': 'bg-[#3178c6]',
  'PHP': 'bg-[#777bb4]',
  'Go': 'bg-[#00add8]',
};

export default function HookCard({ hook }: HookCardProps) {
  const categoryStyle = categoryStyles[hook.category] || { bg: 'bg-slate-500/10', text: 'text-slate-600' };

  return (
    <div className="group bg-[var(--background)] border border-[var(--border)] rounded-xl p-5 hover:border-[#d97757]/40 hover:shadow-lg hover:shadow-[#d97757]/5 transition-all duration-200">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-semibold text-[var(--foreground)] leading-snug">
          {hook.name}
        </h3>
        {hook.featured && (
          <span className="shrink-0 inline-flex items-center gap-1 bg-[#d97757] text-white text-[10px] font-medium px-2 py-1 rounded-md uppercase tracking-wide">
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </span>
        )}
      </div>

      <p className="text-sm text-[var(--slate-light)] leading-relaxed mb-4 line-clamp-2">
        {hook.description}
      </p>

      <div className="flex items-center gap-2 mb-4">
        <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md ${categoryStyle.bg} ${categoryStyle.text}`}>
          {hook.category}
        </span>
        <div className="flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full ${languageColors[hook.language] || 'bg-[var(--slate-light)]'}`}></div>
          <span className="text-xs text-[var(--slate-light)]">{hook.language}</span>
        </div>
      </div>

      {hook.hookTypes.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hook.hookTypes.map((type) => (
            <span
              key={type}
              className="text-[11px] bg-[var(--foreground)]/5 text-[var(--slate-light)] px-2 py-0.5 rounded font-mono"
            >
              {type}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[var(--slate-light)]">
            {hook.author}
          </span>
          {hook.stars && (
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-[#d97757]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-medium text-[var(--foreground)]">{hook.stars}</span>
            </div>
          )}
        </div>

        <a
          href={hook.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--foreground)] hover:text-[#d97757] transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          View
          <svg className="w-3 h-3 opacity-50 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}