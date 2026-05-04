import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "navbar": {
        "mission": "Who am I?",
        "logbook": "Experience",
        "education": "Education",
        "modules": "Portfolio",
        "get_started": "Download CV",
        "go_to": "Go to"
      },
      "sidebar": {
        "about": "Tell me about yourself",
        "experience": "Experience",
        "portfolio": "Portfolio",
        "contact": "Get in touch"
      },
      "hero": {
        "greeting": "Ready for Liftoff 2026",
        "title_main": "Daniel",
        "title_accent": "Uribe",
        "intro": "<b>Full Stack Developer with 7 years of experience</b> in web and mobile applications. Expertise in <b>React, TypeScript, Next.js, Node.js, Laravel, Angular, and React Native</b>. Proven experience working on enterprise-level projects for <b>Cinépolis, Banorte, and BBVA</b>, delivering digital solutions focused on <b>process optimization and user experience</b>.",
        "cta_primary": "Download CV",
        "cta_secondary": "Github"
      },
      "experience": {
        "title": "Professional Experience",
        "items": [
          {
            "company": "Babel",
            "role": "Full Stack Developer",
            "period": "2024 - Present",
            "description": "Developing administrative dashboards and mobile apps using React, TypeScript, and React Native. Implementing best practices and server management."
          },
          {
            "company": "Ironbit",
            "role": "Full Stack Developer",
            "period": "2023 - 2024",
            "description": "Mobile app development for BBVA (iOS/Android) using React Native. Maintaining and developing new core modules."
          },
          {
            "company": "Homiemx",
            "role": "Full Stack Developer",
            "period": "2022 - 2023",
            "description": "Feature development for a rental platform. Bug fixing, CI/CD improvements, and API creation."
          }
        ]
      },
      "showcase": {
        "tag": "Application Demo",
        "title": "Mission Control Interface",
        "idle": "System_Idle_Mode",
        "live": "Streaming_Live_Feed.mp4",
        "cta": "Launch Application Demo",
        "connecting": "Connecting to orbital server..."
      },
      "portfolio": {
        "title": "Selected Modules"
      },
      "education": {
        "title": "Education"
      }
    }
  },
  es: {
    translation: {
      "navbar": {
        "mission": "¿Quién soy?",
        "logbook": "Experiencia Profesional",
        "education": "Educación",
        "modules": "Portafolio",
        "get_started": "Descargar CV",
        "go_to": "Ir a"
      },
      "sidebar": {
        "about": "Cuéntame sobre ti",
        "experience": "Experiencia",
        "portfolio": "Portafolio",
        "contact": "Contáctame"
      },
      "hero": {
        "greeting": "Listo para el despegue 2026",
        "title_main": "Daniel",
        "title_accent": "Uribe",
        "intro": "<b>Desarrollador Full Stack con 7 años de experiencia</b> en aplicaciones web y móviles. Experto en <b>React, TypeScript, Next.js, Node.js, Laravel, Angular y React Native</b>. Experiencia comprobada en proyectos empresariales para <b>Cinépolis, Banorte y BBVA</b>, desarrollando soluciones digitales enfocadas en la <b>optimización de procesos y la experiencia de usuario</b>.",
        "cta_primary": "Descargar CV",
        "cta_secondary": "Github"
      },
      "experience": {
        "title": "Experiencia Profesional",
        "items": [
          {
            "company": "Babel",
            "role": "Desarrollador Full Stack",
            "period": "2024 - Actualidad",
            "description": "Desarrollo de dashboards administrables y aplicaciones móviles utilizando React, TypeScript y React Native. Implementación de buenas prácticas y administración de servidores."
          },
          {
            "company": "Ironbit",
            "role": "Desarrollador Full Stack",
            "period": "2023 - 2024",
            "description": "Desarrollo de app móvil iOS/Android para BBVA en React Native. Mantenimiento y desarrollo de nuevos módulos."
          },
          {
            "company": "Homiemx",
            "role": "Desarrollador Full Stack",
            "period": "2022 - 2023",
            "description": "Desarrollo de funcionalidades para plataforma de rentas. Resolución de bugs, mejoras en CI/CD y creación de APIs."
          }
        ]
      },
      "showcase": {
        "tag": "Demo de Aplicación",
        "title": "Interfaz de Control de Misión",
        "idle": "Sistema_en_Espera",
        "live": "Transmision_en_Vivo.mp4",
        "cta": "Lanzar Demo de Aplicación",
        "connecting": "Conectando al servidor orbital..."
      },
      "portfolio": {
        "title": "Módulos Seleccionados"
      },
      "education": {
        "title": "Educación"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Force Spanish as default
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
