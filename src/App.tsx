

import { ClickToComponent } from "click-to-react-component";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Experience from './components/Experience';

import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Education from "./components/Education";

function App() {

  return (
    <>
      <ClickToComponent editor="antigravity" />

      <div className="relative min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden selection:bg-brand-accent selection:text-white">
        {/* Deep Space Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Stars Layer 1 */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black"></div>
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>

          {/* Nebula Glow (Launch UI style) */}
          <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-brand-accent/10 blur-[120px] rounded-full"></div>
          <div className="absolute -top-[10%] left-[20%] w-[40%] h-[40%] bg-brand-secondary/5 blur-[120px] rounded-full"></div>
        </div>

        <Navbar />

        <div className="relative z-10">
          <main className="w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar pt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 lg:py-24 space-y-32 md:space-y-48">
              <Hero />
              <Experience />
              <Education />
              <Showcase />
              <Portfolio />

              <footer className="pt-40 pb-20 text-center border-t border-white/5">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <div className="w-2 h-2 bg-brand-accent rounded-full animate-ping"></div>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-text-muted">
                    Daniel Uribe &copy; {new Date().getFullYear()}
                  </p>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
