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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-[#1e1e1e] border border-zinc-700 rounded-xl shadow-lg max-w-6xl w-full p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 text-lg transition cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto max-h-[70vh] space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default DialogComponent;
