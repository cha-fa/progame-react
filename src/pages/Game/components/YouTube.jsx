import { useEffect } from "react";
import DayJS from "react-dayjs";
import useFetch from "hooks/useFetch";

const YouTube = ({ gameSlug }) => {
  const { data, error, isLoading, get } = useFetch();

  useEffect(() => {
    get(`/games/${gameSlug}/youtube?page_size=4`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameSlug]);

  return (
    <div data-aos="fade-up" className="YouTube row">
      {isLoading && "Recherche en cours"}
      {error && error}
      {data && data.results.length > 0 && (
        <div className="col mb-5">
          <h2>YOUTUBE</h2>
          <div id="youtube">
            <div data-aos="fade-up" id="first-video" className="row">
              <div className="col-xs-12 col-md-6">
                <a
                  className="no-style"
                  target="_blank"
                  rel="noreferrer"
                  href={
                    "https://youtube.com/watch?v=" + data.results[0].external_id
                  }
                >
                  <iframe
                    title="{youtube.id}"
                    id="ytplayer"
                    type="text/html"
                    src={
                      "https://www.youtube.com/embed/" +
                      data.results[0].external_id
                    }
                    frameBorder="0"
                  ></iframe>
                </a>
              </div>
              <div className="col-xs-12 col-md-6">
                <a
                  className="no-style"
                  target="_blank"
                  rel="noreferrer"
                  href={
                    "https://youtube.com/watch?v=" + data.results[0].external_id
                  }
                >
                  <h3 className="hover-red">{data.results[0].name}</h3>
                  <p>
                    {data.results[0].channel_title} -{" "}
                    <DayJS format="DD-MM-YYYY">{data.results[0].created}</DayJS>
                  </p>
                </a>
              </div>
            </div>

            <div data-aos="fade-up" id="other-videos" className="row">
              {data.results.slice(1).map((youtube) => (
                <div className="col-xs-12 col-md-4" key={youtube.id}>
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
