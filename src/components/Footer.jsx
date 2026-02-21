const LINKS = [
  { label: 'GitHub', href: 'https://github.com/Mohammadrezaqaderi', icon: '◇' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammadreza-qaderi-6770591a4', icon: 'in' },
  { label: 'Email', href: 'mailto:muhammadrezaqaderi@gmail.com', icon: '@' },
]

export default function Footer({ ...props }) {
  return (
    <footer {...props} className="py-12 px-4 sm:px-6 md:px-8 border-t border-terminal-border scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
          {LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="font-mono text-terminal-muted hover:text-terminal-go transition-colors flex items-center gap-2"
            >
              <span className="text-terminal-go">{icon}</span>
              {label}
            </a>
          ))}
        </div>
        <p className="font-mono text-terminal-muted text-sm">
          Deployed with 0 bugs (hopefully) on GitHub Pages.
        </p>
        <p className="text-terminal-muted/70 text-xs mt-2">
          © {new Date().getFullYear()} Mohammadreza Qaderi
        </p>
      </div>
    </footer>
  )
}
