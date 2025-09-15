'use client'

import {motion} from 'framer-motion'
import {content} from '@/data/content'
import {Github, Linkedin, Mail} from 'lucide-react'

export default function Hero() {
    return (
        <section
            className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
            <div className="max-w-4xl mx-auto text-center pt-16">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="mb-8"
                >
                    <motion.img
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{delay: 0.2, duration: 0.5}}
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-xl"
                    />

                    <motion.h1
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1.0, duration: 0.8}}
                        className="text-5xl md:text-7xl font-bold text-white mb-4"
                    >
                        {content.personal.name}
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.7, duration: 0.8}}
                        className="text-xl md:text-2xl text-purple-200 mb-8"
                    >
                        {content.personal.title}
                    </motion.p>

                    {/*{content.personal.bio.map((item: string, idx: number) => (*/}
                    {/*    <motion.span key={idx}*/}
                    {/*        initial={{opacity: 0}}*/}
                    {/*        animate={{opacity: 1}}*/}
                    {/*        transition={{delay: idx + 1 - (idx*.5), duration: 0.8}}*/}
                    {/*        className="text-lg text-gray-300 mb-5 max-w-2xl mx-auto"*/}
                    {/*    >*/}
                    {/*        {item}&nbsp;*/}
                    {/*    </motion.span>*/}
                    {/*))}*/}


                </motion.div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.3, duration: 0.6}}
                    className="flex justify-center space-x-6"
                >
                    {content.social.github && (
                        <a href={content.social.github} target="_blank" rel="noopener noreferrer"
                           className="transition-all duration-300 transform hover:scale-110"
                           style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                            <Github size={28}/>
                        </a>
                    )}
                    {content.social.linkedin && (
                        <a href={content.social.linkedin} target="_blank" rel="noopener noreferrer"
                           className="transition-all duration-300 transform hover:scale-110"
                           style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                            <Linkedin size={28}/>
                        </a>
                    )}
                    <a href={`mailto:${content.personal.email}`}
                       className="transition-all duration-300 transform hover:scale-110"
                       style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                        <Mail size={28}/>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}