import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline" | "accent";
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
    const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/80 border border-transparent",
        outline: "text-foreground border border-white/20 hover:bg-white/10",
        accent: "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20",
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
    )
}

export { Badge }
