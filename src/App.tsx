
import { useState } from "react";
import { ClickToComponent } from "click-to-react-component";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";


import Portfolio from "./components/Portfolio";
import { Menu, X } from "lucide-react";
import Experience from './components/Experience';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <ClickToComponent editor="antigravity" />

      <div className="flex min-h-screen bg-gray-50 font-sans">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-yellow-400 p-2 rounded-full shadow-lg text-gray-800"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Left Sidebar - Fixed on desktop, drawer on mobile */}
        <div
          className={`fixed inset-0 z-40 lg:static lg:z-auto bg-black/50 lg:bg-transparent transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"}`}
          onClick={() => setIsSidebarOpen(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsSidebarOpen(false); }}
          aria-label="Close sidebar"
        >
          <div className={`fixed left-0 top-0 bottom-0 w-[280px] bg-white transition-transform duration-300 lg:translate-x-0 lg:static ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
            <Sidebar />
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-10 w-full">
          <Hero />



          <Experience />

          <Portfolio />


          <footer className="bg-white p-4 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Daniel Uribe García. All Rights Reserved.</p>
          </footer>
        </main>

      </div>
    </>
  );
}

export default App;
