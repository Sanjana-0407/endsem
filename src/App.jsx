import React, { createContext, useState, useContext } from "react";
import "./index.css";
import "./App.css";

// 1. Create ThemeContext
const ThemeContext = createContext();

// 2. Custom hook to use theme easily in child components
const useTheme = () => useContext(ThemeContext);

// -------- Child Components -------------

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`navbar ${theme}`}>
      <h1>KL Student Portal</h1>
      <button onClick={toggleTheme} className="toggle-btn">
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

function StudentCard() {
  const { theme } = useTheme();

  return (
    <div className={`card ${theme}`}>
      <h2>Welcome, Student!</h2>
      <p>View your attendance, marks, and announcements here.</p>
    </div>
  );
}

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      © 2025 KL University – All Rights Reserved
    </footer>
  );
}

// 3. Main App component
export default function App() {
  const [theme, setTheme] = useState("light"); // "light" or "dark"

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    // 4. Wrap the whole app with ThemeContext.Provider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <Navbar />
        <main className="content">
          <StudentCard />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
