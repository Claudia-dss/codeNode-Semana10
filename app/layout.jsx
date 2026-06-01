export const metadata = {
    title: "ShURLs",
    description: "Acortador de URLs",
};

import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
    return (
    <html lang="es">
        <body className={`${spaceGrotesk.className} bg-white dark:bg-[#0d1b2e]`}>
          {children}
        </body>
    </html>
    );
}