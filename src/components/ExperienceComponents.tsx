import React from "react";
import { experiencesData } from "../Data/ExperienceData";

const ExperienceComponent: React.FC = () => {
  return (
    <section className="my-20 px-6 md:px-16 max-w-6xl mx-auto md:pt-5">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-1 tracking-wider">(02)</h2>
        <h3 className="text-4xl italic font-semibold text-gray-900 dark:text-white mb-3">
          Experience
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-3">
          A journey across consulting, government, startups, and engineering —
          delivering high-impact solutions in every role.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {experiencesData.map((exp, index) => (
          <div
            key={index}
            className="
              group bg-white dark:bg-[#141414] 
              p-7 rounded-2xl border border-gray-200 dark:border-zinc-800 
              shadow-theme-lg dark:hover:shadow-glow-blue
              hover:shadow-theme-xl
              transition-all duration-300
              hover:-translate-y-2 hover:border-blue-500 dark:hover:border-blue-400/40
            "
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-display font-semibold text-blue-600 dark:text-blue-400">
                {exp.role}{" "}
                <span className="text-secondary font-normal">
                  – {exp.company}
                </span>
              </h3>
              <span className="text-sm text-tertiary font-mono mt-1 md:mt-0">
                {exp.period}
              </span>
            </div>

            {/* Description bullets */}
            <ul className="space-y-2 text-secondary text-sm leading-relaxed pl-4 list-disc font-sans">
              {exp.bullets.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition duration-200 cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceComponent;
