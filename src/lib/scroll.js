// Shared handle to the Lenis instance created in App, so any component can
// trigger a smooth scroll without prop-drilling.
let lenis = null

export const setLenis = (instance) => {
  lenis = instance
}

export const NAV_OFFSET = -96

export function scrollToId(id) {
  const section = document.getElementById(id)
  if (!section) return
  // Land on the section heading rather than the section's top padding
  const target = section.querySelector('h1, h2') ?? section
  if (lenis) lenis.scrollTo(target, { offset: NAV_OFFSET })
  else target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${id}`)
}

// onClick handler for in-page anchors (href="#section")
export function handleAnchorClick(event) {
  const href = event.currentTarget.getAttribute('href')
  if (!href?.startsWith('#')) return
  event.preventDefault()
  scrollToId(href.slice(1))
}
