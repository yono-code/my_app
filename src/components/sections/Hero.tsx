import { content } from "@/data/content"
import { ArrowDown } from "lucide-react"

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/40 via-background to-background"></div>

            <div className="animate-fade-in-up space-y-8 max-w-4xl">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                    <span className="block text-foreground drop-shadow-sm">Bridging the Gap</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 mt-2">
                        between Strategy and Implementation.
                    </span>
                </h1>

                {/* Role Tagline */}
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {["Business", "Technology", "AI"].map((tag, i) => (
                        <span key={tag} className="flex items-center gap-2">
                            <span className="text-sm font-semibold tracking-widest text-accent/80 uppercase">{tag}</span>
                            {i < 2 && <span className="text-muted/40 text-sm">×</span>}
                        </span>
                    ))}
                </div>

                <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl leading-relaxed">
                    {content.hero.sub}
                </p>

                <div className="pt-8">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:scale-105 hover:shadow-accent/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                    >
                        View Projects
                    </a>
                </div>
            </div>

            <div className="absolute bottom-12 animate-bounce">
                <a href="#philosophy" className="text-muted hover:text-accent transition-colors" aria-label="Scroll down">
                    <ArrowDown className="h-6 w-6" />
                </a>
            </div>
        </section>
    )
}
