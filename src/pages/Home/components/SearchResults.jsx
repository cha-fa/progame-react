import GameCard from "pages/components/GameCard/GameCard";
import { useState, useEffect } from "react";

const SearchResults = ({ searchKeyword, filter }) => {
  const [currentGames, setCurrentGames] = useState();
  const [nextURL, setNextURL] = useState();

  console.log("filter iiis", filter);

  const fetchResults = () => {
    let url;
    if (searchKeyword) {
      url = `https://api.rawg.io/api/games?page_size=9&search=${searchKeyword}`;
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

  console.log(currentGames);
  return (
    <div className="row">
      {currentGames && currentGames.map((game) => <GameCard game={game} />)}
    </div>
  );
};

export default SearchResults;
