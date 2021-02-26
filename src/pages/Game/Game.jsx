import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import { useParams } from "react-router-dom";
import GameDetail from "./components/GameDetail";
import Screenshots from "./components/Screenshots";
import SimilarGames from "./components/SimilarGames";
import Trailer from "./components/Trailer";
import YouTube from "./components/YouTube";
import Jumbotron from "./components/Jumbotron";
import "style/game.scss";
import Loading from "components/Loading";
const Game = () => {
  const { gameSlug } = useParams();
  const { data, error, isLoading, get } = useFetch();

  useEffect(() => {
    window.scrollTo(0, 0);
    get(`/games/${gameSlug}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameSlug]);

  return (
    <div className="Game">
      {isLoading && <Loading />}
      {error && <h4>{error}</h4>}
      {data && (
        <div>
          <Jumbotron image={data.background_image} website={data.website} />
          <GameDetail game={data} />
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
