import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArrowUp, X } from "lucide-react";
import HomePage from "./Screens/Header/HomePage";
import DynamicHomePage from "./Screens/Components/DynamicHomePage/DynamicHomePage";
import PageNotFound from "./Screens/Components/PageNotFound/PageNotFound";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <BrowserRouter>
      <>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<DynamicHomePage />} />
          <Route path="/category/:catId" element={<DynamicHomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
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
      </>
    </BrowserRouter>
  );
};

export default App;
