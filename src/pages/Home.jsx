import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { Badge } from "@/components/ui/badge"
import { ArrowDownToLine } from 'lucide-react';
import TerminalBlock from '@/components/TerminalBlock';
import ProjectCard from '@/components/ProjectCard';
import { GlowingStarsBackgroundCard } from '@/components/ui/GlowingStars';
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css' // Required base styles for Lenis
gsap.registerPlugin(ScrollTrigger)


const Home = (props) => {

  const heroRef = useRef(null) 
  const technologies = ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'FastAPI']

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [sending, setSending] = useState(false)

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const sendEmail = () => {
    setSuccess(false)
    setError("")

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields before sending the message.")
      return
    }
    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address.")
      return
    }

    setSending(true)
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { name, email, message },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setSuccess(true)
      setName("")
      setEmail("")
      setMessage("")
    }).catch(() => {
      setError("Something went wrong while sending your message. Please try again.")
    }).finally(() => {
      setSending(false)
    })
}
// Add this right after your state variables
  useEffect(() => {
    // 1. Initialize Lenis with premium settings
    const lenis = new Lenis({
      duration: 1.2, // Controls the "heaviness" of the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Buttery smooth curve
      smoothWheel: true,
    })

    // 2. Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // 3. Tell GSAP to use Lenis's internal clock for animations
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // 4. Fix jumpiness when switching browser tabs
    gsap.ticker.lagSmoothing(0)

    // 5. Clean up on unmount
    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])
  

useEffect(() => {
const handleScroll = () => {
  const sections = ['home', 'about', 'work', 'contact']
  const navbarBoundary = 90
  let activeId = sections[0]
  let closestTop = Number.NEGATIVE_INFINITY

  sections.forEach(id => {
    const el = document.getElementById(id)
    if (!el) return
    const { top } = el.getBoundingClientRect()
    if (top <= navbarBoundary && top > closestTop) {
      activeId = id
      closestTop = top
    }
  })

  props.setActiveSection(activeId)
}

window.addEventListener('scroll', handleScroll)
handleScroll()
return () => window.removeEventListener('scroll', handleScroll)
}, [])


  useGSAP(() => {

  // B - stagger text fade up
  gsap.from(".hero-text > *", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.12,
    ease: "power3.out"
  })

  // G - social icons fade up from bottom
  gsap.fromTo(".social-icon", 
  { y: 24, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, delay: 0.4, ease: "power3.out" }
)
}, {  scope: heroRef })

useGSAP(() => {
  const motionDefaults = { duration: 1.1, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
// About - avatar slides from left
gsap.from(".about-left", {
    ...motionDefaults,
    x: -48,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-left",
    start: "top 82%",
  }
})

// About - text slides from right
gsap.from(".about-right", {
  ...motionDefaults,
  x: 48,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-right",
  start: "top 82%",
  }
})
gsap.from(".button-right",{
  ...motionDefaults,
  y: 48,
  opacity: 0,
  scrollTrigger: {
    trigger: ".button-right",
    start: "top 82%",
  }
})
   gsap.from(".project-card", {
  ...motionDefaults,
  y: 64,
opacity: 0,
  stagger: 0.16,
scrollTrigger: {
  trigger: ".project-card",
  start: "top 82%",
}
})

gsap.from(".heading-animation",{
  ...motionDefaults,
  x: 48,
  opacity: 0,
  scrollTrigger: {
    trigger: ".heading-animation",
    start: "top 82%",
  }
})
gsap.from(".sub-animation",{
  ...motionDefaults,
  x: -48,
  opacity: 0,
  scrollTrigger: {
    trigger: ".sub-animation",
    start: "top 82%",
  }
})
gsap.from(".contact-form", {
...motionDefaults,
x: -48,
opacity: 0,
scrollTrigger: {
  trigger: ".contact-form",
  start: "top 82%",
  }
})
} )


  return (
    <div className='hero-bg min-h-screen w-screen overflow-x-hidden bg-nocturne-base' >


        {/* Glow for the bg on the home page */}
        <div className="pointer-events-none absolute left-[58%] top-1/4 h-72 w-72 rounded-full bg-nocturne-accent/10 blur-[120px]" />

        {/* Home Section */}
        <section ref={heroRef} id='home' className='home-section sticky top-0 z-10 flex min-h-screen items-start border-b border-nocturne-accent/10 px-5 pt-32 md:items-center md:px-16 md:pt-20'>
          <div className="tech-cloud pointer-events-none absolute left-5 right-5 top-[64%] z-10 mx-auto flex max-w-[22rem] flex-wrap justify-center gap-x-3 gap-y-3 md:top-[45%] md:max-w-[34rem] lg:left-auto lg:right-[8%] lg:top-1/2 lg:mx-0 lg:block lg:h-72 lg:w-80">
            {technologies.map((technology, index) => (
              <span key={technology} className={`tech-tag tech-tag-${index + 1}`}>
                {technology}
              </span>
            ))}
          </div>

          <div className="pointer-events-none absolute right-[12%] top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 md:block">
            <div className="absolute inset-12 rounded-full border border-nocturne-accent/30" />
            <div className="absolute inset-24 rounded-full border border-nocturne-accent/20" />
            <div className="absolute left-1/2 top-0 h-full w-px -rotate-45 bg-gradient-to-b from-transparent via-nocturne-accent/60 to-transparent" />
            <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-gradient-to-b from-transparent via-nocturne-accent/30 to-transparent" />
          </div>
          <div className='hero-text relative z-10 max-w-3xl text-nocturne-text'>
            <p className="mb-6 font-display text-xs font-medium uppercase tracking-[0.28em] text-nocturne-accent">Independent developer / 2026</p>
            <h1 className="font-display text-[clamp(4.5rem,22vw,7rem)] font-semibold leading-[0.88] tracking-[-0.06em] md:text-[10rem]">Piyush</h1>
            <h1 className="mt-5 font-display text-xl tracking-[0.06em] text-nocturne-accent sm:text-2xl md:text-4xl">Full Stack Developer</h1>
            <div className="mt-5 flex items-start gap-3 text-sm sm:text-base">
            <div className="h-2 w-2 rounded-full bg-nocturne-accent" />
            <span className="text-nocturne-muted">
              Building clean web experiences
            </span>
          </div>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-nocturne-accent/20 pt-6">

            <div>
              <h2 className="text-3xl font-semibold text-nocturne-text">4+</h2>
              <p className="text-nocturne-muted">Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-nocturne-text">120+</h2>
              <p className="text-nocturne-muted">Leetcode</p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-nocturne-text">2028</h2>
              <p className="text-nocturne-muted">Graduate</p>
            </div>

          </div>
        </div>

        <div className="absolute bottom-24 left-5 right-5 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.22em] text-nocturne-muted md:hidden">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-nocturne-accent" />
          <span className="whitespace-nowrap">Scroll to explore</span>
          <span className="h-px flex-1 bg-nocturne-accent/20" />
        </div>
        


        <div className='absolute bottom-8 right-6 flex gap-5 text-nocturne-accent md:right-16 md:top-1/2 md:-translate-y-1/2 md:flex-col'>

        <a className='social-icon  transition-opacity cursor-pointer' href="https://github.com/piyushhdotai" target="_blank" rel="noopener noreferrer">
        <FaGithub size={25}/>
        </a>
        

        <a className='social-icon hover:opacity-70 transition-opacity cursor-pointer' href="https://www.linkedin.com/in/piyushhdotai/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={25} />
        </a>

        <a className='social-icon hover:opacity-70 transition-opacity cursor-pointer' href="https://leetcode.com/u/piyushh_7274/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode size={25} />
        </a>

        </div>
        </section>


       {/* NEW WRAPPER */}
      <div className='relative w-full z-20 bg-nocturne-base'>
          
         {/* About Section */}
        <section id="about" className="about-section sticky top-0 z-10 flex min-h-screen items-center px-5 py-28 md:px-16">
          <div className='relative z-10 grid min-w-0 w-full max-w-7xl gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-20'>
            <div className="about-left relative min-w-0">
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-nocturne-accent/5 blur-3xl" />
              <TerminalBlock/>
            </div>

          <div className="min-w-0 text-nocturne-text md:pt-8">
          <p className="about-right mb-5 font-display text-xs font-medium uppercase tracking-[0.25em] text-nocturne-accent">A little context</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-nocturne-text md:text-5xl">
            ABOUT ME
          </h1>
            <p className="about-right max-w-xl py-6 text-lg leading-relaxed text-nocturne-muted">
              <b>Hello</b>, I am <b>PIYUSH BAJPAI</b>, I am a Computer Science student who enjoys building projects and learning new technologies. I like solving problems, writing clean code, and creating things that people can use.
            </p>
            
            <div className='about-right grid grid-cols-2 gap-x-5 gap-y-3 border-y border-nocturne-accent/20 py-5 text-sm text-nocturne-muted'>
            <span><b className="text-nocturne-text">01</b> JavaScript / React</span>
            <span><b className="text-nocturne-text">02</b> Node.js / MongoDB</span>
            <span><b className="text-nocturne-text">03</b> C++ / HTML / CSS</span>
            <span><b className="text-nocturne-text">04</b> Learning in public</span>
            </div> 
            <div className='button-right pt-8'>
              <a href="/myresume_piyush_bajpai.pdf" download>
                <button className="text-base border border-nocturne-accent/50 text-nocturne-accent-soft rounded-full px-5 py-3 transition-colors duration-300 hover:bg-nocturne-accent hover:text-nocturne-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocturne-accent">
                <div className="flex items-center gap-2">
                <span>Download Resume</span>
                <ArrowDownToLine size={20} />
                </div>
              </button> 
              </a>
            </div>
          </div>
          </div>
        </section>


        {/* Work/Project Section */}
        <section id="work" className="work-section sticky top-0 z-20 min-h-screen overflow-x-hidden bg-nocturne-base px-5 py-28 md:px-16">
          <div className='relative z-10 mx-auto max-w-7xl'>
            
            <div className='pb-10'>
              <p className="text-nocturne-accent text-sm tracking-[0.2em] uppercase font-display mb-3 sub-animation">What I've Built</p>
              <h1 className='font-display text-nocturne-text font-semibold text-5xl md:text-6xl tracking-tight heading-animation'>Projects</h1>
              <div className="mt-4 h-px w-20 bg-nocturne-accent sub-animation" />
            </div>

            <div className='grid grid-cols-1 gap-6 md:h-[38rem] md:grid-cols-2 md:grid-rows-1 project-card'>
              <ProjectCard
              featured
              title="GTA VI Fan Site"
              description="Recreated the GTA VI landing page with scroll animations."
              techStack={["React", "GSAP", "CSS"]}
              liveLink="https://gta-vi-website-chi.vercel.app/"
              githubLink="https://github.com/piyushhdotai/GTA-VI-Website"
              image="gta.png"
              imagePosition="object-center"
                />
              <div className="grid h-full gap-6 md:grid-rows-2">
                <ProjectCard
              title="Portfolio website"
              description="This website itself."
              techStack={["React", "GSAP", "TailwindCSS", "Shadcn"]}
              liveLink="https://pb-portfolio-peach.vercel.app/"
              githubLink="https://github.com/piyushhdotai/Portfolio"
              image="portfolio.png"
              imagePosition="object-top"
                />
                <ProjectCard
              title="StudySync"
              description="A responsive study platform UI built with HTML and CSS."
              techStack={["HTML", "CSS"]}
              liveLink="https://study-sync-5f4t.vercel.app/"
              githubLink="https://github.com/piyushhdotai/StudySync"
              image="/StudySync.png"
              imagePosition="object-[center_22%]"
                />
              </div>
            </div>

          </div>
        </section>
       </div>

        {/* Contact Section */}
        <section id="contact" className="contact-section sticky top-0 z-40 min-h-screen w-full overflow-hidden border-t border-nocturne-accent/10 bg-nocturne-base px-5 py-28 md:px-16">
          <div className="pointer-events-none absolute right-[-8rem] top-1/4 h-96 w-96 rounded-full bg-nocturne-accent/10 blur-[140px]" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="mb-5 font-display text-xs font-medium uppercase tracking-[0.25em] text-nocturne-accent">The next build starts here</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-nocturne-text sm:text-5xl md:text-7xl">Get In Touch</h2>
              <p className="mt-5 text-base leading-relaxed text-nocturne-muted sm:text-lg">Have a project, idea, or problem worth working through? Send a message and let&apos;s make something useful.</p>
            </div>
            <div className='contact-form grid gap-10 md:grid-cols-[minmax(0,1fr)_16rem] md:items-end'>
              <div className='flex max-w-2xl flex-col gap-3.5'>
              <input className="bg-transparent border border-nocturne-accent/30 text-nocturne-text rounded-md px-4 py-3 w-full placeholder-nocturne-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocturne-accent" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" disabled={sending} />
              <input type="email" className="bg-transparent border border-nocturne-accent/30 text-nocturne-text rounded-md px-4 py-3 w-full placeholder-nocturne-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocturne-accent" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" disabled={sending} />
              <textarea className="bg-transparent border border-nocturne-accent/30 text-nocturne-text rounded-md px-4 py-3 w-full placeholder-nocturne-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocturne-accent" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" disabled={sending} />
              <button className='bg-nocturne-accent text-nocturne-base rounded-md tracking-widest px-1 py-2 transition-colors duration-300 hover:bg-nocturne-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocturne-accent disabled:cursor-not-allowed disabled:opacity-60' onClick={sendEmail} disabled={sending}>{sending ? "Sending..." : "Send"}</button>
              <p className="text-sm mt-2" role="status" aria-live="polite">
                {error && <span className="text-red-400">{error}</span>}
                {!error && success && <span className="text-nocturne-accent">Message sent successfully!</span>}
              </p>
              </div>
              <div className="flex gap-5 border-t border-nocturne-accent/20 pt-5 text-nocturne-accent md:flex-col md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <a className="transition-colors hover:text-nocturne-accent-hover" href="https://github.com/piyushhdotai" target="_blank" rel="noopener noreferrer"><FaGithub size={22} /></a>
                <a className="transition-colors hover:text-nocturne-accent-hover" href="https://www.linkedin.com/in/piyushhdotai/?skipRedirect=true" target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} /></a>
                <a className="transition-colors hover:text-nocturne-accent-hover" href="https://leetcode.com/u/piyushh_7274/" target="_blank" rel="noopener noreferrer"><SiLeetcode size={22} /></a>
              </div>
            </div>
          </div>
        </section>
        


    </div>
  )
}

export default Home