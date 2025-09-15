'use client'

import { motion } from 'framer-motion'
import { User, Code, Server, Cloud, Settings, GitBranch, Terminal } from 'lucide-react'
import { content } from '@/data/content'

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 }
        }
    }

    const techJourney = [
        {
            era: "Early Java Days",
            tech: "Java (pre-5), Struts, Spring XML",
            description: "Back when Java was young and Struts ruled the web. We configured Spring beans with XML files and thought it was revolutionary.",
            icon: Code
        },
        {
            era: "Groovy Era",
            tech: "Groovy, Grails",
            description: "Embracing Groovy and Grails for their elegant syntax and convention-over-configuration approach, making Spring configuration more enjoyable than XML",
            icon: Settings
        },
        {
            era: "Modern Java",
            tech: "Java 8, Spring Boot, Microservices",
            description: "Java 8 and Spring Boot microservices. The first time in my career I had a lightbulb moment while at a tech conference",
            icon: Server
        },
        {
            era: "Python Adventure",
            tech: "Python, Flask, Pyramid",
            description: "Exploring Python, Flask and Pyramid driven by startup FOMO",
            icon: Code
        },
        {
            era: "Cloud Migration",
            tech: "Terraform, CDK, Serverless Framework, AWS",
            description: "Terraform, CDK and a little Serverless Framework as we migrated on-prem services to AWS",
            icon: Cloud
        },
        {
            era: "DevOps Evolution",
            tech: "Golang, Bash",

            description: "Golang and bash scripting to strengthen my infrastructure automation and tooling skills",
            icon: Terminal
        }
    ]

    const focusAreas = [
        {
            icon: Server,
            title: "Backend Development",
            description: "Building robust APIs and system architecture"
        },
        {
            icon: Cloud,
            title: "Infrastructure & IaC",
            description: "Infrastructure as Code solutions and cloud architecture"
        },
        {
            icon: Settings,
            title: "Containerization",
            description: "Docker, Kubernetes and container orchestration"
        },
        {
            icon: GitBranch,
            title: "CI/CD Automation",
            description: "Automated deployment pipelines and DevOps tooling"
        }
    ]

    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-4">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        From full stack development to DevOps and infrastructure
                    </p>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                                <User size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300">My Journey</h3>
                        </div>
                        <div className="space-y-4 text-gray-700 dark:text-gray-400 leading-relaxed">
                            <p>
                                I began my career as a full stack developer, developing in full stack roles using various Java/JVM based ecosystems. Over time, I've transitioned to more of a backend and DevOps focus, driven by a passion for API development and system architecture.
                            </p>
                            <p>
                                Most recently, my focus has been infrastructure and IaC solutioning, including containerization and CI/CD automation and tooling. With my combined experience in full stack development and DevOps, I bring a comprehensive perspective to building and maintaining robust, scalable systems.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Current Focus Areas */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <motion.h3
                        variants={itemVariants}
                        className="text-3xl font-bold text-gray-900 dark:text-gray-200 text-center mb-12"
                    >
                        Current Focus Areas
                    </motion.h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {focusAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <area.icon size={28} className="text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">
                                    {area.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {area.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Journey Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h3
                        variants={itemVariants}
                        className="text-3xl font-bold text-gray-900 dark:text-gray-200 text-center mb-4"
                    >
                        A Brief History of My Tech Journey
                    </motion.h3>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto"
                    >
                        Each era brought new challenges, learnings, and that occasional lightbulb moment
                    </motion.p>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 w-0.5 bg-gray-300 dark:bg-gray-600 h-full hidden md:block">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
                                className="w-full bg-gradient-to-b from-purple-500 to-blue-600"
                            />
                        </div>

                        <div className="space-y-8">
                            {techJourney.map((era, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 top-6 w-5 h-5 bg-white dark:bg-gray-900 border-4 border-purple-500 rounded-full z-10 hidden md:block">
                                        <div className="absolute inset-1 bg-purple-500 rounded-full"></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="md:ml-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <era.icon size={20} className="text-white" />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                                                        {era.era}
                                                    </h4>
                                                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                                        {era.tech}
                                                    </span>
                                                </div>
                                                <p className="text-gray-700 dark:text-gray-400 leading-relaxed italic">
                                                    {era.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Timeline Connector */}
                                    {index < techJourney.length - 1 && (
                                        <div className="md:hidden flex justify-center my-6">
                                            <div className="w-0.5 h-6 bg-gradient-to-b from-purple-400 to-blue-400"></div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                            Let's Build Something Great Together
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            Whether you need backend architecture, DevOps automation, or infrastructure solutions,
                            I'd love to discuss how we can work together on your next project.
                        </p>
                        <motion.a
                            href={`mailto:${content?.personal?.email || 'hello@example.com'}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Get In Touch
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}