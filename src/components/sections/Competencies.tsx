import { content } from "@/data/content"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import * as Icons from "lucide-react"

export function Competencies() {
    return (
        <section id="competencies" className="py-24 px-6 md:px-12 mx-auto max-w-6xl">
            <div className="space-y-4 mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Core Competencies</h2>
                <p className="text-muted max-w-2xl mx-auto">
                    「抽象と具体の往復」を支える4つの柱
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {content.competencies.map((comp) => {
                    // Dynamic icon rendering
                    const IconComponent = Icons[comp.icon as keyof typeof Icons] as React.ElementType;

                    return (
                        <Card key={comp.id} className="group overflow-hidden border-white/10 bg-gradient-to-br from-card to-card/50">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    {IconComponent && <IconComponent className="h-6 w-6" />}
                                </div>
                                <CardTitle className="text-xl">{comp.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted leading-relaxed">
                                    {comp.description}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
