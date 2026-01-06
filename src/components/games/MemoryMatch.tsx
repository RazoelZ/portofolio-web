"use client";

import { useEffect, useState } from "react";

type CardType = {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const EMOJIS = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒"];

export default function MemoryMatch() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [firstCard, setFirstCard] = useState<CardType | null>(null);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const duplicated = [...EMOJIS, ...EMOJIS]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }));

    setCards(duplicated);
    setFirstCard(null);
    setMoves(0);
    setLocked(false);
  };

  const handleFlip = (card: CardType) => {
    if (locked || card.isFlipped || card.isMatched) return;

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);

    if (!firstCard) {
      setFirstCard(card);
      return;
    }

    setMoves((m) => m + 1);
    setLocked(true);

    if (firstCard.value === card.value) {
      setCards((prev) =>
        prev.map((c) =>
          c.value === card.value ? { ...c, isMatched: true } : c
        )
      );
      resetTurn();
    } else {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) => (c.isMatched ? c : { ...c, isFlipped: false }))
        );
        resetTurn();
      }, 900);
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setLocked(false);
  };

  const allMatched = cards.every((c) => c.isMatched);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <p>
          Moves: <b>{moves}</b>
        </p>
        <button
          onClick={resetGame}
          className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleFlip(card)}
            className={`w-20 h-20 text-3xl rounded-lg flex items-center justify-center
              ${
                card.isFlipped || card.isMatched
                  ? "bg-white text-black"
                  : "bg-slate-700 text-transparent"
              }`}
          >
            {card.value}
          </button>
        ))}
      </div>

      {allMatched && (
        <p className="mt-4 text-green-400 font-semibold">
          🎉 You won in {moves} moves!
        </p>
      )}
    </div>
  );
}
