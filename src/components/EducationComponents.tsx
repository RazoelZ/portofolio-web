import React from "react";

// 🎓 Education Component
const EducationComponent: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="relative text-3xl font-bold mb-10 inline-flex items-center gap-2 text-white after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[3px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
        <span className="text-4xl">🎓</span> Education
      </h2>
      <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] p-6 rounded-2xl border border-zinc-800 shadow-md">
        <h3 className="text-xl font-semibold text-blue-400 mb-1">
          SMK Negeri 2 Depok – Software Engineering
        </h3>
        <p className="text-gray-400 text-sm mb-2">Graduated 2023</p>
        <p className="text-gray-400 text-sm">
          Focused on front-end development, database design, and mobile
          application fundamentals. Participated in software development
          competitions and team-based IT projects.
        </p>
      </div>
    </div>
  );
};

export default EducationComponent;
