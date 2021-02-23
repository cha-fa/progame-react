import GameCard from "pages/components/GameCard/GameCard";
import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import Loading from "pages/components/Loading";

const SearchResults = ({ searchKeyword, filter, query }) => {
  const platforms = filter.platform ? filter.platform : "1,2,3,4,5,6,7,8,14";
  const { data, error, isLoading, get, nextUrl, nextData } = useFetch();

  const fetchNext = () => {
    get(nextUrl, true, data.results);
  };

  useEffect(() => {
    if (searchKeyword) {
      get(
        `/games?page_size=9&search=${searchKeyword}&parent_platforms=${platforms}&ordering=${filter.sort}`
      );
    } else if (query) {
      get(`/games${query}`);
    } else {
      get(
        `/games/lists/main?discover=true&ordering=${filter.sort}&page_size=9&page=1&parent_platforms=${filter.platform}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword, filter]);

  return (
    <div className="SearchResults row">
      {error && <h4>{error}</h4>}
      {isLoading && <Loading />}
      {(data &&
        nextData.length < 1 &&
        data.results.map((game) => <GameCard key={game.id} game={game} />)) ||
        (nextData &&
          nextData.length > 1 &&
          nextData.map((game) => <GameCard key={game.id} game={game} />))}

      {nextUrl && (
        <button type="button" id="showBtn" onClick={fetchNext}>
          Show more
        </button>
      )}
    </div>
  );
};

export default SearchResults;
