import React from "react";
import { FolderKanban, Rocket, Layers } from "lucide-react";
import { projectsData } from "../Data/ProjectData";

const ProjectComponent: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-16 max-w-6xl mx-auto"
    >
      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[380px] h-[380px] bg-blue-500/10 rounded-full blur-[150px] top-20 left-5"></div>
        <div className="absolute w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[170px] bottom-10 right-0"></div>
      </div>

      {/* HEADER */}
      <div className="mb-14">
        <h2 className="text-sm text-tertiary mb-1 tracking-wider font-mono">(04)</h2>
        <h3 className="text-4xl italic font-display font-semibold text-primary mb-4">
          Projects
        </h3>
        <p className="text-sm text-secondary border-t border-gray-300 dark:border-gray-700 pt-3 leading-relaxed max-w-3xl font-sans">
          A curated selection of work across production systems, company
          profiles, and mobile apps — each built using modern frameworks and
          reliable engineering best practices.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="
              bg-white dark:bg-[#151515]/80 backdrop-blur-xl 
              p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 
              shadow-theme-lg dark:hover:shadow-glow-blue
              hover:shadow-theme-xl
              hover:-translate-y-2 hover:scale-[1.02]
              transition-all duration-300
            "
          >
            {/* Icon */}
            <div className="mb-4">
              {index % 3 === 0 && (
                <FolderKanban className="text-blue-400 w-8 h-8" />
              )}
              {index % 3 === 1 && (
                <Rocket className="text-purple-400 w-8 h-8" />
              )}
              {index % 3 === 2 && <Layers className="text-pink-400 w-8 h-8" />}
            </div>

            {/* Title */}
            <h4 className="text-xl font-display font-semibold text-blue-600 dark:text-blue-300 mb-2">
              {project.title}
            </h4>

            {/* Description */}
            <p className="text-secondary mb-4 text-sm leading-relaxed font-sans">
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="
                    bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 
                    px-3 py-1 text-xs rounded-full 
                    border border-blue-300 dark:border-blue-400/20
                  "
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
