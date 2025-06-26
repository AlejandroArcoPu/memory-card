import "../styles/ScoreBoard.css";
import sunglasses from "../assets/emojis/sunglasses.avif";
import joystick from "../assets/emojis/joystick.avif";
import underline from "../assets/underline_1.svg";
import { useEffect, useState } from "react";

const bestCount = () => Number(localStorage.getItem("best_game_cards_giphy"));

export function ScoreBoard({ rounds, result }) {
  const [best, setBest] = useState(bestCount());

  useEffect(() => {
    if (rounds > best && result !== "lose") {
      localStorage.setItem("best_game_cards_giphy", rounds);
      setBest(rounds);
    }
  }, [rounds, result]);

  return (
    <div className="scoreboard-container">
      <div className="scoreboard-score">
        <p className="scoreboard-text">
          Score{" "}
          <img
            className="scoreboard-emoji"
            src={joystick}
            alt="JoyStick emoji"
          />
        </p>
        <p className="scoreboard-results">{rounds}</p>
      </div>
      <div className="scoreboard-score">
        <p className="scoreboard-text">
          Best Score{" "}
          <img
            className="scoreboard-emoji"
            src={sunglasses}
            alt="Sunglasses emoji"
          />
        </p>
        <p className="scoreboard-results">{best}</p>
      </div>
      <img className="scoreboard-underline" src={underline} alt="Underline" />
    </div>
  );
}
