import GameCard from "pages/components/GameCard/GameCard";
import { useState, useEffect } from "react";

const SearchResults = ({ searchKeyword }) => {
  const [currentGames, setCurrentGames] = useState();
  const [nextURL, setNextURL] = useState();

  const fetchResults = () => {
    fetch(`https://api.rawg.io/api/games?page_size=9&search=${searchKeyword}`)
      .then((response) => response.json())
      .then((response) => {
        setCurrentGames(response.results);
        setNextURL(response.next);
      });
  };

  useEffect(() => {
    fetchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword]);

  console.log(currentGames);
  return (
    <div className="row">
      {currentGames && currentGames.map((game) => <GameCard game={game} />)}
    </div>
  );
};

export default SearchResults;
