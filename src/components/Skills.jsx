const SKILLS = [
  { name: 'Go', tag: 'golang:1.21', color: 'text-terminal-go', dot: 'bg-terminal-go', shadow: 'shadow-neon-go' },
  { name: 'Python', tag: 'python:3.11', color: 'text-terminal-python', dot: 'bg-terminal-python', shadow: 'shadow-neon-python' },
  { name: 'Docker', tag: 'docker:latest', color: 'text-[#0db7ed]', dot: 'bg-[#0db7ed]', shadow: 'shadow-[0_0_20px_rgba(13,183,237,0.3)]' },
  { name: 'Kubernetes', tag: 'k8s:1.28', color: 'text-[#326ce5]', dot: 'bg-[#326ce5]', shadow: 'shadow-[0_0_20px_rgba(50,108,229,0.25)]' },
  { name: 'ClickHouse', tag: 'clickhouse:23', color: 'text-[#ffcc00]', dot: 'bg-[#ffcc00]', shadow: 'shadow-[0_0_15px_rgba(255,204,0,0.2)]' },
  { name: 'Redis', tag: 'redis:7', color: 'text-[#dc382d]', dot: 'bg-[#dc382d]', shadow: 'shadow-[0_0_15px_rgba(220,56,45,0.25)]' },
  { name: 'RabbitMQ', tag: 'rabbitmq:3', color: 'text-[#ff6600]', dot: 'bg-[#ff6600]', shadow: 'shadow-[0_0_15px_rgba(255,102,0,0.2)]' },
  { name: 'gRPC', tag: 'grpc', color: 'text-terminal-accent', dot: 'bg-terminal-accent', shadow: 'shadow-[0_0_15px_rgba(88,166,255,0.2)]' },
  { name: 'PostgreSQL', tag: 'postgres:15', color: 'text-[#336791]', dot: 'bg-[#336791]', shadow: 'shadow-[0_0_15px_rgba(51,103,145,0.2)]' },
  { name: 'HAProxy', tag: 'haproxy:2.8', color: 'text-terminal-success', dot: 'bg-terminal-success', shadow: 'shadow-[0_0_15px_rgba(63,185,80,0.2)]' },
  { name: 'Prometheus', tag: 'prometheus', color: 'text-[#e6522c]', dot: 'bg-[#e6522c]', shadow: 'shadow-[0_0_15px_rgba(230,82,44,0.2)]' },
  { name: 'Grafana', tag: 'grafana', color: 'text-[#f46800]', dot: 'bg-[#f46800]', shadow: 'shadow-[0_0_15px_rgba(244,104,0,0.2)]' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-terminal-go text-sm tracking-wider mb-6">{'$ docker ps --format "table {{.Names}}"'}</h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10">Skills & Arsenal</h3>
        <div className="bg-terminal-surface border border-terminal-border rounded-xl p-4 sm:p-6 shadow-terminal">
          <div className="font-mono text-terminal-muted text-xs mb-4 flex flex-wrap gap-2">
            <span>CONTAINER ID</span>
            <span className="text-terminal-success">STATUS</span>
            <span>NAMES</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SKILLS.map((s, i) => (
              <div
                key={i}
                className={`group flex items-center gap-3 p-3 rounded-lg border border-terminal-border bg-terminal-bg/50 hover:border-terminal-border transition-colors ${s.shadow} hover:shadow-lg`}
              >
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className={`font-semibold font-mono text-sm ${s.color}`}>{s.name}</p>
                  <p className="font-mono text-terminal-muted text-xs truncate">{s.tag}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-terminal-muted text-xs mt-4">All containers running. No restarts.</p>
        </div>
      </div>
    </section>
  )
}
