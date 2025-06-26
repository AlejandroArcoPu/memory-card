import "./App.css";
import logo from "./assets/logo-white.webp";
import { gradients, modes } from "./types";
import { Github } from "lucide-react";
import loop3 from "./assets/loop_3.svg";
import brain from "./assets/emojis/brain.avif";
import joker from "./assets/emojis/black_joker.avif";
import { useState } from "react";
import { Game } from "./components/Game";
import { Footer } from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  const [mode, setMode] = useState({});

  const handleMode = (e) => {
    const value = e.target.textContent;
    setMode({ [value]: modes[value] });
  };

  return Object.keys(mode).length > 0 ? (
    <Game mode={mode} setMode={setMode} />
  ) : (
    <>
      <header className="header-giphy">
        <a
          href="https://github.com/AlejandroArcoPu"
          className="header-giphy-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color="white" />
        </a>
      </header>
      <main className="main-giphy">
        <div className="main-giphy-img-effect-container">
          <img
            src={joker}
            alt="Joker emoji iphone"
            className="main-giphy-img-effect"
          />
          <img
            src={brain}
            alt="Brain emoji iphone"
            className="main-giphy-img-effect"
          />
        </div>
        <div className="main-giphy-header">
          <h1 className="main-giphy-title">
            Flip the Cards. Prove Your{" "}
            <span className="main-giphy-span">
              Memory
              <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                src={loop3}
                alt="Loop highlight"
                className="main-giphy-loop"
              />
            </span>
            .
          </h1>
        </div>
        <div className="main-giphy-logo-container">
          <img
            src={logo}
            alt="Logo Giphy with letters"
            className="main-giphy-logo"
          />
        </div>
        <div className="main-giphy-mode-container">
          {Object.keys(modes).map((mode, index) => (
            <button
              key={mode}
              onClick={(e) => handleMode(e)}
              className={`main-giphy-mode-button ${gradients[index]}`}
            >
              {mode}
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
