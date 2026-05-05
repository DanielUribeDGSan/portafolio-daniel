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
        "intro": "<b>Full Stack Developer SR with 7 years of experience</b> in web and mobile applications. Expertise in <b>React, TypeScript, Next.js, Node.js, Laravel, Angular, and React Native</b>. Proven experience working on enterprise-level projects for <b>Cinépolis, Banorte, and BBVA</b>, delivering digital solutions focused on <b>process optimization and user experience</b>.",
        "cta_primary": "Download CV",
        "cta_secondary": "Github"
      },
      "experience": {
        "title": "Professional Experience",
        "items": [
          {
            "company": "Babel Ciudad de México",
            "role": "Full Stack Developer",
            "period": "2024 - current",
            "description": [
              "Development of administrative dashboards and mobile applications using React, TypeScript, and React Native.",
              "Implementation of best development practices, including deployment control, unit testing, and code review.",
              "Server configuration and administration for project deployment."
            ],
            "technologies": ["react js", "react native", "tailwind", "css", "html", "typescript", "javascript", "aws", "angular", "node js", "mysql", "docker"]
          },
          {
            "company": "Ironbit Ciudad de México",
            "role": "Full Stack Developer",
            "period": "2023 - 2024",
            "description": [
              "Development and maintenance of web and mobile applications using various programming languages, frameworks, and libraries.",
              "Lead developer for a cross-platform iOS and Android mobile application for BBVA, built with React Native, implementing new modules and providing ongoing maintenance for existing features.",
              "Active participation in the analysis, development, and improvement of features focused on user experience and application stability."
            ],
            "technologies": ["react js", "react native", "tailwind", "css", "html", "typescript", "javascript", "aws", "angular", "node js", "c#", ".net"]
          },
          {
            "company": "Homiemx Ciudad de México",
            "role": "Full Stack Developer",
            "period": "2022 - 2023",
            "description": [
              "Development of new features for the rental business model, covering both frontend and backend.",
              "Bug fixing and enhancements on the platform’s main page.",
              "Proposal and implementation of improvements to testing and deployment processes for staging environments.",
              "Development of new endpoints for existing APIs, consumed by the frontend.",
              "Collaborative work using GitHub repositories, following version control workflows."
            ],
            "technologies": ["react js", "react native", "tailwind", "css", "html", "typescript", "javascript", "aws", "angular", "node js", "mysql", "Ruby", "Ruby on Rails", "mongo db", "docker"]
          },
          {
            "company": "Agency azlo y agency ventago Ciudad de México",
            "role": "Full Stack Developer",
            "period": "2020 - 2022",
            "description": [
              "End-to-end development of projects from scratch, implementing both frontend and backend, closely aligned with UX/UI design specifications.",
              "Development of e-commerce solutions, using Shopify as well as custom implementations with HTML, CSS, JavaScript, PHP, and Laravel.",
              "Implementation of live event platforms, enabling user registration, authentication, and access to live streams with both moderated and open chat."
            ],
            "technologies": ["wordpress", "elementor", "react js", "react native", "tailwind", "css", "html", "typescript", "javascript", "aws", "angular", "node js", "mysql", "bootstrap", "firebase"]
          },
          {
            "company": "Clasmap, unam Ciudad de México",
            "role": "Full Stack Developer",
            "period": "2019 - 2020",
            "description": [
              "Development of corporate websites and blogs using WordPress and custom-built solutions.",
              "Implementation of platforms that allowed companies to register and showcase their information.",
              "Development of blogs for UNAM doctors (Morelia), focused on sharing informative and educational content.",
              "Collaborative work using GitHub repositories for version control."
            ],
            "technologies": ["wordpress", "elementor", "react js", "react native", "tailwind", "css", "html", "typescript", "javascript", "aws", "angular", "node js", "mysql", "bootstrap", "firebase"]
          }
        ]
      },
      "showcase": {
        "tag": "Application Demo",
        "title": "Featured Projects",
        "idle": "System_Idle_Mode",
        "live": "Streaming_Live_Feed.mp4",
        "cta": "Launch Application Demo",
        "connecting": "Connecting to orbital server..."
      },
      "education": {
        "title": "Education",
        "items": [
          {
            "school": "MORELIA TECHNOLOGICAL UNIVERSITY",
            "degree": "Bachelor's degree in information technology",
            "period": "2018 – 2020",
            "location": "Morelia Michoacán, México"
          },
          {
            "school": "MORELIA TECHNOLOGICAL UNIVERSITY",
            "degree": "TSU in operating systems",
            "period": "2017 – 2018",
            "location": "Morelia Michoacán, México"
          },
          {
            "school": "CETIS 120 IN MORELIA",
            "degree": "Computer support and maintenance",
            "period": "2014 - 2017",
            "location": "Morelia Michoacán, México"
          }
        ]
      },
      "skills": {
        "title_strengths": "Strengths",
        "title_skills": "Technical Skills",
        "strengths": [
          "Proactivity and initiative-taking",
          "Problem-solving",
          "Technical autonomy",
          "Continuous process improvement",
          "Analytical thinking",
          "Strong sense of responsibility"
        ],
        "items": [
          "React js", "next js", "react native", "vue 3", "angular", "bootstrap", "tailwind", "HTML", "CSS", "SASS", "javascript", "php", "Laravel", "node js", "mongo db", "mysql", "docker", "servidores", "typescript"
        ]
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
        "intro": "<b>Desarrollador Full Stack SR con 7 años de experiencia</b> en aplicaciones web y móviles. Experto en <b>React, TypeScript, Next.js, Node.js, Laravel, Angular y React Native</b>. Experiencia comprobada en proyectos empresariales para <b>Cinépolis, Banorte y BBVA</b>, desarrollando soluciones digitales enfocadas en la <b>optimización de procesos y la experiencia de usuario</b>.",
        "cta_primary": "Descargar CV",
        "cta_secondary": "Github"
      },
      "experience": {
        "title": "Experiencia Profesional",
        "items": [
          {
            "company": "Babel Ciudad de México",
            "role": "Desarrollador Full Stack",
            "period": "2024 - actualidad",
            "description": [
              "Desarrollo de dashboards administrables y aplicaciones móviles utilizando React, TypeScript y React Native.",
              "Implementación de buenas prácticas de desarrollo, incluyendo control de despliegues, pruebas unitarias y revisión de código.",
              "Configuración y administración de servidores para el despliegue de proyectos."
            ],
            "technologies": ["react js", "react native", "tailwind", "css", "html", "typescript", "javascript", "aws", "angular", "node js", "mysql", "docker"]
          },
          {
            "company": "Ironbit Ciudad de México",
            "role": "Desarrollador Full Stack",
            "period": "2023 – 2024",
            "description": [
              "Desarrollo y mantenimiento de aplicaciones web y móviles utilizando distintos lenguajes, frameworks y librerías.",
              "Responsable del desarrollo principal de una aplicación móvil iOS y Android para BBVA, construida en React Native, en la que se implementan nuevos módulos y se da mantenimiento continuo a funcionalidades existentes.",
              "Participación activa en el análisis, desarrollo y mejora de funcionalidades orientadas a experiencia de usuario y estabilidad de la aplicación."
            ],
            "technologies": ["react js", "react native", "tailwind", "css", "html", "typescript", "javascript", "aws", "angular", "node js", "c#", ".net"]
          },
          {
            "company": "Homiemx Ciudad de México",
            "role": "Desarrollador Full Stack",
            "period": "2022 - 2023",
            "description": [
              "Desarrollo de nuevas funcionalidades para el modelo de negocio de rentas, tanto en frontend como backend.",
              "Resolución de bugs y mejoras en la página principal de la plataforma.",
              "Propuesta e implementación de mejoras en los procesos de pruebas y despliegue hacia entornos de testing.",
              "Desarrollo de nuevos endpoints para las APIs existentes, utilizados por el frontend.",
              "Trabajo colaborativo mediante repositorios en GitHub siguiendo flujos de control de versiones."
            ],
            "technologies": ["react js", "react native", "tailwind", "css", "html", "typescript", "javascript", "aws", "angular", "node js", "mysql", "Ruby", "Ruby on Rails", "mongo db", "docker"]
          },
          {
            "company": "Agencia azlo y agencia ventago Ciudad de México",
            "role": "Desarrollador Full Stack",
            "period": "2020 - 2022",
            "description": [
              "Desarrollo de proyectos desde cero, implementando tanto frontend como backend, alineados fielmente a los diseños entregados por el equipo de UX/UI.",
              "Desarrollo de tiendas en línea, tanto con Shopify como con soluciones personalizadas utilizando HTML, CSS, JavaScript, PHP y Laravel.",
              "Implementación de plataformas para eventos en vivo, permitiendo el registro de usuarios, autenticación y acceso a transmisiones con chat moderado y chat abierto."
            ],
            "technologies": ["wordpress", "elementor", "react js", "react native", "tailwind", "css", "html", "typescript", "javascript", "aws", "angular", "node js", "mysql", "bootstrap", "firebase"]
          },
          {
            "company": "Clasmap, unam Ciudad de México",
            "role": "Desarrollador Full Stack",
            "period": "2019 - 2020",
            "description": [
              "Desarrollo de sitios web corporativos y blogs utilizando WordPress y desarrollo a medida.",
              "Implementación de plataformas donde empresas podían registrarse y mostrar su información.",
              "Desarrollo de blogs para doctores de la UNAM (Morelia), enfocados en la difusión de contenido informativo.",
              "Trabajo colaborativo utilizando repositorios en GitHub para control de versiones."
            ],
            "technologies": ["wordpress", "elementor", "react js", "react native", "tailwind", "css", "html", "typescript", "javascript", "aws", "angular", "node js", "mysql", "bootstrap", "firebase"]
          }
        ]
      },
      "showcase": {
        "tag": "Demo de Aplicación",
        "title": "Proyectos Destacados",
        "idle": "Sistema_en_Espera",
        "live": "Transmision_en_Vivo.mp4",
        "cta": "Lanzar Demo de Aplicación",
        "connecting": "Conectando al servidor orbital..."
      },
      "education": {
        "title": "Educación",
        "items": [
          {
            "school": "UNIVERSIDAD TEGNOLÓGICA DE MORELIA",
            "degree": "Licenciado en tecnologías de la información",
            "period": "2018 – 2020",
            "location": "Morelia Michoacán, México"
          },
          {
            "school": "UNIVERSIDAD TEGNOLÓGICA DE MORELIA",
            "degree": "TSU en sistemas operativos",
            "period": "2017 – 2018",
            "location": "Morelia Michoacán, México"
          },
          {
            "school": "CETIS 120 DE MORELIA",
            "degree": "Soporte y mantenimiento de computadoras",
            "period": "2014 - 2017",
            "location": "Morelia Michoacán, México"
          }
        ]
      },
      "skills": {
        "title_strengths": "Fortalezas",
        "title_skills": "Habilidades Técnicas",
        "strengths": [
          "Proactividad y toma de iniciativa",
          "Resolución de problemas",
          "Autonomía técnica",
          "Mejora continua de procesos",
          "Pensamiento analítico",
          "Alto sentido de responsabilidad"
        ],
        "items": [
          "React js", "next js", "react native", "vue 3", "angular", "bootstrap", "tailwind", "HTML", "CSS", "SASS", "javascript", "php", "Laravel", "node js", "mongo db", "mysql", "docker", "servidores", "typescript"
        ]
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
