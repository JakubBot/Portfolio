import React from "react";
import { css } from "@emotion/react";
import Header from "../Animated/Header";
import { typographyValues } from "../../../constants/typography";

const projectContent = [
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
      // Tutaj wkleiłem Twoje zakomentowane punkty jako kolejne akapity:
      "Move Validation: Writing logic to handle 'doubles' (4 moves instead of 2) and ensuring every jump follows the strict rules of the game.",
      "Persistent Systems: Building a Hall of Fame using file I/O to track player scores across sessions.",
      'The Replay Engine: Designing a way to log moves so players can step back through their history—essentially turning a flat text file into a "game time machine."',
      'This project taught me that "simple" games require rigorous logic and taught me how to structure a large C codebase using modular headers and source files.',
    ],
  },
];

const Backgammon = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 3rem;
      `}
    >
      {projectContent.map((section, index) => (
        <div
          key={index} // W real world lepiej użyć unikalnego ID, ale tutaj index wystarczy
          css={css`
            display: flex;
            flex-direction: column;
            gap: 1rem;
          `}
        >
          <Header
            text={section.title}
            stagger={0}
            fontSize={typographyValues.textSectionHeader.fontSize}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 0.8rem;
            `}
          >
            {section.paragraphs.map((paragraph, pIndex) => (
              <Header
                key={pIndex}
                stagger={0}
                text={paragraph}
                fontSize={typographyValues.textL.fontSize}
                textBold={false}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Move Validation: Writing logic to handle "doubles" (4 moves instead of 2) and ensuring every jump follows the strict rules of the game. */}

      {/* Persistent Systems: Building a Hall of Fame using file I/O to track player scores across sessions. */}

      {/* The Replay Engine: Designing a way to log moves so players can step back through their history-essentially turning a flat text file into a "game time machine." */}

      {/* This project taught me that "simple" games require rigorous logic and taught me how to structure a large C codebase using modular headers and source files. */}
    </div>
  );
};

export default Backgammon;
