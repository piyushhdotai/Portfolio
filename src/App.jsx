import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import gsap from 'gsap'


function App() {
  const cursorRef = useRef(null)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.3, ease: "cubic-bezier(0.16, 1, 0.3, 1)" })
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.3, ease: "cubic-bezier(0.16, 1, 0.3, 1)" })
    const handleMouseMove = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='relative overflow-x-hidden'>
      <div ref={cursorRef} className='fixed top-0 left-0 w-3 h-3 rounded-full bg-nocturne-accent/60 pointer-events-none z-[9999] blur-[2px]' />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Home setActiveSection={setActiveSection} />
    </div>
  )
}

export default App