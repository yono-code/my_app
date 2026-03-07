import { content } from "@/data/content"
import { Card, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { CheckCircle2, Target, Wrench, ExternalLink, NewspaperIcon } from "lucide-react"

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-primary/5 border-y border-white/5">
            <div className="mx-auto max-w-6xl">
                <div className="space-y-4 mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        不確実性を突破し、成果へと繋げた軌跡
                    </p>
                </div>

                <div className="space-y-12">
                    {content.projects.map((project) => (
                        <Card key={project.id} className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-500">
                            <div className="flex flex-col md:flex-row">
                                <div className="p-8 md:w-1/3 min-w-[300px] border-b md:border-b-0 md:border-r border-white/10 bg-gradient-to-br from-primary/30 to-background flex flex-col justify-between">
                                    <div>
                                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                                        <p className="text-accent font-medium mb-6">{project.subtitle}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="outline" className="bg-background/50">{tag}</Badge>
                                            ))}
                                        </div>
                                        {/* External links */}
                                        <div className="flex flex-col gap-2 pt-2">
                                            {project.url && (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-blue-300 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    View on Marketplace
                                                </a>
                                            )}
                                            {project.pressUrl && (
                                                <a
                                                    href={project.pressUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
                                                >
                                                    <NewspaperIcon className="w-4 h-4" />
                                                    Press Kit
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 md:w-2/3 space-y-8">
                                    <div className="space-y-3">
                                        <h4 className="flex items-center text-sm font-bold text-muted uppercase tracking-wider">
                                            <Target className="w-4 h-4 mr-2 text-rose-400" /> Challenge (課題)
                                        </h4>
                                        <p className="text-foreground/90 leading-relaxed pl-6 border-l-2 border-rose-500/30">{project.challenge}</p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="flex items-center text-sm font-bold text-muted uppercase tracking-wider">
                                            <Wrench className="w-4 h-4 mr-2 text-accent" /> Approach (構造化)
                                        </h4>
                                        <p className="text-foreground/90 leading-relaxed pl-6 border-l-2 border-accent/30">{project.approach}</p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="flex items-center text-sm font-bold text-muted uppercase tracking-wider">
                                            <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Result (実装成果)
                                        </h4>
                                        <p className="text-foreground/90 leading-relaxed pl-6 border-l-2 border-emerald-500/30">{project.result}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
