import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Loader2 } from 'lucide-react';
import { profile } from '@/data/portfolio';
import emailjs from '@emailjs/browser';

export default function Contact({ className = '' }: { className?: string }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check environment variables.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Aphiwe',
        },
        publicKey
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Email send error:', err);
      console.error('Error details:', JSON.stringify(err, null, 2));
      if (err instanceof Error) {
        setError(`Failed to transmit message: ${err.message}`);
      } else {
        setError('Failed to transmit message. Please try again or email directly.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={`relative py-24 sm:py-32 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="section-label mb-3">// MODULE 06</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            CONTACT
          </h2>
          <div className="w-20 h-px bg-terminal-glow/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-terminal-glow tracking-wider mb-2">
              // CHANNELS
            </h3>

            <a
              href={`mailto:${profile.email}`}
              className="glass-panel glass-panel-hover rounded-lg p-4 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-terminal-glow/20 rounded bg-terminal-glow/5 group-hover:border-terminal-glow/40 transition-all">
                <Mail className="w-5 h-5 text-terminal-glow" />
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">Email</p>
                <p className="text-gray-300 text-sm">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-lg p-4 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-terminal-glow/20 rounded bg-terminal-glow/5 group-hover:border-terminal-glow/40 transition-all">
                <Linkedin className="w-5 h-5 text-terminal-glow" />
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">LinkedIn</p>
                <p className="text-gray-300 text-sm">aphiwe-ncayiyane</p>
              </div>
            </a>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-lg p-4 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-terminal-glow/20 rounded bg-terminal-glow/5 group-hover:border-terminal-glow/40 transition-all">
                <Github className="w-5 h-5 text-terminal-glow" />
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">GitHub</p>
                <p className="text-gray-300 text-sm">@ncayiyane</p>
              </div>
            </a>

            <div className="glass-panel rounded-lg p-4 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-terminal-glow/20 rounded bg-terminal-glow/5">
                <MapPin className="w-5 h-5 text-terminal-glow" />
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">Location</p>
                <p className="text-gray-300 text-sm">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-panel corner-decor rounded-lg p-6 sm:p-8">
            <h3 className="font-mono text-sm text-terminal-glow tracking-wider mb-6">
              // SEND MESSAGE
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[280px] text-center">
                <div className="w-12 h-12 flex items-center justify-center border border-terminal-glow/40 rounded-full bg-terminal-glow/10 mb-4">
                  <Send className="w-6 h-6 text-terminal-glow" />
                </div>
                <p className="font-mono text-terminal-glow text-glow-soft">
                  &gt; Message transmitted successfully.
                </p>
                <p className="text-gray-500 text-sm mt-2">Connection established. I'll respond soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-terminal-amber/10 border border-terminal-amber/30 rounded-sm">
                    <p className="font-mono text-xs text-terminal-amber">{error}</p>
                  </div>
                )}
                <div>
                  <label className="block font-mono text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isLoading}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-terminal-surface/50 border border-terminal-border text-gray-200 font-mono text-sm rounded-sm focus:outline-none focus:border-terminal-glow/50 focus:ring-1 focus:ring-terminal-glow/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name..."
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isLoading}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-terminal-surface/50 border border-terminal-border text-gray-200 font-mono text-sm rounded-sm focus:outline-none focus:border-terminal-glow/50 focus:ring-1 focus:ring-terminal-glow/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com..."
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    disabled={isLoading}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-terminal-surface/50 border border-terminal-border text-gray-200 font-mono text-sm rounded-sm focus:outline-none focus:border-terminal-glow/50 focus:ring-1 focus:ring-terminal-glow/30 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="terminal-btn w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      TRANSMIT
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-terminal-border/40 text-center">
          <p className="font-mono text-xs text-gray-600 tracking-wider">
            APH1WE // DIGITAL SYSTEM v1.0 — {new Date().getFullYear()}
          </p>
          <p className="font-mono text-xs text-gray-700 mt-2">
            Built with React, TypeScript, Vite &amp; Tailwind CSS
          </p>
        </footer>
      </div>
    </section>
  );
}
