import BackgammonVideo from "../assets/videos/backgammon.mp4";
import RagVideoHorizontal from "../assets/videos/rag_horizontal.mp4";
import RagVideoVertical from "../assets/videos/rag_vertical.mp4";

const projectData = {
  aeropage: {
    header: "Aeropage Builder",
    tags: ["Commercial Project", "No Code", "UI/UX Design"],
    category: "Commercial",
    timeRead: 4,
    videoHorizontal: null,
    videoVertical: null,
    githubLink: null,
  },
  rag: {
    header: "Rag Research Project",
    tags: ["Bielik LLM", "Distributed Systems", "Backend Optimization"],
    category: "Research",
    timeRead: 6,
    videoHorizontal: RagVideoHorizontal,
    videoVertical: RagVideoVertical,
    githubLink: "https://github.com/PGRRT/java-rag",
  },
  linear_equations: {
    header: "Linear Equations Solver",
    tags: ["Mathematical Algorithms", "Problem Solving", "Educational Tool"],
    category: "Education",
    timeRead: 5,
    videoHorizontal: null,
    videoVertical: null,
    githubLink: "https://github.com/JakubBot/linear_equations",
  },
  backgammon: {
    header: "Backgammon CLI",
    subTitle: "Rule Engine • Local Multiplayer • Hall of Fame",
    tags: ["Rule Engine", "Local Multiplayer", "Hall of Fame"],
    category: "Game",
    timeRead: 3,
    videoHorizontal: BackgammonVideo,
    videoVertical: null,
    githubLink: "https://github.com/JakubBot/BackGammon",
  },
  chess: {
    header: "Chess Game",
    tags: ["Strategic Gameplay", "AI Integration", "Web-Based Interface"],
    category: "Entertainment",
    timeRead: 4,
    videoHorizontal: null,
    videoVertical: null,
    githubLink: "https://github.com/JakubBot/Chess-Game",
  },
};

export default projectData;
