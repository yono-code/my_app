import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Github, Twitter, Mail } from "lucide-react";
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

        {/* Footer */}
        <footer className="py-10 text-center border-t border-white/5 bg-primary/20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/yono-code"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200 group"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm hidden sm:inline">GitHub</span>
              </a>
              <a
                href="mailto:yonogames.dev@gmail.com"
                aria-label="Contact"
                className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200 group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm hidden sm:inline">yonogames.dev@gmail.com</span>
              </a>
              <a
                href="https://x.com/yonogames1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200 group"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm hidden sm:inline">X (Twitter)</span>
              </a>
            </div>
            <p className="text-xs text-muted/60">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            <p className="text-xs text-muted/40">Built with Next.js · Deployed on GitHub Pages</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
