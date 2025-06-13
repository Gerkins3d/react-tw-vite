import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden custom-shadow">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-brand-500">Vite + React + Tailwind</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-300">Работает через @tailwindcss/vite!</p>
          <button onClick={() => setDarkMode(!darkMode)} className="mt-4 px-4 py-2 bg-brand-500 hover:bg-blue-700 text-white font-medium rounded-lg">
            Переключить тему
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
