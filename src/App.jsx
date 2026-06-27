  import { BrowserRouter, Routes, Route, } from 'react-router-dom'
  import { useState } from 'react'
  import Navbar from './components/Navbar'
  import Home from './pages/Home'
  import About from './pages/About'
  import Work from './pages/Work'
  import Contact from './pages/Contact'
  import { useRef, useEffect } from 'react'
  import gsap from 'gsap'


  function Layout(){

    const cursorRef = useRef(null)

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

    

      const [activeSection, setActiveSection] = useState("home")
    
    
    return (
      <div className='relative  overflow-x-hidden'>
        <div ref={cursorRef} className='fixed top-0 left-0 w-4 h-4 rounded-full bg-teal-400/50 pointer-events-none z-[9999] blur-xs'>

    </div>

        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

    <Routes>
          <Route path="/" element={<Home setActiveSection={setActiveSection} />} />
          <Route path="/about" element={<About setActiveSection={setActiveSection}  />} />
          <Route path="/work" element={<Work setActiveSection={setActiveSection}/>} />
          <Route path="/contact" element={<Contact setActiveSection={setActiveSection} />} />
      </Routes>

      </div>
    )
  }


  function App() {
    
    return (
      <BrowserRouter>

        <Layout/>

      </BrowserRouter>
    )
  }

  export default App