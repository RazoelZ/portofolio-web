import React from "react";

const experiences = [
  {
    role: "Associate Assistant",
    company: "PwC Indonesia",
    period: "2024 – Present",
    description:
      "Supporting tech consulting projects, developing internal dashboards, and maintaining frontend consistency across clients' web platforms.",
  },
  {
    role: "Frontend Developer",
    company: "Ministry of Maritime Affairs and Fisheries",
    period: "2023 – 2024",
    description:
      "Built and maintained licensing dashboards with React, enhanced PDF previewing, and integrated data handling with Laravel APIs.",
  },
  {
    role: "Frontend Intern",
    company: "Haus! Indonesia",
    period: "2023",
    description:
      "Developed a responsive company profile site using React and Tailwind. Delivered high-quality UI under tight deadlines.",
  },
];

const ExperienceComponent: React.FC = () => {
  return (
    <section className="my-20 px-6 md:px-16 max-w-6xl mx-auto md:pt-5 bg-[#121212]">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-sm text-gray-400 mb-1">(02)</h2>
        <h3 className="text-4xl italic font-semibold text-white mb-3">
          Experience
        </h3>
        <p className="text-sm text-gray-400 border-t border-gray-600 pt-3">
          Here are the professional roles I've held — delivering frontend
          solutions across consulting, public sector, and fast-moving startups.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] p-6 rounded-2xl border border-zinc-800 shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
              <h3 className="text-lg md:text-xl font-semibold text-blue-400">
                {exp.role}{" "}
                <span className="text-gray-400">– {exp.company}</span>
              </h3>
              <span className="text-sm text-gray-400 font-mono mt-1 md:mt-0">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-300 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
      {/* <div className="w-full mt-12 flex justify-center md:justify-end animate-bounce">
        <a
          href="#projects"
          className="text-gray-400 hover:text-blue-400 transition text-lg"
        >
          ↓ Scroll Down
        </a>
      </div> */}
    </section>
  );
};

export default ExperienceComponent;
