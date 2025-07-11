import React from "react";
import { X } from "lucide-react";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const ATMDIalog = ({ isOpen, onClose, title, children }: CustomDialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity">
      <div className="relative bg-white w-full max-w-2xl mx-4 md:mx-0 rounded-2xl shadow-xl p-6 md:p-10 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md hover:bg-gray-100 transition"
        >
          <X className="h-7 w-7 text-gray-500 hover:text-red-500 bg-gray-100 rounded-lg" />
        </button>

        {title && (
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            {title}
          </h2>
        )}

        <div className="max-h-[70vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default ATMDIalog;
