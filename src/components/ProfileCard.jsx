import { Flame, MapPin } from 'lucide-react'
import { profile, socials } from '@/data/content'

function ProfileCard() {
  return (
    <div className="profile-card relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-3xl bg-paper px-6 pb-6 pt-6 text-center text-ink">
      {/* Dashed orbit around the top of the photo */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 -top-32 h-60 w-60"
        viewBox="0 0 240 240"
        fill="none"
      >
        <circle cx="120" cy="120" r="108" stroke="var(--color-orange)" strokeWidth="3" strokeDasharray="9 7" />
      </svg>

      {/* On desktop the card is pinned, so the photo shrinks with the viewport to keep the whole card on screen */}
      <div className="relative mx-auto aspect-[5/6] w-[78%] overflow-hidden rounded-2xl bg-orange lg:aspect-auto lg:h-[clamp(8rem,calc(100svh-26rem),17rem)] lg:w-[82%]">
        <img
          src={profile.photo}
          alt="Illustrated portrait of Piyush"
          className="h-full w-full object-cover object-[52%_center]"
        />
      </div>

      <h2 className="mt-5 text-[1.75rem] font-bold leading-none tracking-tight">{profile.name}</h2>

      {/* Flame badge sits on the end of a dashed arc that runs off the card edge (badge left = arc end x - half badge) */}
      <div className="relative mx-auto mt-3 h-14">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 top-0 h-14 w-40"
          viewBox="0 0 160 56"
          fill="none"
        >
          <path d="M0 53 C 60 52, 104 40, 122 12" stroke="var(--color-orange)" strokeWidth="3" strokeDasharray="9 7" />
        </svg>
        <span className="absolute left-[5.125rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange text-paper">
          <Flame size={16} fill="currentColor" />
        </span>
      </div>

      <p className="mx-auto max-w-[16rem] text-[0.92rem] leading-snug text-ink/60">{profile.tagline}</p>

      <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-ink/45">
        <MapPin size={13} /> {profile.location}
      </p>

      <ul className="mt-5 flex items-center justify-center gap-5 text-orange">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="block transition-transform duration-300 hover:-translate-y-0.5 hover:text-orange-deep"
            >
              <Icon size={21} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileCard
