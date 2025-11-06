import { Users, Medal, Activity } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20">
      <Icon className="text-emerald-400" size={20} />
    </div>
    <div className="text-3xl font-extrabold text-white">{value}</div>
    <div className="mt-1 text-sm text-white/70">{label}</div>
  </div>
);

export default function Stats() {
  // Static demo values; can be swapped to live API later.
  const stats = [
    { icon: Users, label: 'Students Enrolled', value: '1,250+' },
    { icon: Activity, label: 'Learning Circles', value: '34' },
    { icon: Medal, label: 'Rank', value: '#7 in Kerala' },
  ];

  return (
    <section className="relative z-10 -mt-16 pb-6">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
