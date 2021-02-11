import React from "react";

const GameDetail = ({ game }) => {
  return (
    <section>
      {game && (
        <div>
          <div className="row">
            <div className="col-8">
              <h1 id="title">{game.name}</h1>
            </div>
            <div className="col-4 d-flex align-items-center">
              <p id="rating">{game.rating}/5</p>
            </div>
          </div>
          <div className="row">
            <p data-aos="fade-up" className="col" id="description">
              {game.description}
            </p>
          </div>

          <div data-aos="fade-up" className="row">
            <div className="col-xs-6 col-md-3">
              <h5>Release Date:</h5>
              <p id="release-date">{game.released}</p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h5>Developers:</h5>
              {game.developers.map((dev) => (
                <p id="developers" key={dev.id}>
                  {dev.name}
                </p>
              ))}
            </div>
            <div className="col-xs-6 col-md-3">
              <h5>Platforms:</h5>
              {game.platforms.map((plat) => (
                <p id="platforms" key={plat.platform.id}>
                  {plat.platform.name}
                </p>
              ))}
            </div>
            <div className="col-xs-6 col-md-3">
              <h5>Publishers:</h5>
              {game.publishers.map((pub) => (
                <p id="publishers" key={pub.id}>
                  {pub.name}
                </p>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" className="row">
            <div className="col-xs-12 col-md-6">
              <h5>Genres:</h5>
              {game.genres.map((genre) => (
                <p id="genres" key={genre.id}>
                  {genre.name}
                </p>
              ))}
            </div>
            <div className="col-xs-12 col-md-6">
              <h5>Tags:</h5>
              {game.tags.map((tag) => (
                <p id="tags" key={tag.id}>
                  {tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GameDetail;
