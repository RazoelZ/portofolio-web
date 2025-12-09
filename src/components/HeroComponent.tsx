import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-animation.json";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroComponent: React.FC = () => {
  const [visitorName, setVisitorName] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem("visitorName");
    if (name) setVisitorName(name);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 text-primary">
      {/* 👤 Profile Animation */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie animationData={heroAnimation} loop className="w-96 h-96" />
      </div>

      {/* 👋 Introduction Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* 🔥 Personalized Greeting */}
        {visitorName && (
          <p className="text-lg text-secondary mb-2 font-sans">
            Hi{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {visitorName}
            </span>
            , welcome!
          </p>
        )}

        <h1 className="mb-5 text-3xl sm:text-5xl font-display font-bold leading-tight text-primary">
          {visitorName ? "I'm " : "Hi, I'm "}
          <span className="text-blue-600 dark:text-blue-500 font-semibold">
            <Typewriter
              words={[
                "Dany",
                "Razoel",
                "a Software Engineer",
                "Consulting Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-secondary mb-6 leading-relaxed font-sans">
          IT Consultant with a strong foundation in software engineering, IT
          consulting, and digital transformation. Experienced in enterprise
          applications and cross-sector projects, skilled in solution design,
          client analysis, and collaboration to align technology with business
          goals. Passionate about leveraging cloud and emerging technologies to
          drive innovation and efficiency.
        </p>

        <p className="text-base text-tertiary mb-6 font-sans">
          Former Associate Assistant at PwC Indonesia with contributions to the
          Ministry of Maritime Affairs and Fisheries, Haus! Indonesia, and more.
        </p>

        {/* 🔗 Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
          <a
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1bThlz3xfUrXcIukQ6EXQ3B3Z-ZOI6qAP/view?usp=sharing",
                "_blank"
              );
            }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-theme-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 ease-in-out font-medium font-sans"
          >
            📄 Download CV
          </a>
          <a
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/danydarmawan/",
                "_blank"
              );
            }}
            className="px-6 py-3 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out font-medium font-sans shadow-theme-sm"
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
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/danydarmawan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:danydarmawannn@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
