import SectionHeading from '@/components/SectionHeading'
import { journey } from '@/data/content'

function Journey() {
  return (
    <section id="journey" className="pt-28 md:pt-36">
      <SectionHeading top="Experience &" bottom="Education" />

      <ol className="-mx-4 flex flex-col gap-2">
        {journey.map((item) => (
          <li
            key={item.title}
            className="reveal relative rounded-2xl p-5 transition-colors duration-300 hover:bg-surface"
          >
            <span className="absolute right-5 top-5 rounded-full border border-orange/40 px-2.5 py-0.5 text-[0.7rem] font-medium text-orange">
              {item.tag}
            </span>
            <h3 className="pr-24 text-lg font-semibold sm:text-xl">{item.title}</h3>
            <p className="mt-0.5 text-sm text-white/75">{item.role}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{item.description}</p>
            <p className="mt-4 text-xs text-muted">{item.period}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Journey
