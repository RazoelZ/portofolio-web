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
    <section
      id="about"
      className="
        min-h-screen px-6 md:px-16 pt-28
        relative
      "
    >
      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] top-10 left-10"></div>
        <div className="absolute w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[160px] bottom-10 right-10"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-sm text-gray-400 mb-1 tracking-wider">(03)</h2>
        <h2 className="text-white text-4xl font-bold mb-10 italic border-b border-gray-700 pb-3">
          What I Bring to the Table
        </h2>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Code2 className="text-blue-400 w-8 h-8 mb-4" />,
              title: "Frontend Tech Stack",
              desc: "React, Next.js, TypeScript, Tailwind, JavaScript, Node.js, Vite",
            },
            {
              icon: (
                <MonitorSmartphone className="text-purple-400 w-8 h-8 mb-4" />
              ),
              title: "Hard Skills",
              desc: "Responsive UI, Component Architecture, API Integration, Git, React Query",
            },
            {
              icon: <Brain className="text-pink-400 w-8 h-8 mb-4" />,
              title: "Soft Skills",
              desc: "Problem Solving, Teamwork, Adaptability, Time Management, Communication",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="
                p-6 rounded-xl border border-zinc-800 
                bg-[#161616] backdrop-blur-xl
                shadow-[0_0_25px_-10px_rgba(0,0,0,0.6)]
                hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)]
                transition-all duration-300 hover:-translate-y-2 
              "
            >
              {card.icon}
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className="
            grid grid-cols-2 md:grid-cols-4 gap-8 
            text-center text-sm font-medium text-gray-400
          "
        >
          {[
            {
              icon: (
                <BadgeCheck className="mx-auto mb-3 text-blue-400 w-12 h-12" />
              ),
              number: "1.5+",
              label: "Years Experience",
            },
            {
              icon: (
                <Puzzle className="mx-auto mb-3 text-green-400 w-12 h-12" />
              ),
              number: "5+",
              label: "Completed Projects",
            },
            {
              icon: (
                <Users className="mx-auto mb-3 text-yellow-400 w-12 h-12" />
              ),
              number: "3",
              label: "Clients / Teams",
            },
            {
              icon: <Code2 className="mx-auto mb-3 text-sky-400 w-12 h-12" />,
              number: "1000+",
              label: "Hours Coded",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="
                p-6 rounded-xl border border-zinc-800 bg-[#161616]
                shadow-[0_0_25px_-10px_rgba(0,0,0,0.6)]
                hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)]
                transition-all duration-300 hover:-translate-y-2
              "
            >
              {stat.icon}
              <p className="text-2xl font-bold text-gray-200">{stat.number}</p>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMeComponent;
