'use client'

import {motion} from 'framer-motion'
import {Github, Linkedin} from 'lucide-react'
import {content} from '@/data/content'

export default function Contact() {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {duration: 0.6}
        }
    }

    const contactMethods = [{
        icon: Github,
        title: "GitHub",
        description: "Check out my projects",
        values: ["github.com/lebruchette", "github.com/mbruzina"],
        actions: ["https://github.com/lebruchette", "https://github.com/mbruzina"]
    }, {
        icon: Linkedin,
        title: "LinkedIn",
        description: "Let's connect professionally",
        values: ["linkedin.com/in/mpbruzina"],
        actions: ["https://linkedin.com/in/mpbruzina"]
    }]

    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-4">
                        Let's Build Something Great Together
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Whether you need backend architecture, DevOps automation, or infrastructure solutions, I'd love
                        to discuss how we can work together on your next project.
                    </p>
                </motion.div>

                {/* Contact Methods */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className="mb-16"
                >
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group"
                            >
                                <div
                                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <method.icon size={28} className="text-white"/>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">
                                    {method.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    {method.description}
                                </p>
                                <div className="space-y-2">
                                    {method.values.map((value, valueIndex) => (
                                        <a
                                            key={valueIndex}
                                            href={method.actions[valueIndex]}
                                            className="block text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                                        >
                                            {value}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
