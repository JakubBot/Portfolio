export const projectContent = {
  aeropage: [
    {
      title: "Product Overview",
      paragraphs: [
        "Aeropage is a SaaS platform that enables users to build websites, client portals, and business tools using Airtable as a primary database. It bridges the gap between raw data and functional interfaces, offering a suite of 'Dynamic Tools' that automate content generation and third-party integrations.",
        "The ecosystem includes a visual builder, a robust WordPress sync engine, and specialized APIs designed to transform database records into actionable business assets like PDFs, emails, and QR codes.",
      ],
    },
    {
      title: "My Role & Backend Engineering",
      paragraphs: [
        "During my 2.5-year tenure, I evolved into a core developer responsible for both the main builder's stability and the development of the entire 'Aeropage Tools' suite. I architected the backend logic using Next.js, AWS Amplify, and XState to handle complex data flows and asynchronous operations.",
        "My work went beyond feature development; I managed the core infrastructure, ensuring that the platform could handle the data demands of over 10,000 users while maintaining high performance and data consistency across multiple external APIs.",
      ],
    },
    {
      title: "Core Tools & Development",
      paragraphs: [
        "I engineered a variety of backend-driven tools, including the Dynamic HTML Email builder for responsive automated content, the Document/PDF Maker for on-the-fly invoice generation, and specialized connectors for OpenAI and Stripe. I also built the Permanent Attachments system to solve Airtable's expiring link issue, the Notion HTML API for content rendering, and much more. Detailed technical breakdowns of these and other features can be found in the official documentation link below.",
        "A major highlight of my work was leading the development of the WordPress Sync Plugin, which achieved significant market success with over 8,000 active installations. I engineered a high-performance synchronization engine that maps Airtable records directly to WordPress Custom Post Types (CPT), enabling businesses to manage large-scale CMS content efficiently.",
      ],
    },
    {
      title: "Technical Achievements & Cost Optimization",
      paragraphs: [
        "One of my biggest achievements was significantly reducing API operational costs as our user base grew to 10k. I achieved this by rewriting core data methods to prioritize aggressive caching and implementing bulk operations.",
        "By batching updates and optimizing how we interacted with the Airtable API, we managed to scale our user count tenfold without a proportional increase in infrastructure or API expenses. This efficiency, combined with high system reliability, resulted in overwhelmingly positive feedback from our professional user base.",
      ],
    },
    {
      title: "Community & Support",
      paragraphs: [
        "I was deeply involved with our community, directly managing technical support tickets and bug reports. This hands-on approach allowed me to identify edge cases in real-time and push hotfixes that improved the platform for everyone.",
        "Communicating directly with users helped me bridge the gap between technical requirements and user expectations, ensuring that new features were built to solve actual pain points.",
      ],
    },
    {
      title: "What I Learned",
      paragraphs: [
        "Working in a collaborative environment for 2.5 years taught me the importance of technical communication and attention to detail. I learned to look beyond the 'how' of a feature and always ask 'why' to ensure we were building the most efficient solution for the end-user.",
        "This role refined my ability to manage complex projects from conception to deployment, teaching me how to balance rapid feature development with the long-term maintenance required for a high-traffic SaaS product.",
      ],
    },
  ],
  rag: [
    {
      title: "Project Overview",
      paragraphs: [
        "The Rag Research Project is a distributed medical chatbot designed to provide accurate, context-aware answers based on a massive corpus of over 2,000 medical documents. By utilizing Retrieval-Augmented Generation (RAG), the system doesn't just 'guess'-it retrieves relevant medical knowledge from a vector database before generating a response.",
        "The project serves as a deep dive into high-performance backend engineering, combining cutting-edge Java features with a microservices architecture to handle complex, long-running AI tasks without compromising on speed or reliability.",
      ],
    },
    {
      title: "High-Concurrency with Java 25 & Project Loom",
      paragraphs: [
        "My primary focus was on optimizing the core engine for high performance. A key technical decision I made was to leverage Java 25 and Virtual Threads (Project Loom). Integrating LLMs like Bielik introduces substantial I/O-bound wait times; in a traditional environment, this would quickly exhaust standard thread pools and lead to system-wide latency.",
        "I addressed this by architecting a scalable communication layer using Server-Sent Events (SSE). By pairing SSE with virtual threads, I ensured the system can maintain thousands of simultaneous, long-lived connections with negligible resource consumption. This architecture guarantees that the backend stays responsive even during peak traffic, delivering results efficiently without the risk of thread starvation or standard request timeouts.",
      ],
    },
    {
      title: "The Intelligence Engine: FastAPI & Milvus",
      paragraphs: [
        "While the core business logic resides in my Spring Boot services, the project integrates a specialized Python/FastAPI module for semantic search. This part of the system manages the RAG pipeline: encoding user queries into vectors and querying a Milvus vector database.",
        "The architecture uses a two-stage retrieval process: first, the system fetches the top 80 most similar document chunks using cosine similarity. Then, a reranking model filters these down to the 5 most relevant pieces of context, ensuring the LLM receives only the highest-quality data to formulate its response.",
      ],
    },
    {
      title: "Optimized Communication & Traffic Control",
      paragraphs: [
        "To ensure low-latency communication between the 'User' and 'Chat' microservices, I replaced standard REST calls with gRPC. This optimization significantly sped up the retrieval of message history and user context, which is crucial for a smooth chat experience.",
        "I also engineered a custom Redis middleware to act as the system's 'shield'. I implemented Bloom Filters to prevent redundant database lookups, Token Bucket rate limiting to manage traffic spikes, and JWT blacklisting-all of which made the infrastructure much more resilient.",
      ],
    },
    {
      title: "Scaling & State Synchronization",
      paragraphs: [
        "A critical challenge I tackled was synchronizing state across multiple instances in a distributed environment. I designed a horizontal scaling strategy using RabbitMQ Topic Exchanges.",
        "This mechanism allows each backend instance to listen specifically for events related to the users currently connected to it. When the AI finishes generating a response, RabbitMQ ensures the message finds its way to the correct server instance and, ultimately, the correct user's browser, no matter which node they are connected to.",
      ],
    },
    {
      title: "Lessons Learned",
      paragraphs: [
        "Project Loom was the biggest win-using Java 25 Virtual Threads meant I could write simple, clean code that still handled hundreds of concurrent connections without the overhead of reactive programming. Swapping REST for gRPC gave a noticeable speed boost to internal communication, while mastering RabbitMQ Topic Exchanges showed me how to precisely route state across distributed nodes.",
        "I also found the Redis optimization particularly interesting; implementing Bloom Filters was a game-changer for efficiency, as it allowed the system to instantly intercept redundant database lookups before they even hit the disk. It taught me that performance isn't just about raw speed, but about using smart data structures to protect your infrastructure from unnecessary load.",
      ],
    },
  ],

  linear_equations: [
    {
      title: "Introduction",
      paragraphs: [
        "This project is a deep dive into the world of numerical analysis, focusing on the core challenge of solving large systems of linear equations. It implements and benchmarks several fundamental algorithms, exploring the critical trade-offs between iterative and direct methods. The primary goal was to not only implement these algorithms but also to analyze their performance and convergence characteristics under different conditions.",
        "A key aspect of this exploration was to compare naive, loop-based implementations against their vectorized counterparts using NumPy. This highlights the immense performance gains achievable through scientific computing libraries and proper optimization techniques.",
      ],
    },
    {
      title: "Algorithms and Methodology",
      paragraphs: [
        "The project implements three cornerstone algorithms for solving linear systems, each with both a standard and an optimized version:",
        "Iterative Methods: Jacobi and Gauss-Seidel. These methods start with an initial guess and refine the solution over successive iterations. They are often preferred for very large, sparse systems where direct methods would be too memory-intensive.",
        "Direct Method: LU Decomposition. This method factorizes the matrix A into lower (L) and upper (U) triangular matrices, allowing the system to be solved efficiently through forward and backward substitution. It is computationally more intensive upfront but provides a precise solution in a finite number of steps.",
        "The 'optimized' versions of these algorithms leverage NumPy's vectorized operations, replacing explicit Python loops with highly efficient, pre-compiled C code. Performance was benchmarked by measuring execution time across various matrix sizes, while the convergence of iterative methods was tracked by observing the residual norm.",
      ],
    },
    {
      title: "What I Learned",
      paragraphs: [
        "Building and testing these solvers provided several key insights:",
        "The Power of Vectorization: The performance difference between loop-based and vectorized NumPy implementations was orders of magnitude. The time comparison graphs clearly show that for any significant matrix size, leveraging NumPy is not just an optimization-it's a necessity.",
        "Algorithm Characteristics: As predicted by theory, the Gauss-Seidel method consistently converged in fewer iterations than the Jacobi method. The project also confirmed the importance of matrix properties, such as diagonal dominance, by creating scenarios where the iterative methods would diverge.",
        "Scalability Matters: The generated plots effectively visualize how each algorithm's runtime scales with the problem size. This analysis is crucial for selecting the right tool for a given task in real-world engineering and scientific applications.",
        "This project was a practical lesson in the fundamentals of numerical linear algebra, demonstrating how algorithmic choices and implementation details have a profound impact on efficiency and scalability. Keywords: Numerical Analysis, Linear Algebra, Jacobi Method, Gauss-Seidel Method, LU Decomposition, Vectorization, NumPy, Performance Benchmarking, Scientific Computing, Matrix Algorithms.",
      ],
    },
  ],
  backgammon: [
    {
      title: "Introduction",
      paragraphs: [
        "This project was developed as a way to practice C programming and explore game logic in a terminal environment. It recreates the classic board game with a functional Terminal User Interface (TUI). The goal was to build a stable engine that handles all the traditional rules while providing a smooth, keyboard-driven experience.",
      ],
    },
    {
      title: "How to Play",
      paragraphs: [
        'The game unfolds on a digital board consisting of 24 narrow triangles, known as points. You command a set of 15 checkers, racing them across the board in a direction opposite to your opponent. Every move is dictated by the roll of two dice, and your ultimate objective is to safely guide all your pieces into your "home board" to begin the “bearing off” process.',
      ],
    },
    {
      title: "What I Learned",
      paragraphs: [
        "Building this engine was a lesson in handling complexity with simple tools. Working with the ncurses library taught me how to manage a dynamic UI where every refresh must be handled carefully to avoid flickering or input lag.",
        "The real challenge, however, was state management. I implemented a system that serializes the entire board state into currentGame.txt, acting as a safety net that allows players to resume their matches anytime. Beyond basic gameplay, I tackled:",
        "Move Validation: Writing logic to handle 'doubles' (4 moves instead of 2) and ensuring every jump follows the strict rules of the game.",
        "Persistent Systems: Building a Hall of Fame using file I/O to track player scores across sessions.",
        'The Replay Engine: Designing a way to log moves so players can step back through their history-essentially turning a flat text file into a "game time machine."',
        'This project taught me that "simple" games require rigorous logic and how to structure C codebase using modular headers and source files.',
      ],
    },
  ],
  chess: [],
};
