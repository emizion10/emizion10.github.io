export const profile = {
  name: "Amal Sukumaran",
  title: "Software Engineer",
  bio: "Full-Stack Software Engineer with expertise in React, React Native, and NestJS. Currently working at H2Digital GmbH, driving the development of intelligent web applications for the hydrogen industry.",
  aboutMe: "I am a passionate Software Engineer with a strong foundation in full-stack development. Having completed my M.Sc. in Computer Science from RPTU in Germany, I bring both academic excellence and practical experience to my work. My journey has taken me from developing healthcare systems with machine learning to creating intelligent web applications for the hydrogen industry. I thrive on challenging projects that combine innovative technology with real-world impact.",
  interests: [
    "Full Stack Web Development",
    "Mobile App Development",
    "Cloud Architecture & DevOps",
    "AI & Machine Learning"
  ],
  social: {
    linkedin: "https://linkedin.com/in/amal-sukumaran",
    github: "https://github.com/amalsukumaran",
    twitter: "https://twitter.com/amalsukumaran"
  },
  experience: [
    {
      company: "H2Digital GmbH",
      position: "Software Engineer",
      period: "Nov 2024 - Present",
      description: "Built scalable backend services with NestJS and Redis caching, boosting performance by 30%. Developed AI chatbot using Bot Framework SDK and Azure OpenAI."
    },
    {
      company: "CibusCell Technology GMBH",
      position: "Software Engineer (Part Time)",
      period: "May 2022 - Oct 2024",
      description: "Engineered backend services with NestJS, built modular UI components with React, and configured Azure services including CI/CD pipelines, Application Gateway, and Web Application Firewall."
    },
    {
      company: "KeyValue Software Systems",
      position: "Software Engineer",
      period: "Oct 2021 - Mar 2022",
      description: "Developed mobile and web applications using React and React Native, created efficient backend services with NestJS and GraphQL, and implemented key features including a Learning Academy and Merchant-to-Merchant Referral system."
    },
    {
      company: "KeyValue Software Systems",
      position: "Associate Software Engineer",
      period: "Aug 2020 - Sep 2021",
      description: "Built component libraries for React Native applications using TDD, integrated analytics tools like Sentry and CleverTap, and incorporated third-party services including Branch, Google Maps, and Firebase."
    }
  ],
  education: [
    {
      institution: "Rheinland-Pfälzische Technische Universität (RPTU)",
      degree: "MS in Computer Science",
      period: "Apr 2022 - Oct 2024",
      description: "Grade - 1.6, Thesis Project: Crop Disease Prediction with Limited Data"
    },
    {
      institution: "Mar Athanasius College Of Engineering",
      degree: "B.Tech in Computer Science",
      period: "Aug 2016 - Jun 2020",
      description: "CGPA – 8.87/10, Final Year Project: Computerised Healthcare System Embedded with Machine Learning"
    }
  ],
  skills: {
    languages: [
      { name: "TypeScript", proficiency: 95 },
      { name: "JavaScript", proficiency: 90 },
      { name: "Python", proficiency: 80 },
      { name: "C/C++", proficiency: 70 },
      { name: "Java", proficiency: 65 }
    ],
    frontend: [
      { name: "React Native", proficiency: 95 },
      { name: "React", proficiency: 90 },
      { name: "Redux", proficiency: 80 },
      { name: "Recoil", proficiency: 80 },
      { name: "Zustand", proficiency: 80 }
    ],
    backend: [
      { name: "NestJS", proficiency: 90 },
      { name: "NodeJS", proficiency: 85 },
      { name: "Django", proficiency: 75 },
      { name: "GraphQL", proficiency: 80 },
      { name: "REST APIs", proficiency: 90 }
    ],
    databases: [
      { name: "MySQL/MSSQL/PostgreSQL", proficiency: 90 },
      { name: "Redis", proficiency: 85 },
      { name: "MongoDB", proficiency: 80 },
    ],
    devops: {
      azure: [
        "App Services",
        "Application Gateway",
        "Azure Functions",
        "Azure DevOps",
      ],
      tools: [
        "Docker",
        "CI/CD",
        "Git",
        "GitHub Actions"
      ]
    },
    ai: {
      frameworks: [
        "Bot Framework SDK",
        "Langchain",
        "RAG",
        "AI Agents"
      ],
      nlp: [
        "Azure OpenAI",
        "Azure AI Search",
        "Azure Speech Service",
        "Azure Language Studio"
      ]
    }
  },
  projects: [
    {
      title: "Crop Disease Prediction with Limited Data",
      description: "MS thesis project focused on developing machine learning models for crop disease prediction with limited training data, using advanced techniques like transfer learning and data augmentation.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"],
      link: "https://github.com/amal-sukumaran-rptu/FSL"
    },
    {
      title: "Computerised Healthcare System",
      description: "B.Tech final year project that integrated machine learning algorithms to improve healthcare diagnostics and patient management systems.",
      technologies: ["Python", "Django", "Machine Learning", "PostgreSQL"],
      link: "https://github.com/emizion10/healthcare"
    },
    {
      title: "E-commerce Component Library",
      description: "Developed a reusable component library for e-commerce applications following Test Driven Development principles, significantly reducing development time for new features.",
      technologies: ["React Native", "Jest", "Storybook"],
    }
  ]
}; 