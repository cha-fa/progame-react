import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import "style/gamecard.scss";
import defaultcover from "images/defaultcover.jpg";

const GameCard = ({ game }) => {
  let history = useHistory();
  const [isHover, setIsHover] = useState(false);
  const defaultPlatforms = [1, 2, 3, 4, 5, 6, 7, 8, 14];
  const getLogo = (platformName) => {
    let url = require(`images/logos/${platformName
      .split(" ")[0]
      .toLowerCase()}.svg`);
    return url.default;
  };

  const handleClick = () => {
    history.push("/games/" + game.slug);
  };

  return (
    <div className="GameCard col-xs-12 col-md-4  ">
      <div data-aos="fade-up" className="game-card" onClick={handleClick}>
        <div
          className="game-top"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {((!isHover || !game.clip) && (
            <div>
              <img
                className="card-img-top mb-4"
                src={
                  game.background_image ? game.background_image : defaultcover
                }
                alt="Snapshot of the game"
              />
              {game.clip && (
                <FaPlayCircle className="playBtn" size={40} color={"#ffffff"} />
              )}
            </div>
          )) || (
            <video
              className="card-img-top mb-4"
              autoplay="true"
              muted
              playsinline
              src={game.clip.clip}
            ></video>
          )}
        </div>
        <div className="card-body p-0">
          <Link className="mt-auto no-style" to={"/games/" + game.slug}>
            <h4 className="mb-3 a-intern">{game.name}</h4>
          </Link>
          {game.parent_platforms
            .filter((plat) => defaultPlatforms.includes(plat.platform.id))
            .map((plat) => (
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
      </div>
    </div>
  );
};

export default GameCard;
