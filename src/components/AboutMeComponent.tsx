import React from "react";
import {
  Code2,
  MonitorSmartphone,
  Puzzle,
  Users,
  BadgeCheck,
  Brain,
} from "lucide-react";

const AboutMeComponent: React.FC = () => {
  return (
    <section id="about" className="min-h-screen px-6 md:px-16 pt-25 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-gray-400 mb-1">(02)</h2>
        <h2 className="text-white text-4xl font-bold mb-10 italic border-b border-gray-600 pb-3">
          What I Bring to the Table
        </h2>

        {/* Skills / Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Tech Stack */}
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] border border-zinc-800 p-6 rounded-xl">
            <Code2 className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="text-blue-500 text-xl font-semibold mb-2">
              Frontend Tech Stack
            </h3>
            <p className="text-sm text-gray-400">
              React, Next.js, Tailwind CSS, TypeScript, Vite, JavaScript,
              Node.js
            </p>
          </div>

          {/* Hard Skills */}
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] border border-zinc-800 p-6 rounded-xl">
            <MonitorSmartphone className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="text-blue-500 text-xl font-semibold mb-2">
              Hard Skills
            </h3>
            <p className="text-sm text-gray-400">
              Responsive Design, Component Architecture, API Integration,
              Version Control, State Management
            </p>
          </div>

          {/* Soft Skills */}
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] border border-zinc-800 p-6 rounded-xl">
            <Brain className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="text-blue-500 text-xl font-semibold mb-2">
              Soft Skills
            </h3>
            <p className="text-sm text-gray-400">
              Problem Solving, Collaboration, Time Management, Adaptability,
              Attention to Detail
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-sm font-medium text-gray-700">
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] border border-zinc-800 p-6 rounded-xl ">
            <BadgeCheck className="mx-auto mb-2 text-blue-500 w-14 h-14" />
            <p className="text-2xl text-gray-400 font-bold">1.5+</p>
            <span className="text-gray-400">Years Experience</span>
          </div>
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] border border-zinc-800 p-6 rounded-xl ">
            <Puzzle className="mx-auto mb-2 text-green-500 w-14 h-14" />
            <p className="text-2xl text-gray-400 font-bold">5+</p>
            <span className="text-gray-400">Completed Projects</span>
          </div>
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] border border-zinc-800 p-6 rounded-xl ">
            <Users className="mx-auto mb-2 text-orange-500 w-14 h-14" />
            <p className="text-2xl text-gray-400 font-bold">3</p>
            <span className="text-gray-400">Clients / Teams</span>
          </div>
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] border border-zinc-800 p-6 rounded-xl ">
            <Code2 className="mx-auto mb-2 text-sky-500 w-14 h-14" />
            <p className="text-2xl text-gray-400 font-bold">1000+</p>
            <span className="text-gray-400">Hours Coded</span>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:justify-start animate-bounce">
          <a
            href="#top"
            className="text-gray-400 hover:text-blue-400 transition text-lg"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeComponent;
