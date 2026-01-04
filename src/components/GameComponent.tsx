import GameModal from "./games/GameModal";
import WhackAMole from "./games/WhackAMole";
import { Gamepad2 } from "lucide-react";
import { useState } from "react";

const GameComponent: React.FC = () => {
  const [openGame, setOpenGame] = useState<null | "mole">(null);

  return (
    <section className="min-h-screen px-6 md:px-16 pt-28">
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
          Feeling tired of all the professionalism? Let’s take a short break and
          play a little game — more games coming soon 👀
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Whack-a-Mole Card */}
          <div
            onClick={() => setOpenGame("mole")}
            className="
              cursor-pointer p-6 rounded-xl
              border border-gray-200 dark:border-zinc-800
              bg-white dark:bg-[#161616]
              shadow-theme-lg hover:shadow-theme-xl
              dark:hover:shadow-glow-blue
              transition-all duration-300 hover:-translate-y-2
            "
          >
            <Gamepad2 className="text-green-400 w-8 h-8 mb-4" />
            <h3 className="text-lg font-display font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Whack-a-Mole
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              Test your reflexes by clicking the mole before it disappears.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
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
    </section>
  );
};

export default GameComponent;
