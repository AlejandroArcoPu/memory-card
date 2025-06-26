import "../styles/Result.css";
import win from "../assets/gifs/win.gif";
import lose from "../assets/gifs/lose.gif";
import trophy from "../assets/emojis/trophy.avif";
import pensive from "../assets/emojis/pensive.avif";

export function Result({ result, handleRestart }) {
  return (
    <>
      <div className="result-backdrop"></div>
      <div className="result-modal">
        <h1 className="result-modal-title">
          You {result}
          <img
            className="result-modal-title-img"
            src={result === "lose" ? pensive : trophy}
            alt=""
          />
        </h1>
        <img
          className="result-modal-img"
          src={result === "lose" ? lose : win}
          alt="Result gif"
        />
        <button className="result-modal-button" onClick={handleRestart}>
          Play Again
        </button>
      </div>
    </>
  );
}
