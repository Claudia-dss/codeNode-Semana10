"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    fetch("/api/theme")
      .then((res) => res.json())
      .then((data) => {
        const mode = data.mode || "light";

        setTheme(mode);

        document.documentElement.classList.remove("dark");

        if (mode === "dark") {
          document.documentElement.classList.add("dark");
        }
      });
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    // Primero removemos la clase "dark" por si acaso
    document.documentElement.classList.remove("dark");

    // CORRECCIÓN: Si el nuevo tema es dark, añadimos "dark". 
    // Tailwind no necesita la clase "light" para el modo claro.
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    await fetch("/api/theme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mode: newTheme
      })
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        absolute
        top-4
        right-4
        mb-6
        px-4
        py-2
        rounded
        bg-gray-800
        text-white
      "
    >
      {theme === "light"
        ? "🌙 Dark Mode"
        : "☀️ Light Mode"}
    </button>
  );
}