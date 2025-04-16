import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-animation.json";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroComponent: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-20 bg-[#242424] text-white">
      {/* 👤 Profile Animation */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie animationData={heroAnimation} loop className="w-96 h-96" />
      </div>

      {/* 👋 Introduction Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="mb-5 text-3xl sm:text-5xl font-bold">
          Hi, I’m{" "}
          <span className="text-blue-500 font-semibold">
            <Typewriter
              words={["Dany", "a Front-End Developer", "Consulting Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
          <a
            href="/src/assets/resume.pdf"
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

        {/* 🌐 Social Icons */}
        <div className="flex gap-6 justify-center md:justify-start text-xl">
          <a
            href="https://github.com/RazoelZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/danydarmawan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:danydarmawannn@gmail.com"
            className="hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* ↓ Scroll Down Hint */}
        {/* <div className="mt-12 flex justify-center md:justify-start animate-bounce">
          <a
            href="#about"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            ↓ Scroll Down
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default HeroComponent;
