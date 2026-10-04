import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { certifications } from '@/data/content'

function Certifications() {
  return (
    <section id="certifications" className="pt-28 md:pt-36">
      <SectionHeading top="Always" bottom="Learning" />

      <ul className="-mx-4 flex flex-col gap-2">
        {certifications.map((cert) => (
          <li key={cert.title} className="reveal">
            <a
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl p-5 transition-colors duration-300 hover:bg-surface"
            >
              <ArrowUpRight
                size={20}
                aria-hidden="true"
                className="absolute right-5 top-5 text-orange transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
              <h3 className="max-w-md pr-8 text-lg font-semibold leading-snug sm:text-xl">{cert.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{cert.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-medium text-orange">{cert.issuer}</span>
                <span className="text-muted">{cert.year}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Certifications
