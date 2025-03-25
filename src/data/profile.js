export const profile = {
  name: "Amal Sukumaran",
  title: "Software Engineer",
  bio: "Experienced Software Engineer with expertise in full-stack development using React, React Native, and NestJS. Currently pursuing MS in Computer Science at RPTU in Germany while working part-time at CibusCell Technology GMBH.",
  social: {
    linkedin: "https://linkedin.com/in/amal-sukumaran",
    github: "https://github.com/amalsukumaran",
    twitter: "https://twitter.com/amalsukumaran"
  },
  experience: [
    {
      company: "CibusCell Technology GMBH",
      position: "Software Engineer (Part Time)",
      period: "May 2022 - Present",
      description: "Engineered backend services with NestJS, implemented Redis caching improving performance by 30%, built modular UI components with React, and configured Azure services including CI/CD pipelines, Application Gateway, and Web Application Firewall."
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
      period: "Apr 2022 - Present",
      description: "Current Grade - 1.6, Thesis Project: Crop Disease Prediction with Limited Data"
    },
    {
      institution: "Mar Athanasius College Of Engineering",
      degree: "B.Tech in Computer Science",
      period: "Aug 2016 - Jun 2020",
      description: "CGPA – 8.87/10, Final Year Project: Computerised Healthcare System Embedded with Machine Learning"
    }
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "C", "C++", "Java"],
    frameworks: ["React", "React Native", "Redux", "Recoil", "Zustand", "NodeJS", "NestJS", "Django"],
    tools: ["Docker", "Redis", "Microsoft Azure", "GCP", "AWS", "Firebase", "PostgreSQL", "MySQL", "MSSQL", "MongoDB"]
  },
  projects: [
    {
      title: "Crop Disease Prediction with Limited Data",
      description: "MS thesis project focused on developing machine learning models for crop disease prediction with limited training data, using advanced techniques like transfer learning and data augmentation.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"],
      link: "https://github.com/amalsukumaran/crop-disease-prediction"
    },
    {
      title: "Computerised Healthcare System",
      description: "B.Tech final year project that integrated machine learning algorithms to improve healthcare diagnostics and patient management systems.",
      technologies: ["Python", "Django", "Machine Learning", "PostgreSQL"],
      link: "https://github.com/amalsukumaran/healthcare-system"
    },
    {
      title: "E-commerce Component Library",
      description: "Developed a reusable component library for e-commerce applications following Test Driven Development principles, significantly reducing development time for new features.",
      technologies: ["React Native", "Jest", "Storybook"],
      link: "https://github.com/amalsukumaran/ecommerce-components"
    },
    {
      title: "Merchant Referral System",
      description: "Implemented a comprehensive merchant-to-merchant referral system with deep linking capabilities, increasing user acquisition and engagement.",
      technologies: ["React Native", "NestJS", "Branch.io", "GraphQL"],
      link: "https://github.com/amalsukumaran/merchant-referral"
    }
  ]
}; 