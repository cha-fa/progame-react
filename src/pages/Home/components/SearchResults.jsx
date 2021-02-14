import GameCard from "pages/components/GameCard/GameCard";
import { useState, useEffect } from "react";

const SearchResults = ({ searchKeyword, filter, query }) => {
  const [currentGames, setCurrentGames] = useState();
  const [nextURL, setNextURL] = useState();

  console.log(
    "DEV IN SEARCH RESULT",
    Object.values(query),
    Object.values(query).filter((v) => v).length,
    Object.values(query).filter((v) => v)
  );

  const queryIsPresent = () => {
    return Object.keys(query).filter((el) => query[el]).length > 0
      ? Object.keys(query).filter((el) => query[el])[0]
      : false;
  };

  console.log("fonctio nquery", queryIsPresent());
  const fetchResults = () => {
    const findQuery = queryIsPresent();
    let url;
    if (searchKeyword) {
      url = `https://api.rawg.io/api/games?page_size=9&search=${searchKeyword}&parent_platforms=${filter.platform}&ordering=${filter.sort}`;
    } else if (findQuery) {
      url = `https://rawg.io/api/games?${findQuery}=${query[findQuery]}`;
    } else {
      url = `https://rawg.io/api/games/lists/main?discover=true&ordering=${filter.sort}&page_size=9&page=1&parent_platforms=${filter.platform}`;
    }
    console.log("fetching URL", url);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setCurrentGames(response.results);
        setNextURL(response.next);
      });
  };

  useEffect(() => {
    fetchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword, filter]);

  return (
    <div className="row">
      {currentGames &&
        currentGames.map((game) => <GameCard key={game.id} game={game} />)}
    </div>
  );
};

export default SearchResults;
