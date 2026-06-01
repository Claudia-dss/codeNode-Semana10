import ThemeToggle from "../components/ThemeToggle";
import UrlForm from "../components/UrlForm";
import FloatingBackground from "../components/FloatingBackground";


export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden">

      <FloatingBackground />

      <ThemeToggle />

      <div className="z-10 text-center max-w-2xl">
        <h1 className="text-6xl font-black mb-12 tracking-tight">ShURLs</h1>
        <h2 className="text-2xl font-bold mb-6">Acortador de URLs</h2>
        <p className="text-lg">
          Introduce tu enlace largo aquí abajo para transformarlo en un enlace corto y fácil de compartir.
        </p>
      </div>

      <div className="w-full max-w-xl mt-8">
        <UrlForm />
      </div>
    </main>
  );
}