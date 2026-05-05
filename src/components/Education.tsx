import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GraduationCap, Zap, MapPin } from "lucide-react";

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
}

export default function Education() {
  const { t } = useTranslation();
  const education = t('education.items', { returnObjects: true }) as EducationItem[];

  return (
    <section id="education" className="py-0">
      <div className="flex flex-col items-center text-center mb-32 space-y-6">
         <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl flex items-center justify-center">
            <Zap className="text-brand-accent animate-pulse" size={24} />
         </div>
         <h2 className="text-5xl font-black tracking-tighter uppercase italic">{t('education.title')}</h2>
         <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {education.map((edu, index) => (
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
               
               <div className="relative z-10 flex flex-col md:flex-row gap-10 md:items-center">
                  <div className="flex-shrink-0 w-20 h-20 bg-brand-dark border border-white/5 rounded-2xl flex items-center justify-center">
                     <GraduationCap size={32} className="text-brand-accent/40 group-hover:text-brand-accent transition-colors" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h3 className="text-2xl font-black tracking-tight">{edu.degree}</h3>
                        <span className="text-[10px] font-bold tracking-[0.3em] text-brand-accent uppercase bg-brand-accent/5 px-4 py-1.5 rounded-full border border-brand-accent/10">
                           {edu.period}
                        </span>
                     </div>
                     <p className="text-xl font-bold text-white/40 italic">{edu.school}</p>
                     <div className="flex items-center gap-2 text-brand-text-muted text-xs font-medium">
                        <MapPin size={12} className="text-brand-accent/60" />
                        {edu.location}
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
