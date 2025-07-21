import React, { useEffect } from "react";

type Size = "small" | "medium" | "large";

type CustomDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: Size;
}

const getDialogSizeClasses = (size: Size = "medium") => {
  switch (size) {
    case "small":
      return "md:min-w-[40rem] md:max-w-[40rem] min-h-[80-vh] max-h-[80vh]";
    case "medium":
      return "md:min-w-[30rem] md:max-w-[50rem] min-h-[45vh] max-h-[85vh]";
    case "large":
      return "md:min-w-[50rem] md:max-w-[75rem] min-h-[45vh] max-h-[90vh]";
    default:
      return "md:min-w-[20rem] md:max-w-[20rem] min-h-[45vh] max-h-[85vh]";
  }
};

const ATMDIalog: React.FC<CustomDialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
      <div
        className={`relative bg-white w-[90%] ${getDialogSizeClasses(
          size
        )} overflow-hidden rounded-2xl animate-fadeInScale p-10 sm:p-6 md:p-10`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 p-0 sm:p-0 rounded-full text-gray-700 hover:text-red-500"
        >
          Close
        </button>

        {/* Dialog Title */}
        {title && (
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 border-b pb-3">
            {title}
          </h2>
        )}

        {/* Dialog Body */}
        <div className="overflow-y-auto max-h-[65vh] pr-1 custom-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ATMDIalog;
