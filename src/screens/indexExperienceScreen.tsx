import React from "react";

const IndexExperienceScreen: React.FC = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 text-white">
      {/* 💼 Experience Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-600 pb-2 inline-block">
          💼 Experience
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-400">
              Associate Assistant – PwC Indonesia
            </h3>
            <p className="text-gray-300 text-sm mb-1">2024 – Present</p>
            <p className="text-gray-400">
              Supporting tech consulting projects, developing internal
              dashboards, and maintaining frontend consistency across clients'
              web platforms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400">
              Frontend Developer – Ministry of Maritime Affairs and Fisheries
            </h3>
            <p className="text-gray-300 text-sm mb-1">2023 – 2024</p>
            <p className="text-gray-400">
              Built and maintained licensing dashboards with React, enhanced PDF
              previewing, and integrated data handling with Laravel APIs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400">
              Frontend Intern – Haus! Indonesia
            </h3>
            <p className="text-gray-300 text-sm mb-1">2023</p>
            <p className="text-gray-400">
              Developed a responsive company profile site using React and
              Tailwind. Delivered high-quality UI under tight deadlines.
            </p>
          </div>
        </div>
      </div>

      {/* 🚀 Projects Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-indigo-600 pb-2 inline-block">
          🚀 Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1f1f1f] p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-400">
              Digitalization of fishing vessel licensing
            </h4>
            <p className="text-gray-400 mb-2">
              A web system for managing and issuing ship permits, integrating
              user uploads, tables, and PDF previews.
            </p>
            <p className="text-sm text-gray-500">
              Next Js • Tailwind • React Query
            </p>
          </div>

          <div className="bg-[#1f1f1f] p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-400">
              Haus! Company Profile
            </h4>
            <p className="text-gray-400 mb-2">
              A clean and modern landing page built to highlight Haus!'s mission
              and products using responsive design.
            </p>
            <p className="text-sm text-gray-500">React • Tailwind</p>
          </div>

          <div className="bg-[#1f1f1f] p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-400">
              TrackMeals
            </h4>
            <p className="text-gray-400 mb-2">
              An android application for tracking meals, allowing users to log
              their food intake and monitor their nutrition.
            </p>
            <p className="text-sm text-gray-500">
              Kotlin • Express JS • Google Cloud Platform (GCP)
            </p>
          </div>

          <div className="bg-[#1f1f1f] p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-400">
              PBTI Company Profile
            </h4>
            <p className="text-gray-400 mb-2">
              A clean and modern landing page was created to introduce to the
              wider Indonesian community and carry out registration
              administration.{" "}
            </p>
            <p className="text-sm text-gray-500">
              React • Tailwind • React Query
            </p>
          </div>

          <div className="bg-[#1f1f1f] p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-400">Desarmada</h4>
            <p className="text-gray-400 mb-2">
              An Android application for tracking and managing the vehicle
              inventory of PT Des Teknologi Informasi. It allows users to log
              vehicle usage and monitor inventory efficiently.
            </p>
            <p className="text-sm text-gray-500">Flutter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexExperienceScreen;
