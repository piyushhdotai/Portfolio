import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from '@/components/Navbar'
import ProfileCard from '@/components/ProfileCard'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Journey from '@/sections/Journey'
import Stack from '@/sections/Stack'
import Certifications from '@/sections/Certifications'
import Contact from '@/sections/Contact'
import { navItems, profile } from '@/data/content'
import { setLenis } from '@/lib/scroll'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const EASE = 'power3.out'

function App() {
  const rootRef = useRef(null)
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    const raf = (time) => lenis.raf(time * 1000)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    setLenis(lenis)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  // Highlight the nav item for whichever section crosses the upper third of the viewport
  useEffect(() => {
    const updateActive = () => {
      const threshold = window.innerHeight * 0.35
      let current = navItems[0].id
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) current = id
      }
      // The last section is short, so treat hitting the page bottom as reaching it
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = navItems.at(-1).id
      }
      setActiveSection(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const intro = gsap.timeline({ defaults: { ease: EASE, duration: 1 } })
        intro
          .from('.nav-pill', { y: -24, opacity: 0, duration: 0.8 })
          .from('.profile-card', { y: 48, opacity: 0, scale: 0.96 }, '<0.1')
          .from('.hero-line', { y: 70, opacity: 0, stagger: 0.12 }, '<0.15')
          .from('.hero-fade', { y: 30, opacity: 0, stagger: 0.12 }, '<0.3')
          .from('.hero-card', { y: 40, opacity: 0, stagger: 0.12 }, '<0.2')

        gsap.utils.toArray('.stat-count').forEach((el) => {
          const end = Number(el.dataset.value)
          const counter = { value: end >= 1000 ? end - 24 : 0 }
          el.textContent = counter.value
          gsap.to(counter, {
            value: end,
            duration: 1.8,
            delay: 0.6,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.round(counter.value)
            },
          })
        })

        gsap.set('.reveal', { y: 40, opacity: 0 })
        ScrollTrigger.batch('.reveal', {
          start: 'top 88%',
          once: true,
          onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: EASE }),
        })
      })
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className="min-h-screen overflow-x-clip bg-ink text-paper">
      <Navbar activeSection={activeSection} />

      <main className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 lg:grid lg:grid-cols-[21rem_minmax(0,1fr)] lg:gap-16 lg:pt-24 xl:gap-20">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <ProfileCard />
        </aside>

        <div className="min-w-0">
          <Hero />
          <Projects />
          <Journey />
          <Stack />
          <Certifications />
          <Contact />
        </div>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-24 text-center text-sm text-muted sm:px-6">
        Designed &amp; built by <span className="text-orange">{profile.name}</span> · {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
