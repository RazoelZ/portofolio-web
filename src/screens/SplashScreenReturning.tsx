import { useEffect, useState } from "react";

interface SplashScreenReturningProps {
  onComplete: () => void;
}

const SplashScreenReturning = ({ onComplete }: SplashScreenReturningProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const visitorName =
    typeof window !== "undefined" ? localStorage.getItem("visitorName") : "";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onComplete(), 700);
    }, 1600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center
        transition-opacity duration-700
        
        bg-gradient-to-br 
        from-white via-neutral-100 to-gray-200 
        dark:from-black dark:via-[#0a0a0a] dark:to-[#121212]
        
        text-gray-900 dark:text-white
        
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute w-[450px] h-[450px] 
            bg-blue-400/20 dark:bg-blue-600/20 
            blur-[180px] top-20 left-1/2 -translate-x-1/2
          "
        ></div>

        <div
          className="
            absolute w-[350px] h-[350px] 
            bg-indigo-300/20 dark:bg-indigo-500/20 
            blur-[160px] bottom-10 right-20
          "
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-4 animate-fadeIn">
        <h1
          className="
            text-4xl font-extrabold
            bg-gradient-to-r from-blue-600 to-indigo-600 
            dark:from-blue-400 dark:to-indigo-400
            bg-clip-text text-transparent
          "
        >
          Welcome back ✨
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Hi{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            {visitorName}
          </span>
          , loading your experience...
        </p>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreenReturning;
