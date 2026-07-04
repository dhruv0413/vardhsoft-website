'use client'

import React, { useState, useEffect } from 'react'
import { Sun, Moon, Palette, Check } from 'lucide-react'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>('dark')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Read initial theme from document class
    const root = document.documentElement
    if (root.classList.contains('theme-light')) {
      setTheme('light')
    } else if (root.classList.contains('theme-warm')) {
      setTheme('warm')
    } else {
      setTheme('dark')
    }
  }, [])

  const changeTheme = (newTheme: string) => {
    const root = document.documentElement
    root.classList.remove('theme-light', 'theme-warm')
    
    if (newTheme === 'light') {
      root.classList.add('theme-light')
    } else if (newTheme === 'warm') {
      root.classList.add('theme-warm')
    }
    
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    // Dispatch custom event for parts of the app that need to listen to theme changes
    window.dispatchEvent(new Event('theme-change'))
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Selector Menu */}
      {isOpen && (
        <div className="mb-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-2.5 flex flex-col gap-1 min-w-[170px] animate-fadeIn transition-all">
          <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider px-2.5 py-1.5 border-b border-slate-100 dark:border-white/5">
            Select Theme
          </div>
          {[
            { id: 'light', name: 'Clean Light', icon: <Sun className="w-4 h-4 text-amber-500" /> },
            { id: 'dark', name: 'Modern Dark', icon: <Moon className="w-4 h-4 text-indigo-400" /> },
            { id: 'warm', name: 'Warm Editorial', icon: <Palette className="w-4 h-4 text-orange-400" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                changeTheme(item.id)
                setIsOpen(false)
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer text-slate-800 dark:text-slate-200 ${
                theme === item.id 
                  ? 'bg-slate-100 dark:bg-white/10 text-teal-600 dark:text-teal-400' 
                  : 'hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
              {theme === item.id && <Check className="w-3.5 h-3.5 text-teal-500" />}
            </button>
          ))}
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-slate-900/90 dark:bg-slate-950/80 text-white hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center border border-slate-200 dark:border-white/10 backdrop-blur-md cursor-pointer group"
        title="Change Theme"
      >
        <Palette className="w-5 h-5 text-teal-500 dark:text-teal-400 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  )
}
