import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Navigation from '@/components/Navigation'
// import Skills from '../../.ignore/Skills'
// import Contact from '@/components/Contact'

export default function Home() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Navigation />
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="experience">
                <Experience />
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
        </main>
    )
}