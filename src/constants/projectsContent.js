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
  rag: [],

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
        "The Power of Vectorization: The performance difference between loop-based and vectorized NumPy implementations was orders of magnitude. The time comparison graphs clearly show that for any significant matrix size, leveraging NumPy is not just an optimization—it's a necessity.",
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
        'The Replay Engine: Designing a way to log moves so players can step back through their history—essentially turning a flat text file into a "game time machine."',
        'This project taught me that "simple" games require rigorous logic and how to structure C codebase using modular headers and source files.',
      ],
    },
  ],
  chess: [],
};
