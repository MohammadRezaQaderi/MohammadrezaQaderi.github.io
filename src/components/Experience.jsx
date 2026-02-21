const JOBS = [
  {
    role: 'Backend Tech Lead & Software Engineer',
    company: 'Pishro Broker',
    period: 'Aug 2023 – Present',
    branch: 'main',
    highlights: [
      'Microservices: gRPC, RabbitMQ, Redis, isolated DBs',
      'Data pipelines: 10k–50k daily market records per node',
      'CI/CD (GitLab), Docker, MinIO; my.pishrobroker.ir, optionz.ir',
    ],
    metric: null,
  },
  {
    role: 'Chief Technology Officer (CTO) & Team Lead',
    company: 'SefroYek Farda',
    period: 'Jan 2021 – Present',
    branch: 'feature/scale',
    highlights: [
      'B2B/B2C platforms (Entekhab Baazmoon, Hedayat Baazmoon)',
      'Scaled to 80,000+ active users',
      'AI-driven recommendations, automated Word reporting',
    ],
    metric: '80k+ users',
  },
  {
    role: 'Software Engineer (Part-Time)',
    company: 'Farasima',
    period: 'May 2024 – Present',
    branch: 'firewall',
    highlights: [
      'SMS firewall: 300k–500k messages/sec',
      'gRPC APIs, Prometheus/Grafana, ClickHouse, HAProxy',
    ],
    metric: '300k–500k msg/s',
  },
  {
    role: 'Software Engineer',
    company: 'GradientDp',
    period: 'Mar 2022 – Dec 2022',
    branch: 'paper-trading',
    highlights: [
      'Paper trading system for Iranian stock market',
      'Real-time market data, portfolio analytics',
    ],
    metric: null,
  },
  {
    role: 'Software Engineer',
    company: 'Snapp!',
    period: 'May 2019 – Aug 2019',
    branch: 'dispatch',
    highlights: [
      'Event dispatching (polling, MQTT)',
      'Kubernetes, high-traffic services',
    ],
    metric: null,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 scroll-mt-20 bg-terminal-surface/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-terminal-go text-sm tracking-wider mb-6">$ git log --oneline experience</h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10">Experience</h3>
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-terminal-border" aria-hidden />
          {JOBS.map((job, i) => (
            <div key={i} className="relative pl-12 sm:pl-14 pb-12 last:pb-0">
              <div className="absolute left-2 sm:left-4 top-1.5 w-4 h-4 rounded-full bg-terminal-go border-4 border-terminal-bg" aria-hidden />
              <div className="bg-terminal-bg border border-terminal-border rounded-xl p-4 sm:p-5 md:p-6 hover:border-terminal-go/50 transition-colors min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-terminal-muted bg-terminal-surface px-2 py-0.5 rounded">
                    {job.branch}
                  </span>
                  {job.metric && (
                    <span className="font-mono text-xs text-terminal-python bg-terminal-python/10 px-2 py-0.5 rounded">
                      {job.metric}
                    </span>
                  )}
                </div>
                <h4 className="text-white font-semibold text-base sm:text-lg break-words">{job.role}</h4>
                <p className="text-terminal-go font-medium mb-1">{job.company}</p>
                <p className="text-terminal-muted text-sm mb-4">{job.period}</p>
                <ul className="space-y-1.5 text-terminal-text/90 text-sm">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-terminal-success">◦</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
