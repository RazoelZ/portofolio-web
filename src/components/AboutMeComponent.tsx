import React from "react";
import {
  Code2,
  MonitorSmartphone,
  Puzzle,
  Users,
  BadgeCheck,
  Brain,
  Sparkles,
} from "lucide-react";

const AboutMeComponent: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-16 pt-28 relative overflow-hidden"
    >
      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-[150px] top-10 left-10"></div>
        <div className="absolute w-[360px] h-[360px] bg-indigo-600/10 rounded-full blur-[160px] bottom-10 right-10"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-sm text-tertiary mb-1 tracking-wider font-mono">
          {`(0${2})`}
        </h2>

        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="text-blue-500 w-5 h-5" />
          <h2 className="text-primary text-4xl font-display font-bold italic">
            About Me
          </h2>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-3 mb-12 leading-relaxed font-sans">
          I specialize in bridging the gap between <strong>business</strong> and{" "}
          <strong>technology</strong> — delivering solutions across consulting,
          government systems, and software engineering. My experience allows me
          to understand client needs, design scalable architectures, and develop
          modern applications that drive measurable impact.
        </p>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Code2 className="text-blue-400 w-8 h-8 mb-4" />,
              title: "Technical Expertise",
              desc: "React, Next.js, TypeScript, Node.js, Express.js, Django, REST APIs, GCP, Azure Fundamentals",
            },
            {
              icon: (
                <MonitorSmartphone className="text-purple-400 w-8 h-8 mb-4" />
              ),
              title: "Engineering Strengths",
              desc: "Scalable UI architecture, API integration, system design, cloud fundamentals, performance optimization",
            },
            {
              icon: <Brain className="text-pink-400 w-8 h-8 mb-4" />,
              title: "Consulting Skills",
              desc: "Requirement analysis, data modeling, TOGAF principles, business communication, stakeholder management",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="
                p-6 rounded-xl border border-gray-200 dark:border-zinc-800 
                bg-white dark:bg-[#161616] backdrop-blur-xl
                shadow-theme-lg hover:shadow-theme-xl
                dark:shadow-theme-lg dark:hover:shadow-glow-blue
                transition-all duration-300 hover:-translate-y-2
              "
            >
              {card.icon}
              <h3 className="text-lg font-display font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed font-sans">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className="
            grid grid-cols-2 md:grid-cols-4 gap-8 
            text-center text-sm font-medium text-secondary font-sans
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
              number: "8+",
              label: "Major Projects",
            },
            {
              icon: (
                <Users className="mx-auto mb-3 text-yellow-400 w-12 h-12" />
              ),
              number: "5+",
              label: "Teams & Clients Served",
            },
            {
              icon: <Code2 className="mx-auto mb-3 text-sky-400 w-12 h-12" />,
              number: "1200+",
              label: "Hours in Engineering & Consulting",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="
                p-6 rounded-xl border border-gray-200 dark:border-zinc-800 
                bg-white dark:bg-[#161616]
                shadow-theme-lg hover:shadow-theme-xl
                dark:hover:shadow-glow-blue
                transition-all duration-300 hover:-translate-y-2
              "
            >
              {stat.icon}
              <p className="text-2xl font-display font-bold text-primary">
                {stat.number}
              </p>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMeComponent;
