import GameCard from "pages/components/GameCard/GameCard";
import { useState, useEffect } from "react";

const SearchResults = ({ searchKeyword, filter, query }) => {
  const [currentGames, setCurrentGames] = useState();
  const [nextURL, setNextURL] = useState();
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchResults = () => {
    const platforms = filter.platform ? filter.platform : "1,2,3,4,5,6,7,8,14";
    let url;
    if (searchKeyword) {
      url = `${API_URL}/games?page_size=9&search=${searchKeyword}&parent_platforms=${platforms}&ordering=${filter.sort}`;
    } else if (query) {
      url = `${API_URL}/games${query}`;
    } else {
      url = `${API_URL}/games/lists/main?discover=true&ordering=${filter.sort}&page_size=9&page=1&parent_platforms=${filter.platform}`;
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
