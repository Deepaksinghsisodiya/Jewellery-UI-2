import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./Screens/Header/Header";
import TermsAndConditions from "./Screens/Components/TermsAndCondition/TermsAndCondition";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer/Footer";
import { ArrowUp, X } from "lucide-react";

const App = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>

      <Footer onShowTerms={() => setShowTerms(true)} />

      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-4 w-[95%] sm:w-[60%] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowTerms(false)}
              aria-label="Close"
              className="absolute right-4 top-2 p-1 rounded-full hover:bg-red-500 transition-colors"
            >
              <X className="h-5 w-5 text-black hover:text-white" />
            </button>
            <TermsAndConditions />
          </div>
        </div>
      )}

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-800 to-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 z-50 border border-white"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;
