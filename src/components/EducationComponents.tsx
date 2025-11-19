import React from "react";
import { GraduationCap, BookOpen, Star } from "lucide-react";

const EducationComponent: React.FC = () => {
  return (
    <section
      id="education"
      className="relative px-6 md:px-16 max-w-6xl mx-auto py-28"
    >
      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[150px] top-0 left-10"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[150px] bottom-10 right-10"></div>
      </div>

      {/* TITLE */}
      <div className="mb-12">
        <h2 className="text-sm text-gray-500 mb-1 tracking-wider">(04)</h2>

        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="text-blue-400 w-9 h-9" />
          <h3 className="text-4xl italic font-semibold text-white">
            Education
          </h3>
        </div>

        <p className="text-sm md:text-lg text-gray-400 border-t border-gray-700 pt-3 leading-relaxed max-w-5xl">
          I earned my Bachelor's Degree in Informatics from Diponegoro
          University, graduating with a strong academic performance (GPA 3.80 /
          4.00). Throughout my studies, I developed a solid foundation in
          software engineering, front-end development, system design, and
          project lifecycle management. This educational journey has shaped my
          approach to building highly structured and user-centered systems,
          emphasizing both technical excellence and thoughtful design.
        </p>
      </div>

      {/* INFORMATION BOX */}
      <div
        className="
          bg-[#151515]/80 backdrop-blur-xl
          border border-zinc-800 rounded-2xl
          shadow-[0_0_25px_-10px_rgba(56,189,248,0.35)]
          hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.45)]
          transition-all duration-300
          p-6 md:p-8
        "
      >
        {/* Date */}
        <p className="text-sm text-gray-400 mb-1">Sep 2020 – Jun 2024</p>

        {/* Title */}
        <h4 className="text-2xl font-semibold text-white mb-2">
          Bachelor's Degree – Informatics / Computer Science
        </h4>

        {/* University + GPA */}
        <p className="text-sm text-gray-300 mb-4">
          Diponegoro University (UNDIP) — GPA:{" "}
          <span className="text-blue-400 font-semibold">3.80 / 4.00</span>
        </p>

        {/* Thesis */}
        <div className="flex items-start gap-3 mb-4">
          <BookOpen className="text-blue-400 w-5 h-5 mt-1" />
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-gray-400">Thesis: </span>
            <span className="italic text-blue-400">
              "Front-end Development of Outcome Based Education (OBE) Curriculum
              Based Learning Achievement Monitoring Application"
            </span>{" "}
            — <span className="text-blue-400 font-semibold">A grade</span>
          </p>
        </div>

        {/* Relevant Courses */}
        <div className="flex items-start gap-3">
          <Star className="text-yellow-400 w-5 h-5 mt-1" />
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-gray-400">Relevant Coursework: </span>
            Software Engineering, Project Management, Information Systems,
            Software Architecture, Software Quality Assurance, UI/UX
            Fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;
