import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = "Soy un desarrollador full-stack junior apasionado por construir aplicaciones web que destacan por su robustez y eficiencia. Con un enfoque principal en el backend, utilizo tecnologías como Spring Boot para crear arquitecturas sólidas y escalables, mientras integro React para asegurar interfaces funcionales y amigables. Siempre busco mejorar mis habilidades, enfrentar nuevos desafíos técnicos y contribuir al éxito de proyectos colaborativos en entornos dinámicos.";

export const ABOUT_TEXT = `Como desarrollador full-stack junior, mi principal enfoque está en el desarrollo backend, donde me especializo en crear sistemas escalables y bien estructurados. También cuento con experiencia en integrar soluciones frontend funcionales utilizando React, logrando aplicaciones completas y eficientes. Mi pasión por resolver problemas complejos y mi deseo de aprender constantemente me impulsan a buscar proyectos donde pueda aportar mis habilidades y evolucionar profesionalmente, siempre enfocado en ofrecer soluciones de alta calidad.`;

export const PROJECTS = [
  {
    title: "Suerte Paisa",
    image: project1,
    description:
      "Suerte Paisa es una plataforma digital que conecta a usuarios y administradores en el mundo de las loterías. Los usuarios pueden explorar y adquirir boletos de manera sencilla y segura, mientras que los administradores cuentan con herramientas intuitivas para gestionar rifas, monitorear ventas y optimizar la experiencia general.",
    technologies: ["Blade", "CSS", "PHP", "Laravel", "Mysql", "Oauth2", "Actions"],
    repo:"https://github.com/Crudzaso/suerte_paisa.git",
    deploy:"https://suerte-paisa.crudzaso.com/",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    repo:"https://github.com/jarenas1?tab=repositories",
    deploy:"https://github.com/jarenas1?tab=repositories",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    repo:"https://github.com/jarenas1?tab=repositories",
    deploy:"",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    repo:"https://github.com/jarenas1?tab=repositories",
    deploy:"",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
