import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Maximize2, Terminal } from "lucide-react";

export default function Showcase() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="showcase" className="py-0">
      <div className="flex flex-col items-center text-center mb-20 space-y-4">
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-accent">{t('showcase.tag')}</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">{t('showcase.title')}</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-brand-sidebar/40 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-3xl">
          {/* Header Bar */}
          <div className="h-14 border-b border-white/5 flex items-center px-8 justify-between bg-white/5">
            <div className="flex gap-2.5">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-3.5 h-3.5 rounded-full bg-red-500/40 hover:bg-red-500 transition-colors shadow-lg shadow-red-500/20"
                title="Play Demo"
              ></button>
              <button className="w-3.5 h-3.5 rounded-full bg-yellow-500/40 hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-500/20"></button>
              <button className="w-3.5 h-3.5 rounded-full bg-green-500/40 hover:bg-green-500 transition-colors shadow-lg shadow-green-500/20"></button>
            </div>
            <div className="flex items-center gap-4">
               <div className="text-[10px] font-bold tracking-[0.2em] text-brand-text-muted uppercase hidden md:block">
                 {isPlaying ? t('showcase.live') : t('showcase.idle')}
               </div>
               <div className="w-px h-4 bg-white/10"></div>
               <Maximize2 size={14} className="text-white/20 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="p-8 md:p-12 aspect-video relative flex flex-col gap-6 bg-black/40">
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div 
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-black"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                     <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center animate-pulse">
                        <Play size={32} className="text-black fill-black ml-1" />
                     </div>
                     <span className="text-xs font-black uppercase tracking-widest text-brand-accent">{t('showcase.connecting')}</span>
                     
                     <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-[10px] font-mono text-white/40">
                        <span>00:42 / 02:15</span>
                        <div className="flex-1 mx-8 h-1 bg-white/10 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: '40%' }}
                             className="h-full bg-brand-accent"
                           ></motion.div>
                        </div>
                        <span>HD 1080P</span>
                     </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="dashboard"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 h-full"
                >
                  <div className="flex gap-6 h-1/3">
                    <div className="w-1/3 bg-white/5 border border-white/5 rounded-3xl flex items-center justify-center group hover:border-brand-accent/20 transition-all">
                       <Terminal size={24} className="text-white/10 group-hover:text-brand-accent/40 transition-colors" />
                    </div>
                    <div className="w-2/3 bg-white/5 border border-white/5 rounded-3xl p-8 space-y-4">
                       <div className="w-full h-2 bg-white/5 rounded-full"></div>
                       <div className="w-3/4 h-2 bg-white/5 rounded-full"></div>
                       <div className="w-1/2 h-2 bg-brand-accent/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-brand-accent/5 border border-brand-accent/10 border-dashed rounded-4xl flex items-center justify-center group cursor-pointer" onClick={() => setIsPlaying(true)}>
                     <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-brand-accent group-hover:border-transparent transition-all">
                           <Play size={20} className="text-white group-hover:text-black fill-current" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent/60 group-hover:text-brand-accent transition-colors">{t('showcase.cta')}</span>
                     </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
