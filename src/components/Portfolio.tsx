
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A comprehensive dashboard for managing online stores, including inventory, orders, and customer data analysis. A comprehensive dashboard for managing online stores, including inventory, orders, and customer data analysis.A comprehensive dashboard for managing online stores, including inventory, orders, and customer data analysis.",
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
    },
    {
        id: 5,
        title: "Corporate Website",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Modern corporate website for a multinational firm, focusing on accessibility and SEO.",
        technologies: ["WordPress", "PHP", "SASS"]
    },
    {
        id: 6,
        title: "Medical Blog System",
        category: "Content Management",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A network of medical blogs for healthcare professionals to share articles and case studies.",
        technologies: ["WordPress", "Custom Theme", "MySQL"]
    }
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section className="mb-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Portfolio</h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                    A selection of projects demonstrating full stack capabilities.
                </p>
            </div>

            {/* Masonry Layout using CSS Columns */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="break-inside-avoid bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 group flex flex-col"
                        onClick={() => setSelectedProject(project)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project); }}
                        aria-label={`View details for ${project.title}`}
                    >
                        {/* Image placeholder or header - Optional in Kanban view, but adding for visual appeal */}
                        {/* To strictly follow "adapt to text", we let text dominate. We can hide image or make it small? 
                Let's keep it as a header for visual impact (Pinterest style). */}
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 shadow-sm">
                                {project.category}
                            </div>
                        </div>

                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-yellow-500 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.slice(0, 3).map((tech, i) => (
                                    <span key={i} className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded border border-gray-100">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 3 && (
                                    <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded border border-gray-100">
                                        +{project.technologies.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Hover visual cue */}
                        <div className="h-1 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
                    </div>
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
