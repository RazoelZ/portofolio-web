import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-animation.json";

const IndexPortofolio: React.FC = () => {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-20"
      style={{ backgroundColor: "#242424" }}
    >
      {/* 👤 Profile Image or Animation */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie animationData={heroAnimation} loop className="w-72 h-72" />
      </div>

      {/* 👋 Introduction Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi, I’m Muhammad Drajat Dany Darmawan 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
          A passionate Front-End Developer with a strong background in Computer
          Science, experienced in building responsive and modern web
          applications using React, Vite, and Tailwind CSS.
        </p>
        <p className="text-base text-gray-400 mb-6">
          Currently working as Associate Assistant at PwC Indonesia. Previously
          contributed to projects with the Ministry of Maritime Affairs and
          Fisheries, Haus! Indonesia, and more.
        </p>

        {/* 🔗 Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/Muhammad_Drajat_Dany_Darmawan_Resume.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 ease-in-out font-medium"
          >
            📄 Download CV
          </a>
          <a
            href="mailto:danydarmawannn@gmail.com"
            className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out font-medium"
          >
            🤝 Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndexPortofolio;
