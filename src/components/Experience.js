import ScrollReveal from './ui/ScrollReveal';
import GradientText from './ui/GradientText';

const experience = [
  {
    role: 'Senior Operations Manager',
    company: 'Acme Corp',
    location: 'Los Angeles, CA',
    dates: '2022 – Present',
    bullets: [
      'Oversee daily operations for a 40-person team across logistics, customer success, and support functions.',
      'Reduced operational costs by 22% through process re-engineering and vendor renegotiation.',
      'Built and implemented a company-wide OKR framework adopted by all departments.',
      'Serve as primary liaison between executive leadership and department heads.',
    ],
  },
  {
    role: 'Business Development Associate',
    company: 'GrowthCo',
    location: 'Remote',
    dates: '2020 – 2022',
    bullets: [
      'Identified and closed $1.2M in new partnership revenue over two years.',
      'Managed a pipeline of 50+ prospective accounts using CRM tools and outbound outreach strategies.',
      'Collaborated with the product team to shape features based on enterprise client feedback.',
    ],
  },
  {
    role: 'Operations Coordinator',
    company: 'StartupXYZ',
    location: 'San Francisco, CA',
    dates: '2018 – 2020',
    bullets: [
      'Coordinated cross-departmental projects and maintained project tracking dashboards.',
      'Managed onboarding logistics for 30+ new hires per quarter during a high-growth period.',
      'Drafted and maintained SOPs for key operational workflows.',
    ],
  },
];

const education = [
  {
    degree: 'B.S. in Business Administration',
    school: 'University of California',
    dates: '2014 – 2018',
    note: 'Concentration in Management & Strategy',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Experience &amp; <GradientText>Education</GradientText>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-0">
          {/* Timeline — left side (experience) */}
          <div className="space-y-0">
            {experience.map((item, i) => (
              <ScrollReveal key={item.role} delay={i * 0.1}>
                <div className="relative pl-8 pb-12 md:pr-12">
                  {/* Connector line */}
                  {i < experience.length - 1 && (
                    <div className="absolute left-3 top-4 bottom-0 w-px bg-gray-800" />
                  )}
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-indigo-500 bg-gray-950 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                  </div>

                  <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{item.role}</h3>
                        <p className="text-indigo-400 text-sm mt-0.5">
                          {item.company} · {item.location}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.dates}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-gray-400 flex gap-2">
                          <span className="text-indigo-500 mt-1 flex-shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Center divider on desktop */}
          <div className="hidden md:block w-px bg-gray-800 mx-8 mt-6" />

          {/* Right side — education + extras */}
          <div className="space-y-8 md:pt-0 pt-8 md:pl-0">
            <ScrollReveal delay={0.2} direction="left">
              <h3 className="text-lg font-semibold text-white mb-6">Education</h3>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-xl border border-gray-800 bg-gray-900/60 p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h4 className="text-white font-medium">{edu.degree}</h4>
                    <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                      {edu.dates}
                    </span>
                  </div>
                  <p className="text-indigo-400 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.note}</p>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="left">
              <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Salesforce', 'HubSpot', 'Asana', 'Notion', 'Slack',
                    'Google Workspace', 'Excel / Sheets', 'Tableau', 'Jira', 'Zendesk',
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
