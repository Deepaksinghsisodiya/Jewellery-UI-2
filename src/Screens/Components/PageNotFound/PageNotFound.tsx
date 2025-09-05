import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl">Oops! Page not found.</p>
      <a href="/" className="mt-4 text-blue-600 underline">
        Go back to Home
      </a>
    </div>
  );
};

export default PageNotFound;
