export const projectContent = {
  aeropage: [],
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
