
export default function Experience() {
    const experiences = [
        {
            company: "Babel",
            role: "Desarrollador Full Stack",
            period: "2024 - Actualidad",
            description: "Desarrollo de dashboards administrables y aplicaciones móviles utilizando React, TypeScript y React Native. Implementación de buenas prácticas y administración de servidores.",
            tech: ["React", "TypeScript", "React Native", "Node.js"]
        },
        {
            company: "Ironbit",
            role: "Desarrollador Full Stack",
            period: "2023 - 2024",
            description: "Desarrollo de app móvil iOS/Android para BBVA en React Native. Mantenimiento y desarrollo de nuevos módulos.",
            tech: ["React Native", "TypeScript", "AWS", "Angular"]
        },
        {
            company: "Homiemx",
            role: "Desarrollador Full Stack",
            period: "2022 - 2023",
            description: "Desarrollo de funcionalidades para plataforma de rentas. Resolución de bugs, mejoras en CI/CD y creación de APIs.",
            tech: ["React", "Ruby on Rails", "MongoDB", "Docker"]
        },
        {
            company: "Agencia azlo / ventago",
            role: "Desarrollador Full Stack",
            period: "2020 - 2022",
            description: "Desarrollo de tiendas en línea (Shopify/Laravel) y plataformas para eventos en vivo con chat y autenticación.",
            tech: ["Laravel", "PHP", "React", "Firebase"]
        },
        {
            company: "Clasmap / UNAM",
            role: "Desarrollador Full Stack",
            period: "2019 - 2020",
            description: "Desarrollo de sitios web corporativos, blogs para doctores y plataformas empresariales.",
            tech: ["WordPress", "PHP", "Bootstrap", "MySQL"]
        }
    ];

    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experiencia</h2>
            <div className="relative border-l-2 border-yellow-400 ml-4 md:ml-6 space-y-10">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-yellow-400"></div>

                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-yellow-800 uppercase bg-yellow-100 rounded-full">
                                {exp.period}
                            </span>
                            <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                            <div className="text-yellow-500 font-medium mb-3">{exp.company}</div>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
