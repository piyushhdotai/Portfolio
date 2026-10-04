import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGreensock,
  SiJavascript,
  SiLeetcode,
  SiLinux,
  SiMaplibre,
  SiMeta,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import { Award, BriefcaseBusiness, FolderOpen, House, Mail, PenLine, Wrench } from 'lucide-react'

export const navItems = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'journey', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'stack', label: 'Stack', icon: Wrench },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'contact', label: 'Contact', icon: PenLine },
]

export const profile = {
  name: 'Piyush Bajpai',
  firstLine: 'Full Stack',
  secondLine: 'Developer',
  tagline: 'A CS student who builds full-stack web apps and sweats the motion details.',
  intro:
    "Computer Science student focused on full-stack development. I've shipped a live adaptive English assessment platform and an offline satellite change-detection system for a Ministry of Defence problem statement. Currently exploring Generative AI, LLMs and agentic systems.",
  location: 'Greater Noida, UP',
  email: 'pbajpai207@gmail.com',
  resume: '/updated_resume_piyush_bajpai.pdf',
  photo: '/thumbs/profile.webp',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/piyushhdotai', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/piyushhdotai/?skipRedirect=true', icon: FaLinkedin },
  { label: 'LeetCode', href: 'https://leetcode.com/u/piyushh_7274/', icon: SiLeetcode },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

export const stats = [
  { value: 5, prefix: '+', label: ['Projects', 'shipped'] },
  { value: 150, prefix: '+', label: ['LeetCode', 'problems'] },
  { value: 2028, prefix: '', label: ['B.Tech', 'graduate'] },
]

export const highlights = [
  {
    tone: 'orange',
    title: 'GSAP animation, interactive UI',
    href: '#projects',
  },
  {
    tone: 'lime',
    title: 'React, Next.js, FastAPI, MongoDB',
    href: '#stack',
  },
]

export const projects = [
  {
    title: 'Fluenci',
    subtitle: 'Adaptive English assessment platform',
    year: '2026',
    description:
      "Galgotias' adaptive English assessment, live at fluenci.in. Evaluates listening, reading, writing and speaking, ranks learners on the CEFR scale (A1 to C2) and builds a personalised path to improve.",
    tech: ['Next.js'],
    image: '/thumbs/fluenci.webp',
    imagePosition: 'object-left',
    thumb: { className: 'cefr-thumb', label: 'A1 – C2' },
    live: 'https://fluenci.in',
  },
  {
    title: 'BHU-Drishti 2.0',
    subtitle: 'Satellite change intelligence · MoD PS 26227',
    year: '2026',
    description:
      'Offline multi-date Sentinel-2 pipeline using NDVI, NDWI, NBR and BSI indices to classify land-use change into 6 categories with explainable confidence, plus RemoteCLIP + FAISS semantic search and a cited Q&A agent.',
    tech: ['React', 'MapLibre', 'FastAPI', 'OpenCV', 'FAISS', 'MongoDB'],
    image: '/thumbs/bhu-drishti-2.0.webp',
    imagePosition: 'object-center',
    thumb: { className: 'geo-thumb', label: 'NDVI' },
    github: 'https://github.com/piyushhdotai/BHU-DRISHTI-2.0',
  },
  {
    title: 'GTA VI Fan Site',
    subtitle: 'Scroll-driven landing page',
    year: '2025',
    description:
      'An immersive, gaming-focused frontend with GSAP-powered animations, scroll transitions and interactive navigation.',
    tech: ['React', 'GSAP', 'CSS'],
    image: '/thumbs/gta.webp',
    imagePosition: 'object-left-top',
    live: 'https://gta-vi-website-chi.vercel.app/',
    github: 'https://github.com/piyushhdotai/GTA-VI-Website',
  },
]

export const journey = [
  {
    title: 'Smart India Hackathon',
    role: 'Software Development Team Member · Top 45 teams, college round',
    description:
      'Cleared the internal college round with our team shortlisted among the top 45. Contributed to the core architecture and backend, and worked with the team on system integration.',
    period: '2026',
    tag: 'Hackathon',
  },
  {
    title: 'Galgotias College of Engineering & Technology',
    role: 'B.Tech, Computer Science & Engineering (AIML)',
    description: 'Coursework in DSA, DBMS, Operating Systems, Computer Networks, Cloud Computing and AI. CGPA 7.25.',
    period: '2024 – 2028',
    tag: 'Education',
  },
  {
    title: 'Dayawati Modi Public School',
    role: 'Class XII, CBSE',
    description: 'Completed senior secondary schooling in Raebareli with 89.6%.',
    period: '2024',
    tag: 'Education',
  },
]

export const stack = [
  { name: 'React', note: 'UI library', icon: SiReact, color: '#149ECA' },
  { name: 'Next.js', note: 'React framework', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', note: 'JS runtime', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', note: 'Web framework', icon: SiExpress, color: '#000000' },
  { name: 'FastAPI', note: 'Python APIs', icon: SiFastapi, color: '#009688' },
  { name: 'MongoDB', note: 'Database', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', note: 'Backend platform', icon: SiFirebase, color: '#DD2C00' },
  { name: 'Tailwind CSS', note: 'Styling', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'GSAP', note: 'Animation', icon: SiGreensock, color: '#0AE448', dark: true },
  { name: 'MapLibre GL', note: 'Web maps', icon: SiMaplibre, color: '#396CB2' },
  { name: 'OpenCV', note: 'Computer vision', icon: SiOpencv, color: '#5C3EE8' },
  { name: 'NumPy', note: 'Numerical computing', icon: SiNumpy, color: '#013243' },
  { name: 'FAISS', note: 'Vector search', icon: SiMeta, color: '#0467DF' },
  { name: 'JavaScript', note: 'Language', icon: SiJavascript, color: '#E8C500' },
  { name: 'Python', note: 'Language', icon: SiPython, color: '#3776AB' },
  { name: 'C / C++', note: 'Language', icon: SiCplusplus, color: '#00599C' },
  { name: 'Git', note: 'Version control', icon: SiGit, color: '#F05032' },
  { name: 'Docker', note: 'Containers', icon: SiDocker, color: '#2496ED' },
  { name: 'Postman', note: 'API testing', icon: SiPostman, color: '#FF6C37' },
  { name: 'Linux', note: 'Daily driver', icon: SiLinux, color: '#000000' },
]

export const certifications = [
  {
    title: 'Full Stack Generative & Agentic AI with Python',
    description: 'Building LLM-powered apps and agentic workflows end to end in Python.',
    issuer: 'Udemy',
    href: 'https://www.udemy.com/certificate/UC-6ca57b92-600a-4401-ba0e-df04ad361975/',
    year: '2026',
  },
  {
    title: 'Data Structures and Algorithms',
    description: 'Year-long campus training programme covering core DSA and problem solving.',
    issuer: 'GCET Training',
    href: 'https://www.linkedin.com/posts/piyushhdotai_dsa-programming-datastructures-activity-7490448734342979584-aDos',
    year: '2025 – 2026',
  },
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Threat landscape, security principles and the basics of defending systems.',
    issuer: 'IBM',
    href: 'https://www.linkedin.com/posts/piyushhdotai_cybersecurity-ibmskillsbuild-techlearning-activity-7408022883228168192-bp-k',
    year: '2025',
  },
  {
    title: 'Python Django',
    description: 'Server-rendered web apps with Django models, views and templates.',
    issuer: 'Simplilearn',
    href: 'https://www.linkedin.com/posts/piyushhdotai_djangoframework-coding-student-activity-7400214660592906240-bdaQ',
    year: '2025',
  },
]

export const hobbies = ['the gym', 'running', 'F1', 'photography']
