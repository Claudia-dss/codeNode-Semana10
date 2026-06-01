"use client";

import { useState } from "react";
import UrlResult from "./UrlResult";

export default function UrlForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      });

      const data = await response.json();

      setShortUrl(data.shortUrl);

    } catch (error) {
      console.error(error);
      alert("Error al generar la URL");
    }

    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-white p-6 rounded-xl shadow-sm"
      >
        <input
          type="url"
          placeholder="https://ejemplo.com bg-sky-50"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="border p-3 rounded bg-white text-gray-900 dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1A56DB]"
        />

        <button
          type="submit"
          disabled={loading}
          className="
            bg-[#1A56DB]
            text-white
            p-3
            rounded
            hover:bg-[#1140A3]
            transition-colors
          "
        >
          {loading
            ? "Generando..."
            : "Acortar URL"}
        </button>
      </form>

      <UrlResult className="border p-3 rounded" shortUrl={shortUrl} />
    </>
  );
}