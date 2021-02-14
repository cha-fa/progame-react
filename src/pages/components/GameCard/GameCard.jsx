import React from "react";
import { Link } from "react-router-dom";
import playstation from "images/logos/playstation.svg";
import xbox from "images/logos/xbox.svg";
import web from "images/logos/web.svg";
import nintendo from "images/logos/nintendo.png";
import android from "images/logos/android.svg";
import ios from "images/logos/ios.svg";
import apple from "images/logos/apple.svg";
import linux from "images/logos/linux.svg";
import pc from "images/logos/pc.svg";

const GameCard = ({ game }) => {
  const getLogo = (logoName) => {
    switch (logoName) {
      case "PC":
        return pc;
      case "Playstation":
        return playstation;
      case "Xbox":
        return xbox;
      case "Web":
        return web;
      case "Android":
        return android;
      case "Nintendo":
        return nintendo;
      case "Apple Macintosh":
        return apple;
      case "iOS":
        return ios;
      case "Linux":
        return linux;
      default:
        return null;
    }
  };
  return (
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
            <p>Genres: {game.genres.forEach((g) => g.name)}</p>
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

          {game.parent_platforms.map((plat) => (
            <img
              key={plat.platform.id}
              src={getLogo(plat.platform.name)}
              alt=""
              className="logo mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
