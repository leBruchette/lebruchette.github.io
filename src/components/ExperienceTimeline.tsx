'use client'

import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Calendar } from 'lucide-react'
import { content } from '@/data/content'

export default function ExperienceTimeline() {
    const { experience } = content

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    }

    const timelineVariants = {
        hidden: { height: 0 },
        visible: {
            height: "100%",
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    }

    return (
        <section className="py-20 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto">
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

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 w-0.5 bg-gray-300 h-full hidden md:block">
                        <motion.div
                            variants={timelineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full bg-gradient-to-b from-purple-500 to-blue-600"
                        />
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        {experience.items.map((job, index) => (
                            <motion.div
                                key={job.id}
                                variants={itemVariants}
                                className="relative"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-6 top-8 w-5 h-5 bg-white border-4 border-purple-500 rounded-full z-10 hidden md:block">
                                    <div className="absolute inset-1 bg-purple-500 rounded-full"></div>
                                </div>

                                {/* Content Card */}
                                <div className="md:ml-20 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div className="p-8">
                                        {/* Header with Timeline Info */}
                                        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                            {/* Company Logo */}
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                                    {/*{job.company.charAt(0)}*/}
                                                    <img src={job.logo} alt={job.company + " logo"} className="w-16 h-16 object-contain rounded-xl" />
                                                </div>
                                            </div>

                                            {/* Job Details */}
                                            <div className="flex-grow">
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                                            {job.position}
                                                        </h3>
                                                        <div className="flex items-center gap-2 text-purple-600 font-semibold mb-3">
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

                                                    {/* Timeline Info Badge */}
                                                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
                                                        <div className="flex items-center gap-2 text-purple-700 mb-2">
                                                            <Calendar size={16} />
                                                            <span className="font-semibold">{job.duration}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <MapPin size={16} />
                                                            <span className="text-sm">{job.location}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Job Description */}
                                                <div className="mb-6">
                                                    <ul className="space-y-3">
                                                        {job.description.map((point, pointIndex) => (
                                                            <li key={pointIndex} className="flex items-start gap-3">
                                                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0"></div>
                                                                <span className="text-gray-700 leading-relaxed">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Technologies */}
                                                <div>
                                                    <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-500">
                                                        Technologies Used
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {job.technologies.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200 hover:from-purple-200 hover:to-blue-200 transition-all duration-200"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Timeline Connector */}
                                {index < experience.items.length - 1 && (
                                    <div className="md:hidden flex justify-center my-8">
                                        <div className="w-0.5 h-8 bg-gradient-to-b from-purple-400 to-blue-400"></div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}