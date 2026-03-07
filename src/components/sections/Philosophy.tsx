import { content } from "@/data/content"

export function Philosophy() {
    return (
        <section id="philosophy" className="py-24 px-6 md:px-12 bg-primary/10 border-y border-white/5">
            <div className="mx-auto max-w-4xl text-center space-y-8">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    {content.philosophy.title}
                </h2>

                <div className="relative">
                    <span className="absolute -top-10 -left-6 text-8xl text-accent/10 font-serif leading-none select-none">"</span>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90 relative z-10">
                        {content.philosophy.statement}
                    </p>
                    <span className="absolute -bottom-16 -right-6 text-8xl text-accent/10 font-serif leading-none select-none rotate-180">"</span>
                </div>
            </div>
        </section>
    )
}
