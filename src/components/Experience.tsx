'use client'

import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Calendar } from 'lucide-react'
import { content } from '@/data/content'

export default function Experience() {
    const { experience } = content

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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section className="py-20 px-4 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        {experience.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {experience.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {experience.items.map((job, index) => (
                        <motion.div
                            key={job.id}
                            variants={itemVariants}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    {/* Company Logo */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                            {job.company.charAt(0)}
                                        </div>
                                    </div>

                                    {/* Job Details */}
                                    <div className="flex-grow">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                                                    {job.position}
                                                </h3>
                                                <div className="flex items-center gap-2 text-purple-600 font-semibold mb-2">
                                                    {job.companyUrl ? (
                                                        <a
                                                            href={job.companyUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 hover:text-purple-700 transition-colors"
                                                        >
                                                            {job.company}
                                                            <ExternalLink size={16} />
                                                        </a>
                                                    ) : (
                                                        job.company
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:items-end gap-2">
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Calendar size={16} />
                                                    <span className="font-medium">{job.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <MapPin size={16} />
                                                    <span>{job.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Job Description */}
                                        <div className="mb-6">
                                            <ul className="space-y-2">
                                                {job.description.map((point, pointIndex) => (
                                                    <li key={pointIndex} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-700 leading-relaxed">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider"
                                                style={{ color: 'var(--text-tertiary)' }}>
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {job.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 rounded-full text-sm font-medium"
                                                        style={{
                                                            background: 'linear-gradient(135deg, var(--primary-100), var(--secondary-100))',
                                                            color: 'var(--primary-700)'
                                                        }}
                                                    >
                            {tech}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}