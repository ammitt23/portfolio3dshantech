import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  celebal,
  codechef,
  infosys,
  internshala,
  gurukul,
  simmi,
  portfolio,
  atm,
  threejs,
  university,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Fullstack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Javascript.js Developer",
    company_name: "infosys",
    icon: infosys,
    iconBg: "#383E56",
    date: "March 2024 - April 2024",
    points: [
      "Developed an intelligent virtual assistant using modern web technologies (HTML,CSS, Javascript.",
      "This project leverages browser APIs to access PC features, including",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Tools Used: ThreeJS , React Three Fiber ,TailwindCSS , Framer Motion.",
    ],
  },
  {
    title: "Javafullstack",
    company_name: "Codechef",
    icon: codechef,
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
      "University Management System Java Project deals with the maintenance of student faculty.",
      "faculty and other information with in the university in a centralized database.",
      "where you can add, view and update Information.",
      "Technologies Used: Core Java (Swing & AWT) Database Used: MySQL.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Internshala",
    icon: internshala,
    iconBg: "#383E56",
    date: "Jan 2025 - Jan 2025",
    points: [
      "A comprehensive, full-stack e-learning platform built using the MERN stack (MonggoDb Express.js, React, Node.js).",
      "",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Celebal ",
    icon: celebal,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Dr.Rachna Aggarwal",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Abhay Gupta",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Swati Jaiswal",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "e-Gurukul(lms)",
    description:
      "A comprehensive, full-stack e-learning platform built using the MERN stack (MongoDB,Express.js, React, Node.js).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gurukul,
    source_code_link: "https://github.com/ammitt23/e-Gurukul",
  },
  {
    name: "Simmi!, a web based virtual assistant",
    description:
      "Developed an intelligent virtual assistant using modern web technologies (HTML,CSS, JavaScript) that runs directly in the browser..",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: simmi,
    source_code_link: "https://github.com/ammitt23/virtul-Assitant",
  },

  {
    name: "3d Portfolio!",
    description:
      "The most impressive websites in the world use 3D graphics and animations to bring their content to life. Learn how to build your own ThreeJS 3D DeveloperPortfolio!",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Farmer Motion",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
      {
        name: "React Three fibre",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/ammitt23/3d_portfolio",
  },

  {
    name: "Bank management System",
    description: ".",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JDBC",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
      {
        name: "AWT EVENT",
        color: "pink-text-gradient",
      },
    ],
    image: atm,
    source_code_link: "https://github.com/ammitt23/bank-management-system",
  },
  {
    name: "University management System",
    description:
      "University Management System Java Project deals with the maintenance of student,faculty and other information with in the university in a centralized databasewhere you can add, view and update Information.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JDBC",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "AWT EVENT",
        color: "pink-text-gradient",
      },
    ],
    image: university,
    source_code_link:
      "https://github.com/ammitt23/university-management-system",
  },
];

export { services, technologies, experiences, testimonials, projects };
