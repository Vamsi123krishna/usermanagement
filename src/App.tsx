import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { Home } from './pages/Home';
import { UserDetail } from './pages/UserDetail';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-800" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<UserDetail />} />
            </Routes>
          </div>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;