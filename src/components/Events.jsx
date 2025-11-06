import { Calendar, ExternalLink } from 'lucide-react';

const events = [
  { title: 'Eden 3.0', desc: 'A flagship innovation fest celebrating prototypes and pitching.', link: '#', date: '2024' },
  { title: 'UXcelerate Bootcamp', desc: 'Hands-on UX deep dive with real-world challenges.', link: '#', date: '2024' },
  { title: 'Keyboard Mastery', desc: 'Speed + accuracy drills for power coders.', link: '#', date: '2024' },
  { title: 'Shalyam Ideathon', desc: 'Rapid ideation to tackle real community problems.', link: '#', date: '2024' },
  { title: 'Lumina', desc: 'Showcase of creative tech projects and art-meets-code.', link: '#', date: '2024' },
  { title: 'Version Control 101', desc: 'Git fundamentals for modern collaboration.', link: '#', date: '2024' },
];

function EventCard({ title, desc, link, date }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <div className="mb-2 inline-flex items-center gap-2 text-xs text-slate-500 dark:text-white/70">
        <Calendar size={14} />
        <span>{date}</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{desc}</p>
      <a
        href={link}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-500 hover:text-emerald-400"
      >
        Learn more <ExternalLink size={16} />
      </a>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(16,185,129,0.15), transparent 40%)'}} />
    </div>
  );
}

export default function Events() {
  return (
    <section id="events" className="py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Recent Highlights</h2>
            <p className="text-sm text-slate-600 dark:text-white/70">Bootcamps, ideathons, and community sprints.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-emerald-500 hover:text-emerald-400">View all</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}
