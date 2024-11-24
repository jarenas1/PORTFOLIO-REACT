import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = "Soy un desarrollador full-stack junior con una fuerte pasión por crear aplicaciones web robustas y escalables. Especializado en el desarrollo backend con Spring Boot, construyo arquitecturas sólidas que soportan el crecimiento de los proyectos. En el frontend, utilizo React para diseñar interfaces intuitivas y funcionales, siempre priorizando la experiencia del usuario. Mi motivación principal es superar retos técnicos, colaborar en equipos dinámicos y aportar soluciones innovadoras que impulsen el éxito de cualquier proyecto.";

export const ABOUT_TEXT = `Como desarrollador full-stack junior, me destaco en transformar ideas complejas en soluciones tecnológicas eficientes. Mi experiencia en el backend incluye el diseño de sistemas escalables con Spring Boot, mientras que en el frontend combino React con prácticas modernas para ofrecer aplicaciones integrales y fáciles de usar. Soy un apasionado del aprendizaje continuo y la resolución de problemas, lo que me lleva a buscar constantemente proyectos desafiantes donde pueda aplicar mi conocimiento y crecer profesionalmente, siempre comprometido con la entrega de resultados de alta calidad.`;

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
    title: "EasyOrder",
    image: project2,
    description:
      "EasyOrder es un innovador SaaS diseñado para bares y discotecas, que optimiza la eficiencia y velocidad del servicio. Permite a los clientes realizar pedidos directamente desde sus mesas mediante un código QR, eliminando la espera y facilitando la identificación de cada mesa. Una solución que transforma la experiencia del usuario y potencia el rendimiento del personal.",
    technologies: ["HTML", "SCSS", "React", "Nestjs, Tailwind, PostgreSQL"],
    repo:"https://github.com/jarenas1/EasyOrder-FRONTEND.git",
    deploy:"https://jarenas1.github.io/EasyOrder--LANDING-PAGE/",
  },
  {
    title: "MovieMatch",
    image: project3,
    description:
      "MovieMatch elimina la indecisión al elegir qué película ver. Simplemente selecciona tus géneros favoritos, y la plataforma te mostrará películas que coincidan con tus preferencias. Cuando encuentres la ideal, podrás hacer match para seleccionarla o descartarla y explorar otras opciones. ¡Descubre tu próxima película favorita de manera rápida y sencilla!",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "JsonServer"],
    repo:"https://github.com/daniela03h/moviematch.git",
    deploy:"",
  },
  {
    title: "Jarenas1",
    image: project4,
    description:
      "Este es un proyecto diseñado para destacar habilidades y creatividad. Funciona como un portafolio digital interactivo que organiza y presenta trabajos, proyectos y logros de manera visualmente atractiva. Su diseño moderno y funcional permite una navegación intuitiva, ideal para causar una impresión profesional y mostrar talento al máximo nivel.",
    technologies: ["JSX", "CSS", "React", "Tailwind", "Motion"],
    repo:"https://github.com/jarenas1/PORTFOLIO-REACT.git",
    deploy:"https://jarenas1.online/",
  },
];

export const CONTACT = {
  address: "Medellín, Colombia ",
  phoneNo: "+57 3022260938 ",
  email: "juanjoarenas1218@gmail.com",
};
