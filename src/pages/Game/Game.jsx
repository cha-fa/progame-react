import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GameDetail from "./components/GameDetail";

const Game = () => {
  const { gameSlug } = useParams();
  const [currentGame, setCurrentGame] = useState();
  console.log(gameSlug);

  const fetchGame = () => {
    fetch(`https://api.rawg.io/api/games/${gameSlug}`)
      .then((response) => response.json())
      .then((response) => {
        setCurrentGame(response);
      });
  };

  useEffect(() => {
    fetchGame();
  }, [gameSlug]);

  console.log("in game", currentGame && currentGame.name);

  return (
    <div>
      <h1>On a game page: {currentGame && currentGame.name}</h1>
      <GameDetail game={currentGame} />
    </div>
  );
};

export default Game;
