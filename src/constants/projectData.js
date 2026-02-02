import Aeropage from "../assets/videos/aeropage.mp4";
import BackgammonVideo from "../assets/videos/backgammon.mp4";
import ChessVideo from "../assets/videos/chess.mp4";
import RagVideoHorizontal from "../assets/videos/rag_horizontal.mp4";
import RagVideoVertical from "../assets/videos/rag_vertical.mp4";
import Linear_Equations from "../assets/docs/linear_equations.pdf";

const projectData = {
  aeropage: {
    header: "Aeropage Builder",
    tags: [
      "SaaS Tooling Development",
      "Bulk Data Pipelines",
      "Dynamic Media Generation",
      "WordPress Sync Engine",
      "Asset Persistence & Caching",
      "Webhook & API Orchestration",
    ],
    category: "Commercial",
    timeRead: 4,

    // videoHorizontal: "https://youtu.be/DnkJh7brcFo?si=7kHHBp4xlKtM1Gn2",
    videoHorizontal: Aeropage,
    horizontalDimensions: "1920 / 1080",

    videoVertical: null,
    documentationLink: "https://documentation.aeropage.io",
    documentationLinkTools:
      "https://documentation.aeropage.io/dynamic-tools-and-apis",
  },
  rag: {
    header: "Rag Research Project",
    tags: [
      "RAG Architecture",
      "Bielik LLM",
      "Java 25",
      "Distributed Systems",
      "Vector Databases (Milvus)",
      "High-Concurrency Backend",
      "Event-Driven Architecture",
      "gRPC & Redis Optimization",
    ],
    category: "Research",
    timeRead: 4,
    videoHorizontal: RagVideoHorizontal,
    horizontalDimensions: "1272 / 630",

    videoVertical: RagVideoVertical,
    verticalDimensions: "404 / 800",

    githubLink: "https://github.com/PGRRT/java-rag",
  },
  linear_equations: {
    header: "Linear Equations Solver",
    tags: [
      "Numerical Analysis",
      "Vectorized Computing",
      "LU Decomposition",
      "Performance Benchmarking",
    ],
    category: "Education",
    timeRead: 6,

    videoHorizontal: Linear_Equations,
    horizontalDimensions: "1 / 1.38",

    videoVertical: null,

    maxMediaWidth: 850,

    githubLink: "https://github.com/JakubBot/linear_equations",
    downloadLink: Linear_Equations,
  },
  backgammon: {
    header: "Backgammon CLI",
    tags: [
      "Terminal User Interface",
      "Rule Engine",
      "Local Multiplayer",
      "Ncurses Library",
      "C",
    ],
    category: "Game",
    timeRead: 3,

    videoHorizontal: BackgammonVideo,
    horizontalDimensions: "1286 / 820",

    // videoVertical: null,
    githubLink: "https://github.com/JakubBot/BackGammon",
  },
  chess: {
    header: "Chess Game",
    tags: [
      "React & Redux",
      "Firebase Realtime DB",
      "Realtime Multiplayer",
      "AI Engine Integration",
      "State Management",
      "Sass Styling",
    ],
    category: "Entertainment",
    timeRead: 3,

    videoHorizontal: ChessVideo,
    horizontalDimensions: "1280 / 636",

    videoVertical: null,
    githubLink: "https://github.com/JakubBot/Chess-Game",
    hostUrl: "https://jakubbot.github.io/Chess-Game/#/"
  },
};

export default projectData;
