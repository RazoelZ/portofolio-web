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
    <section className="mb-20">
      <h2 className="relative text-3xl font-bold mb-10 inline-flex items-center gap-2 text-white after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[3px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
        <span className="text-4xl">🚀</span> Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] p-6 rounded-2xl shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] border border-zinc-800"
          >
            <h4 className="text-xl font-semibold text-blue-400 mb-2">
              {project.title}
            </h4>
            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
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
    </section>
  );
};

export default ProjectComponent;
