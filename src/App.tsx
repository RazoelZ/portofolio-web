import "./App.css";
import Navbar from "./components/NavbarComponent";
import LoaderComponent from "./components/LoaderComponent";
import { useEffect, useState } from "react";
import { useAnimatedTitle } from "./Hooks/useAnimatedTitle";

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

  // Splash logic
  const [showInputSplash, setShowInputSplash] = useState(false);
  const [showReturningSplash, setShowReturningSplash] = useState(false);

  useAnimatedTitle("👋 Welcome to Dany's Portfolio", 200);

  /** 1️⃣ Fake Initial Loading Animation */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  /** 2️⃣ Splash Logic (input vs returning) */
  useEffect(() => {
    const stored = localStorage.getItem("visitorName");

    if (stored) {
      setShowReturningSplash(true);
    } else {
      setShowInputSplash(true);
    }
  }, []);

  /** Hide All Splash Screens */
  const handleSplashComplete = () => {
    setShowInputSplash(false);
    setShowReturningSplash(false);
  };

  // FIRST: Initial loading
  if (loading) {
    return <LoaderComponent />;
  }

  // SECOND: Show correct splash screen
  if (showInputSplash) {
    return <SplashScreenInput onComplete={handleSplashComplete} />;
  }

  if (showReturningSplash) {
    return <SplashScreenReturning onComplete={handleSplashComplete} />;
  }

  // MAIN RENDER
  return (
    <div
      className="
      bg-gradient-to-br from-[#0b0b0f] via-[#0d0d12] to-[#0c0b0f]
      text-white relative min-h-screen
      "
    >
      <Navbar />

      {/* Smooth fade-in main content */}
      <div className="flex flex-col gap-20 px-4 md:px-10 animate-fadeInSlow">
        {/* HOME */}
        <section id="home" className="scroll-mt-28">
          <HeroComponent />
          <AboutMeComponent />
        </section>

        {/* EXPERIENCES */}
        <section id="experiences" className="scroll-mt-28">
          <ExperienceComponent />
          <ProjectComponent />
        </section>

        {/* EDUCATION */}
        <section id="education" className="scroll-mt-28">
          <EducationComponent />
          <CertificationComponent />
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 pb-20">
          <FAQAccordion />
        </section>
      </div>

      {/* Fade Animations */}
      <style>{`
        .animate-fadeInSlow {
          animation: fadeInSlow 0.9s ease-out;
        }

        @keyframes fadeInSlow {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
