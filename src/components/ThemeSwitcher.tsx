'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false)
    const { theme, setTheme, themes } = useTheme()

    const themeColors = {
        light: 'bg-gradient-to-r from-blue-400 to-purple-500',
        dark: 'bg-gradient-to-r from-gray-700 to-gray-900',
        cyberpunk: 'bg-gradient-to-r from-pink-500 to-cyan-400',
        professional: 'bg-gradient-to-r from-gray-800 to-amber-600',
        minimal: 'bg-gradient-to-r from-gray-900 to-blue-600'
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-white/90 backdrop-blur-md shadow-xl rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 border border-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    borderColor: 'var(--border)'
                }}
            >
                <Palette size={24} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 min-w-[200px] border"
                        style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderColor: 'var(--border)'
                        }}
                    >
                        <div className="text-sm font-semibold mb-3 px-2" style={{ color: 'var(--text-primary)' }}>
                            Choose Theme
                        </div>

                        <div className="space-y-2">
                            {themes.map((themeOption) => (
                                <motion.button
                                    key={themeOption.name}
                                    onClick={() => {
                                        setTheme(themeOption.name)
                                        setIsOpen(false)
                                    }}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-200"
                                    whileHover={{ x: 4 }}
                                    style={{
                                        backgroundColor: theme === themeOption.name ? 'var(--primary-500)' : 'transparent',
                                        color: theme === themeOption.name ? 'white' : 'var(--text-primary)'
                                    }}
                                >
                                    <div className={`w-6 h-6 rounded-full ${themeColors[themeOption.name]}`}></div>
                                    <span className="flex-grow text-left font-medium">
                    {themeOption.label}
                  </span>
                                    {theme === themeOption.name && (
                                        <Check size={16} />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        <div className="border-t mt-4 pt-3" style={{ borderColor: 'var(--border)' }}>
                            <div className="text-xs px-2" style={{ color: 'var(--text-tertiary)' }}>
                                Theme preference is saved locally
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Click outside to close */}
            {isOpen && (
                <div
                    className="fixed inset-0 -z-10"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}