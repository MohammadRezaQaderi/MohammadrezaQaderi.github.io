export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-terminal-go text-sm tracking-wider mb-6">$ cat system_status</h2>
        <div className="bg-terminal-surface border border-terminal-border rounded-xl shadow-terminal overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-terminal-border bg-terminal-bg/50">
            <span className="w-2.5 h-2.5 rounded-full bg-terminal-success" />
            <span className="font-mono text-terminal-muted text-sm">System Status · Grafana-style</span>
          </div>
          <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-terminal-bg/50 border border-terminal-border/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-terminal-go/20 flex items-center justify-center">
                <span className="font-mono text-terminal-go font-bold">↑</span>
              </div>
              <div>
                <p className="font-mono text-terminal-muted text-xs uppercase tracking-wider">Uptime</p>
                <p className="text-white font-semibold">5+ Years</p>
                <p className="text-terminal-muted text-sm">in Backend Engineering</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-terminal-bg/50 border border-terminal-border/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-terminal-python/20 flex items-center justify-center">
                <span className="font-mono text-terminal-python font-bold">◉</span>
              </div>
              <div>
                <p className="font-mono text-terminal-muted text-xs uppercase tracking-wider">Current Load</p>
                <p className="text-white font-semibold">Architecting</p>
                <p className="text-terminal-muted text-sm">Pishro Broker & SefroYek Farda</p>
              </div>
            </div>
            <div className="sm:col-span-2 flex items-start gap-4 p-4 rounded-lg bg-terminal-bg/50 border border-terminal-border/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-terminal-accent/20 flex items-center justify-center">
                <span className="font-mono text-terminal-accent font-bold">🎓</span>
              </div>
              <div>
                <p className="font-mono text-terminal-muted text-xs uppercase tracking-wider">Build / Education</p>
                <p className="text-white font-semibold">M.Sc. Computer Engineering (Networks), GPA 4.0</p>
                <p className="text-terminal-muted text-sm">Tarbiat Modares University · B.Sc. Amirkabir University (GPA 3.89)</p>
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-8 pb-6 sm:pb-8">
            <p className="text-terminal-text/90 leading-relaxed">
              Senior Backend Engineer with a passion for Unix, scalable data pipelines, and putting AI where it actually helps.
              I&apos;ve spent years turning monoliths into gRPC microservices, designing systems that handle hundreds of thousands of messages per second,
              and scaling platforms to 80k+ users—all while keeping a clean terminal and readable logs.
              When I&apos;m not shipping code, I teach at Amirkabir University and tinker with distributed systems that stay up at 3 a.m. so you don&apos;t have to.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
