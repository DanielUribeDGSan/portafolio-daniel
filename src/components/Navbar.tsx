import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Rocket, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolled]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { label: t('navbar.mission'), id: 'hero' },
    { label: t('navbar.logbook'), id: 'experience' },
    { label: t('navbar.education'), id: 'education' },
    { label: t('navbar.modules'), id: 'showcase' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <motion.div 
        layout
        initial={false}
        onMouseEnter={() => isMobile && setIsExpanded(true)}
        onMouseLeave={() => isMobile && setIsExpanded(false)}
        animate={{
          width: isMobile ? (isExpanded ? "100%" : "auto") : "auto",
          maxWidth: isMobile ? (isExpanded ? "90vw" : "400px") : "1100px",
          height: isMobile ? (isExpanded ? "auto" : "64px") : "auto"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`relative flex flex-col transition-all duration-300 rounded-[2rem] overflow-hidden ${
          scrolled 
          ? 'bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]' 
          : 'bg-brand-sidebar/40 backdrop-blur-xl border-white/5 shadow-2xl'
        } border px-4`}
      >
        <div className="flex items-center justify-between gap-8 py-3 min-h-[64px]">
          {/* 1. Logo - Hidden on Island mode unless expanded or on desktop */}
          {(!isMobile || isExpanded) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection('hero')}
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                <Rocket size={20} className="text-black" />
              </div>
            </motion.div>
          )}

          {/* 2. Desktop Nav Items (Visible only on desktop > 1200px) */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text-muted hover:text-white transition-colors relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-accent transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>
          )}

          {/* 3. Actions (Language + CV + Toggle) */}
          <div className={`flex items-center gap-4 ${isMobile && !isExpanded ? 'w-full justify-between' : 'flex-shrink-0'}`}>
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-brand-text-muted hover:text-brand-accent hover:border-brand-accent/40 hover:bg-white/10 transition-all group"
              title={i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            >
              <Globe size={14} className="group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                {i18n.language.startsWith('en') ? 'ES' : 'EN'}
              </span>
            </button>

            <button
              onClick={() => {
                const cvPath = i18n.language === 'en'
                  ? '/cv/Daniel-Uribe-Garcia-Ingles.pdf'
                  : '/cv/Daniel-Uribe-Garcia-Español.pdf';
                window.open(cvPath, '_blank');
              }}
              className="bg-white text-black px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-brand-accent transition-colors shadow-lg whitespace-nowrap"
            >
              CV <Download size={12} />
            </button>

            {isMobile && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:text-white transition-colors"
              >
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                  <ChevronDown size={20} />
                </motion.div>
              </button>
            )}
          </div>
        </div>

        {/* Expanded Content (Mobile/Island) */}
        <AnimatePresence>
          {isMobile && isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 pb-8"
            >
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex flex-col items-start p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <span className="text-[9px] font-bold text-brand-accent uppercase tracking-widest mb-1 opacity-50 group-hover:opacity-100 transition-opacity">
                      {t('navbar.go_to')}
                    </span>
                    <span className="text-xs font-black uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
