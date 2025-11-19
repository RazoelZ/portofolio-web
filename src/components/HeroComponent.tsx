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
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 text-white">
      {/* 👤 Profile Animation */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie animationData={heroAnimation} loop className="w-96 h-96" />
      </div>

      {/* 👋 Introduction Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* 🔥 Personalized Greeting */}
        {visitorName && (
          <p className="text-lg text-gray-300 mb-2">
            Hi{" "}
            <span className="text-blue-400 font-semibold">{visitorName}</span>,
            welcome!
          </p>
        )}

        <h1 className="mb-5 text-3xl sm:text-5xl font-bold leading-tight">
          {visitorName ? "I’m " : "Hi, I’m "}
          <span className="text-blue-500 font-semibold">
            <Typewriter
              words={[
                "Dany",
                "Razoel",
                "a Front-End Developer",
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

        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
          IT Consultant with a strong foundation in software engineering, IT
          consulting, and digital transformation. Experienced in enterprise
          applications and cross-sector projects, skilled in solution design,
          client analysis, and collaboration to align technology with business
          goals. Passionate about leveraging cloud and emerging technologies to
          drive innovation and efficiency.
        </p>

        <p className="text-base text-gray-400 mb-6">
          Former Associate Assistant at PwC Indonesia with contributions to the
          Ministry of Maritime Affairs and Fisheries, Haus! Indonesia, and more.
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
      </div>
    </section>
  );
};

export default HeroComponent;
