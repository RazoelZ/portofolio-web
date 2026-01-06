"use client";

import { useState } from "react";
import { Gamepad2, MessageCircle } from "lucide-react";

import GameModal from "./games/GameModal";
import WhackAMole from "./games/WhackAMole";
import MemoryMatch from "./games/MemoryMatch";
import QuoteBox from "./games/QuoteBox";

type GameType = null | "mole" | "memory" | "quote";

const GameComponent: React.FC = () => {
  const [openGame, setOpenGame] = useState<GameType>(null);

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-sm text-tertiary mb-1 tracking-wider font-mono">
          (07)
        </h2>

        <div className="flex items-center gap-2 mb-3">
          <Gamepad2 className="text-blue-600 dark:text-blue-400 w-9 h-9" />
          <h2 className="text-primary text-4xl font-display font-semibold italic">
            Mini Games
          </h2>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-3 mb-12 leading-relaxed font-sans">
          Feeling tired of all the professionalism? Let’s take a short break —
          play a game or get a little inspiration ✨
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Whack-a-Mole */}
          <div
            onClick={() => setOpenGame("mole")}
            className="cursor-pointer p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#161616]
            shadow-theme-lg hover:shadow-theme-xl dark:hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-2"
          >
            <Gamepad2 className="text-green-400 w-8 h-8 mb-4" />
            <h3 className="text-lg font-display font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Whack-a-Mole
            </h3>
            <p className="text-sm text-secondary">
              Test your reflexes by clicking the mole.
            </p>
          </div>

          {/* Memory Match */}
          <div
            onClick={() => setOpenGame("memory")}
            className="cursor-pointer p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#161616]
            shadow-theme-lg hover:shadow-theme-xl dark:hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-2"
          >
            <Gamepad2 className="text-purple-400 w-8 h-8 mb-4" />
            <h3 className="text-lg font-display font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Memory Match
            </h3>
            <p className="text-sm text-secondary">
              Match all cards using your memory.
            </p>
          </div>

          {/* Quote Card */}
          <div
            onClick={() => setOpenGame("quote")}
            className="cursor-pointer p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#161616]
            shadow-theme-lg hover:shadow-theme-xl dark:hover:shadow-glow-yellow transition-all duration-300 hover:-translate-y-2"
          >
            <MessageCircle className="text-yellow-400 w-8 h-8 mb-4" />
            <h3 className="text-lg font-display font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Daily Quote
            </h3>
            <p className="text-sm text-secondary">
              Get a short piece of advice or motivation.
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <GameModal
        open={openGame === "mole"}
        onClose={() => setOpenGame(null)}
        title="🐹 Whack-a-Mole"
        instructions={[
          "Click the mole as fast as you can.",
          "Each hit increases your score.",
          "You have 30 seconds — go!",
        ]}
      >
        <WhackAMole />
      </GameModal>

      <GameModal
        open={openGame === "memory"}
        onClose={() => setOpenGame(null)}
        title="🧠 Memory Match"
        instructions={[
          "Click a card to reveal it.",
          "Match two identical cards.",
          "Finish with the fewest moves possible.",
        ]}
      >
        <MemoryMatch />
      </GameModal>

      <GameModal
        open={openGame === "quote"}
        onClose={() => setOpenGame(null)}
        title="💬 Daily Quote"
        instructions={[
          "Read and reflect.",
          "Click to get a new quote.",
          "Take it easy 🙂",
        ]}
      >
        <QuoteBox />
      </GameModal>
    </section>
  );
};

export default GameComponent;
