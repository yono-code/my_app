// src/data/content.ts
// NOTE: All site content is centralized here (Separation of Concerns).
// To update text or project info, edit only this file.

export type Project = {
    id: string;
    title: string;
    subtitle: string;
    period: string;        // 開発期間
    challenge: string;
    approach: string;
    result: string;
    tags: string[];
    url?: string;
    pressUrl?: string;
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
            period: "2026/01/03 〜 2026/08（リリース予定）",
            challenge: "既存ジャンルの融合における「面白さの不確実性」と、個人開発におけるリソース制限。",
            approach: "コアとなるゲームサイクルを早期にプロトタイピングし、仮説検証を反復。開発開始から10日でデモ版をリリースし、実際のフィードバックを基に拡張。",
            result: "Steamストアページを開設し、2025年8月の正式リリースを予定。設計からパブリッシングまで一気通貫の開発プロセスを確立。",
            tags: ["Godot", "GDScript", "Game Design"],
            pressUrl: "https://sites.google.com/view/glyphbound-press/%E3%83%9B%E3%83%BC%E3%83%A0",
        },
        {
            id: "aria",
            title: "Brain Connector ARIA",
            subtitle: "VS Code Extension for AI-Assisted Dev",
            period: "2026/02/22 〜 2026/03/02（リリース済）",
            challenge: "AIコーディング支援ツールにおける「プロジェクトの文脈（コンテキスト）が失われる」という構造的課題。",
            approach: "開発者の意図や仕様変更の歴史を保持し、AIに適切なコンテキストを提供する「仕組み」を設計・実装。",
            result: "AI協働時の手戻りを大幅に削減し、LLMのポテンシャルを最大限に引き出す開発体験を実現。VS Code Marketplaceにて公開中。",
            tags: ["TypeScript", "VS Code API", "LLM"],
            url: "https://marketplace.visualstudio.com/items?itemName=yonogames.aria-vscode",
        }
    ] as Project[],
    skills: [
        {
            // 資格・知識ベースの戦略スキル
            category: "Strategy & Analysis",
            items: ["Applied Information Technology", "Requirements Definition", "Business Process Modeling"],
        },
        {
            // 直接保有・実務で使用しているスキル
            category: "Implementation",
            items: ["kintone App Design Specialist", "kintone Customization Specialist", "Power BI", "Power Apps", "Power Automate", "Git / GitHub Actions"],
        },
        {
            // AI協働・設計スキル
            category: "AI-Native Development",
            items: ["Prompt Engineering", "Context Management", "AI Workflow Design", "Ollama"],
        }
    ] as Skill[]
};
