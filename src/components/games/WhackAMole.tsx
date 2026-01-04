"use client";

import { useEffect, useRef, useState } from "react";

const HOLE_COUNT = 9;
const GAME_TIME = 30;

export default function WhackAMole() {
  const [activeHole, setActiveHole] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const moleTimer = useRef<NodeJS.Timeout | null>(null);
  const gameTimer = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_TIME);
    setActiveHole(null);

    if (moleTimer.current) clearInterval(moleTimer.current);
    if (gameTimer.current) clearInterval(gameTimer.current);

    moleTimer.current = setInterval(() => {
      setActiveHole(Math.floor(Math.random() * HOLE_COUNT));
    }, 800);

    gameTimer.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          endGame();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const endGame = () => {
    if (moleTimer.current) clearInterval(moleTimer.current);
    if (gameTimer.current) clearInterval(gameTimer.current);
    setActiveHole(null);
  };

  const hitMole = (index: number) => {
    if (index === activeHole) {
      setScore((s) => s + 1);
      setActiveHole(null);
    }
  };

  useEffect(() => {
    return () => {
      if (moleTimer.current) clearInterval(moleTimer.current);
      if (gameTimer.current) clearInterval(gameTimer.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-6 font-semibold">
        <span>Score: {score}</span>
        <span>Time: {timeLeft}s</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: HOLE_COUNT }).map((_, i) => (
          <div
            key={i}
            onClick={() => hitMole(i)}
            className="w-24 h-24 rounded-full bg-slate-800 flex items-end justify-center cursor-pointer overflow-hidden"
          >
            <div
              className={`w-16 h-16 rounded-full bg-yellow-600 transition-all duration-200 ${
                activeHole === i ? "translate-y-0" : "translate-y-full"
              }`}
            />
          </div>
        ))}
      </div>

      <button
        onClick={startGame}
        className="mt-4 px-6 py-2 rounded-lg bg-green-500 text-black font-bold hover:bg-green-400"
      >
        Start Game
      </button>
    </div>
  );
}
