import React from 'react';

export default function Header({ onNewChat }) {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-surface/80 backdrop-blur-xl border-b border-surface-container-highest z-10 sticky top-0">
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-on-surface">Digital Curator</h1>
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">AI Battle Arena</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
          <span className="text-sm font-medium text-on-surface-variant">Systems Online</span>
        </div>
        <button
          onClick={onNewChat}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest text-primary hover:bg-surface-container-lowest hover:shadow-[0_4px_20px_0_rgba(43,52,55,0.05)] transition-all font-semibold text-sm"
        >
          New Problem
        </button>
      </div>
    </header>
  )
}
