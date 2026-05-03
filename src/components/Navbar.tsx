import { useTranslation } from "react-i18next";
import { Search, Globe, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { label: t('navbar.mission'), id: 'hero' },
    { label: t('navbar.logbook'), id: 'experience' },
    { label: t('navbar.modules'), id: 'portfolio' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-7xl flex items-center justify-between px-8 py-4 bg-brand-sidebar/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => scrollToSection('hero')}
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
            <Rocket size={20} className="text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tighter uppercase leading-none">Daniel.</span>
            <span className="text-[8px] font-bold tracking-[0.4em] text-brand-text-muted uppercase leading-none mt-1">Systems</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text-muted hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-accent transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button onClick={toggleLanguage} className="hidden md:flex items-center gap-2 text-brand-text-muted hover:text-white transition-colors">
            <Globe size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{i18n.language}</span>
          </button>
          
          <button className="bg-white text-black px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-brand-accent transition-colors shadow-lg shadow-white/5">
            {t('navbar.get_started')} <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}
