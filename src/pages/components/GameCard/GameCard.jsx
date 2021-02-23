import React from "react";
import { Link } from "react-router-dom";

import "./gamecard.scss";
import DayJS from "react-dayjs";

const GameCard = ({ game }) => {
  const getLogo = (platformName) => {
    let url = require(`images/logos/${platformName
      .split(" ")[0]
      .toLowerCase()}.svg`);
    return url.default;
  };

  return (
    <div className="GameCard col-xs-12 col-md-4  ">
      <div data-aos="flip-left" className="game-card">
        <Link className="mt-auto a-intern" to={"/games/" + game.slug}>
          <div className="game-top">
            <img
              className="card-img-top mb-4"
              src={game.background_image}
              alt="Snapshot of the game"
            />
            <div className="overlay-infos card-img-top">
              <p>
                Release date :{" "}
                <DayJS format="DD-MM-YYYY">{game.released}</DayJS>
              </p>

              <p>Rating: {game.rating} /5</p>
              <p>{game.ratings_count} votes</p>
            </div>
          </div>
          <div className="card-body p-0">
            <h4 className="mb-3 a-intern">{game.name}</h4>

            {game.parent_platforms.map((plat) => (
              <>
                <img
                  key={plat.platform.id}
                  src={getLogo(plat.platform.name)}
                  alt=""
                  className="logo mx-2"
                />
              </>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
