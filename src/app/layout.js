import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "happyhug – Premium Supplements",
  description: "Die besten Supplements für deine Familie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>

        {/* Globaler Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              happyhug 🤗
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/produkte" className="text-gray-600 hover:text-black transition-colors">
                Produkte
              </Link>
            </nav>
          </div>
        </header>

        {/* Seiteninhalt */}
        <main>{children}</main>

        {/* Globaler Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 px-6 py-8 mt-16">
          <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
            © 2026 happyhug – Alle Rechte vorbehalten
          </div>
        </footer>

      </body>
    </html>
  );
}