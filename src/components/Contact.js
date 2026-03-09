import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ScrollReveal from './ui/ScrollReveal';
import GradientText from './ui/GradientText';
import { Mail, Linkedin, Github } from 'lucide-react';

// ── Replace these with your EmailJS credentials ──────────────────────────────
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────────────────────────

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/bryanalarcon' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/bryanalarcon' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@bryanalarcon.com' },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <GradientText>work together</GradientText>
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-xl">
            Whether you have a role to discuss, a project in mind, or just want to connect — my inbox is open.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <ScrollReveal delay={0.1}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Opportunity at Acme"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about what you're working on..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try emailing me directly.
                </p>
              )}
            </form>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.2} direction="left">
            <div className="space-y-8">
              <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                <h3 className="text-white font-semibold mb-2">Preferred contact</h3>
                <a
                  href="mailto:hello@bryanalarcon.com"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors text-lg font-medium"
                >
                  hello@bryanalarcon.com
                </a>
                <p className="text-gray-500 text-sm mt-2">
                  I typically respond within 24 hours on business days.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Connect elsewhere</h3>
                <div className="space-y-3">
                  {socials.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <span className="flex items-center justify-center h-10 w-10 rounded-lg border border-gray-800 bg-gray-900 group-hover:border-indigo-500/50 transition-colors">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
