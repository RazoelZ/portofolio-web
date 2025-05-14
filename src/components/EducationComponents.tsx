import React from "react";

const EducationComponent: React.FC = () => {
  return (
    <section className="px-6 md:px-16 max-w-6xl mx-auto bg-[#121212] md:pt-30">
      {/* Section Heading */}
      <div className="mb-10">
        <h2 className="text-sm text-gray-400 mb-1">(04)</h2>
        <h3 className="text-4xl italic font-semibold text-white mb-3">
          Education
        </h3>
        <p className="text-sm md:text-lg text-gray-400 border-t border-gray-600 pt-3">
          I hold a Bachelor's Degree in Informatics from Diponegoro University,
          where I graduated with a strong academic record and a GPA of 3.80 out
          of 4.00. Throughout my studies, I developed a solid foundation in
          software engineering principles and gained hands-on experience in
          front-end development, system architecture, and project lifecycle
          management.
          <br />
          <br />
          My academic journey was complemented by a thesis project titled{" "}
          <span className="italic text-blue-400">
            "Front-end Development of Outcome Based Education (OBE) Curriculum
            Based Learning Achievement Monitoring Application"
          </span>
          , which received an <span className="text-blue-400">A grade</span>.
          This project deepened my expertise in building scalable, user-focused
          web interfaces while applying best practices in usability and
          performance.
          <br />
          <br />I also completed several industry-relevant courses in software
          quality, information systems, and project management, which have
          shaped my structured approach to problem-solving and product
          development.
        </p>
      </div>

      {/* Degree Details */}
      <div className="space-y-2">
        <p className="text-sm text-gray-400">Sep 2020 – Jun 2024</p>
        <h4 className="text-xl font-semibold text-white">
          Bachelor's Degree – Informatics / Computer Science
        </h4>
        <p className="text-sm text-gray-400">
          Diponegoro University (Undip) — GPA:{" "}
          <span className="text-blue-400">3.80 / 4.00</span>
        </p>
        <p className="text-sm text-gray-400">
          Thesis:{" "}
          <span className="italic text-blue-400">
            "Front-end Development of Outcome Based Education (OBE) Curriculum
            Based Learning Achievement Monitoring Application"
          </span>{" "}
          — <span className="text-blue-400">A grade</span>
        </p>
        <p className="text-sm text-gray-400">
          Relevant courses: Software Engineering, Project Management,
          Information Systems, Software Architecture, Software Quality.
        </p>
      </div>
      {/* <div className="w-full mt-12 flex justify-center md:justify-end animate-bounce">
        <a
          href="#certificates"
          className="text-gray-400 hover:text-blue-400 transition text-lg"
        >
          ↓ Scroll Down
        </a>
      </div> */}
    </section>
  );
};

export default EducationComponent;
