import Hero from '@/components/Hero'
// import About from '@/components/About'
// import Experience from '@/components/Experience'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import Navigation from '@/components/Navigation'
// import Skills from '../../.ignore/Skills'
// import SkillsTimelineUi from '../components/SkillsTimeline'
import ThemeSwitcher from "@/components/ThemeSwitcher"
// import Contact from '@/components/Contact'

export default function Home() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Navigation />
            <section id="home">
                <Hero />
            </section>
            {/*<section id="about">*/}
            {/*    <About />*/}
            {/*</section>*/}
            {/*<section id="experience">*/}
            {/*    <Experience />*/}
            {/*</section>*/}
            <section id="experience">
                <ExperienceTimeline />
            </section>
            {/*<section id="skills">*/}
            {/*    <Skills />*/}
            {/*</section>*/}
            {/*<section id="skillsTimelineUi">*/}
            {/*    <SkillsTimelineUi />*/}
            {/*</section>*/}
            {/*<section id="contact">*/}
            {/*    <Contact />*/}
            {/*</section>*/}
            <ThemeSwitcher />
        </main>
    )
}