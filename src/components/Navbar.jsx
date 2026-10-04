import { navItems } from '@/data/content'
import { handleAnchorClick } from '@/lib/scroll'

function Navbar({ activeSection }) {
  return (
    <nav
      aria-label="Primary"
      className="nav-pill fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-2xl border border-white/5 bg-surface/85 p-1.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md"
    >
      <ul className="flex items-center gap-0.5">
        {navItems.map(({ id, label, icon: Icon }) => {
          const active = activeSection === id
          return (
            <li key={id} className="group relative">
              <a
                href={`#${id}`}
                onClick={handleAnchorClick}
                aria-label={label}
                aria-current={active ? 'location' : undefined}
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${
                  active ? 'bg-raised text-orange' : 'text-white/80 hover:bg-raised hover:text-white'
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />
              </a>
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-paper px-2 py-1 text-[0.7rem] font-medium text-ink opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                {label}
              </span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
