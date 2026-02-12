
import { X, ExternalLink, Github } from "lucide-react";

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
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/95 backdrop-blur-md animate-fadeIn p-4 md:p-8"
            onClick={onClose}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
            aria-label="Close modal"
        >
            <div
                className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-slideUp cursor-default"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 transition-all flex items-center justify-center text-stone-800 hover:rotate-90 duration-300"
                >
                    <X size={24} />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-2/3 h-1/2 md:h-auto bg-gray-100 relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/3 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                    <div className="mb-auto">
                        <span className="text-yellow-500 font-bold tracking-wider text-xs uppercase mb-2 block">{project.category}</span>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {project.description}
                        </p>

                        <div className="mb-8">
                            <h3 className="font-bold text-gray-800 mb-3 text-sm">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 mt-8">
                        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors uppercase text-sm">
                            View Project <ExternalLink size={16} />
                        </button>
                        <button className="w-full border-2 border-gray-200 hover:border-gray-800 text-gray-600 hover:text-gray-800 font-bold py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors uppercase text-sm">
                            Github <Github size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
