import logoMini from "../assets/giphy.svg";
import "../styles/Game.css";
import arrow from "../assets/arrow_1.svg";
import { Footer } from "./Footer";
import { Cards } from "./Cards";
import { useState } from "react";
import { roundsEmojis } from "../types";
import { motion } from "motion/react";
import { Result } from "./Result";
import { ScoreBoard } from "./ScoreBoard";

export function Game({ mode, setMode }) {
  const handleMode = () => {
    setMode("");
  };
  const [rounds, setRounds] = useState(0);
  const [result, setResult] = useState(null);
  const [clicked, setClicked] = useState([]);

  const handleRounds = () => {
    setRounds((prev) => prev + 1);
  };

  const handleResult = (result) => {
    setResult(result);
  };

  const handleRestart = () => {
    setRounds(0);
    setResult(null);
    setClicked([]);
  };

  const handleClicked = (newClicked) => {
    setClicked(newClicked);
  };

  return (
    <>
      <header className="game-header">
        <button className="game-header-logo-button" onClick={handleMode}>
          <motion.img
            initial={{ scale: 0, rotate: "-10deg" }}
            animate={{ scale: 1, transition: { duration: 0.2 } }}
            whileHover={{ scale: 1.1, rotate: "0deg" }}
            src={logoMini}
            alt="Giphy mini logo"
            className="game-header-logo-img"
          />
        </button>
        <img className="game-header-arrow" src={arrow} alt="Arrow" />
        <p className="game-header-arrow-text">Click on the icon to go home!</p>
        <ScoreBoard rounds={rounds} result={result} />
      </header>
      <main className="game-main">
        {result ? (
          <Result result={result} handleRestart={handleRestart} />
        ) : null}
        <Cards
          number={Object.values(mode)[0]}
          handleRounds={handleRounds}
          rounds={rounds}
          handleResult={handleResult}
          clicked={clicked}
          handleClicked={handleClicked}
        />
        <p className="game-main-round">
          <img
            src={roundsEmojis[rounds]}
            className="game-main-round-emoji"
            alt={`${rounds} as an emoji`}
          />{" "}
          /{" "}
          <img
            src={roundsEmojis[Object.values(mode)[0]]}
            className="game-main-round-emoji"
            alt={`${rounds} as an emoji`}
          />
        </p>
      </main>
      <Footer />
    </>
  );
}
