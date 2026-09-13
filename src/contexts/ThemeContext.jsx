/**
 * ThemeContext.jsx
 *
 * Provides the global dark/light theme state to the entire component tree.
 * Persists the user's preference in localStorage and syncs the `.dark-mode`
 * class on <html> so CSS variables update instantly.
 *
 * Usage:
 *   const { isDark, toggleTheme } = useThemeContext()
 */

import { createContext, useContext, useState, useEffect } from 'react'

// ─── Context ───────────────────────────────────────────────────────────────────

const ThemeContext = createContext(null)

// ─── Helpers ───────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'theme'

const getInitialTheme = () => localStorage.getItem(STORAGE_KEY) === 'dark'

const syncThemeClass = (isDark) => {
  document.documentElement.classList.toggle('dark', isDark)
  document.documentElement.classList.toggle('dark-mode', isDark)
  localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
}

// ─── Provider ──────────────────────────────────────────────────────────────────

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialTheme)

  // Keep <html> class and localStorage in sync whenever isDark changes
  useEffect(() => {
    syncThemeClass(isDark)
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// ─── Hook ──────────────────────────────────────────────────────────────────────

/**
 * useThemeContext — consume the theme state from any component.
 * Throws if used outside <ThemeProvider>.
 */
export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used inside <ThemeProvider>')
  }
  return context
}

export default ThemeContext
