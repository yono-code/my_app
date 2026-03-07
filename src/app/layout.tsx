import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Bridging Strategy & Implementation",
  description: "IT Strategist & Developer visualizing the path from abstract concepts to concrete implementations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-accent selection:text-white`}>
        {/* Simple Header Navigation */}
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="text-lg font-bold tracking-tighter hover:text-accent transition-colors">Portfolio.</a>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-muted">
              <a href="#philosophy" className="hover:text-foreground transition-colors">Philosophy</a>
              <a href="#competencies" className="hover:text-foreground transition-colors">Competencies</a>
              <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
              <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            </nav>
          </div>
        </header>

        <div className="pt-16">
          {children}
        </div>

        {/* Minimal Footer */}
        <footer className="py-8 text-center border-t border-white/5 bg-primary/20">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
