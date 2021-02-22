import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GameDetail from "./components/GameDetail";
import Screenshots from "./components/Screenshots";
import SimilarGames from "./components/SimilarGames";
import Stores from "./components/Stores";
import Trailer from "./components/Trailer";
import YouTube from "./components/YouTube";
import Jumbotron from "./components/Jumbotron";
import "./game.scss";

const Game = () => {
  const { gameSlug } = useParams();
  const [currentGame, setCurrentGame] = useState();
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchGame = () => {
    fetch(`${API_URL}/games/${gameSlug}`)
      .then((response) => response.json())
      .then((response) => {
        setCurrentGame(response);
        window.scrollTo(0, 0);
      });
  };

  useEffect(() => {
    fetchGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameSlug]);

  return (
    <div className="Game">
      {currentGame && (
        <div>
          <Jumbotron
            image={currentGame.background_image}
            website={currentGame.website}
          />
          <GameDetail game={currentGame} />
          <Stores stores={currentGame.stores} />
          <Trailer clip={currentGame.clip} />
          <Screenshots gameSlug={gameSlug} />
          <YouTube gameSlug={gameSlug} />
          <SimilarGames gameSlug={gameSlug} />
        </div>
      )}
    </div>
  );
};

export default Game;
