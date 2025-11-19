// components/SplashScreenReturning.jsx
import { useEffect, useState } from "react";

interface SplashScreenReturningProps {
  onComplete: () => void;
}

const SplashScreenReturning = ({ onComplete }: SplashScreenReturningProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const visitorName = localStorage.getItem("visitorName");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onComplete(), 700);
    }, 1600); // show for 1.6 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#0d0d0d] text-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-4 animate-fadeIn">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Welcome back ✨
        </h1>
        <p className="text-gray-300 text-lg">
          Hi <span className="text-blue-400 font-semibold">{visitorName}</span>,
          loading your experience...
        </p>
      </div>
    </div>
  );
};

export default SplashScreenReturning;
