import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Cpu, Radio } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export default function Experience() {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  return (
    <section id="experience" className="py-0">
      <div className="flex flex-col items-center text-center mb-32 space-y-6">
         <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl flex items-center justify-center">
            <Radio className="text-brand-accent animate-pulse" size={24} />
         </div>
         <h2 className="text-5xl font-black tracking-tighter uppercase italic">{t('experience.title')}</h2>
         <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="bg-brand-sidebar/40 backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] hover:bg-white/5 transition-all hover:border-white/10 shadow-2xl overflow-hidden">
               {/* Ambient Glow */}
               <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-accent/5 blur-[80px] group-hover:bg-brand-accent/10 transition-all"></div>
               
               <div className="relative z-10 flex flex-col gap-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                     <div className="flex items-center gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-brand-dark border border-white/5 rounded-2xl flex items-center justify-center">
                           <Cpu size={28} className="text-brand-accent/40 group-hover:text-brand-accent transition-colors" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-black tracking-tight mb-1">{exp.role}</h3>
                           <p className="text-lg font-bold text-white/40 italic">{exp.company}</p>
                        </div>
                     </div>
                     <span className="self-start md:self-center text-[10px] font-bold tracking-[0.3em] text-brand-accent uppercase bg-brand-accent/5 px-6 py-2 rounded-full border border-brand-accent/10">
                        {exp.period}
                     </span>
                  </div>
                  
                  <ul className="space-y-4">
                     {exp.description.map((point, i) => (
                        <li key={i} className="flex gap-4 text-brand-text-muted text-sm leading-relaxed font-medium">
                           <span className="w-1.5 h-1.5 mt-2 rounded-full bg-brand-accent/40 flex-shrink-0"></span>
                           {point}
                        </li>
                     ))}
                  </ul>

                  {exp.technologies && (
                     <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {exp.technologies.map((tech, i) => (
                           <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-white/30 border border-white/5 px-3 py-1 rounded-lg">
                              {tech}
                           </span>
                        ))}
                     </div>
                  )}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
