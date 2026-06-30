import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import gsap from 'gsap'
import { Analytics } from "@vercel/analytics/next"

function App() {
  const cursorRef = useRef(null)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.3, ease: "power3.out" })
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.3, ease: "power3.out" })
    const handleMouseMove = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='relative overflow-x-hidden'>
      <div ref={cursorRef} className='fixed top-0 left-0 w-4 h-4 rounded-full bg-teal-400/50 pointer-events-none z-[9999] blur-xs' />
      <Analytics />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Home setActiveSection={setActiveSection} />
    </div>
  )
}

export default App