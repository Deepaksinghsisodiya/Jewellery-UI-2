import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./Screens/Header/Header";
import TermsAndConditions from "./Screens/Components/TermsAndCondition/TermsAndCondition";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer/Footer";

const App = () => {
  const [showTerms, setShowTerms] = useState(false);

  console.log("Show Terms Modal:", showTerms);
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>

      <Footer onShowTerms={() => setShowTerms(true)} />

      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full max-h-[700px] overflow-y-auto">
            <button
              className="absolute right-4 top-2 text-2xl font-bold text-black"
              onClick={() => setShowTerms(false)}
              aria-label="Close"
            >
              ×
            </button>
            <TermsAndConditions />
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;
