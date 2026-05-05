import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ShieldCheck, Code2, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation();
  const strengths = t('skills.strengths', { returnObjects: true }) as string[];
  const technicalSkills = t('skills.items', { returnObjects: true }) as string[];

  return (
    <section id="skills" className="py-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Strengths Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-brand-accent" size={20} />
              </div>
              <h2 className="text-3xl font-black tracking-tight uppercase italic">{t('skills.title_strengths')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-start gap-4 group hover:bg-white/10 transition-all hover:border-white/10"
                >
                  <CheckCircle2 size={18} className="text-brand-accent/40 mt-0.5 flex-shrink-0 group-hover:text-brand-accent transition-colors" />
                  <span className="text-sm font-semibold text-white/80 leading-snug">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-secondary/10 border border-brand-secondary/20 rounded-xl flex items-center justify-center">
                <Code2 className="text-brand-secondary" size={20} />
              </div>
              <h2 className="text-3xl font-black tracking-tight uppercase italic">{t('skills.title_skills')}</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-5 py-3 bg-brand-sidebar/60 border border-white/5 rounded-xl text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white hover:border-brand-accent/40 hover:bg-brand-accent/5 cursor-default transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
