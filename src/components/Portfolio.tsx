import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Layout, Globe, Box, Terminal, ChevronRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A comprehensive dashboard for managing online stores, including inventory, orders, and customer data analysis.",
        technologies: ["React", "TypeScript", "Tailwind", "Recharts"]
    },
    {
        id: 2,
        title: "Banking Mobile App",
        category: "Mobile Development",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Secure and user-friendly mobile banking application allowing transfers, bill payments, and account monitoring.",
        technologies: ["React Native", "Redux", "Node.js"]
    },
    {
        id: 3,
        title: "Real Estate Platform",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Platform for renting and buying properties with advanced filtering, map integration, and virtual tours.",
        technologies: ["Next.js", "MongoDB", "Google Maps API"]
    },
    {
        id: 4,
        title: "Event Streaming Platform",
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Live event streaming platform with real-time chat, user authentication, and ticketing system.",
        technologies: ["Laravel", "Vue.js", "WebSockets", "AWS"]
    }
];

export default function Portfolio() {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="portfolio" className="py-0">
            <div className="flex flex-col items-center text-center mb-32 space-y-6">
                <div className="w-12 h-12 bg-brand-secondary/10 border border-brand-secondary/20 rounded-2xl flex items-center justify-center">
                    <Box className="text-brand-secondary" size={24} />
                </div>
                <h2 className="text-5xl font-black tracking-tighter uppercase italic">{t('portfolio.title')}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-secondary to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-brand-sidebar/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] overflow-hidden hover:bg-white/5 transition-all hover:border-white/10 flex flex-col shadow-2xl"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="relative h-72 overflow-hidden bg-brand-dark p-6">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-[2rem] transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-sidebar via-transparent to-transparent opacity-60"></div>
                            <div className="absolute top-10 left-10">
                                <span className="px-4 py-2 bg-black/60 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-white/10">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-12 space-y-8">
                            <div className="flex justify-between items-start">
                                <h3 className="text-4xl font-black tracking-tight leading-none group-hover:text-brand-accent transition-colors">{project.title}</h3>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-black transition-all">
                                   <ChevronRight size={24} />
                                </div>
                            </div>
                            <p className="text-brand-text-muted text-base leading-relaxed font-medium">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
                                        #{tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
