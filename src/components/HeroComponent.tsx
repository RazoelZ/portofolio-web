import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import PhotoFrame from "./ui/PhotoFrame";

const HeroComponent: React.FC = () => {
  const [visitorName, setVisitorName] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem("visitorName");
    if (name) setVisitorName(name);
  }, []);

  return (
    <section
      id="home"
      className="scroll-mt-28 min-h-screen flex flex-col md:flex-row items-center gap-10 px-6 text-primary mt-36 md:mt-0 md:justify-between"
    >
      {/* 👤 Profile Photo */}
      <div className="w-full md:w-1/2 flex justify-center">
        <PhotoFrame src="/profile.png" alt="Muhammad Drajat Dany Darmawan" />
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
              words={["Dany", "Razoel", "a Software Engineer", "IT Consultant"]}
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
          I help organizations translate complex business needs into
          well-designed systems, data models, and modern applications. With
          experience across consulting, government systems, and software
          engineering, I bridge business goals with technical execution.{" "}
        </p>

        <p className="text-base text-tertiary mb-6 font-sans">
          Driving Digital Transformation Through Scalable Technology Solutions
        </p>

        {/* 🔗 Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
          {/* Download CV */}
          <a
            href="https://drive.google.com/file/d/1ebqAw44iKqobdVQCDQrqy3zXwfVose_b/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3
              rounded-lg
              font-medium font-sans
              bg-blue-600
              text-white
              border border-blue-600
              hover:bg-blue-700
              hover:border-blue-700
              dark:bg-blue-500
              dark:border-blue-500
              dark:text-white
              dark:hover:bg-blue-600
              dark:hover:border-blue-600
              shadow-theme-sm
              hover:shadow-theme-md
              transition-all duration-300 ease-in-out
            "
          >
            <span>📄</span>
            <span>Download CV</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/danydarmawan/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3
              rounded-lg
              font-medium font-sans
              bg-white
              text-blue-600
              border border-blue-600
              hover:bg-blue-50
              dark:bg-gray-900
              dark:text-blue-400
              dark:border-blue-500
              dark:hover:bg-gray-800
              dark:hover:text-blue-300
              shadow-theme-sm
              hover:shadow-theme-md
              transition-all duration-300 ease-in-out
            "
          >
            <span>🤝</span>
            <span>Let's Connect</span>
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
