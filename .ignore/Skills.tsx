'use client'

import { motion } from 'framer-motion'
import { content } from '@/data/content'

export default function Skills() {
    const { skills } = content

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const categoryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    const skillVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    }

    const getColorClasses = (color: string) => {
        const colorMap = {
            purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                title: 'text-purple-800',
                progress: 'bg-purple-500',
                progressBg: 'bg-purple-100'
            },
            blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                title: 'text-blue-800',
                progress: 'bg-blue-500',
                progressBg: 'bg-blue-100'
            },
            green: {
                bg: 'bg-green-50',
                border: 'border-green-200',
                title: 'text-green-800',
                progress: 'bg-green-500',
                progressBg: 'bg-green-100'
            },
            orange: {
                bg: 'bg-orange-50',
                border: 'border-orange-200',
                title: 'text-orange-800',
                progress: 'bg-orange-500',
                progressBg: 'bg-orange-100'
            }
        }
        return colorMap[color as keyof typeof colorMap] || colorMap.purple
    }

    return (
        <section className="py-20 px-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        {skills.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {skills.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {skills.categories.map((category) => {
                        const colors = getColorClasses(category.color)

                        return (
                            <motion.div
                                key={category.name}
                                variants={categoryVariants}
                                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
                            >
                                <h3 className={`text-2xl font-bold ${colors.title} mb-6`}>
                                    {category.name}
                                </h3>

                                <div className="space-y-4">
                                    {category.skills.map((skill) => (
                                        <motion.div
                                            key={skill.name}
                                            variants={skillVariants}
                                            className="space-y-2"
                                        >
                                            <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                                                <span className="text-sm text-gray-500 font-semibold">
                          {skill.level}%
                        </span>
                                            </div>

                                            <div className={`${colors.progressBg} rounded-full h-2 overflow-hidden`}>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: 0.2,
                                                        ease: "easeOut"
                                                    }}
                                                    className={`${colors.progress} h-full rounded-full relative`}
                                                >
                                                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Optional: Skills Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    <div className="space-y-2">
                        <div className="text-3xl font-bold" style={{ color: 'var(--primary-600)' }}>
                            {skills.categories.reduce((total, cat) => total + cat.skills.length, 0)}+
                        </div>
                        <div className="font-medium" style={{ color: 'var(--text-secondary)' }}>Total Skills</div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-3xl font-bold" style={{ color: 'var(--secondary-600)' }}>5+</div>
                        <div className="font-medium" style={{ color: 'var(--text-secondary)' }}>Years Experience</div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-3xl font-bold" style={{ color: 'var(--accent-600)' }}>50+</div>
                        <div className="font-medium" style={{ color: 'var(--text-secondary)' }}>Projects Completed</div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-3xl font-bold" style={{ color: 'var(--neutral-600)' }}>10+</div>
                        <div className="font-medium" style={{ color: 'var(--text-secondary)' }}>Technologies Mastered</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}