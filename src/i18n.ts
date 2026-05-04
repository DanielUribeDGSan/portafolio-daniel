import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "navbar": {
        "mission": "Mission",
        "logbook": "Logbook",
        "modules": "Modules",
        "get_started": "Get Started"
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
        "intro": "Full Stack Developer specialized in crafting high-performance, cosmic-scale web experiences with React, Node.js and Cloud architecture.",
        "cta_primary": "Get Started",
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
      }
    }
  },
  es: {
    translation: {
      "navbar": {
        "mission": "Misión",
        "logbook": "Bitácora",
        "modules": "Módulos",
        "get_started": "Empezar"
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
        "intro": "Desarrollador Full Stack especializado en crear experiencias web de escala cósmica y alto rendimiento con React, Node.js y arquitectura Cloud.",
        "cta_primary": "Empezar",
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
