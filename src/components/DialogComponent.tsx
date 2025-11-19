import React from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const DialogComponent: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/70 backdrop-blur-md
        animate-fadeIn
      "
    >
      <div
        className="
          bg-[#1b1b1b]/95 backdrop-blur-xl
          border border-zinc-700 rounded-xl
          shadow-[0_0_50px_-10px_rgba(56,189,248,0.4)]
          max-w-5xl w-full mx-4 p-6 text-white
          animate-scaleIn
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 text-xl transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
          {children}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.28s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

export default DialogComponent;
