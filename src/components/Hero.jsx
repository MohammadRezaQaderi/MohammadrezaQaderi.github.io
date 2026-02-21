import { useState, useEffect } from 'react'

const BOOT_LINES = [
  '[OK] Booting Mohammadreza Engine v2.0...',
  '[OK] Loading Go runtime...',
  '[OK] Starting goroutines...',
  '[OK] Establishing gRPC connections...',
  '[OK] RabbitMQ queues initialized',
  '[OK] Redis cache warmed',
  '[OK] ClickHouse analytics ready',
  '[OK] System ready. Welcome.',
]

export default function Hero() {
  const [phase, setPhase] = useState('boot') // 'boot' | 'transition' | 'hero'
  const [visibleLines, setVisibleLines] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (phase !== 'boot') return
    if (visibleLines < BOOT_LINES.length) {
      const t = setTimeout(() => setVisibleLines((n) => n + 1), 280)
      return () => clearTimeout(t)
    }
    const done = setTimeout(() => setPhase('transition'), 600)
    return () => clearTimeout(done)
  }, [phase, visibleLines])

  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (phase !== 'transition') return
    const t = setTimeout(() => setPhase('hero'), 500)
    return () => clearTimeout(t)
  }, [phase])

  if (phase === 'boot' || phase === 'transition') {
    return (
      <section
        className={`min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 transition-opacity duration-500 ${
          phase === 'transition' ? 'opacity-0' : 'opacity-100'
        }`}
        aria-label="System boot"
      >
        <div className="max-w-2xl mx-auto w-full">
          <div className="bg-terminal-surface border border-terminal-border rounded-lg shadow-terminal overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-terminal-border bg-terminal-bg/50">
              <span className="w-3 h-3 rounded-full bg-terminal-warn/80" />
              <span className="w-3 h-3 rounded-full bg-terminal-success/80" />
              <span className="w-3 h-3 rounded-full bg-terminal-muted" />
              <span className="font-mono text-terminal-muted text-sm ml-2">system.log</span>
            </div>
            <div className="p-4 font-mono text-sm min-h-[200px] terminal-scrollbar">
              {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className="text-terminal-success animate-boot-line"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {line}
                </div>
              ))}
              <span
                className={`inline-block w-2 h-4 ml-0.5 bg-terminal-go align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ animation: 'blink 1s step-end infinite' }}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 animate-fade-in"
      aria-label="Hero"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src="/profile.jpeg"
            alt="Mohammadreza Qaderi – Senior Backend Engineer"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-terminal-border shadow-neon-go ring-2 ring-terminal-go/30"
            width={160}
            height={160}
            fetchPriority="high"
          />
        </div>
        <p className="font-mono text-terminal-go text-sm sm:text-base mb-2 tracking-wider">
          ~/senior-backend-engineer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
          Mohammadreza Qaderi
        </h1>
        <p className="text-xl sm:text-2xl text-terminal-muted max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          I build high-performance systems that don&apos;t sleep, so you can.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 font-mono text-sm mb-8 sm:mb-10">
          <span className="text-terminal-muted">Go</span>
          <span className="text-terminal-muted">·</span>
          <span className="text-terminal-muted">Python</span>
          <span className="text-terminal-muted">·</span>
          <span className="text-terminal-muted">Microservices</span>
          <span className="text-terminal-muted">·</span>
          <span className="text-terminal-muted">Kubernetes</span>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex justify-center px-6 py-3 rounded-lg border border-terminal-go text-terminal-go hover:bg-terminal-go/10 transition-colors font-medium text-sm sm:text-base"
          >
            View system status →
          </a>
          <span className="hidden sm:inline text-terminal-muted">|</span>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="/ShortCV.pdf"
              download="Mohammadreza-Qaderi-ShortCV.pdf"
              className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-2.5 sm:py-3 rounded-lg border border-terminal-python text-terminal-python hover:bg-terminal-python/10 transition-colors font-mono text-sm"
            >
              Short CV
            </a>
            <a
              href="/Mgh.pdf"
              download="Mohammadreza-Qaderi-CV.pdf"
              className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-2.5 sm:py-3 rounded-lg border border-terminal-go text-terminal-go hover:bg-terminal-go/10 transition-colors font-mono text-sm"
            >
              Full CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
