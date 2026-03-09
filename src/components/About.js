import ScrollReveal from './ui/ScrollReveal';
import GradientText from './ui/GradientText';

const skills = [
  'Operations Management',
  'Business Development',
  'Strategic Planning',
  'Team Leadership',
  'Process Optimization',
  'Stakeholder Relations',
  'Data Analysis',
  'Budget Management',
  'Cross-functional Collaboration',
  'Change Management',
];

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Led' },
  { value: '3', label: 'Teams Built' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Turning complexity into <GradientText>clarity</GradientText>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a results-driven operations and business development professional with over five years of
                experience helping organizations scale efficiently. I specialize in building the systems,
                processes, and teams that enable sustained growth.
              </p>
              <p>
                My approach is practical and data-informed. I identify bottlenecks, align stakeholders, and
                implement solutions that stick — not just quick fixes. Whether it's standing up a new workflow,
                leading a cross-functional initiative, or developing a go-to-market strategy, I focus on
                outcomes that matter.
              </p>
              <p>
                Outside of work, I'm passionate about mentorship, continuous learning, and finding the
                intersection between people and process.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal delay={0.2} direction="left">
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm border border-gray-800 bg-gray-900 text-gray-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
