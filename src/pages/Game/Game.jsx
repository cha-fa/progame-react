import { useEffect } from "react";
import useFetch from "hooks/useFetch";

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
  const { data, error, isLoading, get } = useFetch();

  useEffect(() => {
    get(`/games/${gameSlug}`);
  }, []);

  return (
    <div className="Game">
      {isLoading && "Recherche en cours"}
      {error && error}
      {data && (
        <div>
          <Jumbotron image={data.background_image} website={data.website} />
          <GameDetail game={data} />
          <Stores stores={data.stores} />
          <Trailer clip={data.clip} />
          <Screenshots gameSlug={gameSlug} />
          <YouTube gameSlug={gameSlug} />
          <SimilarGames gameSlug={gameSlug} />
        </div>
      )}
    </div>
  );
};

export default Game;
