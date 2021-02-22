import { useState, useEffect } from "react";
import DayJS from "react-dayjs";

const YouTube = ({ gameSlug }) => {
  const [currentYoutube, setCurrentYoutube] = useState();
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchYoutube = () => {
    fetch(`${API_URL}/games/${gameSlug}/youtube?page_size=4`)
      .then((response) => response.json())
      .then((response) => {
        response.results.length > 1
          ? setCurrentYoutube(response.results)
          : setCurrentYoutube(undefined);
      });
  };

  useEffect(() => {
    fetchYoutube();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameSlug]);

  return (
    <div data-aos="fade-up" className="row">
      {currentYoutube && (
        <div className="col mb-5">
          <h2>YOUTUBE</h2>
          <div id="youtube">
            <div data-aos="fade-up" id="first-video" className="row">
              <div className="col-6">
                <a
                  className="no-style"
                  target="_blank"
                  rel="noreferrer"
                  href={
                    "https://youtube.com/watch?v=" +
                    currentYoutube[0].external_id
                  }
                >
                  <iframe
                    title="{youtube.id}"
                    width="480px"
                    height="360px"
                    id="ytplayer"
                    type="text/html"
                    src={
                      "https://www.youtube.com/embed/" +
                      currentYoutube[0].external_id
                    }
                    frameBorder="0"
                  ></iframe>
                </a>
              </div>
              <div className="col-6">
                <a
                  className="no-style"
                  target="_blank"
                  rel="noreferrer"
                  href={
                    "https://youtube.com/watch?v=" +
                    currentYoutube[0].external_id
                  }
                >
                  <h3 className="hover-red">{currentYoutube[0].name}</h3>
                  <p>
                    {currentYoutube[0].channel_title} -{" "}
                    <DayJS format="DD-MM-YYYY">
                      {currentYoutube[0].created}
                    </DayJS>
                  </p>
                </a>
              </div>
            </div>

            <div data-aos="fade-up" id="other-videos" className="row">
              {currentYoutube.slice(1).map((youtube) => (
                <div className="col-4" key={youtube.id}>
                  <a
                    className="no-style"
                    target="_blank"
                    rel="noreferrer"
                    href={"https://youtube.com/watch?v=" + youtube.external_id}
                  >
                    <iframe
                      title="{youtube.id}"
                      width="320px"
                      height="180px"
                      id="ytplayer"
                      type="text/html"
                      src={
                        "https://www.youtube.com/embed/" + youtube.external_id
                      }
                      frameBorder="0"
                    ></iframe>

                    <h3 className="hover-red">{youtube.name}</h3>
                    <p>
                      {youtube.channel_title} -{" "}
                      <DayJS format="DD-MM-YYYY">{youtube.created}</DayJS>
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTube;
