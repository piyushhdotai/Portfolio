import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const NAVBAR_HEIGHT = 88
const NAVBAR_EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

function Navbar(props) {
  const navRef = useRef(null)

  const handleNavigation = (event, section) => {
    event.preventDefault()
    props.setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'auto', block: 'start' })
  }

  useEffect(() => {
    const updateNavbar = () => {
      const isDocked = window.scrollY > NAVBAR_HEIGHT

      gsap.to(navRef.current, {
        backgroundColor: isDocked ? '#131A24' : 'rgba(19, 26, 36, 0)',
        backdropFilter: isDocked ? 'blur(14px)' : 'blur(0px)',
        borderBottomColor: isDocked ? 'rgba(154, 165, 177, 0.24)' : 'rgba(154, 165, 177, 0)',
        duration: 0.45,
        ease: NAVBAR_EASE,
        overwrite: true,
      })
    }

    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })

    return () => window.removeEventListener('scroll', updateNavbar)
  }, [])
  
  return (

    <nav ref={navRef} className="fixed left-0 top-0 z-[100] h-[var(--navbar-height)] w-full border-b border-transparent px-6 text-nocturne-text md:px-10">
    <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
      <a href="#home" onClick={(event) => handleNavigation(event, "home")} className="font-display text-sm font-semibold tracking-[0.18em] text-nocturne-accent">
        PB
      </a>
      <div className="flex items-center gap-5 text-[0.68rem] font-medium tracking-[0.18em] md:gap-10 md:text-xs">

      <a href="#home" onClick={(event) => handleNavigation(event, "home")} className={props.activeSection === "home" ? "relative text-nocturne-accent after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-nocturne-accent" : "text-nocturne-muted transition-colors hover:text-nocturne-accent-hover"}>
        HOME
      </a>

      <a href="#about" onClick={(event) => handleNavigation(event, "about")} className={props.activeSection === "about" ? "relative text-nocturne-accent after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-nocturne-accent" : "text-nocturne-muted transition-colors hover:text-nocturne-accent-hover"}>
        ABOUT
      </a>

      <a href="#work" onClick={(event) => handleNavigation(event, "work")} className={props.activeSection === "work" ? "relative text-nocturne-accent after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-nocturne-accent" : "text-nocturne-muted transition-colors hover:text-nocturne-accent-hover"}>
        WORK
      </a>

      <a href="#contact" onClick={(event) => handleNavigation(event, "contact")} className={props.activeSection === "contact" ? "relative text-nocturne-accent after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-nocturne-accent" : "text-nocturne-muted transition-colors hover:text-nocturne-accent-hover"}>
        CONTACT
      </a>

      </div>
    </div>

    </nav>
  )
}

export default Navbar