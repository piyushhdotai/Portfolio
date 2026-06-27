import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar(props) {
  // const [active, setActive] = useState("home")

  return (

    <nav className="gap-1 px-1 md:px-3  text-xs md:text-sm md:gap-16 w-full p-8 flex items-center justify-center  top-0 z-50 left-0 absolute text-white">
      
     
      
     <div className=" flex fixed gap-2 md:gap-16 px-1 md:px-3 justify-between items-center tracking-widest font-extrabold uppercase font-['Montserrat']">

      <a href="#" onClick={() => props.setActiveSection("home")} className={props.activeSection === "home" ? "border border-white  bg-white text-gray-800 transition-all duration-300 px-3 py-1 rounded-sm background-white " : "border border-transparent px-3 py-1 rounded transition-all duration-300"} to="/">HOME</a>

      <a href="#about" onClick={() => props.setActiveSection("about")} className={props.activeSection === "about" ? "border border-white  bg-white text-gray-800 transition-all duration-300 px-3 py-1 rounded-sm" : "border border-transparent px-3 py-1 rounded transition-all duration-300"} to="/about">ABOUT</a>

      <a href="#work" onClick={() => props.setActiveSection("work")} className={props.activeSection === "work" ? "border border-white  bg-white text-gray-800 transition-all duration-300 px-3 py-1 rounded-sm" : "border border-transparent px-3 py-1 rounded transition-all duration-300"} to="#work">WORK</a>

      <a href="#contact" onClick={() => props.setActiveSection("contact")} className={props.activeSection === "contact" ? "border border-white  bg-white text-gray-800 transition-all duration-300 px-3 py-1 rounded-sm" : "border border-transparent px-3 py-1 rounded transition-all duration-300"} to="/contact ">CONTACT</a>

     </div> 

    </nav>
  )
}

export default Navbar