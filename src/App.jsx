import Hero from './components/Hero';
import Stats from './components/Stats';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <Hero />
      <Stats />
      <Events />
      <section id="about" className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">About Us</h2>
              <p className="mt-3 text-white/80">
                We blend creativity and technology to empower student founders. Access resources, mentorship, and a thriving community to explore, engage, and elevate your craft.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#resources" className="rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-black hover:bg-emerald-300">Explore</a>
                <a href="#events" className="rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10">Engage</a>
                <a href="#join" className="rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10">Elevate</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <ul className="space-y-3 text-sm text-white/80">
                <li>• Partnerships with µLearn MCE, Inspira Marian IEDC, and local startups</li>
                <li>• Hands-on bootcamps, ideathons, and peer-led learning circles</li>
                <li>• Access to mentors, industry experts, and launchpad opportunities</li>
                <li>• A culture of building in public and shipping real projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
