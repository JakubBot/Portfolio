import React from "react";
import Header from "../Animated/Header";

const Backgammon = () => {
  return (
    // https://gemini.google.com/app/ea8a8c707ba91058?hl=pl
    <div className="backgammon__wrapper">
      <Header text="Introduction" fontSize={20} />
      <Header
        text="This project was developed as a way to practice C programming and explore game logic in a terminal environment. It recreates the classic board game with a functional Terminal User Interface (TUI). The goal was to build a stable engine that handles all the traditional rules while providing a smooth, keyboard-driven experience."
        fontSize={14}
      />

      <Header text="How to Play" fontSize={20} />
      <Header
        text='The game unfolds on a digital board consisting of 24 narrow triangles, known as points. You command a set of 15 checkers, racing them across the board in a direction opposite to your opponent. Every move is dictated by the roll of two dice, and your ultimate objective is to safely guide all your pieces into your "home board" to begin the “bearing off” process.'
        fontSize={14}
      />

      <Header text="What I Learned" fontSize={20} />
      <Header
        text="Building this engine was a lesson in handling complexity with simple tools. Working with the ncurses library taught me how to manage a dynamic UI where every refresh must be handled carefully to avoid flickering or input lag."
        fontSize={14}
      />

      <Header
        text="The real challenge, however, was state management. I implemented a system that serializes the entire board state into currentGame.txt, acting as a safety net that allows players to resume their matches anytime. Beyond basic gameplay, I tackled:"
        fontSize={20}
      />

      {/* Move Validation: Writing logic to handle "doubles" (4 moves instead of 2) and ensuring every jump follows the strict rules of the game. */}

      {/* Persistent Systems: Building a Hall of Fame using file I/O to track player scores across sessions. */}

      {/* The Replay Engine: Designing a way to log moves so players can step back through their history-essentially turning a flat text file into a "game time machine." */}

      {/* This project taught me that "simple" games require rigorous logic and taught me how to structure a large C codebase using modular headers and source files. */}
    </div>
  );
};

export default Backgammon;
