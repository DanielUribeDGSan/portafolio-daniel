import { X, Globe, Rocket, ArrowRight, Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-8"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] bg-brand-sidebar/60 border border-white/5 rounded-[4rem] shadow-2xl overflow-hidden flex flex-col md:flex-row cursor-default backdrop-blur-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 z-20 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center text-white"
                    >
                        <X size={24} />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-auto bg-black relative p-10">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-[3rem] shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-sidebar/20 to-transparent"></div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-10 md:p-20 overflow-y-auto flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full mb-8">
                               <Rocket size={12} className="text-brand-accent" />
                               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">{project.category}</span>
                            </div>
                            
                            <h2 className="text-6xl font-black tracking-tighter uppercase italic mb-8 leading-none">{project.title}</h2>
                            <p className="text-brand-text-muted leading-relaxed mb-12 text-lg font-medium">
                                {project.description}
                            </p>

                            <div className="mb-16">
                                <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-8">System Architecture</h3>
                                <div className="flex flex-wrap gap-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-6 py-2.5 bg-white/5 text-white text-[10px] uppercase font-black tracking-widest rounded-2xl border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            <button className="bg-white text-black hover:bg-brand-accent font-black py-6 px-6 rounded-[2rem] flex items-center justify-center gap-3 transition-all text-[10px] uppercase tracking-widest">
                                Live Preview <ExternalLink size={18} />
                            </button>
                            <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-6 px-6 rounded-[2rem] flex items-center justify-center gap-3 transition-all text-[10px] uppercase tracking-widest">
                                <Github size={18} /> Source Code
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
