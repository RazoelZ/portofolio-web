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
    <section id="about" className="min-h-screen px-6 md:px-16 py-20 ">
      <div className="max-w-6xl mx-auto">
        <p className="text-md font-semibold mb-2">Services</p>
        <h2 className="text-blue-500 text-4xl font-bold mb-10">
          What I Bring to the Table
        </h2>

        {/* Skills / Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Tech Stack */}
          <div className="bg-gray-400 p-6 rounded-xl shadow-md">
            <Code2 className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="text-blue-500 text-xl font-semibold mb-2">
              Frontend Tech Stack
            </h3>
            <p className="text-sm text-gray-600">
              React, Next.js, Tailwind CSS, TypeScript, Vite, JavaScript,
              Node.js
            </p>
          </div>

          {/* Hard Skills */}
          <div className="bg-gray-400 p-6 rounded-xl shadow-md">
            <MonitorSmartphone className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="text-blue-500 text-xl font-semibold mb-2">
              Hard Skills
            </h3>
            <p className="text-sm text-gray-600">
              Responsive Design, Component Architecture, API Integration,
              Version Control, State Management
            </p>
          </div>

          {/* Soft Skills */}
          <div className="bg-gray-400 p-6 rounded-xl shadow-md">
            <Brain className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="text-blue-500 text-xl font-semibold mb-2">
              Soft Skills
            </h3>
            <p className="text-sm text-gray-600">
              Problem Solving, Collaboration, Time Management, Adaptability,
              Attention to Detail
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center text-sm font-medium text-gray-700">
          <div className="bg-gray-400 p-6 rounded-xl shadow-md">
            <BadgeCheck className="mx-auto mb-2 text-blue-500 w-14 h-14" />
            <p className="text-2xl font-bold">1.5+</p>
            <span>Years Experience</span>
          </div>
          <div className="bg-gray-400 p-6 rounded-xl shadow-md">
            <Puzzle className="mx-auto mb-2 text-green-500 w-14 h-14" />
            <p className="text-2xl font-bold">5+</p>
            <span>Completed Projects</span>
          </div>
          <div className="bg-gray-400 p-6 rounded-xl shadow-md">
            <Users className="mx-auto mb-2 text-orange-500 w-14 h-14" />
            <p className="text-2xl font-bold">3</p>
            <span>Clients / Teams</span>
          </div>
          <div className="bg-gray-400 p-6 rounded-xl shadow-md">
            <Code2 className="mx-auto mb-2 text-sky-500 w-14 h-14" />
            <p className="text-2xl font-bold">1000+</p>
            <span>Hours Coded</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeComponent;
