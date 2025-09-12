'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'cyberpunk' | 'professional' | 'minimal'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
    themes: Array<{ name: Theme; label: string }>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const themes = [
    { name: 'light' as Theme, label: 'Light' },
    { name: 'dark' as Theme, label: 'Dark' },
    { name: 'cyberpunk' as Theme, label: 'Cyberpunk' },
    { name: 'professional' as Theme, label: 'Professional' },
    { name: 'minimal' as Theme, label: 'Minimal' }
]

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        // Load saved theme or detect system preference
        const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') as Theme : null
        const systemTheme = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

        const initialTheme = savedTheme || systemTheme
        setTheme(initialTheme)
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', initialTheme)
        }
    }, [])

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme)
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme)
        }
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', newTheme)
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange, themes }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}