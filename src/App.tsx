import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="p-10 bg-gray-700 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">🚀 Tailwind 4 Works! 🎉</h1>
        <p className="text-lg text-center mt-4">
          Try modifying the styles to see Tailwind in action.
        </p>
      </div>
    </div>
  );
};

export default App;