import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Facundo",
  lastName: "Iascas",
  name: `Facundo David Iascas`,
  role: "Desarrollador Full-Stack",
  avatar: "/images/avatar.jpg",
  email: "facundodavidiascas@gmail.com",
  location: "America/Buenos_Aires", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Español"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Facundo-byte",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/facundo-david-iascas-1a7427280/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Construyendo puentes entre el diseño y el codigo</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          Mis proyectos
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    Me llamo Facundo David Iascas, soy un estudiante de Ingenieria Informatica en UNLAM, apasionado por el desarrollo web y el aprendizaje constante.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre mi",
  title: `Sobre mi – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduccion",
    description: (
      <>
        Fanatico de la programacion, orientado especialmente al desarrollo web, 
        y con un gran interes en el mundo de la informatica. Buscando aprender continuamente y 
        esforzarme en hacer mis proyectos lo mejor posible!
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educacion",
    institutions: [
      {
        name: "Universidad Nacional de la Matanza",
        description: <>Estudiando Ingenieria Informatica.</>,
      },
      {
        name: "Harvard University",
        description: <>Finalizando el curso CS50X.</>,
      },
      {
        name: "Universidad Tecnologica Nacional",
        description: <>Hice un curso de fundamentos de la programacion con nota sobresaliente.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Tecnicas",
    skills: [
      {
        title: "Figma",
        description: (
          <>Habilidad para realizar wireframes y mockups utilizando Figma.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cinemovie-Figma.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/homefix-figma.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "JavaScript",
        description: (
          <>Buen manejo de JavaScript para la creacion del frontend.</>
        ),
        tags: [
          {
            name: "Javascript",
            icon: "javascript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-05/Calculadora.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-03/Pepsi.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "ReactJS",
        description: (
          <>Conocimientos en desarrollo web utilizando React junto con Tailwind CSS.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Tailwind",
            icon: "tailwind",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Cinemovie.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/projects/project-01/Cinemovie (1).png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/projects/project-01/Cinemovie (2).jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Python",
        description: (
          <>Buen manejo de Python en la creacion del backend de mis paginas web.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/og/py2.JPG",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/og/Py1.JPG",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
            {
        title: "SQL",
        description: (
          <>Utilizado para manejar las bases de datos de mis proyectos.</>
        ),
        tags: [
          {
            name: "SQL Server",
            icon: "sqlserver",
          },
                    {
            name: "SQLite",
            icon: "sqlite",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
