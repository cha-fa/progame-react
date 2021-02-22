import { useState, useEffect } from "react";
import GameCard from "pages/components/GameCard/GameCard";

const SimilarGames = ({ gameSlug }) => {
  const [currentSimilarGames, setCurrentSimilarGames] = useState();
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchSimilarGames = () => {
    fetch(`${API_URL}/games/${gameSlug}/suggested?page_size=6`)
      .then((response) => response.json())
      .then((response) => setCurrentSimilarGames(response.results));
  };

  useEffect(() => {
    fetchSimilarGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameSlug]);

  return (
    <div data-aos="fade-up" className="row mt-2">
      <div className="col mt-5">
        <h2>SIMILAR GAMES</h2>
        <div data-aos="fade-up" className="row" id="similar-games">
          {currentSimilarGames &&
            currentSimilarGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarGames;
