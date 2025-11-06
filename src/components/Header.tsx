import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}
export function Header({
  isDark,
  setIsDark
}: HeaderProps) {
  return <header className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-slate-950/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Hypothec
            <span className={isDark ? 'text-blue-400' : 'text-red-600'}>
              .AI
            </span>
          </div>
        </div>
        <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-all`} aria-label="Toggle theme">
          {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
      </div>
    </header>;
}