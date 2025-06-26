import { Card } from "./Card";
import "../styles/Cards.css";
import mag from "../assets/emojis/mag_right.avif";
import { getRandom } from "../services/random";
import { useState, useEffect } from "react";

export function Cards({
  number,
  clicked,
  handleRounds,
  rounds,
  handleResult,
  handleClicked,
}) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (rounds === number) {
      handleResult("win");
    }
  }, [rounds]);

  const handleFlip = (e) => {
    const imgClicked = e.target.getAttribute("src");
    if (clicked.includes(imgClicked)) {
      handleResult("lose");
    } else {
      handleRounds();
      handleClicked([...clicked, imgClicked]);
    }
    setFlip(true);
    setTimeout(() => {
      const shuffleGifs = gifs
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setGifs(shuffleGifs);
    }, 1000);

    setTimeout(() => {
      setFlip(false);
    }, 2500);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let randomData = await getRandom(number);
      const urlData = randomData.data.map(
        (random) => random.images.original.url
      );
      setLoading(false);
      setGifs(urlData);
    };

    fetchData();
  }, []);

  return (
    <section className="cards-section">
      {gifs.length > 0 || !loading ? (
        gifs.map((gif) => (
          <Card key={gif} gif={gif} flip={flip} handleFlip={handleFlip} />
        ))
      ) : (
        <img src={mag} alt="Magnifying glass" className="cards-mag-img" />
      )}
    </section>
  );
}
