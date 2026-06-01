"use client";

import { useEffect, useState } from "react";

export default function FloatingBackground() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 92,        // posición horizontal en %
        y: Math.random() * 92,        // posición vertical en %
        fontSize: Math.random() * 1.8 + 0.7, // tamaño 
        rotation: Math.random() * 70 - 35,   // rotación 
        factor: Math.random() * 0.025 + 0.008, // profundidad del parallax
      }))
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseOffset({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {words.map((word) => (
        <span
          key={word.id}
          className="absolute font-black select-none text-[#1A56DB] dark:text-[#3B82F6]"
          style={{
            left: `${word.x}%`,
            top: `${word.y}%`,
            fontSize: `${word.fontSize}rem`,
            opacity: 0.07,
            transform: `translate(${mouseOffset.x * word.factor}px, ${mouseOffset.y * word.factor}px) rotate(${word.rotation}deg)`,
            transition: "transform 0.12s ease-out",
          }}
        >
          URLs
        </span>
      ))}
    </div>
  );
}
