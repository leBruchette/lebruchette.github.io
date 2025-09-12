'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

// Your skills data
const skills = {
  title: "Skills & Expertise",
  subtitle: "My development journey and technology roadmap",
  categories: [
    {
      name: "Frontend Development",
      color: "purple",
      skills: [
        { name: "React", level: 95, category: "frontend" },
        { name: "TypeScript", level: 90, category: "frontend" },
        { name: "Next.js", level: 85, category: "frontend" },
        { name: "Tailwind CSS", level: 90, category: "frontend" },
        { name: "JavaScript", level: 95, category: "frontend" },
        { name: "HTML5 & CSS3", level: 95, category: "frontend" }
      ]
    },
    {
      name: "Backend Development",
      color: "blue",
      skills: [
        { name: "Node.js", level: 90, category: "backend" },
        { name: "Express.js", level: 85, category: "backend" },
        { name: "PostgreSQL", level: 80, category: "backend" },
        { name: "MongoDB", level: 85, category: "backend" },
        { name: "REST APIs", level: 90, category: "backend" },
        { name: "GraphQL", level: 70, category: "backend" }
      ]
    },
    {
      name: "Tools & Technologies",
      color: "green",
      skills: [
        { name: "Git & GitHub", level: 95, category: "tools" },
        { name: "Docker", level: 75, category: "tools" },
        { name: "AWS", level: 70, category: "tools" },
        { name: "Jest", level: 80, category: "tools" },
        { name: "Figma", level: 85, category: "tools" },
        { name: "VS Code", level: 95, category: "tools" }
      ]
    },
    {
      name: "Soft Skills",
      color: "orange",
      skills: [
        { name: "Problem Solving", level: 95, category: "soft" },
        { name: "Team Leadership", level: 85, category: "soft" },
        { name: "Communication", level: 90, category: "soft" },
        { name: "Project Management", level: 80, category: "soft" },
        { name: "Mentoring", level: 85, category: "soft" },
        { name: "Agile/Scrum", level: 90, category: "soft" }
      ]
    }
  ]
}

export default function SkillsTimelineUI() {
  const [selectedPath, setSelectedPath] = useState('all')
  const [hoveredSkill, setHoveredSkill] = useState(null)

  // Create timeline data organized by learning phases
  const timelinePhases = [
    {
      phase: "Foundation",
      year: "2019-2020",
      description: "Building core web development skills",
      skills: [
        { name: "HTML5 & CSS3", level: 95, color: "purple", category: "Frontend Development" },
        { name: "JavaScript", level: 95, color: "purple", category: "Frontend Development" },
        { name: "Git & GitHub", level: 95, color: "green", category: "Tools & Technologies" },
        { name: "VS Code", level: 95, color: "green", category: "Tools & Technologies" }
      ]
    },
    {
      phase: "Frontend Mastery",
      year: "2020-2021", 
      description: "Advancing frontend skills with modern frameworks",
      skills: [
        { name: "React", level: 95, color: "purple", category: "Frontend Development" },
        { name: "Tailwind CSS", level: 90, color: "purple", category: "Frontend Development" },
        { name: "TypeScript", level: 90, color: "purple", category: "Frontend Development" },
        { name: "Problem Solving", level: 95, color: "orange", category: "Soft Skills" }
      ]
    },
    {
      phase: "Full-Stack Development",
      year: "2021-2022",
      description: "Expanding to backend and database technologies",
      skills: [
        { name: "Node.js", level: 90, color: "blue", category: "Backend Development" },
        { name: "Express.js", level: 85, color: "blue", category: "Backend Development" },
        { name: "REST APIs", level: 90, color: "blue", category: "Backend Development" },
        { name: "MongoDB", level: 85, color: "blue", category: "Backend Development" },
        { name: "Communication", level: 90, color: "orange", category: "Soft Skills" }
      ]
    },
    {
      phase: "Advanced Frameworks",
      year: "2022-2023",
      description: "Modern frameworks and development practices",
      skills: [
        { name: "Next.js", level: 85, color: "purple", category: "Frontend Development" },
        { name: "PostgreSQL", level: 80, color: "blue", category: "Backend Development" },
        { name: "Jest", level: 80, color: "green", category: "Tools & Technologies" },
        { name: "Agile/Scrum", level: 90, color: "orange", category: "Soft Skills" },
        { name: "Team Leadership", level: 85, color: "orange", category: "Soft Skills" }
      ]
    },
    {
      phase: "DevOps & Leadership",
      year: "2023-2024",
      description: "Cloud technologies and team management",
      skills: [
        { name: "Docker", level: 75, color: "green", category: "Tools & Technologies" },
        { name: "AWS", level: 70, color: "green", category: "Tools & Technologies" },
        { name: "GraphQL", level: 70, color: "blue", category: "Backend Development" },
        { name: "Figma", level: 85, color: "green", category: "Tools & Technologies" },
        { name: "Project Management", level: 80, color: "orange", category: "Soft Skills" },
        { name: "Mentoring", level: 85, color: "orange", category: "Soft Skills" }
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-100',
        border: 'border-purple-300',
        text: 'text-purple-700'
      },
      blue: {
        bg: 'bg-blue-500', 
        light: 'bg-blue-100',
        border: 'border-blue-300',
        text: 'text-blue-700'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-100', 
        border: 'border-green-300',
        text: 'text-green-700'
      },
      orange: {
        bg: 'bg-orange-500',
        light: 'bg-orange-100',
        border: 'border-orange-300', 
        text: 'text-orange-700'
      }
    }
    return colorMap[color] || colorMap.purple
  }

  const getLevelIcon = (level) => {
    if (level >= 90) return '🏆'
    if (level >= 80) return '⭐'
    if (level >= 70) return '📈'
    return '🌱'
  }

  const filteredPhases = selectedPath === 'all' 
    ? timelinePhases 
    : timelinePhases.map(phase => ({
        ...phase,
        skills: phase.skills.filter(skill => {
          const categoryMap = {
            'frontend': 'Frontend Development',
            'backend': 'Backend Development', 
            'tools': 'Tools & Technologies',
            'soft': 'Soft Skills'
          }
          return skill.category === categoryMap[selectedPath]
        })
      })).filter(phase => phase.skills.length > 0)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {skills.subtitle}
          </p>

          {/* Path Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedPath('all')}
              className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                selectedPath === 'all' 
                  ? 'bg-gray-800 text-white border-gray-800' 
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              🗺️ Complete Journey
            </button>
            <button
              onClick={() => setSelectedPath('frontend')}
              className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                selectedPath === 'frontend'
                  ? 'bg-purple-500 text-white border-purple-500'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              💜 Frontend Path
            </button>
            <button
              onClick={() => setSelectedPath('backend')}
              className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                selectedPath === 'backend'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              💙 Backend Path
            </button>
            <button
              onClick={() => setSelectedPath('tools')}
              className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                selectedPath === 'tools'
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              💚 Tools Path
            </button>
            <button
              onClick={() => setSelectedPath('soft')}
              className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                selectedPath === 'soft'
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              🧡 Leadership Path
            </button>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 via-green-400 to-orange-400 rounded-full"></div>

          {/* Timeline Phases */}
          <div className="space-y-16">
            {filteredPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-gray-800 rounded-full z-10 shadow-lg"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Phase Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">{phase.phase}</h3>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                          {phase.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-lg">{phase.description}</p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {phase.skills.map((skill) => {
                        const colors = getColorClasses(skill.color)
                        return (
                          <motion.div
                            key={`${skill.name}-${phase.phase}`}
                            whileHover={{ scale: 1.03 }}
                            onHoverStart={() => setHoveredSkill(skill.name)}
                            onHoverEnd={() => setHoveredSkill(null)}
                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${colors.light} ${colors.border} hover:shadow-md`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-gray-800">{skill.name}</span>
                              <span className="text-lg">{getLevelIcon(skill.level)}</span>
                            </div>
                            
                            <div className="flex items-center justify-between mb-3">
                              <span className={`text-sm font-medium ${colors.text}`}>
                                {skill.category}
                              </span>
                              <span className="text-sm font-bold text-gray-600">
                                {skill.level}%
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="bg-white/60 rounded-full h-2 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: index * 0.2 + 0.5,
                                  ease: "easeOut" 
                                }}
                                className={`${colors.bg} h-full rounded-full relative`}
                              >
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                              </motion.div>
                            </div>

                            {/* Hover Tooltip */}
                            {hoveredSkill === skill.name && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-20 shadow-xl"
                              >
                                Mastery Level: {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Learning'}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                              </motion.div>
                            )}
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Phase Stats */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-purple-600">
                            {phase.skills.length}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">Skills</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">
                            {phase.skills.filter(s => s.level >= 90).length}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">Expert</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">
                            {Math.round(phase.skills.reduce((acc, skill) => acc + skill.level, 0) / phase.skills.length)}%
                          </div>
                          <div className="text-sm text-gray-600 font-medium">Avg Level</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-orange-500 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">🚀 Development Journey Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="font-medium opacity-90">Years Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {skills.categories.reduce((total, cat) => total + cat.skills.length, 0)}
              </div>
              <div className="font-medium opacity-90">Skills Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {skills.categories.reduce((total, cat) => total + cat.skills.filter(s => s.level >= 90).length, 0)}
              </div>
              <div className="font-medium opacity-90">Expert Level</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="font-medium opacity-90">Always Learning</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}