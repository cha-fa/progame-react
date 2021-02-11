import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  }, [searchKeyword]);

  console.log(currentGames);
  return (
    <div className="row">
      {currentGames &&
        currentGames.map((game) => (
          <div className="col-xs-12 col-md-4 w-75 mb-5 ">
            <div data-aos="flip-left" className="game-card">
              <div className="game-top">
                <img
                  className="card-img-top mb-4"
                  src={game.background_image}
                  alt="Snapshot of the game"
                />
                <div className="overlay-infos">
                  <p>Release date : {game.released}</p>
                  <p>Genres: {game.genres.map((g) => ` ${g.name}`)}</p>
                  <p>Rating: {game.rating} /5</p>
                  <p>{game.ratings_count} votes</p>
                </div>
              </div>
              <div className="card-body p-0">
                <h4 className="mb-3">
                  <Link className="mt-auto" to={"/games/" + game.slug}>
                    {game.name}
                  </Link>
                </h4>
                Platforms :${game.platforms.map((plat) => plat.platform.name)}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchResults;
