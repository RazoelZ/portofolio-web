import React from "react";
import { FolderKanban } from "lucide-react";
import { projectsData } from "../Data/ProjectData";
import { FiTrello } from "react-icons/fi";

const ProjectComponent: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-20 relative overflow-hidden">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-sm text-tertiary mb-1 tracking-wider font-mono">
            (04)
          </h2>
          <div className="flex items-center gap-3 mb-4">
            <FiTrello className="text-blue-600 dark:text-blue-400 w-9 h-9" />
            <h2 className="text-4xl italic font-display font-semibold text-primary">
              Projects
            </h2>
          </div>
          <p className="text-sm text-secondary border-t border-gray-300 dark:border-gray-700 pt-3 leading-relaxed font-sans">
            A curated selection of work across production systems, company
            profiles, and mobile apps — each built using modern frameworks and
            reliable engineering best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="
        bg-white dark:bg-[#151515]/80 backdrop-blur-xl 
        p-5 rounded-2xl border border-gray-200 dark:border-zinc-800 
        shadow-theme-lg dark:hover:shadow-glow-blue
        hover:shadow-theme-xl
        hover:-translate-y-2 hover:scale-[1.02]
        transition-all duration-300
        flex flex-col
      "
            >
              {/* Top Content (icon + title + description) */}
              <div className="flex-1">
                {/* Icon */}
                <div className="mb-4">
                  <FolderKanban className="text-blue-400 w-8 h-8" />
                </div>

                {/* Title */}
                <h4 className="text-lg font-display font-semibold text-blue-600 dark:text-blue-300 mb-2">
                  {project.title}
                </h4>

                {/* Description */}
                <p className=" mb-4 text-xs leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Bottom Section (Stack) */}
              <div className="flex flex-wrap gap-2 mt-4">
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
      </div>
    </section>
  );
};

export default ProjectComponent;
