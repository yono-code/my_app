// src/data/content.ts

export type Project = {
    id: string;
    title: string;
    subtitle: string;
    challenge: string;
    approach: string;
    result: string;
    tags: string[];
};

export type Skill = {
    category: string;
    items: string[];
};

export type Competency = {
    id: string;
    title: string;
    description: string;
    icon: string;
};

export const content = {
    hero: {
        main: "Bridging the Gap between Strategy and Implementation.",
        sub: "曖昧な課題を構造化し、実装可能な形へ落とし込み、最後まで前進させる。",
    },
    philosophy: {
        title: "Philosophy",
        statement: "AI協働時代の開発プロセスにおいて、文脈の断絶こそが最大のボトルネックです。私の役割は、経営の戦略・現場の業務要件・AIエンジニアリングを繋ぎ、曖昧な構想から具体的な実装までの道筋を構造化することにあります。",
    },
    competencies: [
        {
            id: "structuring",
            title: "Requirements Structuring",
            description: "曖昧な要件を実装可能な単位まで分解・整理し、チーム全体が迷わず進めるロードマップを構築します。",
            icon: "Network",
        },
        {
            id: "integration",
            title: "Business-Tech Integration",
            description: "業務フローとデータ活用を深く理解し、ビジネスの成果に直結するシステム設計とIT戦略を立案します。",
            icon: "Building2",
        },
        {
            id: "ai-workflow",
            title: "AI-Native Workflow",
            description: "AI駆動の開発において、プロンプトの設計からコンテキストの管理まで、次世代の開発プロセスを仕組み化します。",
            icon: "Bot",
        },
        {
            id: "execution",
            title: "Proven Execution",
            description: "企画から公開まで、ゼロイチの不確実性を突破してプロダクトを完遂する力を持っています。",
            icon: "Rocket",
        }
    ] as Competency[],
    projects: [
        {
            id: "glyphbound",
            title: "GlyphBound",
            subtitle: "Picross x Roguelike",
            challenge: "既存ジャンルの融合における「面白さの不確実性」と、個人開発におけるリソース制限。",
            approach: "コアとなるゲームサイクルを早期にプロトタイピングし、仮説検証を反復。拡張性を考慮したアーキテクチャ設計。",
            result: "Steamでのリリースを達成し、システム設計からパブリッシングまで一気通貫の開発プロセスを確立。",
            tags: ["Godot", "GDScript", "Game Design"],
        },
        {
            id: "aria",
            title: "ARIA",
            subtitle: "VS Code Extension for AI-Assisted Dev",
            challenge: "AIコーディング支援ツールにおける「プロジェクトの文脈（コンテキスト）が失われる」という構造的課題。",
            approach: "開発者の意図や仕様変更の歴史を保持し、AIに適切なコンテキストを提供する「仕組み」を設計・実装。",
            result: "AI協働時の手戻りを大幅に削減し、LLMのポテンシャルを最大限に引き出す開発体験を実現。",
            tags: ["TypeScript", "VS Code API", "LLM", "Ollama"],
        }
    ] as Project[],
    skills: [
        {
            category: "Strategy & Analysis",
            items: ["IT Strategist", "Applied Information Technology", "Requirements Definition", "Business Process Modeling"],
        },
        {
            category: "Application & Engineering",
            items: ["Next.js", "TypeScript", "Tailwind CSS", "Godot Engine", "Python"],
        },
        {
            category: "AI & Tools",
            items: ["Ollama", "Prompt Engineering", "kintone App Design Specialist", "Git / GitHub Actions"],
        }
    ] as Skill[]
};
