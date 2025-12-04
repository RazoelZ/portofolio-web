import "./App.css";
import Navbar from "./components/NavbarComponent";
import LoaderComponent from "./components/LoaderComponent";
import { useEffect, useState } from "react";

import SplashScreenInput from "./screens/SplashScreen";
import SplashScreenReturning from "./screens/SplashScreenReturning";

import HeroComponent from "./components/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import ExperienceComponent from "./components/ExperienceComponents";
import ProjectComponent from "./components/ProjectComponent";
import EducationComponent from "./components/EducationComponents";
import CertificationComponent from "./components/CertificationComponent";
import FAQAccordion from "./components/FAQAccordion";

function App() {
  const [loading, setLoading] = useState(true);
  const [visitorName, setVisitorName] = useState<string>("");

  const [showInputSplash, setShowInputSplash] = useState(false);
  const [showReturningSplash, setShowReturningSplash] = useState(false);

  /** Load visitor name once */
  useEffect(() => {
    const stored = localStorage.getItem("visitorName");
    setVisitorName(stored || "");
  }, []);

  /** Update title whenever visitorName changes */
  useEffect(() => {
    document.title = visitorName ? `Welcome ${visitorName} 👋` : "Welcome 👋";
  }, [visitorName]);

  /** Fake loading animation */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  /** Decide splash type */
  useEffect(() => {
    const stored = localStorage.getItem("visitorName");
    setShowInputSplash(!stored);
    setShowReturningSplash(!!stored);
  }, []);

  /** Handles closing splash */
  const handleSplashComplete = () => {
    setShowInputSplash(false);
    setShowReturningSplash(false);
  };

  /** Update visitorName immediately after input */
  const handleNameSet = (name: string) => {
    setVisitorName(name); // 🔥 instantly update
  };

  // 1️⃣ Loading
  if (loading) return <LoaderComponent />;

  // 2️⃣ Splash screens
  if (showInputSplash)
    return (
      <SplashScreenInput
        onComplete={handleSplashComplete}
        onNameSet={handleNameSet} // 🔥 FIX HERE
      />
    );

  if (showReturningSplash)
    return <SplashScreenReturning onComplete={handleSplashComplete} />;

  // 3️⃣ Main content
  return (
    <div className="min-h-screen relative text-black dark:text-white bg-white dark:bg-gradient-to-br dark:from-[#0b0b0f] dark:via-[#0d0d12] dark:to-[#0c0b0f] transition-colors duration-300">
      <Navbar />

      <div className="flex flex-col gap-20 px-4 md:px-10 animate-fadeInSlow">
        <section id="home" className="scroll-mt-28">
          <HeroComponent />
        </section>

        <section id="about-me" className="scroll-mt-28">
          <AboutMeComponent />
        </section>

        <section id="experiences" className="scroll-mt-28">
          <ExperienceComponent />
          <ProjectComponent />
        </section>

        <section id="education" className="scroll-mt-28">
          <EducationComponent />
          <CertificationComponent />
        </section>

        <section id="faq" className="scroll-mt-28 pb-20">
          <FAQAccordion />
        </section>
      </div>
    </div>
  );
}

export default App;
