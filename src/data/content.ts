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
    keyInsight?: string;   // 思考力を示す一行洞察
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
        statement: "AI協働開発では、文脈の断絶が最大のボトルネックになります。私の役割は、経営の戦略・現場の業務要件・AIエンジニアリングを繋ぎ、曖昧な構想から具体的な実装までの道筋を構造化することにあります。",
    },
    competencies: [
        {
            id: "structuring",
            title: "Requirements Structuring",
            description: "曖昧な課題を実装可能な要件へ構造化",
            icon: "Network",
        },
        {
            id: "integration",
            title: "Business-Tech Integration",
            description: "業務フローを深く理解し、成果直結の設計を立案",
            icon: "Building2",
        },
        {
            id: "ai-workflow",
            title: "AI-Native Workflow",
            description: "AI協働プロセスを仕組みとして設計・標準化",
            icon: "Bot",
        },
        {
            id: "execution",
            title: "Proven Execution",
            description: "構想からリリースまで、ゼロイチを完遂する実行力",
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
            keyInsight: "個人開発では早期プロトタイピングが不確実性を最も減らす。完成よりも仮説検証の速度が重要になる。",
            result: "Steamストアページを開設し、2026年8月の正式リリースを予定。設計からパブリッシングまで一気通貫の開発プロセスを確立。",
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
            keyInsight: "AIの能力はモデル性能だけでなく、与えられるコンテキストの質と構造に大きく左右される。",
            result: "AI協働時に失われやすい仕様・意図・変更履歴を一元管理できる仕組みを実装。VS Code Marketplaceにてリリース。",
            tags: ["TypeScript", "VS Code API", "LLM"],
            url: "https://marketplace.visualstudio.com/items?itemName=yonogames.aria-vscode",
        },
    ] as Project[],
    skills: [
        {
            // 資格・知識ベースの戦略スキル
            category: "Strategy & Analysis",
            items: ["Applied Information Technology", "Requirements Definition", "Business Process Modeling", "Issue Structuring"],
        },
        {
            // 直接保有・実務で使用しているスキル
            category: "Implementation",
            items: ["kintone", "Power BI", "Power Apps", "Power Automate", "Git / GitHub Actions"],
        },
        {
            // AI協働・設計スキル
            category: "AI-Assisted Development",
            items: ["Prompt Engineering", "Context Management", "Workflow Design", "Ollama"],
        }
    ] as Skill[]
};
