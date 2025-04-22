import React from "react";

const EducationComponent: React.FC = () => {
  return (
    <section className="mb-16 px-6 md:px-16 w-full">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-4xl italic font-semibold text-white mb-3">
          Education
        </h3>
        <p className="text-sm text-gray-400 border-t border-gray-600 pt-3">
          I hold a Bachelor's Degree in Informatics with a strong academic
          record and hands-on experience in front-end development, software
          architecture, and project management.
        </p>
      </div>

      {/* Education Card */}
      <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] p-6 rounded-2xl border border-zinc-800 shadow-md mb-8">
        <p className="text-sm text-gray-400 mb-1">Sep 2020 – Jun 2024</p>
        <h4 className="text-xl text-white font-semibold mb-1">
          Bachelor's Degree – Informatics / Computer Science
        </h4>
        <p className="text-sm text-gray-400 mb-2">
          Diponegoro University (Undip) — GPA:{" "}
          <span className="text-white">3.80 / 4.00</span>
        </p>
        <p className="text-sm text-gray-400 mb-2">
          Thesis:{" "}
          <span className="italic text-white">
            "Front-end Development of Outcome Based Education (OBE) Curriculum
            Based Learning Achievement Monitoring Application"
          </span>{" "}
          — received an <span className="text-white">A grade</span>.
        </p>
        <p className="text-sm text-gray-400">
          Relevant courses: Software Engineering, Project Management,
          Information Systems, Software Architecture, Software Quality.
        </p>
      </div>

      {/* Awards */}
      {/* <div className="bg-[#d98f8f]/20 border border-[#d98f8f]/40 p-4 rounded-md">
        <h4 className="text-white text-lg font-semibold mb-3">Awards</h4>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>
            <span className="text-white">2024 –</span> A Grade on Final Thesis
          </li>
          <li>
            <span className="text-white">2020 –</span> Academic Excellence
            Scholarship (Undip)
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default EducationComponent;
