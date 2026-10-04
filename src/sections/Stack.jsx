import SectionHeading from '@/components/SectionHeading'
import { stack } from '@/data/content'

function Stack() {
  return (
    <section id="stack" className="pt-28 md:pt-36">
      <SectionHeading top="Tech" bottom="Stack" />

      <ul className="-mx-2 grid grid-cols-2 gap-1 sm:-mx-4 xl:grid-cols-3">
        {stack.map(({ name, note, icon: Icon, color, dark }) => (
          <li
            key={name}
            className="reveal group flex items-center gap-3 rounded-2xl p-2 sm:gap-4 sm:p-4 transition-colors duration-300 hover:bg-surface"
          >
            <span
              className={`flex h-11 w-11 shrink-0 sm:h-14 sm:w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 ${
                dark ? 'bg-ink ring-1 ring-white/10' : 'bg-paper'
              }`}
            >
              <Icon className="size-6 sm:size-7" color={color} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[0.95rem] font-semibold leading-tight sm:text-lg">{name}</p>
              <p className="truncate text-xs text-muted sm:text-sm">{note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Stack
