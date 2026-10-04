import { ArrowRight, Layers, LayoutTemplate } from 'lucide-react'
import { highlights, profile, stats } from '@/data/content'
import { handleAnchorClick } from '@/lib/scroll'

const TONES = {
  orange: { card: 'bg-orange text-paper card-swoosh', icon: Layers, button: 'border-paper/80' },
  lime: { card: 'bg-lime text-ink card-zigzag', icon: LayoutTemplate, button: 'border-ink/80' },
}

function Hero() {
  return (
    <section id="home" className="pt-12 lg:pt-0">
      <h1 className="display-heading hero-heading text-[clamp(3rem,11vw,6.25rem)]!">
        <span className="hero-line block">{profile.firstLine}</span>
        <span className="hero-line ghost">{profile.secondLine}</span>
      </h1>

      <p className="hero-fade mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted">{profile.intro}</p>

      <dl className="hero-fade mt-12 flex flex-wrap gap-x-7 gap-y-6 sm:gap-x-14">
        {stats.map(({ value, prefix, label }) => (
          <div key={label.join(' ')} className="flex flex-col-reverse">
            <dt className="mt-2 text-xs font-medium uppercase leading-tight tracking-wide text-muted">
              {label[0]}
              <br />
              {label[1]}
            </dt>
            <dd className="text-[2.5rem] font-semibold leading-none tracking-tight sm:text-6xl">
              {prefix}
              <span className="stat-count" data-value={value}>
                {value}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {highlights.map(({ tone, title, href }) => {
          const { card, icon: Icon, button } = TONES[tone]
          return (
            <a
              key={title}
              href={href}
              onClick={handleAnchorClick}
              className={`hero-card group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1 ${card}`}
            >
              <Icon size={34} strokeWidth={1.6} />
              <div className="mt-10 flex items-end justify-between gap-4">
                <p className="max-w-[15rem] text-xl font-medium uppercase leading-tight">{title}</p>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-transform duration-300 group-hover:translate-x-1 ${button}`}
                >
                  <ArrowRight size={16} />
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Hero
