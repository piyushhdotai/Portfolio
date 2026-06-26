  import React, { useEffect, useState } from 'react'
  import { FaGithub, FaLinkedin } from 'react-icons/fa'
  import { SiLeetcode } from 'react-icons/si'
  import { Badge } from "@/components/ui/badge"
  import { ArrowDownToLine } from 'lucide-react';
  import TerminalBlock from '@/components/TerminalBlock';
  import AvatarFlip from '@/components/AvatarFlip'
  import ProjectCard from '@/components/ProjectCard';
  import emailjs from '@emailjs/browser'
  import gsap from 'gsap'
  import { useGSAP } from '@gsap/react'
  import { useRef } from 'react'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)



  const Home = (props) => {

    const heroRef = useRef(null) 

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false)


    const sendEmail = () => {
      emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { name, email, message },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY, 
      setSuccess(true)
      ).then(() => {
      setSuccess(true)
      setName("")
      setEmail("")
      setMessage("")
    })
  }
    


  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        props.setActiveSection(entry.target.id)
      }
    })
  }, { threshold: 0.5 })



  
    // observe all sections for the intersection observer
    observer.observe(document.getElementById('home'))
    observer.observe(document.getElementById('about'))
    observer.observe(document.getElementById('work'))
    observer.observe(document.getElementById('contact'))

    // cleanup
    return () => observer.disconnect()
  }, []) // empty array = runs once only


    useGSAP(() => {
    
    // B - stagger text fade up
    gsap.from(".hero-text > *", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    })

    // G - social icons fade up from bottom
    gsap.fromTo(".social-icon", 
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.8, ease: "power3.out" }
  )
  }, {  scope: heroRef })



  
    return (
      <div  className='hero-bg h-screen w-screen bg-cover bg-center ' style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,.65), rgba(0,0,30,.3)), url('/heero.png')",
          }}>


          {/* Glow for the bg on the home page */}
          <div className="absolute top-20 left-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />
          <div className="absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[160px]" />

          {/* Home Section */}
          <section ref={heroRef} id='home' className='home-section h-screen'>
            <div className='hero-text absolute top-40 left-36 text-white'>
              <h1 className="font-['Brushed'] text-9xl font-medium">Piyush</h1>
              <h1 className="font-['Brushed'] text-3xl tracking-widest ">Full Stack Developer</h1>
              <div className="mt-5 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-teal-400" />
              <span className="text-gray-300">
                Building clean web experiences
              </span>
            </div>
              <div className="mt-12 flex gap-6">

              <div>
                <h2 className="text-4xl font-bold">3+</h2>
                <p className="text-gray-400">Projects</p>
              </div>

              <div>
                <h2 className=" text-4xl font-bold">80+</h2>
                <p className=" text-gray-400">Leetcode</p>
              </div>

              <div>
                <h2 className=" text-4xl font-bold">2028</h2>
                <p className=" text-gray-400">Graduate</p>
              </div>

            </div>
          </div>
          


          <div className='absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-10 text-white'>

          <a className='social-icon  transition-opacity cursor-pointer' href="https://github.com/piyushhdotai">
          <FaGithub size={25}/>
          </a>
          

          <a className='social-icon hover:opacity-70 transition-opacity cursor-pointer' href="https://www.linkedin.com/in/piyushhdotai/?skipRedirect=true">
          <FaLinkedin size={25} />
          </a>

          <a className='social-icon hover:opacity-70 transition-opacity cursor-pointer' href="https://leetcode.com/u/piyushh_7274/">
          <SiLeetcode size={25} />
          </a>

          </div>
          </section>


          {/* About Section */}
          <section id="about" className="about-section h-screen bg-slate-950 ">
            <div className='flex '>


              <div className="h-screen w-1/2 flex flex-col  ">

            
                <div className='w-full h-90  flex flex-col items-center gap-6'>
                  <img src="/pfp.jpeg" alt="avtar" className='h-60 w-60 rounded-full relative top-20 transition-transform duration-300 hover:scale-110' />
                  {/* <AvatarFlip/> */}
                </div>

                <div>
                  <TerminalBlock/>
                </div>

              

            </div>
            <div className=" h-screen w-1/2 text-white">
            <h1 className='font-bold text-5xl px-5 py-20 '>ABOUT ME</h1>
              <p className="font-['Inter'] font-normal text-gray-400 text-2xl px-5 py-3">
                <b>Hello</b>, I am <b>PIYUSH BAJPAI</b>, a 3rd year B.Tech student passionate about building full stack web apps. I love turning ideas into clean, functional products.
              </p>
              
              <div className='px-3 py-3 flex gap-3'>
              <Badge className="text-gray-300 text-sm" variant="outline">Javascript</Badge>
              <Badge className="text-gray-300 text-sm" variant="outline">React</Badge>
              <Badge className="text-gray-300 text-sm" variant="outline">Node.js</Badge>
              <Badge className="text-gray-300 text-sm" variant="outline">C++</Badge>
              <Badge className="text-gray-300 text-sm" variant="outline">HTML</Badge>
              <Badge className="text-gray-300 text-sm" variant="outline">CSS</Badge>
              <Badge className="text-gray-300 text-sm"  variant="outline">MongoDB</Badge> 
              </div> 
              <div className='px-30 py-20'>
                <a href="#" download>
                  <button className="text-2xl border border-white rounded-3xl px-3 py-2 transition-transform duration-300 hover:scale-105">
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
          <section id="work" className="min-h-screen  bg-slate-950  overflow-x-hidden">

            <div className='px-10 pt-20 pb-10'>
    <p className="text-teal-400 text-sm tracking-widest uppercase font-['Montserrat'] mb-2">What I've Built</p>
    <h1 className='text-white font-bold text-6xl'>Projects</h1>
    <div className="mt-3 h-1 w-16 bg-teal-400 rounded-full" />
    
  </div>


            <div className='  relative top-5 grid grid-cols-3 gap-6 px-10'>


            <ProjectCard
            title="GTA VI Fan Site"
            description="Recreated the GTA VI landing page with scroll animations."
            techStack={["React", "GSAP", "CSS"]}
            liveLink="https://gta-vi-website-chi.vercel.app/"
            githubLink="https://github.com/piyushhdotai/GTA-VI-Website"
            image="gta.png"
              />
            <ProjectCard
            title="Portfolio website"
            description="This website itself."
            techStack={["React", "GSAP", "TailwindCSS", "Shadcn"]}
            liveLink=""
            githubLink=""
            image="portfolio.png"
              />
            <ProjectCard
            title="StudySync"
            description="A responsive study platform UI built with HTML and CSS."
            techStack={["HTML", "CSS"]}
            liveLink="https://study-sync-5f4t.vercel.app/"
            githubLink="https://github.com/piyushhdotai/StudySync"
            image="/StudySync.png"
              />
            </div>

            </section>


          {/* Contact Section */}
          <section id="contact" className="min-h-screen w-full bg-cover overflow-hidden bg-top" style={{backgroundImage: "url('./lufi.png')"}}>
            <div className='bg-black/40 backdrop-blur-sm rounded-xl p-6 relative top-15 left-10 w-[600px]'>
              <div className='flex flex-col gap-3.5'>
                <h2 className="text-white text-2xl font-bold mb-2 self-center">Get In Touch</h2>
                <input className="bg-transparent border border-white/30 text-white rounded-lg px-4 py-3 w-full placeholder-gray-400" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                <input className="bg-transparent border border-white/30 text-white rounded-lg px-4 py-3 w-full placeholder-gray-400" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
                <textarea className="bg-transparent border border-white/30 text-white rounded-lg px-4 py-3 w-full placeholder-gray-400" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" />
              <button className='border border-white/30 rounded-sm tracking-widest text-white px-1 py-2  transition-transform duration-300 hover:scale-105 hover:bg-black/20' onClick={sendEmail}>Send</button>
                {success && <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>}
              </div>

          </div>
          </section>
          


      </div>
    )
  }

  export default Home
