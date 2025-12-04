import { useState } from "react";

const SplashScreen = ({
  onComplete,
  onNameSet,
}: {
  onComplete: () => void;
  onNameSet: (name: string) => void;
}) => {
  const [name, setName] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;

    localStorage.setItem("visitorName", name);
    onNameSet(name); // 🔥 Update App instantly

    setFadeOut(true);
    setTimeout(() => onComplete(), 700);
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br 
      from-black via-[#0a0a0a] to-[#121212] text-white transition-opacity duration-700
      ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <form
        onSubmit={handleSubmit}
        className="relative z-10 p-10 rounded-2xl bg-white/10 backdrop-blur-xl 
        shadow-2xl border border-white/10 max-w-sm w-full 
        animate-[float_4s_ease-in-out_infinite]"
      >
        <h1
          className="text-4xl font-extrabold mb-3 bg-gradient-to-r 
        from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Welcome
        </h1>

        <p className="text-gray-300 mb-6">
          Before entering my portfolio, tell me your name ✨
        </p>

        <input
          type="text"
          placeholder="Your name..."
          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 
          text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition 
          shadow-inner"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          type="submit"
          className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r 
          from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
          transition shadow-lg font-medium tracking-wide"
        >
          Enter Portfolio ✦
        </button>
      </form>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
