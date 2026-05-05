import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, ArrowLeft, Monitor, Building2, Ticket, Layout, PlayCircle } from "lucide-react";

interface Video {
  id: string;
  name: string;
  path: string;
}

interface Project {
  id: string;
  name: string;
  icon: any;
  videos: Video[];
}

export default function Showcase() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const projects: Project[] = [
    {
      id: "banorte",
      name: "Banorte",
      icon: Building2,
      videos: [
        { id: "plantillas", name: "Plantillas", path: "/portafolio/banorte/plantillas.mp4" },
        { id: "dnc", name: "DNC", path: "/portafolio/banorte/dnc.mp4" }
      ]
    },
    {
      id: "bbva",
      name: "BBVA",
      icon: Monitor,
      videos: [
        { id: "bbva-app", name: "BBVA App", path: "/portafolio/bbva/bbva-app.mp4" }
      ]
    },
    {
      id: "cinepolis",
      name: "Cinépolis",
      icon: Ticket,
      videos: [
        { id: "cinepolis", name: "Cinépolis Web", path: "/portafolio/cinepolis/cinepolis.mp4" },
        { id: "cinepolis-app", name: "Cinépolis App", path: "/portafolio/cinepolis/cinepolis-app.mp4" }
      ]
    },
    {
      id: "apps-de-escritorio",
      name: "Apps de Escritorio",
      icon: Layout,
      videos: [
        { id: "floaty", name: "Floaty", path: "/portafolio/apps-de-escritorio/floaty.mp4" },
        { id: "task-goblin", name: "Task Goblin", path: "/portafolio/apps-de-escritorio/task-goblin.mp4" }
      ]
    }
  ];

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setCurrentVideoIndex(0);
  };

  const handleBack = () => {
    setSelectedProject(null);
    setCurrentVideoIndex(0);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
    }
  }, [selectedProject, currentVideoIndex]);

  return (
    <section id="showcase" className="py-0">
      <div className="flex flex-col items-center text-center mb-12 space-y-4">
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-accent">{t('showcase.tag')}</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">{t('showcase.title')}</h2>
      </div>

      {/* Project Selection Circles */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4">
          {projects.map((project) => (
            <motion.button
              key={project.id}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleProjectSelect(project)}
              className={`flex flex-col items-center gap-4 group transition-all ${selectedProject?.id === project.id ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all shadow-2xl relative overflow-hidden border-2 ${selectedProject?.id === project.id
                ? 'bg-brand-accent border-brand-accent shadow-brand-accent/40'
                : 'bg-white/15 border-white/20 group-hover:border-brand-accent/60 group-hover:bg-white/25'
                }`}>
                <project.icon size={30} className={`${selectedProject?.id === project.id ? 'text-black' : 'text-white group-hover:text-brand-accent'} transition-colors relative z-10`} />
                {selectedProject?.id === project.id && (
                  <motion.div
                    layoutId="circle-glow"
                    className="absolute inset-0 bg-white/30 blur-xl"
                  />
                )}
              </div>
              <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${selectedProject?.id === project.id ? 'text-brand-accent' : 'text-white/60 group-hover:text-white'}`}>
                {project.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Sub-options for multiple videos */}
      <div className="max-w-xl mx-auto mb-10 h-12">
        <AnimatePresence mode="wait">
          {selectedProject && selectedProject.videos.length > 1 && (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex justify-center gap-3"
            >
              {selectedProject.videos.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => setCurrentVideoIndex(idx)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${currentVideoIndex === idx
                    ? "bg-brand-accent text-black border-brand-accent shadow-lg shadow-brand-accent/20"
                    : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border-white/10"
                    }`}
                >
                  {vid.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="bg-brand-sidebar/40 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-3xl relative">
          {/* Header Bar */}
          <div className="h-14 border-b border-white/5 flex items-center px-8 justify-between bg-white/5">
            <div className="flex gap-2.5 items-center">
              <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-lg shadow-red-500/20"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/20"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-lg shadow-green-500/20"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[10px] font-bold tracking-[0.2em] text-brand-text-muted uppercase hidden md:block">
                {selectedProject ? `${selectedProject.name} // ${selectedProject.videos[currentVideoIndex].name}` : t('showcase.idle')}
              </div>
              <div className="w-px h-4 bg-white/10"></div>
              <Maximize2 size={14} className="text-white/20 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="relative aspect-video bg-black overflow-hidden group/player">
            <AnimatePresence mode="wait">
              {!selectedProject ? (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-12 bg-[radial-gradient(circle_at_center,rgba(255,183,0,0.05)_0%,transparent_70%)]"
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-24 h-24 bg-white/10 border border-white/20 rounded-full flex items-center justify-center animate-pulse group cursor-pointer hover:bg-brand-accent hover:border-transparent transition-all" onClick={() => handleProjectSelect(projects[0])}>
                      <PlayCircle size={40} className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent/40">{t('showcase.idle')}</span>
                      <h3 className="text-xl font-bold text-white/40 tracking-tighter uppercase italic">Selecciona un proyecto para visualizar</h3>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="video-player"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10"
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    controls={false}
                    autoPlay
                    loop
                    muted
                  >
                    <source src={selectedProject.videos[currentVideoIndex].path} type="video/mp4" />
                  </video>

                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/player:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={handleBack}
                          className="p-3 bg-white/10 hover:bg-brand-accent hover:text-black rounded-full transition-all"
                          title="Regresar al menú"
                        >
                          <ArrowLeft size={20} />
                        </button>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">{selectedProject.name}</span>
                          <span className="text-lg font-bold text-white tracking-tight">{selectedProject.videos[currentVideoIndex].name}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Live Feed // 1080p</span>
                      </div>
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
