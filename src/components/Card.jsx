import "../styles/Card.css";
import { motion, useSpring, useTransform } from "motion/react";
import giphy from "../assets/logo-white.webp";
const cardRotation = 15;
const cardScale = 1.07;

export function Card({ gif, flip, handleFlip }) {
  const xPctg = useSpring(0, { bounce: 0 });
  const yPctg = useSpring(0, { bounce: 0 });
  const scale = useSpring(1, { bounce: 0 });

  const rotateX = useTransform(
    yPctg,
    [-0.5, 0.5],
    [`-${cardRotation}deg`, `${cardRotation}deg`]
  );

  const rotateY = useTransform(
    xPctg,
    [-0.5, 0.5],
    [`-${cardRotation}deg`, `${cardRotation}deg`]
  );

  const getMousePosition = (e) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const currentMouseX = e.clientX - left;
    const currentMouseY = e.clientY - top;

    return {
      currentMouseX,
      currentMouseY,
      containerWidth: width,
      containerHeight: height,
    };
  };

  const handleMouseMove = (e) => {
    const { currentMouseX, currentMouseY, containerWidth, containerHeight } =
      getMousePosition(e);
    xPctg.set(currentMouseX / containerWidth - 0.5);
    yPctg.set(currentMouseY / containerHeight - 0.5);
  };

  const handleMouseEnter = (e) => {
    scale.set(cardScale);
  };

  const handleMouseLeave = (e) => {
    scale.set(1);
    xPctg.set(0);
    yPctg.set(0);
  };

  return (
    <div className="card-container">
      <div className={flip ? "card card-flip" : "card"}>
        <motion.button
          className="card-front"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={(e) => handleFlip(e)}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.2 } }}
          style={{
            transformStyle: "preserve-3d",
            rotateX,
            rotateY,
            scale,
          }}
        >
          <img src={gif} alt="" className="card-gif" />
        </motion.button>
        <div className="card-back">
          <img src={giphy} alt="" className="card-back-img" />
        </div>
      </div>
    </div>
  );
}
