import React from "react";

const indexEducationScreen: React.FC = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 text-white">
      {/* 🎓 Education */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-600 pb-2 inline-block">
          🎓 Education
        </h2>
        <div>
          <h3 className="text-xl font-semibold text-blue-400">
            SMK Negeri 2 Depok – Software Engineering
          </h3>
          <p className="text-gray-300 text-sm mb-1">Graduated 2023</p>
          <p className="text-gray-400">
            Focused on front-end development, database design, and mobile
            application fundamentals. Participated in software development
            competitions and team-based IT projects.
          </p>
        </div>
      </div>

      {/* 📜 Certifications */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-green-600 pb-2 inline-block">
          📜 Certifications
        </h2>
        <ul className="space-y-6 list-disc pl-6 text-gray-400">
          <li>
            <strong className="text-green-400">
              Dicoding – Front-End Web Developer Expert
            </strong>
            <br />
            Credential ID: ABC-1234 |{" "}
            <a
              href="https://www.dicoding.com"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </li>
          <li>
            <strong className="text-green-400">
              BuildWithAngga – React JS for Beginner
            </strong>
            <br />
            Credential ID: BWA-5678
          </li>
        </ul>
      </div>

      {/* 🏢 Organization */}
      <div>
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-purple-600 pb-2 inline-block">
          🏢 Organization
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              HIMATIF (Informatics Student Association)
            </h3>
            <p className="text-gray-300 text-sm mb-1">2022 – 2023</p>
            <p className="text-gray-400">
              Served as Creative Media Staff. Designed event posters, managed
              website updates, and collaborated with cross-functional teams for
              event promotions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              Bangkit Academy 2023 – Web Development Path
            </h3>
            <p className="text-gray-300 text-sm mb-1">
              by Google, GoTo, & Traveloka
            </p>
            <p className="text-gray-400">
              Completed a 6-month intensive program focused on full-stack
              development, cloud computing, and soft skill training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default indexEducationScreen;
