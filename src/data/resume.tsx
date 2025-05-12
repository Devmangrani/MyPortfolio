import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dev Mangrani",
  initials: "DM",
  url: "https://github.com/Devmangrani",
  location: "Agra, India",
  locationLink: "https://www.google.com/maps/place/Agra",
  description:
    "Tech Enthusiast turned Software Engineer. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "I'm a passionate [final year undergrad](#education) with a deep love for coding and technology. My journey has led me to develop a strong foundation in [Web development, Artificial intelligence, and Problem Solving](#education). I thrive on building innovative [products](#projects) and sharing my knowledge by making notes about different languages and technologies on Notion. Always eager to expand my skills and tackle new challenges, I'm actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it's through creating seamless web experiences or exploring the future of decentralized applications, I'm excited to contribute to the tech landscape and grow alongside it.",
  resumeUrl: "https://drive.google.com/file/d/10VnhDCRBVncnsbx470Zo2e8SkUgo93u2/view?usp=sharing",
  avatarUrl: "/dev.jpeg",
  skills: [
    // Programming Languages
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    
    // Front-end
    "Vue.js",
    "Vuex",
    "Nuxt.js",
    "React.js",
    "Redux",
    "Next.js",
    "Tailwind CSS",
    "Swing",
    
    // Back-end
    "Node.js",
    "Express.js",
    
    // Databases
    "MongoDB",
    "MySQL",
    "JDBC",
    
    // Cloud Services
    "GCP",
    "Vercel",
    "Netlify",
    
    // Tools & Technologies
    "Git",
    "GitHub",
    "REST APIs",
    "OpenCV",
    "CVZone",
    "PyNput",
    "OpenAPI",
    
    // CS Fundamentals
    "DSA",
    "OOP",
    "DBMS",
    
    // Other
    "Problem Solving",
    // "Team Collaboration",
  
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://hashnode.com/@DevMangrani",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "devmangrani5@gmail.com",
    tel: "+91 8279987361",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Devmangrani",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dev-mangrani/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/devmangrani",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: false,
      // },
      email: {
        name: "Send Email",
        url: "mailto:devmangrani5@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Rodella Aerospace Labs",
      badges: [],
      href: "",
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/logo.webp",
      start: "2025",
      end: "Present",
      description:
        "Worked as a Software Developer Intern, contributing to aerospace software solutions. Developed and optimized code for mission-critical applications, collaborated with cross-functional teams, and gained hands-on experience in the aerospace domain.",
    },
    {
      company: "Freelance Web Developer",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/memoji.jpeg",
      start: "2024",
      end: "Present",
      description:
        "Worked on and developed multiple market-ready, full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js). Focused on building scalable, maintainable applications while following industry best practices to deliver high-quality results. I have also taken on freelance projects from clients in Israel, the USA, and the UK. I am open to new freelance opportunities and would be glad to collaborate with you on your next project.",
    },
    {
      company: "Open Source",
      badges: [],
      href: "https://github.com/Devmangrani/JobSewa",
      location: "Remote",
      title: "Contributor",
      logoUrl: "/github-mark.png",
      start: "2023",
      end: "Present",
      description:
        "Led development of JobSewa, an open-source job portal connecting local skilled workers with employers. Mentored new developers during Hacktoberfest, managing contributions and maintaining code quality. Built with Next.js,Tailwind CSS, Node.js, and Express.js,and MongoDB, the platform features JWT authentication, real-time updates, and comprehensive dashboards for both workers and employers. Successfully deployed and maintained the live platform.",
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology, India",
      href: "https://vit.ac.in/",
      degree: "Bachelor's Degree of Engineering",
      logoUrl: "/vit.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "100xDevs",
      href: "https://app.100xdevs.com",
      degree: "Full Stack Web Development, DevOps & Web3 Bootcamp",
      logoUrl: "/100xDevs.png",
      start: "2024",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "JobSewa",
      href: "https://job-sewa.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Developed Job Sewa, a seamless job portal using React.js, Node.js, and MongoDB, connecting skilled agricultural workers with employers. The platform allows workers to create profiles, showcase their skills, and track job applications in real-time. Employers can easily post jobs, filter candidates. Designed with a user-friendly interface and secure authentication, the portal offers a seamless and efficient experience for both workers and employers, addressing key challenges in the agricultural job market. The platform is built for scalability and efficient deployment, ensuring long-term success.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "MongoDB",
        "Node.js",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://job-sewa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devmangrani/JobSewa",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Jobsewa.png",
      video: "",
    },
    {
      title: "Cinephile AI",
      href: "https://cinephile-ai.web.app/",
      dates: "January 2025",
      active: true,
      description:
        "Cinephile AI blends artificial intelligence with the magic of cinema, offering an AI-powered movie companion that understands the emotional and artistic depth of films. Built for movie lovers, it provides personalized recommendations, real-time search capabilities, and engaging discussions to explore the world of cinema. A key feature allows users to watch trailers of movies and web series directly on the platform, helping them decide whether to watch or explore other options. Cinephile AI enhances the movie-watching journey with an intuitive interface and AI-driven insights, making it the perfect companion for cinephiles.",
      technologies: [
        "React.js",
        "Firebase Auth",
        "Tailwind CSS",
        "Google Gemini",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://cinephile-ai.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devmangrani/Cinephile-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cinephile-ai.png",
      video: "",
    },
    
    {
      title: "AI Virtual Keyboard",
      href: "https://github.com/Devmangrani/AI-Virtual-Keyboard",
      dates: "December 2024",
      active: true,
      description:
        "Developed an AI-powered virtual keyboard that allows users to type using hand gestures, leveraging computer vision technologies for a touch-free experience. Utilizing OpenCV for real-time image processing and video capture, the system integrates CVZone for accurate hand tracking and gesture recognition. PyNput is used to simulate keystrokes, enabling seamless typing across external applications. The project demonstrates advanced machine vision techniques, ensuring smooth functionality and an intuitive user experience.",
      technologies: [
        "Python",
        "OpenCV",
        "CVZone",
        "PyNput",
      ],
      links: [
        
        {
          type: "Source",
          href: "https://github.com/Devmangrani/AI-Virtual-Keyboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aikeyboard.png",
      video: "",
    },
    {
      title: "Recipe Book",
      href: "https://recipesbooks.vercel.app/",
      dates: "February 2025",
      active: true,
      description:
        "**Recipe Explorer** is a modern recipe discovery app built with Vue 3 and TheMealDB API, offering smart search, ingredient-based exploration, and alphabetical browsing. It features a responsive design, fast performance with caching optimizations, and a clean UI. The tech stack includes Vue 3, Vuex, Vue Router, Axios, Tailwind CSS, and Vite. Key optimizations include real-time search with debouncing, API caching, lazy loading, and error handling. The project is open-source under the MIT license, welcoming contributions.",
      technologies: [
        "Vue.js",
        "Vuex",
        "Vue Router",
        "Axios",
        "Tailwind CSS",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://recipesbooks.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devmangrani/Recipe-Book",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/recipe.png",
      video: "",
    },
    {
      title: "Airline Management System",
      href: "https://airline-management-system.vercel.app/",
      dates: "July 2024",
      active: true,
      description:
        "The Airline Management System, developed using Java Swing and MySQL, automates key airline operations such as passenger management, flight scheduling, bookings, and cancellations. It provides a user-friendly interface for efficient data handling, ensuring real-time updates and secure storage. The system enhances operational efficiency by offering accurate, up-to-date information, streamlining reservation processes, and improving customer service. Designed for scalability and reliability, it simplifies airline business operations while maintaining flexibility and ease of use.",
      technologies: [
        "Java",
        "Swing",
        "MySQL",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://todolistai.vercel.app",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Devmangrani/AirlineManagementSystem",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ams.png",
      video: "",
    },
  ],
  blogs: [
    {
      title: "DSA Notes",
      href: "https://devmangrani.notion.site/DSA-Notes-61d0c7b663c9438ea24c44d1a64b67f8",
      description: "Comprehensive notes on Data Structures and Algorithms",
      image: "/DSA-Handwritten-Notes-1.png",
      type: "notion"
    },
    {
      title: "React.js",
      href: "https://devmangrani.notion.site/React-Js-a190b7a02e2e42f482b1a7a2cbd0c5d0",
      description: "In-depth notes on React.js concepts and best practices",
      image: "/react.webp",
      type: "notion"
    },
    {
      title: "Node.js",
      href: "https://devmangrani.notion.site/React-Js-a190b7a02e2e42f482b1a7a2cbd0c5d0",
      description: "Detailed notes on Node.js development",
      image: "/node.webp",
      type: "notion"
    },
    {
      title: "System Design",
      href: "https://devmangrani.notion.site/System-Design-14ed3b52b32d80828f82cd6619528b92",
      description: "Notes on System Design fundamentals and concepts",
      image: "/sys.png",
      type: "blog"
    },
    {
      title: "Computer Networking",
      href: "https://devmangrani.notion.site/Computer-Networking-d6ff6497f46b4d9d81675a7749a39c4a?pvs=73",
      description: "Notes on Computer Networking fundamentals and concepts",
      image: "/cn.webp",
      type: "notion"
    }
  ],
  contactSection: {
    title: "Contact Me",
    subtitle: "Let's Get Connected...",
    description: "Choose any of your Favourite Platform",
    formEndpoint: "https://formspree.io/f/xovagwvn",
    socialLinks: [
      {
        name: "Twitter",
        icon: Icons.x,
        href: "https://x.com/devmangrani"
      },
      {
        name: "LinkedIn",
        icon: Icons.linkedin,
        href: "https://www.linkedin.com/in/dev-mangrani/"
      },
      {
        name: "GitHub",
        icon: Icons.github,
        href: "https://github.com/Devmangrani"
      },
      {
        name: "Book a Meet",
        icon: Icons.calendar,
        href: "https://cal.com/Dev-Mangrani"
      }
    ],
    emailSection: {
      title: "SEND ME AN EMAIL",
      subtitle: "Will Collaborate Soon"
    }
  }
} as const;
