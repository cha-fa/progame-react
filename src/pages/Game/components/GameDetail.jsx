import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import DayJS from "react-dayjs";

const GameDetail = ({ game }) => {
  const defaultPlatforms = [1, 2, 3, 4, 5, 6, 7, 8, 14];
  return (
    <section className="GameDetail">
      {game && (
        <div>
          <div className="row d-flex align-items-center">
            <div className="col-8">
              <h1 id="title">{game.name}</h1>
              <h5 className="mb-5">
                Release date: <DayJS format="DD-MM-YYYY">{game.released}</DayJS>
              </h5>
            </div>
            <div className="col-4">
              <p id="rating">Rating: {game.rating}/5</p>
            </div>
          </div>
          <div className="row">
            <div data-aos="fade-up" className="col" id="description">
              {ReactHtmlParser(game.description)}
            </div>
          </div>

          <div data-aos="fade-up" className="row">
            <div className="col-xs-6 col-md-4">
              <h5>Developers:</h5>
              {game.developers.map((dev) => (
                <Link
                  className="no-style"
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
                  <p className="a-intern">{dev.name}</p>
                </Link>
              ))}
            </div>
            <div className="col-xs-6 col-md-4">
              <h5>Platforms:</h5>

              {game.platforms
                .filter((plat) => defaultPlatforms.includes(plat.platform.id))
                .map((plat) => (
                  <Link
                    className="no-style"
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
                    <p className="a-intern">{plat.platform.name}</p>
                  </Link>
                ))}
            </div>
            <div className="col-xs-6 col-md-4">
              <h5>Publishers:</h5>
              {game.publishers.map((pub) => (
                <Link
                  className="no-style"
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
                  <p className="a-intern">{pub.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" className="row">
            <div className="col-xs-12 col-md-4">
              <h5>Genres:</h5>
              {game.genres.map((genre) => (
                <Link
                  className="no-style"
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
                  <p className="a-intern">{genre.name}</p>
                </Link>
              ))}
            </div>
            <div className="col-xs-12 col-md-4">
              <h5>Tags:</h5>
              {game.tags.slice(0, 10).map((tag) => (
                <Link
                  className="no-style"
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
                  <p className="a-intern">{tag.name}</p>
                </Link>
              ))}
            </div>
            <div className="col-xs-12 col-md-4">
              <h5>Stores:</h5>
              {game.stores.map((store) => (
                <div id="stores" key={store.store.id}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="no-style"
                    href={store.url}
                  >
                    <p className="hover-red">{store.store.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GameDetail;
