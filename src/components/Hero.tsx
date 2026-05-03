import { useTranslation } from "react-i18next";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-[70vh] flex flex-col items-center justify-center text-center">
      {/* Orbital SVG Animation Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[600px]">
          {/* Static Orbit Rings */}
          <div className="absolute inset-0 border border-white/5 rounded-full scale-100"></div>
          <div className="absolute inset-0 border border-white/5 rounded-full scale-125"></div>
          <div className="absolute inset-0 border border-white/5 rounded-full scale-150"></div>

          {/* Animated Orbiting Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-accent rounded-full blur-sm"></div>
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 scale-125"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-secondary rounded-full blur-sm"></div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
        >
          <Sparkles size={14} className="text-brand-accent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">{t('hero.greeting')}</span>
          <ArrowRight size={14} className="text-white/20" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.8] text-white"
        >
          {t('hero.title_main')} <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40">{t('hero.title_accent')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto font-medium leading-relaxed"
        >
          {t('hero.intro')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 pt-6"
        >
          <button className="bg-white text-black px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-accent transition-all shadow-xl shadow-white/5">
            {t('hero.cta_primary')}
          </button>
          <button className="bg-brand-sidebar/40 border border-white/10 px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white/5 transition-all">
            <Github size={18} /> {t('hero.cta_secondary')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
