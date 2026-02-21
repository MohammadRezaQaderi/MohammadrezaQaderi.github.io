import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const handleEscape = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-terminal-border/50 bg-terminal-bg/90 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <a
          href="#"
          className="font-mono text-terminal-go text-xs sm:text-sm hover:text-terminal-go/80 truncate min-w-0"
          onClick={close}
        >
          mrq@howami:~$
        </a>

        {/* Desktop: horizontal links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="font-mono text-terminal-muted text-sm hover:text-terminal-go transition-colors whitespace-nowrap"
                onClick={close}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center w-10 h-10 rounded border border-terminal-border/50 bg-terminal-surface/80 hover:bg-terminal-surface text-terminal-muted hover:text-terminal-go transition-colors gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`w-5 h-0.5 bg-current rounded transition-transform ${open ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`w-5 h-0.5 bg-current rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-current rounded transition-transform ${open ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="nav-menu"
        className={`md:hidden absolute top-full left-0 right-0 border-b border-terminal-border bg-terminal-bg/98 backdrop-blur-md transition-all duration-200 ease-out overflow-hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
        aria-hidden={!open}
      >
        <ul className="py-4 px-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="block font-mono text-terminal-muted hover:text-terminal-go py-3 px-4 rounded-lg hover:bg-terminal-surface/80 transition-colors"
                onClick={close}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
