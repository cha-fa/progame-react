import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import DayJS from "react-dayjs";

const GameDetail = ({ game }) => {
  return (
    <section className="GameDetail">
      {game && (
        <div>
          <div className="row d-flex align-items-center">
            <div className="col-8">
              <h1 id="title">{game.name}</h1>
            </div>
            <div className="col-4">
              <p id="rating">{game.rating}/5</p>
            </div>
          </div>
          <div className="row">
            <div data-aos="fade-up" className="col" id="description">
              {ReactHtmlParser(game.description)}
            </div>
          </div>

          <div data-aos="fade-up" className="row">
            <div className="col-xs-6 col-md-3">
              <h5>Release Date:</h5>
              <p id="release-date">
                {" "}
                <DayJS format="DD-MM-YYYY">{game.released}</DayJS>
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h5>Developers:</h5>
              {game.developers.map((dev) => (
                <Link
                  key={dev.id}
                  to={{
                    pathname: `/`,
                    search: `developers=${dev.slug}`,
                    state: {
                      type: "developer",
                      name: dev.name,
                      id: dev.id,
                    },
                  }}
                >
                  <p>{dev.name}</p>
                </Link>
              ))}
            </div>
            <div className="col-xs-6 col-md-3">
              <h5>Platforms:</h5>

              {game.platforms.map((plat) => (
                <Link
                  key={plat.id}
                  to={{
                    pathname: `/`,
                    search: `platforms=${plat.platform.id}`,
                    state: {
                      type: "platform",
                      name: plat.platform.name,
                      id: plat.platform.id,
                    },
                  }}
                >
                  <p>{plat.platform.name}</p>
                </Link>
              ))}
            </div>
            <div className="col-xs-6 col-md-3">
              <h5>Publishers:</h5>
              {game.publishers.map((pub) => (
                <Link
                  key={pub.id}
                  to={{
                    pathname: `/`,
                    search: `publishers=${pub.slug}`,
                    state: {
                      type: "publisher",
                      name: pub.name,
                      id: pub.id,
                    },
                  }}
                >
                  <p>{pub.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" className="row">
            <div className="col-xs-12 col-md-6">
              <h5>Genres:</h5>
              {game.genres.map((genre) => (
                <Link
                  key={genre.id}
                  to={{
                    pathname: `/`,
                    search: `genres=${genre.slug}`,
                    state: {
                      type: "genre",
                      name: genre.name,
                      id: genre.id,
                    },
                  }}
                >
                  <p>{genre.name}</p>
                </Link>
              ))}
            </div>
            <div className="col-xs-12 col-md-6">
              <h5>Tags:</h5>
              {game.tags.slice(0, 10).map((tag) => (
                <Link
                  key={tag.id}
                  to={{
                    pathname: `/`,
                    search: `tags=${tag.slug}`,
                    state: {
                      type: "tag",
                      name: tag.name,
                      id: tag.id,
                    },
                  }}
                >
                  <p>{tag.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GameDetail;
