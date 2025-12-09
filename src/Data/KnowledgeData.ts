// ---------------------------------------------
// TYPES
// ---------------------------------------------

export interface AboutInfo {
  name: string;
  title: string;
  summary: string;
}

export interface Skills {
  technical: string[];
  soft: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Project {
  name: string;
  year: number;
  role: string;
  tech: string[];
  description: string;
}

export interface Education {
  degree: string;
  gpa: string;
  university: string;
  year: string;
}

export interface KnowledgeBase {
  about: AboutInfo;
  skills: Skills;
  experiences: Experience[];
  projects: Project[];
  education: Education;
}

// ---------------------------------------------
// DATA
// ---------------------------------------------

export const knowledge: KnowledgeBase = {
  about: {
    name: "Muhammad Drajat Dany Darmawan",
    title: "IT Consultant & Frontend Developer",
    summary:
      "Experienced in enterprise systems, digital transformation, and frontend development with React, Next.js, and modern web technologies.",
  },

  skills: {
    technical: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Python",
      "Tailwind CSS",
      "Cloud Computing (GCP)",
      "Odoo",
      "Django",
    ],
    soft: [
      "Leadership",
      "Teamwork",
      "Problem Solving",
      "Critical Thinking",
      "Communication",
      "Adaptability",
      "Time Management",
    ],
  },

  experiences: [
    {
      company: "PwC Consulting Indonesia",
      role: "Associate Assistant - Digital, Cloud, Data",
      period: "Mar 2025 - Sep 2025",
      highlights: [
        "Built enterprise system for PT Pelindo using TOGAF-aligned solution design",
        "Worked on Salesforce CRM project for BRI (data modeling + technical docs)",
        "Supported Bank Indonesia on data center operations and vendor coordination",
      ],
    },
    {
      company: "Ministry of Maritime Affairs & Fisheries (KKP)",
      role: "Front End Developer",
      period: "Sep 2024 - Jan 2025",
      highlights: [
        "Developed BKP module for vessel book management",
        "Built SIPI & SIKPI licensing modules with verification + validation flows",
        "Improved data transparency and operational efficiency",
      ],
    },
    {
      company: "PT Haus Indonesia!",
      role: "System Engineer",
      period: "Feb 2023 - Jun 2024",
      highlights: [
        "Built company website (React + Vite + Django backend)",
        "Developed Odoo-based internal ticketing system",
        "Optimized system reliability and core workflows",
      ],
    },
  ],

  projects: [
    {
      name: "Ship Licensing Information System",
      year: 2024,
      role: "Front End Developer",
      tech: ["React", "Vite", "Tailwind", "REST API"],
      description:
        "Government licensing system for fishing vessels (BKP, SIPI, SIKPI modules)",
    },
    {
      name: "Trackmeals (Bangkit Capstone)",
      year: 2023,
      role: "Team Leader / Backend Engineer",
      tech: ["Express.js", "GCP", "Firestore"],
      description:
        "Cloud-native food tracking app developed under Google Bangkit",
    },
  ],

  education: {
    degree: "Bachelor of Informatics",
    gpa: "3.80 / 4.00 (Magna Cum Laude)",
    university: "Diponegoro University",
    year: "2020–2024",
  },
} as const;
