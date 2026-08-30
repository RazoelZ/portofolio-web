"use client";

import { X } from "lucide-react";
import { ReactNode } from "react";

interface GameModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  instructions: string[];
  children: ReactNode;
}

export default function GameModal({
  open,
  onClose,
  title,
  instructions,
  children,
}: GameModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div
        className="
          relative w-full max-w-3xl 
          rounded-2xl p-6
          bg-surface
          border border-gray-200 dark:border-zinc-800
          shadow-theme-xl
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            text-gray-500 hover:text-gray-800
            dark:text-gray-400 dark:hover:text-white
          "
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <h3 className="text-2xl font-display font-semibold text-primary mb-3">
          {title}
        </h3>

        {/* Instructions */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
            How to play
          </p>
          <ul className="list-disc list-inside text-sm text-secondary space-y-1">
            {instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>

        {/* Game Area */}
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
}
