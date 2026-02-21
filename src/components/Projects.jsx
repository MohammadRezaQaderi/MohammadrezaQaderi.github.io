const PROJECTS = [
  {
    title: 'Paper Trading Platform',
    desc: 'Simulated trading for Iranian stock market with real-time data and portfolio analytics.',
    tags: ['Go', 'Python', 'Real-time', 'Trading'],
    link: 'https://demo.mavaratrader.ir/',
  },
  {
    title: 'Video Swin Transformer',
    desc: 'Video recognition model with locality and spatial-temporal factorization for speed-accuracy trade-offs.',
    tags: ['PyTorch', 'ML', 'Research'],
    link: 'https://github.com/MohammadRezaQaderi/Video-Swin-Transformer',
  },
  {
    title: 'University Major Selection System',
    desc: 'AI-driven platform for Iranian applicants: exam results analysis and acceptance probability prediction.',
    tags: ['AI', 'Data', 'Web'],
    link: 'https://entekhabbaazmoon.com',
  },
  {
    title: 'Search Engine',
    desc: 'Document retrieval using statistical models and word embeddings.',
    tags: ['NLP', 'IR', 'Python'],
    link: 'https://github.com/MohammadRezaQaderi/Information-Retrieval-System',
  },
  {
    title: 'Evolutionary Game AI (Flappy Plane)',
    desc: 'Evolutionary algorithm learning across 3 difficulty modes over generations.',
    tags: ['AI', 'Game', 'Evolution'],
    link: 'https://github.com/MohammadRezaQaderi/EvolutionaryGames',
  },
  {
    title: 'Message Broker',
    desc: 'Custom message broker and multi-client messenger with Python sockets.',
    tags: ['Python', 'Sockets', 'Distributed'],
    link: 'https://github.com/MohammadRezaQaderi/dallal',
  },
]

const TEACHING = [
  { role: 'Head Lab Instructor & Lecturer', courses: 'Microprocessor and Assembly Labs (6 semesters)' },
  { role: 'Head TA', courses: 'Computer Networks, Startup Development, Data Mining, Web Engineering, Operating Systems' },
  { role: 'Teaching Assistant', courses: 'IoT, Microprocessor, Data Structures, Design Algorithms, Advanced Programming' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 scroll-mt-20 bg-terminal-surface/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-terminal-go text-sm tracking-wider mb-6">$ ls -la projects/</h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10">Projects & Teaching</h3>

        <div className="mb-14">
          <h4 className="text-lg font-semibold text-terminal-text mb-4">Notable Projects</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-terminal-border bg-terminal-bg hover:border-terminal-go/50 transition-colors"
                onClick={() => window.open(p.link, '_blank')}
              >
                <h5 className="font-semibold text-white mb-1">{p.title}</h5>
                <p className="text-terminal-muted text-sm mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t, j) => (
                    <span key={j} className="font-mono text-xs text-terminal-go bg-terminal-go/10 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-terminal-muted text-sm mt-4">
            Explore more on <a href="https://github.com/Mohammadrezaqaderi" className="text-terminal-go hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-terminal-text mb-4">Teaching Experience</h4>
          <p className="text-terminal-muted text-sm mb-4">Amirkabir University of Technology · Fall 2020 – Spring 2026</p>
          <div className="space-y-3">
            {TEACHING.map((t, i) => (
              <div key={i} className="p-4 rounded-lg border border-terminal-border bg-terminal-bg/50">
                <span className="font-mono text-terminal-go text-sm">{t.role}</span>
                <p className="text-terminal-text text-sm mt-1">{t.courses}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
