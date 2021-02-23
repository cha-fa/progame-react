import { useEffect } from "react";
import GameCard from "pages/components/GameCard/GameCard";
import useFetch from "hooks/useFetch";
import Loading from "pages/components/Loading";

const SimilarGames = ({ gameSlug }) => {
  const { data, error, isLoading, get } = useFetch();
  useEffect(() => {
    get(`/games/${gameSlug}/suggested?page_size=6`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-aos="fade-up" className="row">
      <div className="col">
        <h2>SIMILAR GAMES</h2>
        <div data-aos="fade-up" className="row" id="similar-games">
          {isLoading && <Loading />}
          {error && <h4>{error}</h4>}
          {data &&
            data.results.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </div>
    </div>
  );
};

export default SimilarGames;
