import { useState, useEffect } from "react";

const Screenshots = ({ gameSlug }) => {
  const [currentScreenshots, setCurrentScreenshots] = useState();

  const fetchScreenshots = () => {
    console.log(
      "FETCH URL",
      `https://api.rawg.io/api/games/${gameSlug}/screenshots?page_size=4`
    );
    fetch(`https://api.rawg.io/api/games/${gameSlug}/screenshots?page_size=4`)
      .then((response) => response.json())
      .then((response) => setCurrentScreenshots(response.results));
  };

  useEffect(() => {
    fetchScreenshots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameSlug]);

  return (
    <div data-aos="fade-up" className="row">
      {currentScreenshots && (
        <div className="col">
          <h2>SCREENSHOTS</h2>
          <div
            data-aos="fade-up"
            className="row d-flex justify-content-center"
            id="screenshots"
          >
            {currentScreenshots.map((screenshot) => (
              <img
                className="screen-img p-3 m-4 w-25"
                src={screenshot.image}
                alt="Snapshot of the game"
                key={screenshot.id}
              ></img>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Screenshots;
