  import { BrowserRouter, Routes, Route, } from 'react-router-dom'
  import { useState } from 'react'
  import Navbar from './components/Navbar'
  import Home from './pages/Home'
  import About from './pages/About'
  import Work from './pages/Work'
  import Contact from './pages/Contact'


  function Layout(){

      const [activeSection, setActiveSection] = useState("home")
    // const location = useLocation()
    
    return (
      <div className='relative'>

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