"use client";

export default function UrlResult({ shortUrl }) {
  if (!shortUrl) return null;

  return (
    <div className="mt-6 p-4 border rounded-lg shadow">
      <h2 className="font-bold mb-2">
        URL generada:
      </h2>

      <a
        href={shortUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        {shortUrl}
      </a>
    </div>
  );
}