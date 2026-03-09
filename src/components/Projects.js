import TiltedCard from './ui/TiltedCard';
import ScrollReveal from './ui/ScrollReveal';
import GradientText from './ui/GradientText';

const projects = [
  {
    title: 'Operations Scale Initiative',
    description:
      'Led a company-wide process redesign that reduced operational overhead by 30% and increased team throughput across 4 departments. Implemented new tooling, SOPs, and cross-functional accountability structures.',
    tags: ['Operations', 'Process Design', 'Change Management'],
    color: 'from-indigo-500/10 to-purple-500/10',
    border: 'border-indigo-500/20',
    icon: '⚡',
  },
  {
    title: 'Revenue Growth Strategy',
    description:
      'Developed and executed a go-to-market strategy for a new service line, achieving 40% YoY revenue growth within the first year. Coordinated across sales, marketing, and product teams to ensure successful launch.',
    tags: ['Business Development', 'Strategy', 'GTM'],
    color: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-500/20',
    icon: '📈',
  },
  {
    title: 'Team Development Program',
    description:
      'Designed and launched a structured mentorship and career development program for a 25-person team. Improved retention by 45% and increased internal promotion rates within 18 months.',
    tags: ['Leadership', 'People Ops', 'Talent Development'],
    color: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20',
    icon: '👥',
  },
  {
    title: 'Vendor Partnership Program',
    description:
      'Built and managed a vendor ecosystem of 15+ strategic partners. Negotiated contracts worth $2M+ in annual value while improving SLA compliance from 72% to 96%.',
    tags: ['Partnerships', 'Negotiations', 'Vendor Management'],
    color: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/20',
    icon: '🤝',
  },
  {
    title: 'Data Reporting Dashboard',
    description:
      'Spearheaded the implementation of a real-time KPI dashboard used by leadership to drive weekly decision-making. Reduced reporting time by 60% and improved strategic visibility.',
    tags: ['Analytics', 'Reporting', 'Data Ops'],
    color: 'from-orange-500/10 to-yellow-500/10',
    border: 'border-orange-500/20',
    icon: '📊',
  },
  {
    title: 'Market Expansion Plan',
    description:
      'Conducted market research and built the business case for expanding into two new regional markets. Presented to executive stakeholders and secured $500K in budget for the initiative.',
    tags: ['Market Research', 'Business Case', 'Expansion'],
    color: 'from-rose-500/10 to-red-500/10',
    border: 'border-rose-500/20',
    icon: '🌎',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected <GradientText>projects</GradientText>
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-xl">
            A sample of the initiatives I've led — spanning operations, growth, and people.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.07}>
              <TiltedCard className="h-full rounded-xl">
                <div
                  className={`h-full rounded-xl border ${project.border} bg-gradient-to-br ${project.color} p-6 flex flex-col gap-4 bg-gray-900`}
                >
                  <div className="text-3xl">{project.icon}</div>
                  <h3 className="text-lg font-semibold text-white leading-snug">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
