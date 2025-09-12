'use client'

import {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {Menu, X, Download} from 'lucide-react'

const navItems = [
    {name: 'home', href: '#home'},
    {name: 'about', href: '#about'},
    {name: 'experience', href: '#experience'},
    {name: 'contact', href: '#contact'},
    {name: 'resume', href: '/resume.pdf', download: true}
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [isScrolled, setIsScrolled] = useState(false)

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.slice(1))
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.slice(1))
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        setIsOpen(false)
    }

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                initial={{y: -100}}
                animate={{y: 0}}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/90 backdrop-blur-md shadow-lg'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Name */}
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            className={`font-bold text-xl transition-colors duration-300 ${
                                isScrolled ? 'text-gray-800' : 'text-white'
                            }`}
                        >
                            michael bruzina
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) =>
                                <button
                                    key={item.name}

                                    onClick={() => {
                                        item.download ? window.open(item.href, '_blank') : scrollToSection(item.href)
                                    }
                                    }
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 ${
                                        activeSection === item.href.slice(1)
                                            ? isScrolled
                                                ? 'text-purple-600'
                                                : 'text-white'
                                            : isScrolled
                                                ? 'text-gray-600 hover:text-purple-600'
                                                : 'text-white/80 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                    {activeSection === item.href.slice(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                                                isScrolled ? 'bg-purple-600' : 'bg-white'
                                            }`}
                                        />
                                    )}
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden p-2 transition-colors duration-300 ${
                                isScrolled ? 'text-gray-800' : 'text-white'
                            }`}
                        >
                            {isOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md shadow-lg"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        item.download ? window.open(item.href, '_blank') : scrollToSection(item.href)
                                    }
                                    }
                                    className={`block w-full text-left px-3 py-2 text-lg font-medium transition-colors duration-300 ${
                                        activeSection === item.href.slice(1)
                                            ? 'text-purple-600 bg-purple-50 rounded-lg'
                                            : 'text-gray-800 hover:text-purple-600 hover:bg-gray-50 rounded-lg'
                                    }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>


                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}