import "./App.css";
import { useEffect, useState, useCallback } from "react";

import Navbar from "./components/NavbarComponent";
import LoaderComponent from "./components/LoaderComponent";

import SplashScreenInput from "./screens/SplashScreen";
import SplashScreenReturning from "./screens/SplashScreenReturning";

import HeroComponent from "./components/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import ExperienceComponent from "./components/ExperienceComponents";
import ProjectComponent from "./components/ProjectComponent";
import EducationComponent from "./components/EducationComponents";
import CertificationComponent from "./components/CertificationComponent";
import FAQAccordion from "./components/FAQAccordion";
import Footer from "./components/FooterComponent";

function App() {
  const [loading, setLoading] = useState(true);
  const [visitorName, setVisitorName] = useState<string>("");

  const [splashType, setSplashType] = useState<"new" | "returning" | null>(
    null
  );

  /* 🔹 Load once on app start */
  useEffect(() => {
    const storedName = localStorage.getItem("visitorName");

    setVisitorName(storedName || "");

    // Decide which splash
    if (storedName) setSplashType("returning");
    else setSplashType("new");
  }, []);

  /* 🔹 Title updates dynamically */
  useEffect(() => {
    document.title = visitorName ? `Welcome ${visitorName} 👋` : "Welcome 👋";
  }, [visitorName]);

  /* 🔹 Fake loader for app entry */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  /* 🔹 Close splash screen */
  const handleSplashComplete = useCallback(() => {
    setSplashType(null);
  }, []);

  /* 🔹 Update visitor name immediately */
  const handleNameSet = (name: string) => {
    setVisitorName(name);
  };

  // 1️⃣ LOADING SCREEN
  if (loading) return <LoaderComponent />;

  // 2️⃣ SPLASH SCREENS
  if (splashType === "new")
    return (
      <SplashScreenInput
        onComplete={handleSplashComplete}
        onNameSet={handleNameSet}
      />
    );

  if (splashType === "returning")
    return <SplashScreenReturning onComplete={handleSplashComplete} />;

  // 3️⃣ MAIN CONTENT
  return (
    <div
      className="
        min-h-screen relative
        text-black dark:text-white
        bg-white dark:bg-gradient-to-br
        dark:from-[#0b0b0f] dark:via-[#0d0d12] dark:to-[#0c0b0f]
        transition-colors duration-300
      "
    >
      <Navbar />

      {/* Fade-in animation for all main content */}
      <main className="flex flex-col gap-24 px-4 md:px-10 animate-fadeInSlow">
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

        <section id="faq" className="scroll-mt-28 pb-32">
          <FAQAccordion />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
