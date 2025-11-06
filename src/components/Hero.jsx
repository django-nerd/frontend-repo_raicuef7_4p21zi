import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability (non-blocking for pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
        <div className="text-white max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/90">
              <Rocket size={12} className="text-black" />
            </span>
            Inspiring Entrepreneurship • µLearn MCE × Inspira Marian IEDC
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Revamp the Future
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Creativity, code, and community. A next‑gen hub for builders at Marian Engineering College.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-black shadow hover:bg-emerald-300 transition"
            >
              Join Us
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Explore Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
