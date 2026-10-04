import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import SectionHeading from '@/components/SectionHeading'
import { projects } from '@/data/content'

function ProjectThumb({ project }) {
  // Fall back to the drawn thumbnail when there is no screenshot or it fails to load.
  // Track which src failed so a changed image path gets a fresh attempt.
  const [failedSrc, setFailedSrc] = useState(null)

  if (!project.image || failedSrc === project.image) {
    return (
      <div className={`${project.thumb.className} flex h-full w-full items-center justify-center`}>
        <span className="rounded-md bg-ink/75 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-lime">
          {project.thumb.label}
        </span>
      </div>
    )
  }
  return (
    <img
      src={project.image}
      alt={`${project.title} preview`}
      loading="lazy"
      onError={() => setFailedSrc(project.image)}
      className={`h-full w-full object-cover ${project.imagePosition ?? 'object-left-top'} transition-transform duration-700 group-hover:scale-105`}
    />
  )
}

function Projects() {
  return (
    <section id="projects" className="pt-28 md:pt-36">
      <SectionHeading top="Recent" bottom="Projects" />

      <ul className="-mx-4 flex flex-col gap-2">
        {projects.map((project) => {
          // Rows link to the live site when there is one, otherwise to the repo
          const primary = project.live ?? project.github
          return (
            <li
              key={project.title}
              className="reveal group relative flex gap-5 rounded-2xl p-4 transition-colors duration-300 hover:bg-surface sm:gap-6"
            >
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-raised sm:h-32 sm:w-32">
                <ProjectThumb project={project} />
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center pr-8">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  {primary ? (
                    <a
                      href={primary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0 after:rounded-2xl after:content-['']"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-sm text-muted sm:text-base">{project.subtitle}</p>
                <p className="mt-2 hidden max-w-xl text-sm leading-relaxed text-white/55 md:block">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-raised px-2.5 py-0.5 text-[0.7rem] text-white/70">
                      {tech}
                    </span>
                  ))}
                  <span className="ml-1 text-[0.7rem] text-muted">{project.year}</span>
                </div>
              </div>

              <div className="absolute right-4 top-4 flex flex-col items-center gap-3">
                {project.live && (
                  <ArrowUpRight
                    size={22}
                    aria-hidden="true"
                    className="text-orange transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source on GitHub`}
                    className="relative z-10 text-white/40 transition-colors hover:text-white"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Projects
