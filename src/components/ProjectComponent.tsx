import React from "react";

const projects = [
  {
    title: "Digitalization of fishing vessel licensing",
    description:
      "A web system for managing and issuing ship permits, integrating user uploads, tables, and PDF previews.",
    stack: ["Next.js", "Tailwind", "React Query"],
  },
  {
    title: "Haus! Company Profile",
    description:
      "A clean and modern landing page built to highlight Haus!'s mission and products using responsive design.",
    stack: ["React", "Tailwind"],
  },
  {
    title: "TrackMeals",
    description:
      "An Android application for tracking meals, allowing users to log their food intake and monitor their nutrition.",
    stack: ["Kotlin", "Express.js", "GCP"],
  },
  {
    title: "PBTI Company Profile",
    description:
      "A modern landing page for national introduction and registration administration for PBTI.",
    stack: ["React", "Tailwind", "React Query"],
  },
  {
    title: "Desarmada",
    description:
      "An Android app for tracking and managing the vehicle inventory of PT Des Teknologi Informasi.",
    stack: ["Flutter"],
  },
];

const ProjectComponent: React.FC = () => {
  return (
    <section id="projects" className="py-25 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-5">
        <h2 className="text-sm text-gray-400 mb-1">(03)</h2>
        <h3 className="text-4xl italic font-semibold text-white mb-3">
          Projects
        </h3>
        <p className="text-sm text-gray-400 border-t border-gray-600 pt-3">
          A selection of projects I've contributed to, including production
          systems, company profiles, and mobile applications — each built with
          scalable and modern tech stacks.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] p-6 rounded-2xl shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] border border-zinc-800"
          >
            <h4 className="text-xl font-semibold text-blue-400 mb-2">
              {project.title}
            </h4>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-800/20 text-blue-300 px-2.5 py-1 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center md:justify-end animate-bounce">
        <a
          href="#top"
          className="text-gray-400 hover:text-blue-400 transition text-lg"
        >
          ↑ Back to Top
        </a>
      </div>
    </section>
  );
};

export default ProjectComponent;
