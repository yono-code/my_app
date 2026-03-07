import { content } from "@/data/content"
import { Badge } from "@/components/ui/Badge"

export function Skills() {
    return (
        <section id="skills" className="py-24 px-6 md:px-12 mx-auto max-w-5xl">
            <div className="space-y-4 mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skill Stack</h2>
                <p className="text-muted max-w-2xl mx-auto">
                    ビジネスからエンジニアリングまで、包括的な問題解決を支える技術セット
                </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
                {content.skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="space-y-6">
                        <h3 className="text-xl font-semibold border-b border-white/10 pb-3 text-accent">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {skillGroup.items.map((item) => (
                                <Badge key={item} variant="accent" className="text-sm py-1.5 px-3 bg-accent/5 hover:bg-accent/20 transition-colors">
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
