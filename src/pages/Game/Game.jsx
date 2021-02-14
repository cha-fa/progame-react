import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GameDetail from "./components/GameDetail";
import Screenshots from "./components/Screenshots";
import SimilarGames from "./components/SimilarGames";
import Stores from "./components/Stores";
import Trailer from "./components/Trailer";
import YouTube from "./components/YouTube";

const Game = () => {
  const { gameSlug } = useParams();
  const [currentGame, setCurrentGame] = useState();
  const fetchGame = () => {
    fetch(`https://api.rawg.io/api/games/${gameSlug}`)
      .then((response) => response.json())
      .then((response) => {
        setCurrentGame(response);
      });
  };

  useEffect(() => {
    fetchGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameSlug]);

  return (
    <div>
      {currentGame && (
        <div>
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
